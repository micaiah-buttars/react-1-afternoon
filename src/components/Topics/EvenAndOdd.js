import React, {Component} from 'react'

export default class EvenAndOdd extends Component {
    constructor(props){
        super(props)

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''

        }
        
    }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            userInput: value
        })
    }
    handleClick = () => {
        let nums = this.state.userInput.split(',')
        let evens = nums.filter(num => {
            return num % 2 === 0
        })
        let odds = nums.filter(num => {
            return num % 2 !== 0
        })
        this.setState({
            evenArray: evens.join(),
            oddArray: odds.join()

        })

        
    }

    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input
                    className='inputLine'
                    onChange={this.handleChange}
                    />
                <button
                    className='confirmationButton'
                    onClick={this.handleClick}
                    >Submit</button>
                <span className='resultsBox'>Evens: {this.state.evenArray}</span>
                <span className='resultsBox'>Odds: {this.state.oddArray}</span>
            </div>
        )
    }
}