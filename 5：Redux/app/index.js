import React from 'react'
import {render} from 'react-dom'
// 通用样式
import './static/css/common.less'

/*
//下面为app/redux-demo.js运行代码
// 引用并执行 redux-demo
import fn from './redux-demo.js'
fn()

class Hello extends React.Component {
  render() {
    return (
        <p>hello world</p>
    )
  }
}
render(
  <Hello/>,
  document.getElementById('root')
)
*/

// 第三步：定义监听 => 数据变化后出发的操作(订阅者模式)
import { Provider } from 'react-redux' //导入Provider组件，本质还是react组件，只是根据redux的特性进行了封装来做redux的一些事情
import configureStore from './store/configureStore.js'

import Hello from './containers/Hello.jsx'

const store = configureStore()


render(
  <Provider store={store}>
    <Hello/>
  </Provider>,
  document.getElementById('root')
)
