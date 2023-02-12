import {Component} from 'react'
// import cookies from 'js-cookie'

import './index.css'

class LoginStudent extends Component {
  state = {username: '', password: '', msg: '', error: false}

  onSubmitSuccess = () => {
    const {history} = this.props

    history.push('/studenthome')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const user = {username, password}
    const data = localStorage.getItem('student')
    const parsedData = JSON.parse(data)

    const isEqual =
      user.username === parsedData.username &&
      user.password === parsedData.password

    console.log(isEqual)
    if (isEqual) {
      this.onSubmitSuccess()

      this.setState({error: true, msg: 'Success'})
    } else {
      this.setState({error: true, msg: 'user Does not Exists'})
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
          <form onSubmit={this.submitForm} className="submit-form">
            <h1> Student Login </h1>
            <div>{this.renderUserField()}</div>
            <div>{this.renderPasswordField()}</div>
            <button className="master-button-signUp" type="submit">
              LogIn
            </button>

            {error && <p>{msg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginStudent
