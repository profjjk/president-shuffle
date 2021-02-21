import React, { Component } from 'react';
import "./style.css";

class Portraits extends Component {

  render() {
    const presidents = this.props.presidents;
    return presidents.map(president => (
      <div className='col-3 d-flex portrait-div' key={president.id}>
        <img className='img-fluid rounded mx-auto' 
          src={president.image} 
          alt={president.name} 
          data-id={president.id}
          onClick={ this.props.handleClick }
        />
      </div>
    ))
  }
}

export default Portraits;
