// 首页头部
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchInput from '../SearchInput/index.jsx' //搜索input组件
//react-router链接
import {Link,hashHistory} from 'react-router'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                {/* 原来的input
                    <div className="home-header-middle">
                        <div className="search-container">
                            <i className="icon-search"></i>
                            <input type="text" placeholder="请输入关键字"/>
                        </div>
                    </div>
                */}
                
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader