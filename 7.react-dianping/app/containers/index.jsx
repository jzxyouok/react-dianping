import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

//首页获取设置城市的本地缓存
import LocalStore from '../util/localStore.js'
import {CityName} from '../config/localStoreKey.js'

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo.js' //actions

class App extends React.Component{
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); //性能优化组件的使用
		this.state = {
			initDone:false
		}
	}
	render(){
		return(
			<div>

				{/*子路由组件用this.props.children，这样子组件就共用父组件App里面的东西*/}
				{
					this.state.initDone ? this.props.children : <div>正在加载...</div>
				} 
			</div>
		)
	}
	componentDidMount(){
		this.setState({
            initDone: true
        })
        //获取本地缓存的城市
        let cityName = LocalStore.getItem(CityName);
        if (cityName == null) { //等价于 === null === undefined
            cityName = '武汉'
        }
        //redux App组件dispatch到action
        this.props.userInfoActions.update({
        	cityName:cityName
        })
	}
}
// export default App


// -------------------redux react 绑定--------------------

// 把state和dispatch作为属性props传到App组件中
function mapStateToProps(state){
	return{}
}

function mapDispatchToProps(dispatch){
	return{
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}
}

//connect 将redux和react-redux连接起来
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

// 所以整个redux的过程是：
// store（存放状态） -> 组件（显示状态） -> 组件dispatch到action -> reducer （处理动作）-> store