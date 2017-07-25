/**
 * Created by litong on 2017/6/27.
 */
// var pkg = require('./package.json')
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/index.js'),
    // 将package.json第三方依赖dependencies单独打包
    // vendor: Object.keys(pkg.dependencies)
    vendor: [
      'react',
      'react-dom',
      // 'react-redux',
      // 'react-router',
      // 'redux',
      // 'es6-promise',
      // 'whatwg-fetch',
      // 'immutable'
    ]
  },
  output: {
    path: __dirname + "/build", //上线目录/build
    filename: "js/[name].[chunkhash:8].js", //给文件加上md5后缀
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'src'),
  resolve:{
      extensions:['.js','.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader', 'postcss-loader']
        })
      },
      { 
        test:/\.(png|jpg|svg|gif|jpeg|bmp)$/, 
        loader:'url-loader?limit=20000&name=img/[name].[chunkhash:8].[ext]' 
      },
      { 
        test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/, 
        loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'
      }
    ]
  },
  // postcss: [
  //   require('autoprefixer')
  // ],

  plugins: [
    // webpack 内置的 banner-plugin
    new webpack.BannerPlugin("Copyright by dengzhao"),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html'
    }),

    // 定义为生产环境，编译 React 时压缩到最小
    // new webpack.DefinePlugin({
    //   'process.env':{
    //     'NODE_ENV': JSON.stringify(process.env.NODE_ENV) //或者为'"production"'
    //   }
    // }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false
        }
    }),

    // 分离CSS和JS文件
    // new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),
    new ExtractTextPlugin({
        filename: "css/[name].[chunkhash:8].css"
    }),
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].[chunkhash:8].js'
    }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false')) //或者false
    })
  ]
}
