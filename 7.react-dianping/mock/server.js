/*
 *parms 利用koa创建的api接口
 *创建访问请求API接口，npm run mock启动该数据mock，访问http://localhost:3000查看
 *要想在http://localhost:8080上访问数据mock，则需要在./webpack.config.js的webpack-dev-server做一个代理的转发
*/
var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();
// var koaBody = require('koa-body')();

// 创建访问请求API接口
// 首页-超值特惠接口
var homeAdData = require('./home/ad.js');
router.get('/api/homeAd', function(ctx, next) {
    ctx.body = homeAdData
});


app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
console.log('server running at http://localhost:3000');

