// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    this.setState({
      showSubmitError: true,
      errorMessage,
    })
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
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onRenderingUserNameInput = () => {
    const {userInput} = this.state
    return (
      <>
        <label htmlFor="userName" className="label">
          USERNAME
        </label>
        <input
          id="userName"
          type="text"
          placeholder="Username"
          className="user-name-input"
          onChange={this.onChangeUserName}
          value={userInput}
        />
      </>
    )
  }

  onRenderingPasswordInput = () => {
    const {passwordInput} = this.state
    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="user-name-input"
          onChange={this.onChangePassword}
          value={passwordInput}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    return (
      <div className="login-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-mobile-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-image"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-desktop-logo"
          />
          <div className="username-container">
            {this.onRenderingUserNameInput()}
          </div>
          <div className="password-container">
            {this.onRenderingPasswordInput()}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
