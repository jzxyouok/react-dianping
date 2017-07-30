//首页猜你喜欢智能组件

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

//fetch
import {getHomeListData} from '../../../fetch/Home/home.js' //导入fetch请求

import HomeListComponent from '../../../components/HomeList/index.jsx' //拆分的木偶组件

import LoadingMore from '../../../components/LoadingMore/index.jsx' //加载更多木偶组件

class HomeList extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
        	fetchData:[],
        	hasMore:false, //是否有下一页数据，这个标识是从后台数据里面得到的，有就继续加载数据
			isLoadingMore:false, //是否正在加载更多数据，这个标识用来显示'正在加载'和'加载更多'
			page:1 //分页数
        }
	}
	render(){
		return(
			<div>
				{
					this.state.fetchData.length
					? <HomeListComponent data={this.state.fetchData}/>
					: <div>加载中...</div>
				}
				{/*点击加载更多和滚动加载更多*/}
				{
					this.state.hasMore
					? <LoadingMore loadMoreData={this.loadMoreData.bind(this)} isLoadingMore={this.state.isLoadingMore} />
					: <div>{/*已加载完毕*/}</div>
				}
			</div>
		)
	}
	// 在componentDidMount用fetch获取数据
	componentDidMount(){
		this.loadFirstPageData()
	}

	//加载首屏数据
	loadFirstPageData(){
		var fetchResult = getHomeListData(this.props.cityName,0) //0表示获取第一页数据
		this.resultHandle(fetchResult)
	}
	
	//加载更多
	loadMoreData(){
		//只加载前5页数据
		if(this.state.page > 5){
			this.setState({
	        	hasMore: false
	        })
	        return;
		}
		// 记录状态
        this.setState({
            isLoadingMore: true //加载中
        })

		const page = this.state.page
		const fetchResult = getHomeListData(this.props.cityName,page)//传城市和页码请求数据
        this.resultHandle(fetchResult)

        // 增加page
		this.setState({
        	isLoadingMore: false, //加载完
			page:page+1
        })
        
	}

	// 处理数据
	resultHandle(fetchResult){
		fetchResult.then( res => {
			return res.json()
		}).then( json => {
			// console.log(json)
			const jsonData = json.data;
			if(jsonData.length){
				this.setState({
					fetchData:this.state.fetchData.concat(jsonData), // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
					hasMore: json.hasMore
				})
			}
			
		}).catch(ex => {
            if (__DEV__) {
                console.error('首页"猜你喜欢"获取数据报错, ', ex.message)
            }
        })
	}
}

export default HomeList