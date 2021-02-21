import React, { Component } from "react";
import Navbar from './components/Navbar/index.js';
import Header from './components/Header/index.js';
import Portraits from './components/Portraits/index.js';
import presidents from './presidents.json';

class App extends Component {
  state = {
    presidents: presidents,
  };

  shufflePresidents = () => {
    let presidents = this.state.presidents;
    for (let i = presidents.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = presidents[i];
      presidents[i] = presidents[j];
      presidents[j] = temp
    }
    this.setState({ presidents: presidents })
  }

  // handleClick = event => {
  //   event.preventDefault();
  //   let tracker = {}
  //   let score = 0;
  //   let highScore = this.state.highScore;

  //   let id = event.target.getAttribute('data-id');
  //   if (tracker[id]) {
  //     score = 0;
  //     tracker = {};
  //   } else {
  //     score += 1;
  //     tracker[id] = id;
  //   }
  //   if (score > highScore) {
  //     highScore = score;
  //   }
  //   this.setState({ score: score, highScore: highScore });
  // }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Header />
        <div>

        </div>
        <main className="container px-5">
          <div className="row p-5">
            <Portraits 
              presidents={ this.state.presidents }
              shufflePresidents={ this.shufflePresidents }
            />
          </div>
        </main>
      </div>
      
    )
  }
}

export default App;
