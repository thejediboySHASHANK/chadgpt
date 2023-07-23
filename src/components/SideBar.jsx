import React from 'react'
import features from "../constants/index.jsx"
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className="">
            <Link to="/" className="text-white text-3xl font-bold flex gap-4">
                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
                {/*     stroke="currentColor" className="w-10 h-10 text-blue-500">*/}
                {/*    <path strokeLinecap="round" strokeLinejoin="round"*/}
                {/*    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>*/}
                {/*</svg>*/}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#027BE4]">
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>



                CHADgpt
            </Link>
            <div className="mt-10">
                {features.map((feature, index) => (
                    <div
                        className="py-3.5 rounded-2xl mt-2 flex gap-8"
                        key={index}
                    >
                        <span className="">{feature.icon}</span>
                        <span className="text-white">{feature.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SideBar
