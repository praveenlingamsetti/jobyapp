import {Component} from 'react'
import cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

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
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.jwt_token !== undefined) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
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
    return (
      <div className="bg-container">
        <form onSubmit={this.submitForm} className="submit-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="logo"
          />
          <div>{this.renderUserField()}</div>
          <div>{this.renderPasswordField()}</div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
export default LoginForm
