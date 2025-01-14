import React, { useState } from 'react'
import { amazonLogo } from '../assets/icons'
import {backToSchool} from '../assets/images'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [location, setLocation] = useState("Durban")
    const [cartItems, setCartItems] = useState(0)

    const handleLocationChange = (newLocation) => {
        setLocation(newLocation)
    }

    return(
        <header>
            <div className='m-0 top-navbar bg-primary w-full h-[62px] gap-1'>
                <div className='flex pt-1'>
                <div className='flex w-[130px] p-1'>
                    <Link to='/'>
                        <div className='ml-3 p-1 border border-transparent hover:border-white box-border cursor-pointer rounded-sm'>
                            <img src={amazonLogo} alt="Amazon" className=''/>
                        </div>
                    </Link>
                </div>
                <div className='p-1 '>
                    <div className='flex flex-col ml-2 p-1 leading-none border border-transparent hover:border-white box-border rounded-sm cursor-pointer'>
                        <div className='text-[#C1C1C2] text-xs ml-5'>Delivering to {location}</div>
                        <div className='flex flex-row gap-1 '>
                            <svg fill="#ffffff" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 368.666 368.666" xml:space="preserve" stroke="#ffffff" stroke-width="11.428646"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_2_"> <g> <g> <path d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515 c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51 c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355 c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552 c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297 C313.629,178.709,304.004,206.393,285.795,229.355z"></path> <path d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374 S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374 s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"></path> </g> </g> </g> </g></svg>
                            <div 
                            className='text-white font-semibold text-sm'
                            >                       
                            Update location
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-grow p-1'>
                        <div className='flex w-full p-1 ml-2'>
                            <div className='flex w-full focus:ring-2 focus:ring-orange-400'>
                                <select name="departments" className='w-[55px] h-10 rounded-l-sm text-xs font-semibold p-2 cursor-pointer'>
                                    <option value="all">All</option>
                                    <option value="arts">Arts, Craft and Sewing</option>
                                    <option value="baby">Baby</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="books">Books</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                                <input type="text" placeholder='Search Amazon' className='w-full h-10 p-1 focus:outline-none focus:ring-2 focus:ring-orange-400'/>
                                <button className='text-white bg-[#F3A847] pl-3 pr-3 rounded-r-sm'>
                                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                <div className='p-1 '>
                    <div className='flex flex-col ml-3 p-1 leading-none border border-transparent hover:border-white box-border rounded-sm cursor-pointer'>
                        <div className='text-slate-100 text-xs'>Hello, Sign in</div>
                        <div className='flex flex-row gap-1 '>
                            <div 
                            className='text-white font-semibold text-sm'
                            >                       
                            Account & Lists
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-1 '>
                    <div className='flex flex-col ml-2 p-1 leading-none border border-transparent hover:border-white box-border rounded-sm cursor-pointer'>
                        <div className='text-slate-100 text-xs'>Returns</div>
                        <div className='flex flex-row gap-1 '>
                            <div 
                            className='text-white font-semibold text-sm'
                            >                       
                            & Orders
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-1'>
                    <div className='flex ml-2 p-1 leading-none border border-transparent hover:border-white box-border rounded-sm cursor-pointer'>
                    <div className='flex flex-row gap-1 '>
                    <div className='relative'>
                        <span className='font-bold text-orange-400 absolute -top-1 left-5'>{cartItems}</span>
                        <svg width="40px" height="32px" viewBox="0 -1 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-464.000000, -724.000000)" fill="#ffffff"> <path d="M488,750 C486.896,750 486,750.896 486,752 C486,753.104 486.896,754 488,754 C489.104,754 490,753.104 490,752 C490,750.896 489.104,750 488,750 L488,750 Z M478,750 C476.896,750 476,750.896 476,752 C476,753.104 476.896,754 478,754 C479.104,754 480,753.104 480,752 C480,750.896 479.104,750 478,750 L478,750 Z M491,744 C491,745.104 490.104,746 489,746 L478,746 C476.896,746 476,745.104 476,744 L474.333,734 L493.5,734 L491,744 L491,744 Z M473.97,732 L471.475,724 L465,724 C464.447,724 464,724.448 464,725 C464,725.553 464.447,726 465,726 L470,726 L472.011,732 L472,732 L474,744 C474,746.209 475.791,748 478,748 L489,748 C491.209,748 493,746.209 493,744 L496,732 L473.97,732 L473.97,732 Z" id="cart" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                    </div>
                        <div 
                        className='text-white font-semibold text-sm mt-4'>                       
                            Basket
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='flex main-navbar w-full h-10 bg-secondary'>
                <div className='flex items-center w-3/4'>
                    <div className=' ml-3 border border-transparent hover:border-white rounded-sm cursor-pointer'>
                        <div className='flex justify-center items-center p-1'>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            <div className='text-white font-bold text-xs'>All</div>
                        </div>
                    </div>

                    <Link to='/todays-deal'>
                        <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                            <div className='p-2 text-white font-medium text-sm'>
                                Todays's Deal
                            </div>
                        </div>
                    </Link>
                    
                    <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                        <div className='p-2 text-white font-medium text-sm'>
                            Gift Cards
                        </div>
                    </div>
                    <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                        <div className='p-2 text-white font-medium text-sm'>
                            Customer Service
                        </div>
                    </div>
                    <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                        <div className='p-2 text-white font-medium text-sm'>
                            Keep Shopping for
                        </div>
                    </div>
                    <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                        <div className='p-2 text-white font-medium text-sm'>
                            Shop Mazansi
                        </div>
                    </div>
                    <div className='pl-2 pr-2 border border-transparent rounded-sm hover:border-white cursor-pointer'>
                        <div className='p-2 text-white font-medium text-sm'>
                            Welcome to Amazon.co.za
                        </div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <img src={backToSchool} alt="Back To School" className='w-full cursor-pointer' />
                </div>
            </div>
        </header>
    )
}

export default Navbar