import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const{
      cloudinaryImageId, 
      aggregatedDiscountInfoV3, 
      name, 
      avgRating, 
      sla, 
      cuisines
    } = props?.resData?.info;
    return (
      <div className="restro-card">
        <div className="restro-logo">
          <img className="img"src={CDN_URL + cloudinaryImageId} />
          <h2>{aggregatedDiscountInfoV3.header+" "+aggregatedDiscountInfoV3.subHeader}</h2>
          <div className="content-box">
          <h3>{name}</h3>
          <p>Rating {avgRating+" . "+sla.slaString}</p>
          <p className="lower-content">{cuisines.join(", ")}</p>
          </div>
          </div>
      </div>
    );
  }

  export default RestaurantCard;

