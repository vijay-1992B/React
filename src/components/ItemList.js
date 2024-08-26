// import { IoPricetag } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action 
        dispatch(addItem(item));
    }
    
    return (
        <div>
            {items.map((item) => (
                <div className=" text-left border-gray-200 border-b-2 py-9 h-56 flex justify-between" 
                 key={item.card.info.id}>
                    <div className="w-8/12 h-36">
                     <p className="font-bold text-gray-700 text-xl">{item.card.info.name}</p>
                     <span className="text-lg font-bold">
                         ₹{item.card.info.price ? item.card.info.price / 100 :item.card.info.defaultPrice / 100 } </span>
                     {item.card.info.offerTags && (
                        <span className="text-xs text-slate-500 font-bold ">
                        {item.card.info.offerTags[0].title} {" "}
                        {item.card.info.offerTags[0].subTitle}
                        </span>)}
                        <p className="mt-6 font-semibold text-gray-500 truncate-2-lines">
                            {item.card.info.description}
                        </p>
                        </div>
                    <div className="w-[20%] h-36 relative">
                    <img  src={CDN_URL +item.card.info.imageId}
                     alt={item.card.info.name} className="object-cover h-full min-w-full min-h-full rounded-lg"/>
                    <button 
                     className="text-xl font-bold absolute left-5 h-10 top-28 text-green-600 w-28 bg-white 
                     border-b-2  border-l-2  border-r-2 border-gray-200 
                     rounded-lg cursor-pointer hover:bg-gray-200"
                      onClick={() => handleAddItem(item)}
                      >
                        ADD
                     </button>
                    </div>
                      
                </div>))}
        </div>
    );

}

export default ItemList;