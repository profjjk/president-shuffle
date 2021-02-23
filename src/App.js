import React, { Component } from "react";
import Navbar from './components/Navbar/index.js';
import Header from './components/Header/index.js';
import Portraits from './components/Portraits/index.js';
import presidents from './presidents.json';

class App extends Component {
  state = {
    presidents: presidents,
    score: 0,
    highScore: 0,
    prevSelections: []
  };

  // Rearrange portraits on game board.
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

  // Record player's choice & update scores.
  playerChoice = (id) => {
    let selected = this.state.prevSelections;
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (selected.includes(id)) {
      selected = [];
      score = 0;
    } else {
      selected.push(id);
      score += 1;
    }
    if (score > highScore) {
      highScore = score;
    }
    this.setState({ prevSelections: selected, score: score, highScore: highScore });
  }

  // Consolidate all functions into event listener.
  handleClick = event => {
    event.preventDefault();
    let id = event.target.getAttribute('data-id');
    this.playerChoice(id);
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
        <main className="container px-5">
          <div className="row p-5">
            <Portraits 
              presidents={ this.state.presidents }
              handleClick={ this.handleClick }
            />
          </div>
        </main>
      </div>
    )
  }
}

export default App;
