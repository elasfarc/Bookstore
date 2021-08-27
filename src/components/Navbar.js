import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

const Navbar = () => (
  <header className="header">
    <div className="flex cross-center container gap-2">
      <a href="" className="logo">
        Bookstore CMS
      </a>
      <nav className="nav flex space-between cross-center container">
        <ul className="nav--list flex gap-2">
          <li className="nav--list">
            <Link to="/" className="nav--link">
              books
            </Link>
          </li>
          <li className="nav--list">
            <Link to="/categories" className="nav--link">
              categories
            </Link>
          </li>
        </ul>
        <ul className="nav--list">
          <li
            style={{ cursor: 'pointer' }}
            className="nav--list nav--person-icon"
          >
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
export default Navbar;
