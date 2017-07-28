// Redux - action
import * as actionTypes from '../constants/userinfo.js'

//定义action的处理函数
export function update(data){
	// console.log(data)
	//组件调用action的update函数，根据传进来的data，返回type和data
	return{
		type:actionTypes.USERINFO_UPDATE,
		data:data
	}
}