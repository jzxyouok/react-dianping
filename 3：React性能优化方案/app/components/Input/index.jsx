import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' //导入性能优化插件

class Input extends React.Component {
  constructor(props,context){
    super(props,context);
    //性能优化 每个constructor里面加上下面shouldComponentUpdate这行代码
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      value:''
    }
  }
  render() {
    return (
      <div>
        <input style={{width:'100%',height:'40px',fontSize:'20px'}} onChange={this.changeHandler.bind(this)} onKeyUp={this.keyupHandler.bind(this)} value={this.state.value}/>
      </div>
    )
  };
  changeHandler(e){
    //获取表单输入的值
    // console.log(e.target.value);
    this.setState({
      value:e.target.value
    })
  };
  keyupHandler(e){
    const keyupValue = this.state.value;
    if(e.keyCode === 13 && keyupValue.trim()){
      //enter键的时候提交数据到父组件并清空数据
      this.props.submitFn(keyupValue);
      this.setState({
        value:''
      });
    }
  }
}

export default Input
