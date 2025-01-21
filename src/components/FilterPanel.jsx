import React, {useState} from "react";

const FilterPanel = () => {
    const [seeMore, setSeeMore] = useState(false)

    const toggleSeeMore = () => {
        setSeeMore(!seeMore)
    }
    return(
        <div className="left-section overflow-y-auto w-[15%] flex flex-col left-0 border-r "> 
            <div className="mx-5">
                <h1 className="font-semibold my-2 text-lg">Department</h1>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">All</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Arts & Craft</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Baby Products </span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Beauty</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Books</span>
                </div>

                {seeMore && (
                    <div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">DIY & Tools</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Electronics</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Garden</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Health & Household</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Home & Kitchen</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Jewellery & Luggage</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Office Products</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Pet Supplies</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Sports & Outdoors</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Toys & Games</span>
                        </div>
                        <div className="my-2 flex items-center">
                            <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                            <span className="text-lg cursor-pointer font-medium">Video Games</span>
                        </div>
                    </div>
                )}

                <button
                    className="mt-1 text-blue-500 font-semibold text-lg"
                    onClick={toggleSeeMore}
                >
                    {seeMore ? "▴ See Less" : " ▾ See more"}
                </button>
                
            </div>
            <div className="mx-5">
                <h1 className="font-semibold my-3 text-lg">Price</h1>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">All</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Under R 400</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium"> Under R800 </span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Under R 1200</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">Under R1600</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">R 1600 & above </span>
                </div>
            </div>
            <div className="mx-5">
                <h1 className="font-semibold my-3 text-lg">Discounts</h1>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">All</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">10% off or more</span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium"> 25% off or more </span>
                </div>
                <div className="my-2 flex items-center">
                    <input type="radio" name="All" className="mr-2 transform scale-150" /> 
                    <span className="text-lg cursor-pointer font-medium">50% off or more</span>
                </div>
            </div>
        </div>  
    )
}

export default FilterPanel