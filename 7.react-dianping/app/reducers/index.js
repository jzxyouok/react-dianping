// 把多个reducer合并起来
import {combineReducers} from 'redux'

//导入reducer
import userinfo from './userinfo.js'

export default combineReducers({
	userinfo
})