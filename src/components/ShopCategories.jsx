import React from "react";
import { Categories } from "../constant/Index";

const ShopCategories = () => {
    return(
        <div className="w-full bg-white overflow-hidden box-border">
            <div className="p-7">
                <h1 className="text-[1.7rem] font-bold">Shop our Categories</h1>
                <div className="grid grid-flow-col auto-cols-[16rem] gap-4 overflow-x-auto p-2 cursor-pointer">
                    {Categories.map((catogrie) => (
                        <div key={catogrie.image} className="flex flex-col my-4">
                            <div className="flex rounded-full">
                                <img src={catogrie.image} alt="Image" className="w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopCategories