//选择城市页面
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

// redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js' //actions

//获取设置城市的本地缓存
import LocalStore from '../../util/localStore.js'
import {CityName} from '../../config/localStoreKey.js'

//组件
import Header from '../../components/Header/index.jsx' //公共头部
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'

//hashHistory跳转页面
import {hashHistory} from 'react-router'

class City extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
		return(
			<div>
				<Header title="选择城市"/>
				<CurrentCity cityName={this.props.userinfo.cityName}/>
				<CityList changeCityFn={this.changeCity.bind(this)}/>
			</div>
		)
	}
	componentDidMount(){
		//console.log(this.props.userinfo) //redux里面的cityName
		//console.log(this.props.userInfoActions) //redux里面更改cityName的方法
	}

	//选择城市更改redux里面的结果
	changeCity(newCity){
		if(newCity == null){
			return
		}
		//修改redux
		this.props.userInfoActions.update({
			cityName:newCity
		})

		//修改localStorage
		LocalStore.setItem(CityName, newCity)
		
		//跳转页面
		hashHistory.push('/')
	}
}
// export default City

// 把state和dispatch作为属性props传到组件中
function mapStateToProps(state){
    return{
        userinfo:state.userinfo //reducer里面的userinfo
    }
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
)(City)