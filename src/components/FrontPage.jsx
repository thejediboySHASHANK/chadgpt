import React from 'react'

const FrontPage = () => {
    return (
        <div className="grid grid-cols-[3fr_1fr]">
            <div className="border-r-2 border-[#333536] overflow-auto">
                <h1 className="text-white font-bold text-3xl text-center mt-14 tracking-wide">Unlock the power of
                    AI</h1>
                <p className="text-center text-[#61676A] text-xl mt-5">Chat with the smartest AI - Experience the power
                    of AI with us
                </p>

                <div
                    className="flex border-2 border-[#333536] mt-10 w-4/6 justify-between mx-auto py-6 px-4 rounded-lg cursor-pointer items-center">
                    <div className="flex gap-4 items-center">
                        <div className="bg-[#472D22] rounded-xl p-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6 text-[#DC4D10]">
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

                <div
                    className="flex border-2 border-[#333536] mt-6 w-4/6 justify-between mx-auto py-6 px-4 rounded-lg cursor-pointer items-center">
                    <div className="flex gap-4 items-center">
                        <div className="bg-[#2C4334] rounded-xl p-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#52BA69]">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <span className="text-white">Code Generation</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 text-[#666C6E]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                    </svg>
                </div>

                <div
                    className="flex border-2 border-[#333536] mt-6 w-4/6 justify-between mx-auto py-6 px-4 rounded-lg cursor-pointer items-center">
                    <div className="flex gap-4 items-center">
                        <div className="bg-[#4F402E] rounded-xl p-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#E68A1D]">
                                <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V9.017 5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" clipRule="evenodd" />
                            </svg>

                        </div>

                        <span className="text-white">Audio Generation</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 text-[#666C6E]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                    </svg>
                </div>


            </div>

            <div>

            </div>

        </div>
    )
}
export default FrontPage
