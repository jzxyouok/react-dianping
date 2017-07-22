import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件
class App extends React.Component{
	constructor(props,context) {
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); //性能优化组件的使用
		this.state = {
			initDone:false
		}
	}
	render(){
		return(
			<div>

				{/*子路由组件用this.props.children，这样子组件就共用父组件App里面的东西*/}
				{
					this.state.initDone ? this.props.children : <div>正在加载...</div>
				} 
			</div>
		)
	}
	componentDidMount(){
		this.setState({
            initDone: true
        })
	}
}
export default App