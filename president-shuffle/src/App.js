import React, { Component } from "react";
import Navbar from './components/Navbar/index.js';
import Header from './components/Header/index.js';
import Portraits from './components/Portraits/index.js';
import presidents from './presidents.json';

class App extends Component {
  state = {
    presidents: presidents,
    score: 0,
    highScore: 0
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

  updateScore = () => {

  }

  playerChoice = (id) => {
    // THIS IS WHAT I WANT:
    // When a player selects a portrait (refer to handleClick function below) the data-id is added to the tracker object. If the id already exists in the tracker (meaning they already selected it) then the score is set to 0 and the tracker is cleared out. Otherwise, the new id is added and the score is incremented by 1 point.
    // THIS IS WHAT'S HAPPENING:
    // The tracker is always cleared out and only show the last choice. The values of score and highScore are always 1. What is missing from my logic?
    const tracker = {}
    let score = 0;
    let highScore = this.state.highScore;
    
    if (tracker[id]) {
      score = 0;
      tracker = {};
    } else {
      score += 1;
      tracker[id] = id;
    }
    if (score > highScore) {
      highScore = score;
    }
    console.log(tracker);
    console.log(score);
    console.log(highScore);

    this.setState({ score: score, highScore: highScore });
  }

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
          updateScore= { this.updateScore }
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
