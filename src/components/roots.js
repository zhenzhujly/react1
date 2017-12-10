import React, { Component } from 'react';
import '../styles/components_roots.css';

class Roots extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return (
      <div className='components_roots'>
        { this.props.children }
      </div>
    )
  }
}

export default Roots;
