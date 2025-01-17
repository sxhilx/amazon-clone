import React from "react";
import { giftCardBg } from "../assets/giftcardImages";
import { featuredGiftCards } from "../constant/Index";

const GiftCards = () => {
    return(
        <div>
            <div className="flex">

                <div className="left-section overflow-y-auto w-[13%] h-full flex flex-col left-0">
                    <div className="text-sm font-semibold mt-4 mb-2 mx-4">Availability</div>
                    <div className=" text-[15px] cursor-pointer font-normal hover:text-[#D17B39] mx-4">In Stock Only</div>
                    <div className=" text-[15px] cursor-pointer font-normal hover:text-[#D17B39] mx-4">Include Out of Stock</div>
                </div>

                <div className="right-section w-[87%] overflow-y-auto mb-4">
                    <div className="w-full h-44 border-l">
                        <div className="mt-3 mx-4">
                        <h1 className="text-3xl font-medium mb-1">The Gift Card Store | A gift for every occasion</h1>
                        <p className="">Give your loved ones the freedom to choose their own gifts with our Amazon eGift cards. Perfect for birthdays, congratulations, anniversaries and more!</p>

                        <div className="grid grid-cols-3 mt-5 gap-5">
                            <button className="border border-black py-4 hover:bg-black hover:text-white transition">
                                Your Gift Card Balance
                            </button>
                            <button className="border border-black py-4 hover:bg-black hover:text-white transition">Redeem a Gift Card
                            </button>
                            <button className="border border-black py-4 hover:bg-black hover:text-white transition">
                                Shop eGift Cards
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={giftCardBg} alt="giftCrad Bg" />
                    </div>
                    <div className="mt-12">
                        <h1 className="font-semibold mx-6 mb-1 text-2xl">Featured eGift Cards</h1>
                        <hr className="w-full border border-slate-300 mb-4"/>
                        <div className="grid mx-40 mt-16 grid-cols-5 gap-32">
                            {featuredGiftCards.map((giftcard) => (
                                <div className="w-36" key={giftcard.image}>
                                    <img src={giftcard.image} alt="" />
                                    <div className="text-sm font-medium mt-7 mb-2">Amazon.co.za eGift Card
                                    Amazon</div>
                                    <div className="flex items-start">
                                        <span className="text-xs ">R</span>
                                        <span className="text-xl font-medium">500</span>
                                        <span className="text-xs">00</span>
                                    </div>
                                    <div className=" bg-[#ffde59] hover:bg-[#FFCE12] w-28 flex items-center justify-center rounded mt-2">
                                        <button className="font-semibold p-2 text-sm">Add to Basket</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCards