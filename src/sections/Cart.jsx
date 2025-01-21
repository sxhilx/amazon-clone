import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    console.log(cartItems)

    const handleRemoveFromCart = (product) => {
        dispatch(removeItem(product))
    }

    const subtotal = cartItems.reduce((acc, item) => {
        const amount = Number(item.amount.replace(/,/g, ''))
        return acc + amount;
    }, 0);

    return (
        <div className="flex bg-[#EAEDED] gap-6">
            <div className="flex my-4 ml-28 w-[80%] bg-white gap-6">
                <div className="w-full">
                    <h1 className="text-3xl font-medium mx-6 my-6">Shopping Basket</h1>
                    
                    <div className="cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item.title} className="cart-item-card flex justify-between items-start border-t p-4 mx-2">
                                    <div className="cart-item-info flex items-start">
                                        <img src={item.image} alt={item.title} className="w-36 h-36 object-cover mx-4 my-4"/>
                                        <div>
                                            <div className="mr-32">
                                                <h2 className="text-xl font-medium">{item.title}</h2>
                                            </div>
                                            <span className="text-xs text-blue-500 font-medium">In stock</span><br />
                                            <span className="text-xs font-normal">Eligible for FREE Shipping</span>
                                            <div 
                                            className=" bg-[#ffde59] hover:bg-[#FFCE12] mt-2 w-52 flex items-center justify-center rounded"
                                            onClick={() => handleRemoveFromCart(item)}
                                            >
                                                <button className="font-semibold p-1">Remove From Basket</button>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    {/* Display the total price for this item */}
                                    <div className="my-2 flex items-start">
                                        <span className="text-xs">R</span>
                                        <span className="text-xl font-medium">{item.amount}</span>
                                        <span className="text-xs">00</span>
                                    </div>

                                </div>
                            ))
                        ) : (
                            <div>
                                <hr className="w-full"/>
                                <p className="text-xl font-medium mx-6 my-6">Your cart is empty.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-white w-[20%] h-[10%] p-4 mr-28 my-4">
                    
                    <div className="leading-none mx-4">
                    <span className="text-xs text-teal-700 font-normal">
                        Your order qualifies for 
                        <span className="font-bold"> FREE Delivery. </span>
                    </span><br />
                    <span className="text-xs">
                        Choose 
                        <span className="text-teal-700"> FREE Delivery </span> option at checkout.
                    </span>
                    </div>
                    <div className="flex justify-between mx-4 my-4 items-start">
                        <span className="text-lg font-medium">Subtotal: </span>
                        <div className="flex items-start">
                            <span className="text-xs">R</span>
                            <span className="text-xl font-medium">
                                {subtotal}
                            </span>
                            <span className="text-xs">00</span>
                        </div>                        
                        
                    </div>
                    <div 
                    className=" bg-[#ffde59] hover:bg-[#FFCE12] mt-2 w-full rounded-full flex items-center justify-center"
                    >
                        <button className="font-medium text-sm p-1">Proceed to checkout</button>
                    </div>
                </div>
        </div>
    );
};

export default Cart;
