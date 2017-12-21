const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/app.js',

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.js'
	},

	watch: true,

	devServer: {
		inline: true
	},

// Plugin to use .pug template
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.pug',
			inject: true
		})
	],

	//Add loaders
	module: {
		loaders: [
      {
        test: /\.pug$/,
        use: [{
					loader: "raw-loader"
				}, {
					loader: "pug-html-loader"
				}]
      },
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
		]
	}
}
