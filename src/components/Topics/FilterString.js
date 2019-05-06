import React, {Component} from 'react'

export default class FilterString extends Component {
    constructor(props){
        super(props)
        this.state = {
            unFilteredArray: [
                'red',
                'blue',
                'yellow'
            ],
            userInput: '',
            filteredArray: []
        }

        }
    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            userInput: value
        })
    }
    handleClick = () => {

        let filteredArray = this.state.unFilteredArray.filter(word => {
            return word.includes(this.state.userInput)
        })
        this.setState({
            filteredArray
        })


        
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input 
                    className='inputLine'
                    onChange={this.handleChange}
                />
                <button className='confirmationButton' onClick={this.handleClick}>Submit</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}