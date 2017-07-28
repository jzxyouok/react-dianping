// 首页的所有数据请求管理，请求的数据为mock里面的模拟数据

import {getFetch} from '../get.js'

//首页-超值特惠数据接口，模拟数据来自/mock/home/ad.js，访问
export function getAdData(){
	const resultFetch = getFetch('/api/homeAd')
	// console.log(resultFetch);
	return resultFetch
}