var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var nodeModules = {};
var fs = require('fs');
fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});
	
module.exports = [
	{
		name: 'server',
		entry: {
			"bin/www": './src/server/www',
		},
		target: 'node',
		output: {
			path: __dirname,
			filename: "[name]",
		},
		externals: nodeModules,
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader?presets[]=es2015",
				},
			]
		},
		devtool: 'inline-source-map',
	},
]
