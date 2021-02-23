# President Shuffle Game

## Table of Contents
* [Project Summary](#project-summary)
* [How to Access](#how-to-access)
* [Technologies Used](#technologies-used)
* [About Me](#about-me)
* [Screenshots](#screenshots)
* [Code Snippets](#code-snippets)

## Project Summary
This is a game built using React.js. Everytime time you click on an image the page will scramble their positions and you will need to click on a new image. If you click on the same image twice then it's GAME OVER. 

## How to Access
* [President Shuffle](https://profjjk.github.io/president-shuffle/)

## Technologies Used
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [React](https://reactjs.org/)

## About Me
* [LinkedIn](https://www.linkedin.com/in/the-real-jordan-kelly/)
* [GitHub](https://github.com/profjjk)

## Screenshots
![Game Board](public/img/shuffle-game.png)

## Code Snippets
React class component that renders each portrait on the page.
```javascript
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
```
Record the player's selection and update the scoreboard.
```javascript
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
```
Shuffle the board.
```javascript
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
```

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)