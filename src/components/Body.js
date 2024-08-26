import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";




const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser, setUserName } = useContext(UserContext);
  
  useEffect(() =>{
    fetchData();
  }, [])

  const fetchData = async () =>{
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestroList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(onlineStatus === false) return <h1>No internet connection ❌</h1>

    
    return  restroList.length === 0 ? (<Shimmer />) : 
    (
      <div className="">
        <div className="flex my-6">
          <div className="mx-7">
            <input className="border border-solid border-black ml-24" value={searchText} onChange={(e) =>{
              setSearchText(e.target.value);
            }} />
            <button className="bg-amber-500 text-white px-4 py-1 mx-2 text-xl rounded-lg " 
             onClick={() =>{
             const filteredList = restroList.filter((res) =>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
             });
            
             setFilteredRestro(filteredList);
            }}>Search</button>
          </div>
          <button className="px-4 py-2 bg-gray-500 rounded-lg text-white" onClick={() => {
            const filtered = restroList.filter((res) => {
              return res.info.avgRating>4.5;
            });
            setFilteredRestro(filtered);
          }}>Top Rated Restaurant</button>
          <label className="ml-5">user name</label>
          <input className="ml-3  border-2 border-solid border-black"
           onChange={(e) => setUserName(e.target.value) } value={loggedInUser}
            />
        </div>
        <div className="flex flex-wrap gap-8 px-[144px] mt-20">
          {
            filteredRestro.map((restaurant)=> (
            <Link key={restaurant.info.id} 
             to={'/restaurants/' + restaurant.info.id} >
             <RestaurantCard  resData={restaurant} /> 
            </Link>)
          )}
        </div>
      </div>
    );
  }

  export default Body;