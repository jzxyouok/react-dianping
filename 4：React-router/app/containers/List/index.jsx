import React from 'react'
import { hashHistory} from 'react-router'

class List extends React.Component{
  render(){
    const arr = [1,2,3];
    return(
      <ul>
        {
          arr.map((item,index) => {
            return <li key={index} onClick={this.clickHandler.bind(this,item)}>js jump to {item}</li>
          })
        }
      </ul>
    )
  }
  clickHandler(value){
    // 页面跳转方法二：使用 js 跳转等同于方法一：<Link> 跳转
    hashHistory.push('/detail/'+value);
  }
}
export default List