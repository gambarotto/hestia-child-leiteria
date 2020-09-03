<?php
/*This file is part of hestia-child, hestia child theme.

All functions of this file will be loaded before of parent theme functions.
Learn more at https://codex.wordpress.org/Child_Themes.

Note: this function loads the parent stylesheet before, then child theme stylesheet
(leave it in place unless you know what you are doing.)
*/

if (!function_exists('suffice_child_enqueue_child_styles')) {
	function hestia_child_enqueue_child_styles()
	{
		// loading parent style
		wp_register_style(
			'parente2-style',
			get_template_directory_uri() . '/style.css'
		);

		wp_enqueue_style('parente2-style');
		// loading child style
		wp_register_style(
			'childe2-style',
			get_stylesheet_directory_uri() . '/style.css'
		);
		wp_enqueue_style('childe2-style');
	}
}
add_action('wp_enqueue_scripts', 'hestia_child_enqueue_child_styles');

/*Write here your own functions */
function hestia_child_scripts()
{
	wp_enqueue_script('carousel-headerjs', get_stylesheet_directory_uri() . '/inc/js/carousel-header.js', array(), '1', true);
}
add_action('wp_enqueue_scripts', 'hestia_child_scripts');
