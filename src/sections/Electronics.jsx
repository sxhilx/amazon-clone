import React, { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import ElectronicProducts from "../components/ElectronicProducts";
import { banner, banner2 } from "../assets/electrnoicsImages";
import Notification from "../components/Notification";

const Electronics = () => {

    const [notification, setNotification] = useState(false)

    const handleNotification = () => {
        setNotification((prev) => !prev)
    }

    setTimeout(() => {
        setNotification(false)
    }, 3000)

    return(
        <div className="">
            <div className="flex mb-2">
                <FilterPanel/>
                <div className="right-section w-[85%] overflow-y-auto">
                <h1 className="font-semibold mx-4 my-2 text-3xl">Electronics</h1>
                <div className="my-2 mx-4">
                    <img src={banner} alt="banner" />
                </div>
                <div className="mx-4">
                    <img src={banner2} alt="banner2" />
                </div>

                <div className="mx-4 my-8 text-3xl font-semibold">
                    Recommended for you
                </div>
                <ElectronicProducts className={'grid grid-cols-3 mx-28 gap-7  cursor-pointer'}
                toggleNotification={handleNotification}
                />
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

export default Electronics