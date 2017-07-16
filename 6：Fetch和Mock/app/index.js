import React from 'react'
import {render} from 'react-dom'
// 通用样式
import './static/css/common.less'

import { getData, postData } from './fetch/test.js'
getData();
postData();

render(
  <div>fetch和mock查看控制台</div>,
  document.getElementById('root')
)
