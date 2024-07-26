import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [search, setSearch] = useState();

  const handleClick = () => {
    setSearch("");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          Logo
        </Link>
        <div className="menu-icon">
          <MenuIcon />
        </div>

        <ul className="nav-menu">
          <li className="nav-item dropdown">
            <a href="/" className="nav-link">
              Kids
            </a>
            <div className="dropdown-content">
              <a href="/">Product 1</a>
              <a href="/">Product 2</a>
              <a href="/">Product 3</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link">
              Women
            </a>
            <div className="dropdown-content">
              <a href="/">Product 1</a>
              <a href="/">Product 2</a>
              <a href="/">Product 3</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="/" className="nav-link">
              Men
            </a>
            <div className="dropdown-content">
              <a href="/">Product 1</a>
              <a href="/">Product 2</a>
              <a href="/">Product 3</a>
            </div>
          </li>

          <div className="input-container">
            <SearchIcon className="icon" />
            <input
              value={search}
              type="text"
              className="input-field"
              placeholder="Search Product..."
              onChange={(e) => setSearch(e.target.value)}
            />
            {search ? <CloseIcon className="icon" onClick={handleClick} /> : ""}
          </div>

          <li className="nav-item dropdown">
            <Link to="/register" className="nav-link">
              <PersonIcon />
              <small>Profile</small>
            </Link>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <FavoriteBorderIcon />
              <small>Wishlist</small>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <ProductionQuantityLimitsIcon />
              <p>0</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
