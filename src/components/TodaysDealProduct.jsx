import React from "react";
import { TodaysDealProps } from "../constant/Index";

const TodaysDealProduct = ({className}) => {
    return(
        <div className={`${className}`}>
            {TodaysDealProps.map((TodaysDealProp) => (
                <div key={TodaysDealProp.title} className="flex flex-col my-4">
                    <div className="flex justify-center items-center border border-gray rounded bg-white">
                        <img src={TodaysDealProp.image} alt="Image" className="w-60 h-58 m-5" />
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
                            <span className="line-through">R {TodaysDealProp.actualAmount}</span>
                        </span>
                    </div>
                    <div className="truncate text-[1rem] font-medium">
                        {TodaysDealProp.title}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodaysDealProduct