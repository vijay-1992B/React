import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";




const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
 
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

    
    return  restroList.length === 0 ? (<Shimmer />) : 
    (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input className="search-box" value={searchText} onChange={(e) =>{
              setSearchText(e.target.value);
            }} />
            <button className="search-btn" onClick={() =>{
             const filteredList = restroList.filter((res) =>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
             });
            
             setFilteredRestro(filteredList);
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            const filtered = restroList.filter((res) => {
              return res.info.avgRating>4.5;
            });
            setFilteredRestro(filtered);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="restro-container">
          {
            filteredRestro.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
          }
        </div>
      </div>
    );
  }

  export default Body;