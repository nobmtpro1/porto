<?php

namespace VisualComposer\Modules\Editors\Settings;

if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}

use VisualComposer\Framework\Container;
use VisualComposer\Framework\Illuminate\Support\Module;
use VisualComposer\Helpers\Traits\EventsFilters;
use VisualComposer\Helpers\Traits\WpFiltersActions;

class PageTemplatesVariablesController extends Container implements Module
{
    use WpFiltersActions;
    use EventsFilters;

    public function __construct()
    {
        $this->addFilter('vcv:editor:variables', 'outputCurrentTemplatesLayouts');
        $this->addFilter('vcv:editor:variables', 'outputTemplatesLayouts');
        $this->addFilter('vcv:editor:variables', 'outputThemeTemplates');
    }

    protected function outputCurrentTemplatesLayouts($variables, $payload)
    {
        /** @var \VisualComposer\Helpers\PageLayout $pageLayoutHelper */
        $pageLayoutHelper = vchelper('PageLayout');

        $post = get_post(isset($payload['sourceId']) ? $payload['sourceId'] : null);
        $variables[] = [
            'key' => 'VCV_PAGE_TEMPLATES_LAYOUTS_CURRENT',
            'value' => $pageLayoutHelper->getCurrentPageLayout(
                [
                    'type' => 'theme',
                    // @codingStandardsIgnoreLine
                    'value' => empty($post->page_template) ? 'default' : $post->page_template,
                ]
            ),
            'type' => 'constant',
        ];

        return $variables;
    }

    protected function outputTemplatesLayouts($variables, $payload)
    {
        $value = [
            [
                'label' => __('Default Layout or Select Custom', 'visualcomposer'),
                'value' => 'default',
            ],
            [
                'label' => __('Blank Layout', 'visualcomposer'),
                'value' => 'blank',
            ],
        ];
        $themeValue = [
            [
                'label' => __('Header and Footer', 'visualcomposer'),
                'value' => 'header-footer-layout',
            ],
            [
                'label' => __('Right Sidebar', 'visualcomposer'),
                'value' => 'header-footer-sidebar-layout',
            ],
            [
                'label' => __('Left Sidebar', 'visualcomposer'),
                'value' => 'header-footer-sidebar-left-layout',
            ],
        ];

        $variables[] = [
            'key' => 'VCV_PAGE_TEMPLATES_LAYOUTS',
            'value' => vcfilter(
                'vcv:editor:settings:pageTemplatesLayouts',
                [
                    [
                        'type' => 'vc',
                        'title' => __('Visual Composer', 'visualcomposer'),
                        'values' => $value,
                    ],
                ]
            ),
            'type' => 'constant',
        ];

        $variables[] = [
            'key' => 'VCV_PAGE_TEMPLATES_LAYOUTS_ALL',
            'value' => [
                [
                    'type' => 'vc',
                    'title' => __('Visual Composer', 'visualcomposer'),
                    'values' => $value,
                ],
                [
                    'type' => 'vc-theme',
                    'title' => __('Visual Composer Premium', 'visualcomposer'),
                    'values' => $themeValue,
                ],
            ],
            'type' => 'constant',
        ];

        return $variables;
    }

    protected function outputThemeTemplates($variables, $payload)
    {
        $pageTemplates = get_page_templates();
        $pageTemplatesList = [
            [
                'label' => __('Default', 'visualcomposer'),
                'value' => 'default',
            ],
            [
                'label' => __('Theme', 'visualcomposer'),
                'value' => 'theme',
            ],
        ];
        if (!empty($pageTemplates)) {
            foreach ($pageTemplates as $key => $template) {
                $pageTemplatesList[] = [
                    'label' => sprintf('%s %s', __('WordPress:', 'visualcomposer'), $key),
                    'value' => $template,
                ];
            }
        }

        $variables[] = [
            'key' => 'VCV_PAGE_TEMPLATES_LAYOUTS_THEME',
            'value' => [
                'type' => 'theme',
                'title' => __('Theme Templates', 'visualcomposer'),
                'values' => vcfilter('vcv:editor:settings:pageTemplatesLayouts:theme', $pageTemplatesList),
            ],
            'type' => 'constant',
        ];

        return $variables;
    }
}
