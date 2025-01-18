import React from "react";
import { electronicProducts } from "../constant/Index";

const ElectronicProducts = ({className}) => {
    return(
        <div className={`${className}`}>
            {electronicProducts.map((product) => (
                <div key={product.title} className="flex flex-col my-4">
                    <div className="flex justify-center items-center border border-gray rounded bg-white">
                        <img src={product.image} alt="Image" className="w-48 h-60 m-5" />
                    </div>
                    <div className="my-2 flex items-start">
                        <span className="text-xs">R</span>
                        <span className="text-xl font-medium">{product.amount}</span>
                        <span className="text-xs">00</span>
                    </div>
                    <div className="flex justify-start">
                    <div className=" bg-[#ffde59] hover:bg-[#FFCE12] w-32 flex items-center justify-center rounded-lg">
                        <button className="font-semibold p-2">Add to Basket</button>
                    </div>
                    </div>
                    <div className="truncate text-[1rem] font-medium mt-1">
                        {product.title}
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default ElectronicProducts