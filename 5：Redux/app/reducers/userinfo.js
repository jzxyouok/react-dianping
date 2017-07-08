/*
const initialState = {} //初始state
const USERINFO_LOGIN = 'USERINFO_LOGIN'
const UPDATE_CITYNAME = 'UPDATE_CITYNAME'

export default function userinfo( state = initialState,action){
  switch (action.type) {
    // 登录
    case USERINFO_LOGIN:
      return action.data
    // 修改城市
    case UPDATE_CITYNAME:
      return action.data
    default:
      return state
  }
}
*/
import * as actionTypes from '../constants/userinfo.js'

const initialState = {}

export default function userinfo(state = initialState, action) {
    switch (action.type) {
        // 登录
        case actionTypes.USERINFO_LOGIN:
            return action.data
        // 修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data
        default:
            return state
    }
}