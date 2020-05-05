import React, { Component } from 'react'

class GitHubCard extends Component {

    render() {
        return (
            <div className="card">
                <img src="" />
                <div className="card-info">
                    <h3 className="name">Name</h3>
                    <p className="username">username</p>
                    <p>Location: </p>
                    <p>Profile:<a href=""></a></p>
                    <p>Followers: </p>
                    <p>Following: </p>
                    <p>Bio: </p>
                </div>
            </div >
        )
    }
}

export default GitHubCard