import React, {useState} from "react";



const SideBar = ({toggleSidebar}) => {

        const [seeMore, setSeeMore] = useState(false)
    
        const toggleSeeMore = () => {
            setSeeMore(!seeMore)
        }

    return(
        <div className='bg-white flex flex-col'>
                <div className='w-full h-[50px] bg-[#232F3E] text-white flex justify-start items-center pl-9 text-xl font-semibold'>
                <svg width="26px" height='26px' viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff"></path> </g></svg>
                <span className='ml-2'>Hello, Sign in</span>
                <div className="ml-28">
                    <button onClick={toggleSidebar}>
                        <svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path> </g></svg>
                    </button>
                </div>
                </div>
                <div className='bg-white mt-5 border-b border-slate-300'>
                    <span className='font-bold text-lg py-3 pl-9'>Trending</span>
                    <ul>
                        <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">Best Sellers`</li>
                        <li className="py-3 text-sm font-medium mb-2 pl-9 hover:bg-slate-200">New Releases</li>
                    </ul>
                    
                </div>
                <div className='bg-white mt-5 border-b border-slate-300'>
                    <span className='font-bold text-lg py-3 pl-9'>Shop by departments</span>
                    <ul>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                        All
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        Arts & Craft
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                        Baby Products 
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        Beauty
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                        Books
                    </li>
                    </ul>
                    {seeMore && (
                        <ul>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                DIY & Tools
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Electronics
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Garden
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Health & Household
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Home & Kitchen
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Jewellery & Luggage
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Office Products
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Pet Supplies
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Sports & Outdoors
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                                Toys & Games
                            </li>
                            <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                                Video Games
                            </li>
                        </ul>
                    )}

                    <div
                        className="pl-9 w-full  py-3 text-sm font-medium hover:bg-slate-200 "
                        onClick={toggleSeeMore}
                    >
                        {seeMore ? "▴ See Less" : " ▾ See All"}
                    </div>
                    
                </div>

                <div className='bg-white mt-5 border-b border-slate-300'>
                    <span className='font-bold text-lg py-3 pl-9'>Programs & Features</span>
                    <ul>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                        Gift Crads
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        Sell on Amazon
                    </li>
                    </ul>
                </div>

                <div className='bg-white mt-5 border-slate-300 mb-7'>
                    <span className='font-bold text-lg py-3 pl-9'>Help & Setting</span>
                    <ul>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9">
                        Your Account
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        🇿🇦 South Africa
                    </li>

                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        Customer Service
                    </li>
                    <li className="py-3 text-sm font-medium hover:bg-slate-200 pl-9"> 
                        Sign in
                    </li>


                    </ul>
                </div>
                
        </div>
    )
}

export default SideBar