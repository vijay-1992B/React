import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  // console.log(props)

  const { loggedInUser} = useContext(UserContext);
 
    const{
      cloudinaryImageId, 
      aggregatedDiscountInfoV3, 
      name, 
      avgRating, 
      sla, 
      cuisines,
      areaName
    } = props?.resData?.info;
    return (
      
      <div className="w-60 transform transition duration-150 hover:scale-95 static ">
         <div className="relative rounded-2xl h-30 w-full">
           <img className="rounded-2xl h-40 w-full object-cover" src={CDN_URL + cloudinaryImageId} alt={name} />
           <div className="gradient-bottom-65"></div>
           {aggregatedDiscountInfoV3?.header && (
             <p className="absolute bottom-3 left-3 text-white text-xl font-extrabold z-10">
              {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
             </p>
           )}
          </div>
    
  
          <div className="pl-3 transform">
            <p className="font-bold mt-3 leading-5 text-lg whitespace-nowrap overflow-hidden text-ellipsis">{name}</p>
            <p className="font-semibold">⭐ {avgRating + " \u2022 " + sla.slaString}</p>
            <p className="text-slate-500 text-xl leading-7 whitespace-nowrap overflow-hidden text-ellipsis">{cuisines.join(", ")}</p>
            <p className="text-slate-500 text-lg">{areaName}</p>
            {/* <p className="text-slate-500 text-lg">{loggedInUser}</p> */}
           </div>
   
      </div>
  

    );

}

  

  export default RestaurantCard;

