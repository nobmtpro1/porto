<?php

namespace VisualComposer\Modules\Editors\Settings\WordPressSettings;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\PostType;
use VisualComposer\Helpers\Request;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class FeaturedImageController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    public function __construct()
    {
        $this->addFilter(
            'vcv:dataAjax:setData',
            'setData'
        );
        $this->addFilter(
            'vcv:editor:variables',
            'addFeaturedImageVariable'
        );
    }

    /**
     * @param $variables
     * @param $payload
     * @param \VisualComposer\Helpers\PostType $postTypeHelper
     *
     * @return mixed
     */
    protected function addFeaturedImageVariable(
        $variables,
        $payload,
        PostType $postTypeHelper
    ) {
        $currentPost = $postTypeHelper->get();
        if (
            // @codingStandardsIgnoreLine
            isset($currentPost->post_type)
        ) {
            // @codingStandardsIgnoreLine
            $thumbnailSupport = current_theme_supports('post-thumbnails', $currentPost->post_type) && post_type_supports($currentPost->post_type, 'thumbnail');
            // @codingStandardsIgnoreLine
            if (!$thumbnailSupport && 'attachment' === $currentPost->post_type && $currentPost->post_mime_type) {
                if (wp_attachment_is('audio', $currentPost)) {
                    $thumbnailSupport = post_type_supports('attachment:audio', 'thumbnail') || current_theme_supports('post-thumbnails', 'attachment:audio');
                } elseif (wp_attachment_is('video', $currentPost)) {
                    $thumbnailSupport = post_type_supports('attachment:video', 'thumbnail') || current_theme_supports('post-thumbnails', 'attachment:video');
                }
            }

            if ($thumbnailSupport && current_user_can('upload_files')) {
                $featuredImageId = get_post_thumbnail_id($currentPost->ID);

                // Is featured image exist
                if ($featuredImageId) {
                    // Get all size urls of image
                    $sizes = [];
                    $fullImageUrl = wp_get_attachment_image_src($featuredImageId, 'full');
                    if (isset($fullImageUrl[0])) {
                        $sizes['full'] = $fullImageUrl[0];
                    }

                    $attachmentData = wp_get_attachment_metadata($featuredImageId);
                    if (!empty($attachmentData['sizes'])) {
                        foreach ($attachmentData['sizes'] as $key => $size) {
                            $imageSizeData = wp_get_attachment_image_src($featuredImageId, $key);
                            $sizes[$key] = $imageSizeData[0];
                        }
                    }

                    $attachmentPostData = get_post($featuredImageId);

                    // Get image text data
                    $imageData = [
                        "id" => $featuredImageId,
                        // @codingStandardsIgnoreLine
                        "title" => $attachmentPostData->post_title,
                        "alt" => get_post_meta($featuredImageId, '_wp_attachment_image_alt', true),
                        // @codingStandardsIgnoreLine
                        "caption" => $attachmentPostData->post_excerpt,
                        "link" => [],
                    ];

                    $urls = array_merge($sizes, $imageData);
                    $result = [
                        "ids" => [$featuredImageId],
                        "urls" => [$urls],
                    ];
                } else {
                    $result = [
                        "ids" => [],
                        "urls" => [],
                    ];
                }

                $variables[] = [
                    'key' => 'VCV_FEATURED_IMAGE',
                    'value' => $result,
                    'type' => 'constant',
                ];
            }
        }

        return $variables;
    }

    /**
     * Set featured image
     *
     * @param $response
     * @param $payload
     * @param \VisualComposer\Helpers\Request $requestHelper
     *
     * @return mixed
     */
    protected function setData($response, $payload, Request $requestHelper)
    {
        // Get selected image id
        if ($requestHelper->exists('vcv-settings-featured-image')) {
            $imageId = $requestHelper->input('vcv-settings-featured-image');
            $currentPageId = vchelper('Preview')->updateSourceIdWithAutosaveId($payload['sourceId']);
            if ($imageId === 'empty') {
                delete_post_meta($currentPageId, '_thumbnail_id');
            } elseif (isset($imageId['ids'][0])) {
                $imageId = $imageId['ids'][0];
                set_post_thumbnail($currentPageId, $imageId);
            }
        }

        return $response;
    }
}
