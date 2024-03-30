
import { Link } from 'react-router-dom';
import LYNK_LOGO from '../../assets/lynk.svg';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="container">
      <div className='logo'>
        <img src={LYNK_LOGO} alt="logo" />
      </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> <Link to="/about">About </Link></li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
