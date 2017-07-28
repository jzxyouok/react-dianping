// 首页总入口
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件


//木偶组件
import HomeHeader from '../../components/HomeHeader/index.jsx' //首页头部
import Category from '../../components/Category/index.jsx' //首页轮播

//智能组件
import Ad from './subpage/Ad.jsx' //首页超值特惠

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class Home extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
		return(
			<div>
				<HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}>{/* 样式分割线 */}</div>
                <Ad/>
			</div>
		)
	}
}
// export default Home

// 把state和dispatch作为属性props传到App组件中
function mapStateToProps(state){
    return{
        userinfo:state.userinfo //reducer里面的userinfo
    }
}

function mapDispatchToProps(dispatch){
    return{
    }
}

//connect 将redux和react-redux连接起来
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
