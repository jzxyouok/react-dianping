// postcss-loader设置，主要用于浏览器css自动兼容补全
module.exports = {
  plugins: [
    require("postcss-cssnext")()
  ]
}
