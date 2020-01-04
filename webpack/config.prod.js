/**
 * WebPack Prod
 *
 * @package WpSpa
 */

/**
 * Modules
 */
// Node Modules.
const path = require( 'path' );
const glob = require( 'glob-all' );
const merge = require( 'webpack-merge' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const PurgeCssPlugin = require( 'purgecss-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
// Internal.
const buildConfig = require( './config.build' );
const { wpTheme } = require( './utils' );

/**
 * Merge Config with config.build, resolve in new Promise.
 *
 * @type {Promise<unknown>}
 */
module.exports = new Promise( ( resolve, reject ) => {
	buildConfig.then( ( data ) => {
		resolve(
			merge( data, {
				mode: 'production',
				devtool: '(none)',
				optimization: {
					minimizer: [
						new TerserPlugin( {
							cache: true,
							parallel: true,
							sourceMap: false,
						} ),
						new OptimizeCSSAssetsPlugin( {
							assetNameRegExp: /\.min\.css$/g,
						} ),
					],
				},
				plugins: [
					new CleanWebpackPlugin(),
					new PurgeCssPlugin( {
						paths: glob.sync( [
							path.join( __dirname, '../*.php' ),
							path.join( __dirname, '../includes/**/*.php' ),
							path.join( __dirname, '../partials/**/*.php' ),
							path.join( __dirname, '../templates/**/*.php' ),
							path.join( __dirname, '../assets/**/*.js' )
						] ),
						whitelist : wpTheme( 'purgeCss' ).whitelist,
						whitelistPatterns : wpTheme( 'purgeCss' ).whitelistPatterns,
					} )
				]
			} ) // eslint-disable-line comma-dangle
		);
	} ).catch( e => reject( e ) );
} );
