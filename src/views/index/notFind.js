import React, { Component } from 'react';

class notFind extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const myStyle = {
      width:'100%',
      height:'100%',
      backgroundColor:'#ccc',
      color:'red',
      fontSize:'30px',
      margin:'150px auto',
      textAlign:'center'
    };
    return (
      <div style={myStyle}>
        404
      </div>
    )
  }
}

export default notFind;
