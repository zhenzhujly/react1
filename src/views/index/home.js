import React, { Component } from 'react';
import Header from '../../components/header';
import '../../styles/views_home.css';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='views_home'>
        <Header/>
      </div>
    )
  }
}

export default Home;
