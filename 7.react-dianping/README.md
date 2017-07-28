react项目实战：

#### fetch:
	
	fetch安装："whatwg-fetch": "^2.0.3"
	  npm install whatwg-fetch --save

	兼容老版本浏览器："es6-promise": "^4.1.1"
	  npm install es6-promise --save

#### 数据 Mock：

使用目前比较流行的 koa 来做后端接口的模拟：

	只在开发过程中使用 koa ，项目发布之后用线上接口：
	  npm install koa koa-body koa-router --save-dev


运行

	npm install //安装依赖

	npm run start //启动项目

	npm run mock //启动模拟接口

	npm run build //上线和优化项目
