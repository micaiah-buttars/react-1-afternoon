import React, {Component} from 'react'

export default class Sum extends Component {
    constructor(props){
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

        }
    handleChange1 = (e) => {
        const {value} = e.target
        this.setState({
            number1: value
        })
    }
    handleChange2 = (e) => {
        const {value} = e.target
        this.setState({
            number2: value
        })
    }
    handleClick = () => {
        const sum = (+this.state.number1 + +this.state.number2)
        this.setState({
            sum
        })
                    
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Sum</h4>
                <input 
                    className='inputLine'
                    onChange={this.handleChange1}
                />
                <input 
                    className='inputLine'
                    onChange={this.handleChange2}
                />
                <button className='confirmationButton' onClick={this.handleClick}>Submit</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}