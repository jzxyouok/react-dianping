import React from 'react'

class Detail extends React.Component{
  render() {
    return(
    	<p>Detai，获取 url 中的参数 {this.props.params.id}</p>
    )
  }
}
export default Detail