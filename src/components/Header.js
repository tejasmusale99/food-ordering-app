// import logo from "url:./SwaadpointLogo.png";
import logo from "url:../utils/images/SwaadpointLogo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#" className="cart">
          🛒 Cart
        </a>
      </nav>
    </header>
  );
};

export default Header;