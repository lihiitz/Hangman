import React, {Component} from 'react'

class EndGame extends Component{

    render(){
        return(
        <div>{this.props.win ? "Congratulations" : "Game Over!"   + "the secret was: " + this.props.secret}</div>
        )
    }
}

export default EndGame