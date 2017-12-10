import React, { Component } from 'react';
import '../../styles/views_about.css';
import {Link} from 'react-router';

class About extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className='views_about'>
        about
        <Link to="/Mine">zxc</Link>
      </div>
    )
  }
}

export default About;
