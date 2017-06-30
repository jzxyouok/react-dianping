/**
 * Created by litong on 2017/6/27.
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'app/index'),
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    //自动补全导入组件后缀
    resolve: {
        extensions: ['.js','jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: /app/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    //自动补全兼容代码
                    {
                        loader: 'postcss-loader',
                        options : {
                            plugins : function() {
                                return [
                                    require('autoprefixer')({
                                        broswers : ['last 5 versions']
                                    })
                                ];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg|bmp)$/,
                loader: 'url-loader',
                options: {
                    limit: 5000
                }
            }
        ]
    },
    plugins: [
        // html 模板插件 => 自动将打包文件添加进去
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/app/index.html'
        }),
        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8000'
        }),
        // 配置运行命令行时设置为开发还是上线环境
        //可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        }),
        // 为webpack里面的loader添加插件
        new webpack.LoaderOptionsPlugin(),
        
    ],
    devServer: {
      //此处是webpack-dev-server的配置
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure:false
            }
        },
        contentBase: './public',
        historyApiFallback: true,//不跳转，在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//实时刷新
        hot: true // 使用热加载插件 HotModuleReplacementPlugin
    }
}