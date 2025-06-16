import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className="bg-black flex items-center justify-around p-2 mt-8">
            <img src={assets.logo_light} alt="" />
            <p className="text-white">
                All Rights Reserved. Copyright @ blogger
            </p>
            <div className="flex items-center">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.googleplus_icon} alt="" />
            </div>
        </div>
    );
};

export default Footer;
