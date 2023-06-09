<?php
/**
 * Porto WooCommerce Sales Popup Initialize
 *
 * @author     Porto Themes
 * @category   Library
 * @since      6.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

if ( wp_doing_ajax() ) {
	function porto_recent_sale_products() {
		check_ajax_referer( 'porto-nonce', 'nonce' );
		global $wpdb;
		global $porto_settings;
		$date   = date( 'Y-m-d H:i:s', strtotime( '-' . $porto_settings['woo-sales-popup-interval'] . ' seconds' ) );
		$result = $wpdb->get_results( $wpdb->prepare( 'select product_id, date_created from ' . $wpdb->prefix . 'wc_order_product_lookup where date_created>=\'' . $date . '\' ORDER BY date_created DESC' ) );

		$products = array();
		if ( $result ) {
			$original_post = $GLOBALS['post'];
			foreach ( $result as $item ) {
				$GLOBALS['post'] = get_post( $item->product_id ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
					setup_postdata( $GLOBALS['post'] );
				global $product;
				$date       = $item->date_created;
				$p_img      = wp_get_attachment_image_src( $product->get_image_id(), 'woocommerce_gallery_thumbnail' );
				$products[] = array(
					'id'     => esc_html( $item->product_id ),
					'title'  => esc_html( $product->get_title() ),
					'link'   => esc_url( $product->get_permalink() ),
					'image'  => $p_img ? esc_js( $p_img[0] ) : '',
					'price'  => $product->get_price_html(),
					'rating' => (float) $product->get_average_rating(),
					'date'   => Porto_Woocommerce_Sales_Popup::get_period_from( strtotime( $date ) ),
				);

			}
			$GLOBALS['post'] = $original_post; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			wp_reset_postdata();
		}
		echo json_encode( $products );
		die();
	}
	add_action( 'wp_ajax_porto_recent_sale_products', 'porto_recent_sale_products' );
	add_action( 'wp_ajax_nopriv_porto_recent_sale_products', 'porto_recent_sale_products' );
}

if ( class_exists( 'WC_Shortcode_Products' ) && ! class_exists( 'Porto_Woocommerce_Sales_Popup' ) ) :

	class Porto_Woocommerce_Sales_Popup extends WC_Shortcode_Products {

		public function __construct( $attributes = array(), $type = 'products' ) {
			parent::__construct( $attributes, $type );
		}

		public function get_products() {
			global $wpdb;
			$products = $this->get_query_results();
			$result   = array();
			if ( $products && $products->ids ) {
				$original_post = $GLOBALS['post'];
				foreach ( $products->ids as $product_id ) {
					$GLOBALS['post'] = get_post( $product_id ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
					setup_postdata( $GLOBALS['post'] );
					global $product;
					$date     = $wpdb->get_var( $wpdb->prepare( 'select date_created from ' . $wpdb->prefix . 'wc_order_product_lookup where product_id=%d order by date_created DESC', $product_id ) );
					$p_img    = wp_get_attachment_image_src( $product->get_image_id(), 'woocommerce_gallery_thumbnail' );
					$result[] = array(
						'id'     => esc_html( $product_id ),
						'title'  => esc_html( $product->get_title() ),
						'link'   => esc_url( $product->get_permalink() ),
						'image'  => $p_img ? esc_js( $p_img[0] ) : '',
						'price'  => $product->get_price_html(),
						'rating' => (float) $product->get_average_rating(),
						'date'   => isset( $date ) ? self::get_period_from( strtotime( $date ) ) : 'not sale',
					);
				}
				$GLOBALS['post'] = $original_post; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
				wp_reset_postdata();
			}
			return $result;
		}
		public static function get_period_from( $time ) {
			$time = time() - $time;     // to get the time since that moment
			$time = ( $time < 1 ) ? 1 : $time;

			$tokens = array(
				31536000 => 'year',
				2592000  => 'month',
				604800   => 'week',
				86400    => 'day',
				3600     => 'hour',
				60       => 'minute',
				1        => 'second',
			);

			foreach ( $tokens as $unit => $text ) {
				if ( $time < $unit ) {
					continue;
				}
				$number_of_units = floor( $time / $unit );
				return esc_html__( sprintf( '%s ago', $number_of_units . ' ' . $text . ( ( $number_of_units > 1 ) ? 's' : '' ) ), 'porto' );
			}
		}
	}
endif;

if ( ! function_exists( 'porto_sales_popup_data' ) ) {

	function porto_sales_popup_data() {

		global $porto_settings;
		$atts = array(
			'limit' => (int) $porto_settings['woo-sales-popup-count'],
		);

		$type = 'best_selling_products';

		switch ( $porto_settings['woo-sales-popup'] ) {
			case 'popular':
				$type = 'best_selling_products';
				break;
			case 'rating':
				$type = 'top_rated_products';
				break;
			case 'sale':
				$type = 'sale_products';
				break;
			case 'featured':
				$type = 'featured_products';
				break;
			case 'recent':
				$type            = 'recent_products';
				$atts['orderby'] = 'date';
				$atts['order']   = 'DESC';
				break;
		}

		$products = new Porto_Woocommerce_Sales_Popup( $atts, $type );

		return array(
			'title'    => esc_js( $porto_settings['woo-sales-popup-title'] ),
			'type'     => esc_js( $porto_settings['woo-sales-popup'] ),
			'start'    => (int) $porto_settings['woo-sales-popup-start-delay'],
			'interval' => (int) $porto_settings['woo-sales-popup-interval'],
			'limit'    => (int) $porto_settings['woo-sales-popup-count'],
			'products' => json_encode( $products->get_products() ),
		);
	}
}
