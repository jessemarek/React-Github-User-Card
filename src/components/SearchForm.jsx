import React, { Component } from 'react'

class SearchForm extends Component {
    constructor() {
        super()

        this.state = {
            formValue: ''
        }
    }

    inputHandler = e =>{
        this.setState({
            formValue: e.target.value
        })
    }

    submitHandler = e =>{
        e.preventDefault()
        this.props.updateUser(this.state.formValue)

        this.setState({
            formValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    onChange={this.inputHandler}
                    value={this.state.formValue}
                />
                <button>Search</button>
            </form>
        )
    }
}

export default SearchForm