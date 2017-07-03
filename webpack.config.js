const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象

module.exports = {
	entry:{
	 main:["./src/index.js","./src/common/reset.css"]
	},
	output:{
		filename: '[name]-[hash:10].js', //main-ddc7e6c173.js
		path: path.resolve(__dirname,'dist')  //绝对路径
	},
	devtool: "cheap-module-source-map", //sourceMap
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // 启用 HMR
		new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify('production')
	    }),
	    new HtmlWebpackPlugin({
	    	inject: false,
		    title: 'webpack3的初次使用',
		    template: path.join("./src", 'todos.html'),//模板文件路径
		    filename: 'index.html', //输出的 HTML 文件名
		    chunksSortMode: 'dependency'//允许控制块在添加到页面之前的排序方式
	    }),
    	new ExtractTextPlugin('stylesheets/[name].css'),
    	new webpack.optimize.CommonsChunkPlugin("common") // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
  	],
	module:{
		rules:[
			{
				test: /\.css$/,
				// use:["style-loader","css-loader"],
				use: new ExtractTextPlugin('stylesheets/[name].css').extract({
		          fallback: "style-loader",//编译后用什么loader来提取css文件
		          use: "css-loader" //需要什么样的loader去编译文件
        		})

			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname,'dist'),//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
		hot: true,
		port: 9000
	}
}