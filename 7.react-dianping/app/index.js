import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

// 通用样式
import './static/css/common.less'


// redux 将store传到路由中，也就是组件中
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js' //store需要通过Provider组件传到组件中使用
const store = configureStore()


//导入路由总配置
import RouterMap from './router/routerMap.jsx'

render(
  <Provider store={store}>
    <RouterMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
)
