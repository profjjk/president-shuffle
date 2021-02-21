import React, { Component } from 'react';


class Portraits extends Component {
  render() {
    const presidents = this.props.presidents;
    console.log(presidents);
    return presidents.map(president => {
      <div className="col-3">
        <h1>{ president.name }</h1>
      </div>
    })
  }
}


export default Portraits;