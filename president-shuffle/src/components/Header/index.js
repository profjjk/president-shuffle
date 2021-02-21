import React from 'react';
import "./style.css";

function Header(props) {
  return (
    <header className='row d-flex align-items-center w-100'>
      <div className='col-12'>
        <h1 className='text-center display-3'>President Shuffle Game</h1>
      </div>
      <div className='col-12'>
        <p className='text-center fs-5 py-1'>
          Click on an image to earn points, but don't click on any more than once!
        </p>
      </div>
    </header>
  )
}

export default Header;