import React from 'react'
import features from "../constants/index.jsx"
const SideBar = () => {
    return (
        <div className="">
            <span className="text-white text-3xl font-bold">
                BrainWave
            </span>
            <div className="mt-10">
                {features.map ((feature, index) => (
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
