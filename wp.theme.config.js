module.exports = {
	type: 'theme',
	devUrl: 'http://10pl8.test/',
	stats: {
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true
	},
	'entries': [
		{
			'name': 'admin',
			'js': [ './assets/js/admin' ],
			'css': [ './assets/css/admin' ],
		},
		{
			'name': 'blocks-editor',
			'js': [ './assets/js/blocks' ],
			'css': [ './assets/css/blocks' ],
			'react': true
		},
		{
			'name': 'shared',
			'js': [ './assets/js/shared' ],
			'css': [ './assets/css/shared' ]
		},
		{
			'name': 'frontend',
			'js': [ './assets/js/frontend' ],
			'css': [ './assets/css/frontend' ]
		},
		{
			'name': 'style-guide',
			'js': [ './assets/js/style-guide' ],
			'css': [ './assets/css/style-guide' ]
		}
	],
	'options': {
		'port': 4000,
	},
	/**
	 * @link https://www.purgecss.com
	 */
	'purgeCss': {
		whitelist: [ 'url-loader-test-png' ],
		whitelistPatterns: [ /^uikit__+/g ],
	}
};
