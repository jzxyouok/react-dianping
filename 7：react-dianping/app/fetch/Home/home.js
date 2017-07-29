// 首页的所有数据请求管理，请求的数据为mock里面的模拟数据

import {getFetch} from '../get.js'

//首页-超值特惠数据请求，模拟数据来自/mock/home/ad.js
export function getAdData(){
	const resultFetch = getFetch('/api/homeAd')
	// console.log(resultFetch);
	return resultFetch
}


//首页-猜你喜欢数据请求  通过调用的时候传递城市city和页数page来获取数据
export function getHomeListData(city,page){
	// encodeURIComponent将字符串进行编码，也就是城市名
	const resultFetch = getFetch('/api/homelist/'+encodeURIComponent(city) + '/' + page)
	return resultFetch
}