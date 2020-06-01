import React, { Component } from 'react'
import axios from 'axios'

import GitHubCard from './GitHubCard'
import SearchForm from './SearchForm'

import '../styles/styles.css'

//Stop the annoying CORS issue with accessing the API
const stopCORS = 'https://cors-anywhere.herokuapp.com/'

class App extends Component {
    constructor() {
        super()

        this.state = {
            username: 'jessemarek',
            user: {},
            followers: []
        }
    }

    componentDidMount() {
        //Get my user info from API
        axios
            .get(`${stopCORS}https://api.github.com/users/${this.state.username}`)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err))

        //Get all of my followers and set the data into state
        axios.get(`${stopCORS}https://api.github.com/users/${this.state.username}/followers`)
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
                        .catch(err => console.log(err))
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.username !== prevState.username) {
            //Reset the followers array
            this.setState({
                followers: []
            })

            //Get new user info from API
            axios
                .get(`${stopCORS}https://api.github.com/users/${this.state.username}`)
                .then(res => {
                    this.setState({
                        user: res.data
                    })
                })
                .catch(err => console.log(err))

            //Get all of new user's followers and set the data into state
            axios.get(`${stopCORS}https://api.github.com/users/${this.state.username}/followers`)
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
                            .catch(err => console.log(err))
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    updateUser = user => {
        this.setState({
            username: user
        })
    }

    render() {
        return (
            <div className="container">
                <SearchForm updateUser={this.updateUser} />
                <h2>User's GitHub Data</h2>
                <GitHubCard data={this.state.user} />
                <h2>User's GitHub Followers</h2>
                {
                    this.state.followers.map(f => <GitHubCard key={f.id} data={f} />)
                }
            </div>
        )
    }
}

export default App