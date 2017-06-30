import React from 'react'
import {render} from 'react-dom'

// 通用样式
import './static/css/common.less'

import Todo from './containers/Todo/index.jsx';

// 性能测试工具，只在__DEV__环境下才能进行性能查看，需要npm i react-addons-perf --save
import Perf from 'react-addons-perf'
if (__DEV__) {
    window.Perf = Perf
}

render(
    <Todo/>,
    document.getElementById('root')
)

