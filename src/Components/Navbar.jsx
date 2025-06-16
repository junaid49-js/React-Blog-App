import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between p-4">
                <NavLink to={"/"}>
                    <img className="w-30 sm:w-50" src={assets.logo} alt="" />
                </NavLink>
                <div>
                    <button className="w-30 sm:w-50 sm:text-2xl px-2 py-2 text-sm flex items-center gap-1 justify-center text-black sm:py-2.5 sm:px-5 border-2 border-black bg-white shadow-[-7px_3px_#000] cursor-pointer my-9 transition-all duration-200 ease-in-out active:shadow-none active:translate-x-[-7px] active:translate-y-[3px] hover:shadow-[-12px_8px_#000] hover:translate-x-[2px] hover:translate-y-[-3px]">
                        Get Started <img src={assets.arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
