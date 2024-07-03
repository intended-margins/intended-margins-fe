import React from "react";
import Navbar from "../components/Navbar";
import BoardList from "../components/board/BoardList";

const CommunityPage = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <BoardList/>
        </div>
    );
};

export default CommunityPage;