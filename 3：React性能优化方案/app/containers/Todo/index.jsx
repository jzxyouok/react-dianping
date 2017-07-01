import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //导入性能优化插件

import Input from '../../components/Input/index.jsx'
import List from '../../components/List/index.jsx'

class Todo extends React.Component{
  constructor(props,context){
    super(props,context);
    //性能优化 每个constructor里面加上下面shouldComponentUpdate这行代码
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      todos:[]
    }
  };
  render(){
    return(
      <div>
        <Input submitFn={this.submitFn.bind(this)}/>
        <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
      </div>
    )
  };
  submitFn(value){
    //console.log(value);//自定义事件submitFn接收子组件Input回车后的值

    this.setState({
      todos:this.state.todos.concat({
        id:this.state.todos.length,
        text:value
      })
    })
  };
  //
  deleteFn(id){
    //自定义事件deleteFn接收子组件List点击删除的id
    // console.log(id);
    let stateData = this.state.todos;
    // console.log(inputData);
    let deleteData = stateData.filter(item =>{
      if(item.id !== id){
        return item; //返回不包含删除id的新数组
      }
    })
    this.setState({
      todos:deleteData
    })
  }
}

export default Todo;
