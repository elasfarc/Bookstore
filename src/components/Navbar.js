import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <div className="row flex cross-center">
        <div className="most-left flex cross-center gap-10">
          <div className="logo">BOOKSTORE</div>
          <ul className="flex gap-10">
            <Link to="/">
              <li>BOOKS</li>
            </Link>
            <Link to="/categories">
              <li>CATEGORIES</li>
            </Link>
          </ul>
        </div>
        <div className="most-right">Account</div>
      </div>
    </div>
  </div>
);
export default Navbar;
