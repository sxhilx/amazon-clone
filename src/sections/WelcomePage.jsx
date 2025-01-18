import React from "react";
import { 
    welcome, 
    whyShopOnAmazon,     
    twenty4seven,
    easyReturns,
    atoz,
    freeDelivery,
    pickUp,
    orderTracking,
    appPageBanner,
    weGotYouCovered,
    moreQuestion,
    allSet,
    heroBanner,
    paymentOption,
    manageAccount,
    sellOnAmazon 
} from "../assets/welcomePageImages";

// Reusable ImageGrid Component
const ImageGrid = ({ images, className = "" }) => (
    <div className={`grid grid-cols-6 mx-28 mt-8 mb-5 gap-5 ${className}`}>
        {images.map((src, index) => (
            <img key={index} src={src.src} alt={src.alt} />
        ))}
    </div>
);

const WelcomePage = () => {

    const featureImages = [
        { src: twenty4seven, alt: "24/7 Availability" },
        { src: easyReturns, alt: "Easy Returns" },
        { src: atoz, alt: "A to Z Guarantee" },
        { src: freeDelivery, alt: "Free Delivery" },
        { src: pickUp, alt: "Pick-Up Points" },
        { src: orderTracking, alt: "Order Tracking" },
    ];

    const additionalFeatures = [
        { src: paymentOption, alt: "Payment Options" },
        { src: manageAccount, alt: "Manage Account" },
        { src: sellOnAmazon, alt: "Sell on Amazon" },
    ];

    return (
        <div className="w-full h-auto">
            <div className="flex flex-col items-center mt-4">

                <img src={welcome} alt="Welcome to Amazon" className="mb-2" />
                <img src={whyShopOnAmazon} alt="Why Shop on Amazon" />


                <ImageGrid images={featureImages} />


                <img src={appPageBanner} alt="App Page Banner" />
                <img src={weGotYouCovered} alt="We've Got You Covered" />

                <ImageGrid images={additionalFeatures} />


                <img src={heroBanner} alt="Hero Banner" className="mb-4" />
                <img src={allSet} alt="All Set" />
                <img src={moreQuestion} alt="More Questions?" className="mb-14" />
            </div>
        </div>
    );
};

export default WelcomePage;
