import React, { Component } from 'react'

class Letter extends Component {
    handleClick = () => {
        if (this.props.selectLetterFunc) {
            this.selectLetter()
        }
        if (this.props.scoreFunc) {
            this.setScore()
        }
    }
    selectLetter = () => {
        this.props.selectLetterFunc(this.props.letter)
    }
    setScore = () => {
        let solutionArr = [...this.props.solution]
        if (solutionArr.includes(this.props.letter)){
            this.props.scoreFunc(5)
        }else{
            this.props.scoreFunc(-1)
        }
    }
    render() {
        return (
            <span className={this.props.className}
            onClick={this.handleClick}>{this.props.letter} </span>
        )
    }
}

export default Letter