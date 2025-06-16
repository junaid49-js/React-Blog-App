import React from "react";

const Subscription = () => {
    return (
        <div className="py-5 px-5 md:px-12 lg:px-28">
            <div className="text-center mt-2 mb-4">
                <h1 className="text-3xl sm:text-5xl font-medium">
                    Latest Blogs
                </h1>
                <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto culpa maiores quisquam. Aliquid mollitia facilis
                    ipsa voluptatem enim iste asperiores. Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Laborum, dolorem?
                </p>
                <form className="flex justify-between max-w-[500px] scale-75 shadow-[-7px_7px_#000] sm:scale-100 mx-auto mt-10 border border-black">
                    <input
                        className="w-full pl-4 outline-none"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email..."
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 hover:bg-gray-500 active:bg-black active:text-white py-3 sm:px-8 border-l cursor-pointer border-black"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Subscription;
