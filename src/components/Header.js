import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () =>{
  const [navBtn, setNavBtn] = useState("Log in")
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button onClick={()=>{
              navBtn ==="Log in" ? setNavBtn("Log out") : setNavBtn("Log in");
            }}>{navBtn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;