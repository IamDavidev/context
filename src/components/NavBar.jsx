import logo from '../images/react-router.svg';
import { NavLink,Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="context__navbar">
      <header>
        <nav className="navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="logo" className='nav__logo'/>
          </div>
          <div className="navbar__links">
            <ul>
              <li>
                <Link className="links__Navbar" to='/'>
                  home
                </Link>
              </li>
              <li>
                <Link className="links__Navbar" to='/profile'   >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__login">
            <Link className="links__Navbar" to="/login" >
              login
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
