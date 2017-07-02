import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component{
  render(){
    return(
      <div>
        <p>Home</p>
        {/* 使用 router */}
        <Link to="/list">to list</Link>
      </div>
    )
  }
}
export default Home

