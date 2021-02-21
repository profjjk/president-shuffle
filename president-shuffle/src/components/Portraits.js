import React, { Component } from 'react';


class Portraits extends Component {
  render() {
    const presidents = this.props.presidents;
    console.log(presidents);
    return presidents.map(president => {
      <h1>{ president.name }</h1>
    })
  }
}


export default Portraits;