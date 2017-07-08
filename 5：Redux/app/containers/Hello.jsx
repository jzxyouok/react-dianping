// 第三步：定义监听 => 数据变化后出发的操作(订阅者模式)
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo.js' //导入actions
import A from '../components/A.jsx'
import B from '../components/B.jsx'
import C from '../components/C.jsx'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}/>{/*userinfo为store里面的userinfo，经过mapStateToProps修改*/}
                <hr/>
                <B userinfo={this.props.userinfo}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
	    // 触发actions，login为actions里面导出的方法
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state){
	console.log(state)
	return{
		userinfo:state.userinfo //reducer里面的userinfo
	}
}
function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}
// 将返回的connect_userinfo连接到Hello组件里面去
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

//所以总结actions提交数据变化 => deducers处理 => store接受 => 返回数据到页面中