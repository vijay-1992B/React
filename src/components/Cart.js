import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const hanldeClearCart = () => {
        dispatch(clearCart());
    }
  

    return (
        <div className="text-center mt-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="m-4 p-2 rounded-lg bg-black text-white"
             onClick={hanldeClearCart}>
                Clear Cart
            </button>
            {cartItems.length ===0 && <h1 className="text-lg font-bold ">Your Card is empty. Add items to cart</h1>}
            <div className=" w-7/12 mx-auto  p-4">
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
}

export default Cart;