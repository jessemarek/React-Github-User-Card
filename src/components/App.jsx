import React, { Component } from 'react'
import axios from 'axios'
import GitHubCard from './GitHubCard'

import '../styles/styles.less'
import Axios from 'axios'

class App extends Component {
    constructor() {
        super()

        this.state = {
            user: {},
            followers: []
        }
    }

    componentDidMount() {
        //Get my user info from API
        axios
            .get(`https://api.github.com/users/jessemarek`)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log('ERROR: ', err))

        //Get all of my followers and set the data into state
        axios.get(`https://api.github.com/users/jessemarek/followers`)
            .then(res => {
                res.data.forEach(item => {
                    //request data for each follower
                    axios.get(`${item.url}`)
                        .then(res => {
                            //Add the follower data to state
                            this.setState({
                                followers: [...this.state.followers, res.data]
                            })
                            
                        })
                        .catch(err => console.log('ERROR:', err))
                })
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }

    render() {
        return (
            <div className="container">
                <h2>My GitHub Data</h2>
                <GitHubCard data={this.state.user} />
                <h2>My GitHub Followers</h2>
                {
                    this.state.followers.map(f => <GitHubCard key={f.id} data={f} />)
                }
            </div>
        )
    }
}

export default App