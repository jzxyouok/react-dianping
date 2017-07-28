//首页超值特惠木偶组件
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

import './style.less'

class HomeAd extends React.Component{
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); //性能优化组件的使用
    }
    render(){
        return(
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                	{this.props.data.map((item,index) => {
                		// console.log(item)
                		return(
                			<div className="ad-item float-left" key={index}>
		                        <a href={item.link} target="_blank">
		                            <img src={item.img} alt={item.title}/>
		                        </a>
		                    </div>
                		)
                	})}
                    
                </div>
            </div>
        )
    }
}

export default HomeAd