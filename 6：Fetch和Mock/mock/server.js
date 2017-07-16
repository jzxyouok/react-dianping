var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();
var koaBody = require('koa-body')();

//get请求 访问http://localhost:3000
router.get('/', function(ctx, next) {
    ctx.body = 'hello koa !'
});

router.get('/api', function(ctx, next) {
    ctx.body = 'test data' 
});
router.get('/api/1', function(ctx, next) {
    ctx.body = 'test data 1'
});
router.get('/api/2', function(ctx, next) {
    ctx.body = {
        a: 1,
        b: '123'
    }
});

//post请求
router.post('/api/post', koaBody, function(ctx, next) {
    console.log(ctx.request.body)
    ctx.body = JSON.stringify(ctx.request.body)
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
console.log('server running at http://localhost:3000');

/*
npm run mock启动该数据mock
要想在http://localhost:8080上访问数据mock，则需要在./webpack.config.js的webpack-dev-server做一个代理的转发
*/