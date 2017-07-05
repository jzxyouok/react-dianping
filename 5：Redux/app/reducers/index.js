// 第一步：定义规则
// 将index.js导入进来，组织多个 reducer
import { combineReducers } from 'redux'

import userinfo from './userinfo.js'

console.log(userinfo)

const rootReducer = combineReducers({
  userinfo,
  //userinfo2,
  //userinfo3
})
export default rootReducer