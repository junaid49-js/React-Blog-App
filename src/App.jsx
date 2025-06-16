import { useState } from "react";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="app px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs/:blogId" element={<Blog />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
