import React, { Component } from "react";
import Navbar from './components/Navbar/index.js';
import Header from './components/Header/index.js';
import Portraits from './components/Portraits/index.js';
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
      <div className="container-fluid">
        <Navbar />
        <Header />
        <div>

        </div>
        <main className="container px-5">
          <div className="row p-5">
            <Portraits presidents={ this.state.presidents } />
          </div>
        </main>
      </div>
      
    )
  }
}

export default App;
