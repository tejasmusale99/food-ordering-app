// import logo from "url:./SwaadpointLogo.png";
import { Link } from "react-router-dom";
import logo from "url:../utils/images/SwaadpointLogo.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"} className="cart">🛒 Cart</Link>
      </nav>
    </header>
  );
};

export default Header;