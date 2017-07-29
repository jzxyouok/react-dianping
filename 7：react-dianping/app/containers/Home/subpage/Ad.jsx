// 首页超值特惠智能组件，涉及到数据交互
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

//fetch
import {getAdData} from '../../../fetch/Home/home.js' //首页-超值特惠fetch请求

import HomeAd from '../../../components/HomeAd/index.jsx' //拆分的木偶组件

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	fetchData:[]
        }
    }
    render() {
        return (
            // 循环数据
            <div>
            	{
            		this.state.fetchData.length
            		? <HomeAd data={this.state.fetchData}/>
            		: <div>加载中...</div>
            	}
            </div>
        )
    }
    //用fetch获取数据
    componentDidMount(){
    	var fetchResult = getAdData();
    	fetchResult.then((res) => {
    		return res.json()
    	}).then(json => {
    		const jsonData = json;

    		if(jsonData.length){
    			this.setState({
    				fetchData:jsonData
    			})
    		}
    		// console.log(this.state.fetchData)
    	}).catch(ex => {
    		// 发生错误
            if (__DEV__) {
                console.error('首页广告模块获取数据报错, ', ex.message)
            }
    	})
    }
}

export default Ad