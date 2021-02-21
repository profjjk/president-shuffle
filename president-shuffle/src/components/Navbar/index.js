import React from 'react';
import "./style.css";

function Navbar(props) {
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
          Score: <span>0</span> |
          Top Score: <span>0</span>
        </h4>
      </div>
    </div>
  )
}

export default Navbar;