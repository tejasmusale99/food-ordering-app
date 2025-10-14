import React from "react";
import ReactDOM from "react-dom/client";
import logo from "url:./SwaadpointLogo.png";

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

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines..."
        />
        <button>Search</button>
      </div>
      <div className="restaurants-container">
        {/* {Restaurent card} */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
