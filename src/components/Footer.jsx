import React from "react";
import { amazonLogo } from "../assets/icons";

const Footer = () => {
    return(
        <div className="flex flex-col">
            <div 
            className="scroll-top w-full cursor-pointer bg-[#343f4d] hover:bg-[#485769] text-center h-16"
            onClick={() => window.scrollTo(0, 0)}> 
                <div 
                className="text-md font-medium text-white m-5"
                >Back to top</div>
            </div>

            <div className="footer-top w-full bg-secondary flex flex-col">
                <div className="flex justify-center gap-10">
                    <ul className="m-16">
                        <li className="font-extrabold text-xl text-white p-2">
                            Get to Know Us
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                            Careers
                        </li>
                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                            Legal Notice
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                            Welcome to <br />
                            Amazon.co.za
                        </li>
                    </ul>
                    
                    <ul className="m-16">
                        <li className="font-extrabold text-xl text-white p-2">
                            Make Money with Us
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                        Advertise Your Products
                        </li>
                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                        Sell on Amazon
                        
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                        Supply to Amazon
                        </li>
                    </ul>
                    
                    <ul className="m-16">
                        <li className="font-extrabold text-xl text-white p-2">
                        Amazon Payment Methods
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                        Payment Methods Help
                        </li>
                    </ul>

                    <ul className="m-16 w-48">
                        <li className="font-extrabold text-xl text-white p-2">     
                        Let Us Help You
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                        Track Packages or View Orders
                        </li>
                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                        Shipping & Delivery
                        </li>
                        <li className="leading-tight text-lg text-white p-2 hover:underline cursor-pointer">
                        Returns & Replacements      
                        </li>
                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                        Recalls and Product Safety Alerts

                        </li>
                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                        Customer Service

                        </li>

                        <li className="leading-tight text-lg  text-white p-2 hover:underline cursor-pointer">
                        Amazon Mobile App
                        </li>
                    </ul>
                </div>
                <div>
                    <hr className='opacity-20 mb-5'/>
                    <div className="flex justify-center items-center gap-28 mb-12 ">
                        <div className="w-24 mt-8">
                            <img src={amazonLogo} alt="Amazon" />
                        </div>
                        <div className="mt-5">
                            <div className="border border-white border-opacity-30 rounded w-44 text-lg text-white p-2">
                                🇿🇦 South Africa
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom w-full bg-primary h-56 flex flex-col justify-center">
                <div className="flex justify-center gap-32">
                    <ul className="leading-tight">
                        <li className="text-slate-400 hover:underline cursor-pointer">
                            <span className="text-white "> Amazon Adevrtising</span><br />
                            Find, attract, and <br />
                            engage customers
                        </li>
                    </ul>
                    <ul className="leading-tight">
                        <li className="text-slate-400 hover:underline cursor-pointer">
                        <span className="text-white "> Kindle Direct Publishing </span> <br />
                        Indie Digital & Print Publishing <br />
                        Made easy
                        </li>
                    </ul>
                    <ul className="leading-tight">
                        <li className="text-slate-400 hover:underline cursor-pointer">
                        <span className="text-white "> IMDb </span> <br />
                        Movies, TV <br />
                        & Celebrities		
                        </li>
                    </ul>
                    <ul className="leading-tight">                        
                        <li className="text-slate-400 hover:underline cursor-pointer">
                        <span className="text-white "> Goodreads </span> <br />
                        Book reviews <br />
                        & recommendations		
                        </li>
                    </ul>
                    <ul className="leading-tight">
                        <li className="text-slate-400 hover:underline cursor-pointer">
                        <span className="text-white "> Amazon Web Services </span> <br />
                        Scalable Cloud <br />
                        Computing Services		
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center items-center mt-10 gap-4">
                    <div className="text-white cursor-pointer hover:underline">
                        Conditions of Use & Sale
                    </div>
                    <div className="text-white cursor-pointer hover:underline">
                        Privacy Notice
                    </div>
                    <div className="text-white cursor-pointer hover:underline">
                        Cookies Notice
                    </div>
                    <div className="text-white cursor-pointer hover:underline">
                        Legal Notice                    
                    </div>
                    <div className="text-white cursor-pointer hover:underline">
                        Interest-Based Ads Notice 
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-white">© 1996-2025, Amazon.com, Inc. or its affiliates</div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer