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
                <div className="absolute left-0 top-[340px] w-full h-full bg-gradient-to-b from-slate-400 to-transparent"></div>
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
            <div className="bg-white w-full mt-8 flex flex-col">{/* Empty container for margin */}</div>
        </div>
    );
};

export default Home;
