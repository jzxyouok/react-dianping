import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

//父路由
import App from '../containers/index.jsx'
//子路由
import Home from '../containers/Home/index.jsx' //首页
import City from '../containers/City/index.jsx' //选择城市页

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps
class RouterMap extends React.Component{
	render(){
		return(
			<Router history={this.props.history}>
				<Route path="/" component={App}>
					{/*
						访问根目录的时候，默认渲染Home组件
						上面还有父组件App，需要在父组件render里加上{this.props.children}，
						作用是让子组件公用一些东西，比如公共头尾、loading等
					*/}
					<IndexRoute component={Home}/>
					<Route path="/city" component={City}/>
				</Route>
			</Router>
		)
	}
}
export default RouterMap