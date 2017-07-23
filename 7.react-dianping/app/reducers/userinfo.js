// Redux reducers 这里面接收action传递过来的东西，然后处理动作
import * as actionTypes from '../constants/userinfo.js'

const initialState = {}
export default function userinfo(state=initialState,action){
	switch(action.type){
		//判断action传递过来的type，返回数据，然后传递到store
		case actionTypes.USERINFO_UPDATE:
			return action.data
		default:
			return state
	}
}