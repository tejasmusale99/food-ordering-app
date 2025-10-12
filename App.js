import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from 'url:./SwaadpointLogo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
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

const App = () => {
    return(
        <div className="appLayout">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)