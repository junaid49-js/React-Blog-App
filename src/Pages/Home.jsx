import React from "react";
import Navbar from "../Components/Navbar";
import Subscription from "../Components/Subscription";
import Blogs from "../Components/Blogs";

const Home = () => {
    return (
        <div>
            <Subscription />
            <Blogs />
        </div>
    );
};

export default Home;
