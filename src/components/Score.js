import React, {Component} from 'react'

class Score extends Component{
    render(){
        let cn
        if (this.props.score >= 80){
            cn = "high-score"
        }else if (this.props.score < 80 && this.props.score > 50){
            cn = "medium-score"
        }else{
            cn = "low-score"
        }
        return(
        <div className={cn}>{this.props.score}</div>
        )
    }
}

export default Score