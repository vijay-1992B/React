import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restroList from "../utils/mockData";



const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(restroList);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            setListOfRestaurant(listOfRestaurant.filter(
              res => res.info.avgRating>4.4
            ));
          }}
          >Top filter Restaurant</button>
        </div>
        <div className="restro-container">
          {
            listOfRestaurant.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
          }
        </div>
      </div>
    );
  }

  export default Body;