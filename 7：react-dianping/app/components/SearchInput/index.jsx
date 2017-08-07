// 搜索输入回车显示搜索结果通用组件
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
                className="search-input" 
                type="text" 
                placeholder="请输入关键字" 
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}/>
        )
    }
    componentDidMount() {
        // 默认值，获取外面组件传进来的默认值
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        // 监控变化，e.target.value为输入框的值
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        // 监控 enter 事件，13为enter键
        if (e.keyCode !== 13) {
            return
        }
        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput