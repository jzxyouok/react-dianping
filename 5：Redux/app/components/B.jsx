import React from 'react'

class B extends React.Component{
	render(){
		return(
			<div>
				<p>{this.props.connect_userinfo.city}</p>
			</div>
		)
	}
}

export default B