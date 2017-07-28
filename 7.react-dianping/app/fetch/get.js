/*
 *parms
 *fetch的get封装
*/
import 'whatwg-fetch'
import 'es6-promise' //兼容

export function getFetch(url){
	var resultFetch = fetch(url,{
		credentials: 'include',
      	headers: {
          'Accept': 'application/json, text/plain, */*'
      	}
	});
	return resultFetch;
}