import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'

// 通用样式
import './static/css/common.less'

//redux
import {Provider} from 'redux'
import configureStore from './store/configureStore.js' //store需要通过Provider组件传到组件中使用

//创建 Redux 的 store 对象
const store = configureStore()

//导入路由总配置
import RouterMap from './router/routerMap.jsx'

render(
  // <RouterMap history={hashHistory}/>,
  <Provider store={store}>
  	<RouterMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
)
