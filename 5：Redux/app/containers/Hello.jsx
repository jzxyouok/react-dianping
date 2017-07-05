// 第三步：定义监听 => 数据变化后出发的操作(订阅者模式)
import React from 'React'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions_userinfo from '../actions/userinfo.js' //导入actions
import A from '../components/A.jsx'
import B from '../components/B.jsx'
// import C from '../components/C'


class Hello extends React.Component{
	render(){
		return(
			<div>
				<p>hello world</p>
		        <hr/>
		        <A connect_userinfo={this.props.connect_userinfo}/>
		        <hr/>
		        <B connect_userinfo={this.props.connect_userinfo}/>
			</div>
		)
	}
	componentDidMount() {
	    // 模拟登陆
	    // 触发actions，login为actions里面导出的方法
	    this.props.actions_userinfo.login({
	      userid: 'abc',
	      city: 'beijing'
	    })
	}
}

function mapStateToProps(state){
	console.log(state)
	return{
		connect_userinfo:state.userinfo //reducer里面的userinfo
	}
}

// 将返回的connect_userinfo连接到Hello组件里面去
export default connect(
    mapStateToProps,
)(Hello)