import React, { Component } from "react";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portraits from './components/Portraits';
import presidents from './presidents.json';

class App extends Component {
  state = {
    presidents
    // score: score
  };

  shufflePresidents = id => {}

  keepScore = id => {}

  render() {
    // console.log(this.state.presidents)
    return (
      <div className="container">
        <div className="row">
          <Portraits presidents={ this.state.presidents } />
        </div>
      </div>
    )
  }
}

export default App;
