<?php

namespace VisualComposer\Modules\Vendors\Plugins;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

/**
 * Backward compatibility with "Ajax Search Pro" wordPress plugin.
 *
 * @see https://codecanyon.net/item/ajax-search-pro-for-wordpress-live-search-plugin/3357410
 */
class AjaxSearchProController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    protected $aspFilter;

    public function __construct()
    {
        $this->wpAddAction('plugins_loaded', 'initialize');
    }

    /**
     * Plugin compatibility hooks initialization.
     */
    protected function initialize()
    {
        if (!class_exists('WD_ASP_Manager')) {
            return;
        }
        /** @see \VisualComposer\Modules\Vendors\Plugins\AjaxSearchProController::queryPostsBefore */
        $this->addFilter('vcv:elements:grids:posts', 'queryPostsBefore', -1);
        /** @see \VisualComposer\Modules\Vendors\Plugins\AjaxSearchProController::queryPostsAfter */
        $this->addFilter('vcv:elements:grids:posts', 'queryPostsAfter', 1);
    }

    /**
     * @param $posts
     * @param $payload
     *
     * @return array
     */
    protected function queryPostsBefore($posts, $payload)
    {
        if (
            isset($payload['atts']['source']['tag'])
            && $payload['atts']['source']['tag'] === 'postsGridDataSourceArchive'
        ) {
            // @codingStandardsIgnoreStart
            global $wp_the_query;
            $wpQuery = $wp_the_query;
            $queriedPage = isset($wpQuery->query['queriedPage']) ? $wpQuery->query['queriedPage'] : false;
            if (isset($queriedPage->is_search) && $queriedPage->is_search !== false) {
                // @codingStandardsIgnoreEnd
                /** @see \VisualComposer\Modules\Vendors\Plugins\AjaxSearchProController::fixAspSearchQuery */
                $this->aspFilter = $this->wpAddFilter('asp_query_is_search', 'fixAspSearchQuery');
            }
        }

        return $posts;
    }

    /**
     * @param $posts
     * @param $payload
     *
     * @return array
     */
    protected function queryPostsAfter($posts, $payload)
    {
        if ($this->aspFilter) {
            remove_filter('asp_query_is_search', $this->aspFilter);
        }

        return $posts;
    }

    protected function fixAspSearchQuery($isSearch, $query)
    {
        if (isset($query->query['s']) && !empty($query->query['s'])) {
            return true;
        }

        return $isSearch;
    }
}
