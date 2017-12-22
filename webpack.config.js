const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		bootstrap: 'bootstrap-loader',
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].bundle.js'
	},
	watch: true,
	devServer: {
		inline: true
	},
// Plugin to use .pug template
	plugins: [
		new HtmlWebpackPlugin({
			template: './views/index.pug',
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
			// images
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: 'file-loader?name=[name].[ext]&outputPath=images/'
			},
			// bootstrap fonts
			{
				test: /\.(woff2?|svg)$/,
				 use: [{
					 loader: 'url-loader?limit=10000'
				 }]
			 },
    	{
				test: /\.(ttf|eot)$/,
				 use: [{
					 loader: 'file-loader'
				 }]
			 },
			 // Bootstrap 3
    	{
				test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
				use: [{
					loader: 'imports-loader?jQuery=jquery'
				}]
			},
		]
	}
}
