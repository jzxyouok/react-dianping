// // actions
/*
const USERINFO_LOGIN = 'USERINFO_LOGIN'
const UPDATE_CITYNAME = 'UPDATE_CITYNAME'

export function login(data){
	return{
		type:USERINFO_LOGIN,
		data:data
	}
}
export function updateCityName(data){
	return{
		type:UPDATE_CITYNAME,
		data:data
	}
}
*/
import * as actionTypes from '../constants/userinfo'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}