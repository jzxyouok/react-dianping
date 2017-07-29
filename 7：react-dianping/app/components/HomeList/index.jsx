//首页猜你喜欢木偶组件
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //性能优化组件

import './style.less'

class HomeListComponent extends React.Component{
    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); //性能优化组件的使用
    }
    render(){
        return(
            <div id="home-ad">
                <h2 className="home-list-title">猜你喜欢</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item,index) => {
                        // console.log(item)
                        return(
                            <div className="list-item clear-fix" key={index}>
                                <div className="item-img-container float-left">
                                    <img src={item.img} alt={item.title}/>
                                </div>
                                <div className="item-content">
                                    <div className="item-title-container clear-fix">
                                        <h3 className="float-left">{item.title}</h3>
                                        <span className="float-right">{item.distance}</span>
                                    </div>
                                    <p className="item-sub-title">
                                        {item.subTitle}
                                    </p>
                                    <div className="item-price-container clear-fix">
                                        <span className="price float-left">￥{item.price}</span>
                                        <span className="mumber float-right">已售{item.mumber}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}

export default HomeListComponent