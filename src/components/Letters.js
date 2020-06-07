import React, {Component} from 'react'
import Letter from './Letter'

class Letters extends Component{
    render(){
        let letters = this.props.letterStatus
        return(
            <div>
                <div>Available Letters:</div>
                {Object.keys(letters).map((l,i) => 
                <Letter letter={l} key={i} className={letters[l] ? 'hide' : 'display'} 
                selectLetterFunc={this.props.selectLetterFunc} solution={this.props.solution} 
                scoreFunc={this.props.scoreFunc}/>)}
            </div>
            )
    }
}

export default Letters