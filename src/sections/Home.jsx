import React from "react";
import { bgVideo } from "../assets/images";
import { FeatureCardProps } from "../constant/Index";
import FeatureCard from "../components/FeatureCard";
import TodaysDealCrad from "../components/TodaysDealCard";
import ShopCategories from "../components/ShopCategories";

const Home = () => {
    return (
        <div className="bg-[#E3E6E6] min-h-screen h-auto">
            <div className="relative w-full">
                <video
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                ></video>
            </div>
            <div className="grid grid-cols-4 gap-7 relative top-[-3.5rem] mx-8">
                {FeatureCardProps.map((FeatureCardProp) => (
                    <FeatureCard key={FeatureCardProp.title} {...FeatureCardProp} />
                ))}
            </div>
            <div className=" relative mx-8">
                <TodaysDealCrad/>
            </div>
            <div className="mx-8 mt-8">
                <ShopCategories/>
            </div>
            <div className="bg-white w-full flex flex-col mt-8">
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
        </div>
    );
};

export default Home;
