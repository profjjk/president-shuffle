import React, { Component } from "react";
import Navbar from './components/Navbar/index.js';
import Header from './components/Header/index.js';
import Portraits from './components/Portraits/index.js';
import presidents from './presidents.json';

// function shuffle(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp
//   }
// }

// shuffle(presidents)

class App extends Component {

  state = {
    presidents,
    score: 0,
    highScore: 0
  };

  shufflePresidents = () => {
    for (let i = presidents.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = presidents[i];
      presidents[i] = presidents[j];
      presidents[j] = temp
    }
  }

  handleClick = event => {
    event.preventDefault();
    let tracker = {}
    let score = 0;

    let id = event.target.getAttribute('data-id');
    if (tracker[id]) {
      score = 0;
      tracker = {};
    } else {
      score += 1;
      tracker[id] = id;
    }
    this.setState({ score: score });
    this.shufflePresidents();
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar 
          score={ this.state.score }
          highScore={ this.state.highScore }
        />
        <Header />
        <div>

        </div>
        <main className="container px-5">
          <div className="row p-5">
            <Portraits 
              presidents={ this.state.presidents } 
              onClick={ this.handleClick }
            />
          </div>
        </main>
      </div>
      
    )
  }
}

export default App;
