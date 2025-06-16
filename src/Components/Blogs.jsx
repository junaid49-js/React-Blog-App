import React, { useState } from "react";
import { assets, blog_data } from "../assets/assets";
import BlogCard from "./BlogCard";

const Blogs = () => {
    const [showCategory, setShowCategory] = useState("All");
    const [contentNumber, setContentNumber] = useState(15);
    const [currentCategory, setCurrentCategory] = useState();

    const loadMoreContent = () => {
        setContentNumber((c) => c + 15);
    };

    const filteredBlogs =
        showCategory === "All"
            ? blog_data
            : blog_data.filter((item) => item.category === showCategory);

    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-4 ">
                <button
                    onClick={() => setShowCategory("All")}
                    className={`py-1 px-4 cursor-pointer ${
                        showCategory == "All" ? "bg-black text-white" : ""
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setShowCategory("Lifestyle")}
                    className={`py-1 px-4 cursor-pointer ${
                        showCategory == "Lifestyle" ? "bg-black text-white" : ""
                    }`}
                >
                    Lifestyle
                </button>
                <button
                    onClick={() => setShowCategory("Startup")}
                    className={`py-1 px-4 cursor-pointer ${
                        showCategory == "Startup" ? "bg-black text-white" : ""
                    }`}
                >
                    Startup
                </button>
                <button
                    onClick={() => setShowCategory("Technology")}
                    className={`py-1 px-4 cursor-pointer ${
                        showCategory == "Technology"
                            ? "bg-black text-white"
                            : ""
                    }`}
                >
                    Technology
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                {filteredBlogs.slice(0, contentNumber).map((item, index) => (
                    <BlogCard
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                    />
                ))}
            </div>
            <button
                onClick={loadMoreContent}
                className="text-2xl flex items-center gap-1 justify-center text-black py-2.5 px-5 border-2 border-black bg-white shadow-[-7px_3px_#000] cursor-pointer my-9 transition-all duration-200 ease-in-out active:shadow-none active:translate-x-[-7px] active:translate-y-[3px] hover:shadow-[-12px_8px_#000] hover:translate-x-[2px] hover:translate-y-[-3px]"
            >
                Load More...
            </button>
        </div>
    );
};

export default Blogs;
