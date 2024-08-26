import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () =>{
    const { resId } = useParams();
    const restroInfo = useRestaurantMenu(resId);
    const [openCategory, setOpenCategory] = useState(null);

 

    if(restroInfo === null) return <Shimmer />
    const { name, cuisines, costForTwoMessage } = restroInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    
    
    const categories = restroInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    const handleToggle = (index) => {
        setOpenCategory(prevIndex => (prevIndex === index ? null : index));
       
    };
    
    
    
    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl mb-3" >{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {categories.map((category, index) => 
            <RestaurantCategory  data={category?.card?.card}
             key={category?.card?.card?.title} 
             showItems={index === openCategory}
             onToggle={() => handleToggle(index)}
             />)}
        </div>
                    
    );
};

export default RestaurantMenu;