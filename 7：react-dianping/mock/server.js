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


// 首页-猜你喜欢接口  用最简单的处理来进行数据模拟(因为返回都是相同的数据)
var homeListData = require('./home/homeList.js')
router.get('/api/homelist/:city/:page',function(ctx,next){
	// http://localhost:3000/api/homelist/武汉/0 表示访问的是武汉的第一页数据
	// 参数
	const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

	console.log('当前城市:'+paramsCity)
	console.log('当前页数:'+paramsPage)
	ctx.body = homeListData
})



app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
console.log('server running at http://localhost:3000');

