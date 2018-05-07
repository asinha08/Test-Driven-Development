module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [ {
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [ "env", "react", "es2015" ]
				}
			}
		} ]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
