import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, image, category, description }) => {
    return (
        <Link to={`/blogs/${id}`}>
            <div className="max-w-70 border-2 hover:shadow-[-7px_7px_#000] hover:translate-x-[7px] hover:translate-y-[-7px] transition-all duration-200 ease-in-out">
                <div className=" overflow-hidden">
                    <img
                        className="hover:scale-110 transition-all duration-500"
                        src={image}
                    />
                </div>
                <p className="ml-3 mt-3 py-1 px-2 inline-block text-xs bg-black text-white">
                    {category}
                </p>
                <h4 className="ml-3 mt-3 font-medium inline-block">{title}</h4>
                <p className="ml-3 mt-3 text-sm text-gray-500 inline-block">
                    {description}
                </p>
                <button className="flex ml-3 mt-3 mb-2 items-center gap-1 cursor-pointer hover:text-white hover:bg-black p-1">
                    Read More <img src={assets.arrow} alt="" />
                </button>
            </div>
        </Link>
    );
};

export default BlogCard;
