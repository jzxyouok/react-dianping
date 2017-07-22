import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
// 通用样式
import './static/css/common.less'

//导入路由总配置
import RouterMap from './router/routerMap.jsx'


render(
  <RouterMap history={hashHistory}/>,
  document.getElementById('root')
)
