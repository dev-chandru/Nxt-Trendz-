// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-bar">
      <div className="nav-bar-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-nav-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
        <ul className="menus-container">
          <li className="menu-names">
            <Link to="/" className="link-item">
              Home
            </Link>
          </li>
          <li className="menu-names">
            <Link to="/product" className="link-item">
              Products
            </Link>
          </li>
          <li className="menu-names">
            <Link to="/cart" className="link-item">
              Cart
            </Link>
          </li>
          <li className="button-item">
            <button type="button" className="log-out-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="nav-bar-menu-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-home"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-home"
        />
      </div>
    </nav>
  </>
)

export default Header
