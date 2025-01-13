import React from "react";
import { TodaysDealProps } from "../constant/Index";

const TodaysDealCrad = () => {
    return(
        <div className="w-full bg-white overflow-hidden box-border">
            <div className="p-7">
                <h1 className="text-[1.7rem] font-bold">Today's Deal</h1>
                <div className="grid grid-flow-col auto-cols-[19rem] gap-4 overflow-x-auto p-2 cursor-pointer">
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
            </div>
        </div>
    )
}

export default TodaysDealCrad