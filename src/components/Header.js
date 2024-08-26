import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
  const [navBtn, setNavBtn] = useState("Log in");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  

  
  
    return (
      <div className="flex justify-between border-2 py-3  my-3" >
        <div className="mx-7">
          <img className="w-32" src={LOGO_URL} />
        </div>
        <div className="mx-12">
          <ul className="flex my-11 gap-7 text-2xl">
            <li>
              {onlineStatus ? "Online: 🟢" : "Offline: 🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="font-bold text-2xl">
             <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
            </li>
            <button onClick={()=>{
              navBtn ==="Log in" ? setNavBtn("Log out") : setNavBtn("Log in");
            }}>{navBtn}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;