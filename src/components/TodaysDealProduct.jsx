import React from "react";
import { TodaysDealProps } from "../constant/Index";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const TodaysDealProduct = ({className, toggleNotification}) => {
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addItem(product))
    }
    return(
        <div className={`${className}`}>
            {TodaysDealProps.map((TodaysDealProp) => (
                <div key={TodaysDealProp.title} className="flex flex-col my-4">
                    <div className="flex justify-center items-center border border-gray rounded bg-white">
                        <img src={TodaysDealProp.image} alt="Image" className="w-48 h-52 m-5" />
                    </div>
                    <div className="mt-3">
                        <span className="bg-[#CC0C39] py-1.5 px-3 rounded text-white font-medium">{TodaysDealProp.offPercent}% off</span>
                        <span className="mx-2 text-[#CC0C39] font-medium">Limited time deal</span>
                    </div>
                    <div className="my-2 flex items-start">
                        <span className="text-xs">R</span>
                        <span className="text-xl font-medium">{TodaysDealProp.offAmount}</span>
                        <span className="text-xs">00</span>
                        <span className="mx-2 text-slate-500">
                            List: 
                            <span className="line-through">R {TodaysDealProp.amount}</span>
                        </span> 
                    </div>
                    <div className="flex justify-start">
                    <div className=" bg-[#ffde59] hover:bg-[#FFCE12] w-32 flex items-center justify-center rounded-lg"
                    onClick={() => {
                        handleAddToCart(TodaysDealProp)
                        toggleNotification();
                    }
                    }>
                        <button className="font-semibold p-2">Add to Basket</button>
                    </div>
                    </div>
                    <div className="truncate text-[1rem] font-medium mt-1">
                        {TodaysDealProp.title}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default TodaysDealProduct