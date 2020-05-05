import React, { Component } from 'react'

class GitHubCard extends Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.data.avatar_url} alt="GitHub user avatar"/>
                <div className="card-info">
                    <h3 className="name">{this.props.data.name}</h3>
                    <p className="username">{this.props.data.login}</p>
                    <p>Location: {this.props.data.location}</p>
                    <p>Profile:<a href={this.props.data.html_url}>{this.props.data.html_url}</a></p>
                    <p>Followers: {this.props.data.followers}</p>
                    <p>Following: {this.props.data.following}</p>
                    <p>Bio: {this.props.data.bio}</p>
                </div>
            </div>
        )
    }
}

export default GitHubCard