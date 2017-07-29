//首页加载更多

import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadingMore extends React.Component{
	constructor(props,context){
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}
	render(){
		return(
			<div className="load-more" ref="wrapper">
				{
					// 用传递过来的isLoadingMore判断加载中还是加载更多
					this.props.isLoadingMore
					? <span>加载中...</span>
					: <span onClick={this.loadingMoreFn.bind(this)}>加载更多</span>
				}
			</div>
		)
	}

	// 点击加载更多
	loadingMoreFn(){
		this.props.loadMoreData();
	}

	// 滚动时自动加载更多
	componentDidMount() {
        const loadMoreFn = this.props.loadMoreData
        const wrapper = this.refs.wrapper //refs获取原生dom结点
        let timeoutId //用计时器实现scroll事件的节流
        function callback() {
            const top = wrapper.getBoundingClientRect().top //getBoundingClientRect()相对可视窗口
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false);
    }
}

export default LoadingMore