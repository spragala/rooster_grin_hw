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

	//Add sass-loader
	module: {
		loaders: [
      {
        test: /\.html$/,
        loader: "raw-loader"
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
			}
		]
	}
}
