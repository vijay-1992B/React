import { MdKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";


const RestaurantCategory = ({  data, showItems, onToggle}) => {
    // console.log(data);
    return (
        <div className=" w-7/12 mx-auto  p-4">
            <div className="flex justify-between cursor-pointer " onClick={onToggle}>
             <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
             <span>{<MdKeyboardArrowDown className="text-slate-600 text-3xl " />}</span>
           </div>   
             {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
}

export default RestaurantCategory;