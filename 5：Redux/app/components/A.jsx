import React from 'react'

class A extends React.Component{
	render(){
		return(
			<div>
				<p>{this.props.connect_userinfo.userid}</p>
			</div>
		)
	}
}

export default A