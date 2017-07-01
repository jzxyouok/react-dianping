import React from 'react'

class List extends React.Component {
  render() {
    const propsData = this.props.todos;
    // {console.log(propsData)}
    return (
      <ul style={{marginTop:'10px',fontSize:'16px',lineHeight:'30px'}}>
        {propsData.map((item,index) =>{
          // {console.log(item.id)}
          return(
            <li key={index} data-id={item.id} onClick={this.deleteListFn.bind(this,item.id)}>{item.text}</li>
          )
        })}
      </ul>
    )
  };
  deleteListFn(id){
    this.props.deleteFn(id); //将item.id传递给父级
  }
}

export default List
