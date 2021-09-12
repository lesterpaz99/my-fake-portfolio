const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(jpe?g|png)$/i,
				type: 'asset',
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body',
		}),
		new MiniCssExtractPlugin(),
		new ImageMinimizerPlugin({
			// minify: ImageMinimizerPlugin.squooshMinify,
			minimizerOptions: {
				encodeOptions: {
					mozjpeg: {
						// That setting might be close to lossless, but it’s not guaranteed
						// https://github.com/GoogleChromeLabs/squoosh/issues/85
						quality: 100,
					},
					webp: {
						lossless: 1,
					},
					avif: {
						// https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
						cqLevel: 0,
					},
				},
			},
		}),
		new CopyPlugin({
			patterns: [{ from: './src/images', to: 'images/' }],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
		open: true,
	},
};
