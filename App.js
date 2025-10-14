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

const RestaurentCard = () => {
  return (
    <div
      className="restaurant-card"
      // style={{ border: "2px", height: "200px", width: "200px" }}
    >
      <div className="card-image">
        <img
          src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ="
          alt="The Spice Hub"
        />
        <span className="discount"> 20% OFF </span>
      </div>
      <div className="card-content">
        <h3 className="restaurant-name">Maratha Darbar</h3>
        <p className="cuisine">chinease, indian</p>
        <div className="card-footer">
          <span className="rating">⭐ 4.5</span>
          <span className="delivery-time">20 mins</span>
          <span className="cost">350 For 2 </span>
        </div>
      </div>
    </div>
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
        <RestaurentCard />
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
