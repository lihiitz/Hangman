import React, {Component} from 'react';
import './App.css';
import Solution from './components/Solution';
import Letters from './components/Letters';
import Score from './components/Score';
import EndGame from './components/EndGame';

class App extends Component {
  constructor(){
    super()
    this.state = {   
      words : [
        {word: "bytes", hint: "testing"},
        {word: "bla", hint: "blue"}
      ],
      indexInWords: 0,   
      letterStatus : this.generateLetterStatuses(),
      solution : {
        word : "bytes",
        hint : "Testing"
      },
      score : 0
    }
  }

  isSecret = () => {
    let secret = [...this.state.solution.word]
    let res = true
    secret.forEach(element => {
      if (!this.state.letterStatus[element]){
        res = false
      }
    })
    return res
  }
  generateLetterStatuses(){
    let res = {}
    for (let i = 'a'.charCodeAt(0); i < 'z'.charCodeAt(0); i++)
    {
        res[String.fromCharCode(i)] = false
    }
    return res
  }
  selectLetter = letter => {
    let tempLettersStatus = {...this.state.letterStatus}
    tempLettersStatus[letter] = true
    this.setState({
      letterStatus : tempLettersStatus,
    })
  }
  setScore = addScore => {
    this.setState({
      score : this.state.score + addScore
    })
  }
  restartGame = () => {
    this.setState({
      indexInWords : (this.state.indexInWords + 1) % (this.state.words.length),
      score : 0,
      letterStatus : this.generateLetterStatuses()
    })
  }

  render(){
    return (
      <div>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.words[this.state.indexInWords]}/>
        <Letters letterStatus={this.state.letterStatus} selectLetterFunc={this.selectLetter}
         solution={this.state.words[this.state.indexInWords].word} scoreFunc={this.setScore}/>
         {this.isSecret() ? <EndGame win={true}/> : this.state.score < 0 ? 
        <EndGame secret={this.state.words[this.state.indexInWords].word}/> : null}
        <button onClick={this.restartGame}>Restart Game</button>
      </div>
    )
  }
}

export default App;
