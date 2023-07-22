import React from 'react'

const FeatureElement = ({}) => {
    return (
        <div>
            <div
                className="flex border-2 border-[#333536] mt-10 w-1/2 justify-between mx-auto py-6 px-4 rounded-lg cursor-pointer items-center">
                <div className="flex gap-4 items-center">
                    <div className="bg-red-500 rounded-xl p-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path
                                d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"/>
                            <path
                                d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"/>
                        </svg>
                    </div>

                    <span className="text-white">PDF Edition</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6 text-[#666C6E]">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </svg>
            </div>
        </div>
    )
}
export default FeatureElement
