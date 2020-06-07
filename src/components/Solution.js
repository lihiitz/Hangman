import React, {Component} from 'react'
import Letter from './Letter'

class Solution extends Component{
    render(){
        const wordArr = [...this.props.solution.word]
        return (
            <div>
                {wordArr.map((l, i) => this.props.letterStatus[l] ? 
                <Letter letter={l} key={i}/> : <Letter letter={"_ "} key={i}/>)}
                {/* {wordArr.map((l,i) => <Letter key={i} score={this.props.score} 
                letter={this.props.letterStatus[l] ? {l} : "_ "}/>)} */}
                <div>{this.props.solution.hint}</div>
            </div>
            
        )
    }
}

export default Solution