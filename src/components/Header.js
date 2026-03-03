// import logo from "url:./SwaadpointLogo.png";
import { Link } from "react-router-dom";
import logo from "url:../utils/images/SwaadpointLogo.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/context/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    const CartItem = useSelector((store)=>store.cart.items)
    console.log(CartItem.length);
    
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"} className="cart">🛒{CartItem.length}</Link>
        <Link to={"/about"} >👤 {loggedInUser}</Link>
      </nav>
    </header>
  );
};

export default Header;