import logo from '../logo.svg';

const NavBar = () => {
  return (
    <div className="context__navbar">
      <header>
        <nav className="navbar__container">
          <div className="navbar__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar__links">
            <ul>
              <li>
                <a className="links__Navbar" href="">
                  home
                </a>
              </li>
              <li>
                <a className="links__Navbar" href="">
                  Profile
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar__login">
            <a className="links__Navbar" href="">
              login
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
