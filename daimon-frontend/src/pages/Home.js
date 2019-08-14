import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/Home.scss'

class Home extends Component {

  render() {
    return (
      <div className="home-container">
      <h1>DAIMON</h1>
      <Link className="home-link" to="/daimon/login">Enter</Link>
      </div>
    );
  }

}

export default Home;
