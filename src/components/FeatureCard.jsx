import React from "react";

const FeatureCard = ({title, image, linkText}) => {
    return(
        <div className="w-full cursor-pointer">
            <div className="p-4 bg-white ">
                <div className="font-bold text-xl">{title}</div>
                <div className="mt-4 mb-4 w-full">
                    <img src={image} alt="Image" className="h-80 object-cover" />
                </div>
                <div className="text-blue-600 hover:text-[#0C3353] my-2">
                    {linkText}
                </div>
            </div>
        </div>
    )
}

export default FeatureCard