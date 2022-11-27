import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="options">
        <Link to="/">
          <p className="each-options">Home</p>
        </Link>

        <Link to="/jobs">
          <p className="each-options">jobs</p>
        </Link>
      </div>
      <div>
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
