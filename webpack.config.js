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
		}),
		new webpack.DefinePlugin({
			'process.env' : {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
//Add loaders
	module: {
		loaders: [
			// pug loader
      {
        test: /\.pug$/,
        use: [{
					loader: "html-loader"
				}, {
					loader: "pug-html-loader"
				}]
      },
			// fonts
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
			// images
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [{
					loader: 'file-loader?name=[name].[ext]&outputPath=images/'
				}]
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader?fixUrls' //fixUrls to load svg from scss
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
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
