import React from 'react'
import SideBar from "../components/SideBar.jsx";
import FrontPage from "../components/FrontPage.jsx";

const IndexPage = () => {
    return (
        <>
            <div className="bg-background grid grid-cols-[1fr_3fr] p-4" style={{height: "100vh"}}>
                <div className="py-4 mr-4">
                    <SideBar />
                </div>

                <div className="bg-chat rounded-2xl">
                    <FrontPage />
                </div>
            </div>
        </>
    )
}
export default IndexPage
