import React from "react";
import { TodaysDealProps } from "../constant/Index";
import TodaysDealProduct from "./TodaysDealProduct";

const TodaysDealCrad = () => {
    return(
        <div className="w-full bg-white overflow-hidden box-border">
            <div className="p-7">
                <h1 className="text-[1.7rem] font-bold">Today's Deal</h1>
                <div>
                    <TodaysDealProduct className={`grid grid-flow-col auto-cols-[19rem] overflow-x-auto p-2 cursor-pointer gap-4`}/>
                </div>
            </div>
        </div>
    )
}

export default TodaysDealCrad