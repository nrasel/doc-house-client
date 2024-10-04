import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/home">About </Link>
      </li>
      <li>
        <Link to="/home">Appoinment</Link>
      </li>
      <li>
        <Link to="/home">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar flex justify-between bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={logo} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
