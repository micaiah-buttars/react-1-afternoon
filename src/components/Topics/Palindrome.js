import React, {Component} from 'react'

export default class Palindrome extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: '',
            palindrome: ''
        }

        }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            userInput: value
        })
    }
    handleClick = () => {
        const word = this.state.userInput
        const reversed = word.split('').reverse().join('')

        if(word === reversed){
            this.setState({
                palindrome: 'true'
            })
        } else {
            this.setState({
                palindrome: 'false'
            })
        }
                    
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input 
                    className='inputLine'
                    onChange={this.handleChange}
                />
                <button className='confirmationButton' onClick={this.handleClick}>Submit</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}