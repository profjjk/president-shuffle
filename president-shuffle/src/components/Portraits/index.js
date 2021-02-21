import React, { Component } from 'react';
import "./style.css";


class Portraits extends Component {
  render() {
    const presidents = this.props.presidents;
    console.log(presidents);
    return presidents.map(president => (
      <div className='col-3 d-flex portrait-div' data-id={president.id}  key={president.id}>
        <img className='img-fluid rounded mx-auto' src={president.image} alt={president.name} data-id={president.id}/>
      </div>
    ))
  }
}


export default Portraits;