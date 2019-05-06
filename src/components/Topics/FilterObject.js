import React, {Component} from 'react'

export default class FilterObject extends Component {
    constructor(props){
        super(props)
        this.state = {
            unFilteredArray: [
                {color: 'red'},
                {color: 'blue'},
                {color: 'yellow'}
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
        const property = this.state.userInput
        const unFilteredArray = this.state.unFilteredArray

        let filteredArray = unFilteredArray.filter(obj => {
            return obj.hasOwnProperty(property)
        })
        this.setState({
            filteredArray
        })


        
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input 
                    className='inputLine'
                    onChange={this.handleChange}
                />
                <button className='confirmationButton' onClick={this.handleClick}>Submit</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}