import React, { Component } from 'react'
import axios from 'axios'
import GitHubCard from './GitHubCard'

import '../styles/styles.less'
import Axios from 'axios'

class App extends Component {
    constructor(){
        super()

        this.state = {
            card: {}
        }
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/jessemarek`)
            .then(res => {
                this.setState({
                    card: res.data
                })
            })
            .catch(err => console.log('ERROR: ', err))
    }

    render() {
        return (
            <div>
                <GitHubCard data={this.state.card} />    
            </div>
        )
    }
}

export default App