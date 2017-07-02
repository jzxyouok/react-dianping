import React from 'react'
import { Router,Route,IndexRoute } from 'react-router' //IndexRoute为访问首页的时候的路由组件

import App from '../containers/App.jsx'
import Home from '../containers/Home/index.jsx'
import List from '../containers/List/index.jsx'
import Detail from '../containers/Detail/index.jsx'
import NotFound from '../containers/NotFound/index.jsx'

class RouteMap extends React.Component{
  //组件更新onUpdate的时候函数
  updateHandle(){
     console.log('每次router变化之后都会触发')
  }
  render(){
    return(
      // 配置 router
      <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
        <Route path='/' component={App}>
          {/*里面为App的子路由，也就是路由嵌套*/}
          <IndexRoute component={Home}/> {/*首页路由*/}
          <Route path="list" component={List}/>
          <Route path="detail/:id" component={Detail}/>
          <Route path="*" component={NotFound}/> {/*访问其他任何不存在的router配置的时候*/}
        </Route>
      </Router>
    )
  }
}
export default RouteMap
