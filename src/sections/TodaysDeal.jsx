import React, { useState } from "react";
import TodaysDealProduct from '../components/TodaysDealProduct'
import FilterPanel from "../components/FilterPanel";
import Notification from "../components/Notification";

const TodaysDeal = () => {

     const [notification, setNotification] = useState(false)
    
    const handleNotification = () => {
        setNotification((prev) => !prev)
    }

    setTimeout(() => {
        setNotification(false)
    }, 2000)

    return(
        <div className="bg-white">
            <h1 className="m-5 font-bold text-4xl">Today's Deals</h1>

            <div className="flex">
                <FilterPanel/>
                <div className="right-section w-[80%] overflow-y-auto">
                        <TodaysDealProduct className={'grid mx-16 grid-cols-5 gap-7  cursor-pointer'}
                        toggleNotification={handleNotification}/>
                </div>
            </div>
            <div className="bg-white w-full flex flex-col">
                <div className="mt-8">
                    <hr className="border border-gray-200 w-full my-4" />
                </div>
                <div className="flex flex-col justify-center items-center p-5">
                
                    <div className="text-[2rem] font-bold">See personalised recommendations</div>
                    <div>
                        <button className="hover:bg-[#FFCE12] bg-[#ffd633] w-60 py-2 rounded-full">Sign In</button>
                    </div>
                    <div className="text-sm m-1">
                    New customer? <span className="text-blue-700 hover:text-blue-900 cursor-pointer underline">Start here.</span>
                    </div>
                </div>
                <div className="mb-8">
                    <hr className="border border-gray-200 w-full my-4" />
                </div>
            </div>
            <div className="transition">
                {notification && (
                    <Notification message={"Added to basket"}/>
                )}
            </div>
        </div>
    )
}

export default TodaysDeal