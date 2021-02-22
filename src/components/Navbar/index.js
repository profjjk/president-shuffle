import React, { Component } from 'react';
import "./style.css";

class Navbar extends Component {

  render() {
    return (
      <div className='row sticky-top d-flex align-items-center w-100 p-3' id='score-card'>
        <div className='col-4'>
          <h3 className='text-center'>Shuffle Game</h3>
        </div>
        <div className='col-4'>
          <h4 className='text-center'>Click on a portrait to begin!</h4>
        </div>
        <div className='col-4'>
          <h4 className='text-center'>
            Score: <span id='score'>{ this.props.score }</span> |
            Top Score: <span id='highScore'>{ this.props.highScore }</span>
          </h4>
        </div>
      </div>
    ) 
  } 
}

export default Navbar;