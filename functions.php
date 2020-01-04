<?php
/**
 * WpSpa theme functions file
 *
 * @package WpSpa
 * @since 0.0.1
 */

namespace WpSpa;

/**
 * Constants
 */

/** Runtime */
define( __NAMESPACE__ . '\URL', trailingslashit( get_template_directory_uri() ) );

/** Compile time */
const VER      = '0.1.0';
const PATH     = __DIR__ . '/';