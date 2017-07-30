//选择城市页面
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

import './style.less'

class CurrentCity extends React.Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
	render(){
        // 从父组件里面获取redux的cityName
		return (
            <div className="current-city">
                <h2>{this.props.cityName}</h2>
            </div>
        )
	}
}
export default CurrentCity

