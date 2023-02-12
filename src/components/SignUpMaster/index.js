import {Component} from 'react'

import {Link} from 'react-router-dom'
import cookies from 'js-cookie'
import './index.css'

class SignUpMaster extends Component {
  state = {username: '', password: '', msg: '', error: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    history.push('/')
    cookies.set('jwtToken', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username.length !== 0 && password.length !== 0) {
      const userDetails = {username, password}
      this.setState({msg: 'SignUp Success', error: true})

      localStorage.setItem('master', JSON.stringify(userDetails))
    } else {
      this.setState({msg: 'InValid Inputs', error: true})
    }
    this.setState({username: '', password: ''})
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserField = () => {
    const {username} = this.state
    return (
      <>
        <label className="" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input"
          placeholder="username"
          value={username}
          onChange={this.onchangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="text"
          id="password"
          placeholder="password"
          className="password-input"
          value={password}
          onChange={this.onchangePassword}
        />
      </>
    )
  }

  render() {
    const {error, msg} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="master-signUp">Master</h1>

          <form onSubmit={this.submitForm} className="submit-form">
            <h1> SignUp</h1>
            <div>{this.renderUserField()}</div>
            <div>{this.renderPasswordField()}</div>
            <button className="master-button-signUp" type="submit">
              Sign Up
            </button>
            <br />
            <Link to="loginmaster">
              <button className="master-button-signUp" type="button">
                Login
              </button>
            </Link>
            {error && <p>{msg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default SignUpMaster
