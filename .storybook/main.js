const {commonConfig} = require('../webpack.config');

module.exports = {
	stories: [ '../src/**/*.stories.ts' ],
	addons: [
		'@storybook/addon-knobs',
		'@storybook/addon-actions',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		'@storybook/addon-viewport',
		'@storybook/addon-backgrounds',
		'@storybook/addon-links'
	],
	/**
	 * @param {import('webpack').Configuration} config
	 * @return {import('webpack').Configuration}
	 */
	webpackFinal: (config) => {
		config.stats = 'errors-warnings';
		Object.assign( config.resolve.extensions, commonConfig.resolve.extensions );
		Object.assign( config.resolve.alias, commonConfig.resolve.alias );
		config.module.rules.push( ...commonConfig.rules( config.mode ) );
		config.plugins.push( ...commonConfig.plugins() );

		return config;
	},
	logLevel: 'warn'
};
