import React, {useState} from "react";
import { infoCard, customerHelpTopics } from "../constant/Index";

const CustomerService = () => {

    

    const [info, setInfo] = useState(customerHelpTopics[0]?.info || "");
    const [title, setTitle] = useState(customerHelpTopics[0]?.title || "")


    return(
        <div className="w-full">
            <div className="flex justify-center">
            <div className="flex justify-start w-[60%]">
                <h1 className="text-[28px] font-medium mt-9 mb-7">Hello. What can we help you with?</h1>                
            </div>
            </div>
            <div className="w-full border-2 border-slate-300 my-2"></div>
            <div className="flex justify-center">
                <div className="w-[60%]">
                    <h1 className="text-2xl font-medium my-3">Some things you can do here</h1>
                    <div className="grid grid-cols-3 gap-6">
                        
                        {infoCard.map((info) => (
                            <div className="flex w-68 h-auto border rounded items-center gap-2 cursor-pointer" key={info.image}>

                                <div className="w-14 my-2 ml-2">
                                    <img src={info.image} alt={info.title} />
                                </div>
                                <div className="flex flex-col my-2">
                                    <div className="font-medium text-lg">{info.title}</div>
                                    <div className="text-sm text-slate-500">{info.service1}</div>
                                    <div className="text-sm text-slate-500">{info.service2}</div>
                                </div>
                            </div>
                        ))}

                        
                    </div>
                    <hr className="my-4 w-full border"/>

                    <div className="mt-2 font-bold text-lg">
                        Find more solutions  <span className="ml-2 text-[1rem] italic"> Type something like "question about a charge" </span>
                        
                        <div className="w-full relative my-2">
                            <input 
                            className="w-full border my-2 rounded border-slate-500
                            pl-10 pr-2 py-1
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            " 
                            type="text"/>

                            <svg 
                            className="absolute left-2 top-1/2 transform -translate-y-1/2
                            pointer-events-none
                            "
                            width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border border-slate-200 my-3"></div>
            <div className="flex justify-center my-2">
                    <div className="w-[60%]">
                        <h1 className="text-2xl font-medium mt-6 mb-4">Browse help topics</h1>
                        <div className="w-full flex border rounded-xl">
                            <div className="left-container w-[30%] bg-[#F3F3F3] h-auto rounded">
                            <ul className="m-4">
                                {customerHelpTopics.map((topic, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer rounded font-normal p-1 hover:font-medium hover:text-[#E47911]"
                                        onMouseEnter={() => {
                                            setInfo(topic.info)
                                            setTitle(topic.title)
                                        }}
                                    >
                                        {topic.title}
                                    </li>
                                ))}
                            </ul>
                            </div>
                            <div className="right-contaier flex flex-col items-start justify-start">
                            <div className="m-4 text-lg font-medium">
                                {title}
                            </div>
                            <div className="text-blue-900 font-normal -m-6 cursor-pointer py-1">
                                <span className="whitespace-pre-wrap text-left text-sm font-medium">{info}</span>
                            </div>
                            
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-3 mb-10 font-medium text-sm">
                        Learn more about the&nbsp;<span className="cursor-pointer text-blue-600">Amazon Shopping App</span>

                        </div>
                    </div>
            </div>
        </div>
    )
}

export default CustomerService