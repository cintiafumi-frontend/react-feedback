import axios from 'axios'
import React, { Component } from 'react'

const Http = axios.create({
  baseURL: 'https://api.github.com/'
})

const ReposList = props => {
  return(
  <ul>
      {props.users.map(user => (
          <div key={ user.id }>
              <li> {user.fullname} </li>
              <li> <img src={ user.avatar_url } /> </li>
              <li> {user.login} </li>
          </div>
      ))}
  </ul>)
}
const fetchUser = username => Http.get(`users/${username}`)
const fetchSearch = search => Http.get(`search/users?q=${search}+in:login,email,fullname`)



class ReposContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            users: [],
            user: {},
            username: '',
            avatar_url: ''
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetchUser(this.state.username).then(res => this.setState({user: res.data}))
        fetchSearch(this.state.username).then(res => this.setState({users: res.data.items}))
    }

    render() {
        return (
            <div className="border">
                <h1> Repositórios </h1>
                <form action='#' onSubmit={this.handleSubmit}>
                    <input
                        className='input'
                        onChange={this.handleChange}
                        type='search' 
                        placeholder='Informe usuário e tecle ENTER'/>
                </form>
                <ReposList repos={this.state.repos} user={this.state.user} users={this.state.users}/>
            </div>
        )
    }
}

export default ReposContainer