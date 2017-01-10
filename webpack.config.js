var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
    'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.js'
  ],
	output: {
		filename: 'bundle.js',
		path: './dist'
	},
	resolve:{
		extensions:['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			//exclude: /node_modules/,
			query: {
				presets: ['react', 'es2015','stage-0'],
				cacheDirectory:true
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			// title: 'Employee Service',
			template: './src/index.tmpl.html',
			filename: './index.html'
		}),
		 new webpack.HotModuleReplacementPlugin()
	],
	externals: {
	  'react/addons': true,
	  'react/lib/ExecutionEnvironment': true,
	  'react/lib/ReactContext': true
	}
};