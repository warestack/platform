const path = require('path');

module.exports = {
	mode: 'production',
	entry: './server.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'main.js',
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/
		}]
	},
	resolveLoader: {
		modules: [
			__dirname + '/node_modules'
		]
	},
	target: 'node',
};
