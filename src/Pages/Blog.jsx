import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";

const Blog = () => {
    const [currentBlog, setCurrentBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [generatedContent, setGeneratedContent] = useState("");
    const [error, setError] = useState(null);
    const { blogId } = useParams();
    const API_KEY = "Gemini Api";

    useEffect(() => {
        // Find the blog with matching ID
        const foundBlog = blog_data.find(
            (item) => item.id.toString() === blogId
        );
        setCurrentBlog(foundBlog);

        // Generate content automatically if blog is found
        if (foundBlog) {
            generateBlogContent(foundBlog.title);
        }
    }, [blogId]);

    const generateBlogContent = async (title) => {
        if (!title || !API_KEY) {
            setError("Missing title or API key");
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setGeneratedContent("");
        setError(null);

        try {
            console.log("Sending request to Gemini API...");
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [
                            {
                                parts: [
                                    {
                                        text: `Write a comprehensive blog post about "${title}" with markdown formatting. 
                                Include an introduction, main sections with subheadings (##), 
                                bullet points (-) for lists, and a conclusion.`,
                                    },
                                ],
                            },
                        ],
                    }),
                }
            );

            console.log("Received response:", response);

            if (!response.ok) {
                const errorData = await response.json();
                console.error("API Error:", errorData);
                throw new Error(
                    errorData.error?.message ||
                        `API request failed with status ${response.status}`
                );
            }

            const data = await response.json();
            console.log("API Response Data:", data);

            if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
                throw new Error("Unexpected response format from API");
            }

            const generatedText = data.candidates[0].content.parts[0].text;
            setGeneratedContent(generatedText);
        } catch (error) {
            console.error("Error generating blog content:", error);
            setError(error.message);
            setGeneratedContent(null);
        } finally {
            setIsLoading(false);
        }
    };

    if (!currentBlog) {
        return <div className="text-center py-20">Blog not found</div>;
    }

    const renderMarkdown = (text) => {
        if (!text) return null;

        return text.split("\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
                return (
                    <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
                        {paragraph.substring(3)}
                    </h2>
                );
            } else if (paragraph.startsWith("### ")) {
                return (
                    <h3 key={i} className="text-xl font-semibold mt-5 mb-2">
                        {paragraph.substring(4)}
                    </h3>
                );
            } else if (paragraph.startsWith("- ")) {
                return (
                    <li key={i} className="ml-6 list-disc">
                        {paragraph.substring(2)}
                    </li>
                );
            } else if (paragraph.trim() === "") {
                return <br key={i} />;
            } else {
                return (
                    <p key={i} className="mb-4">
                        {paragraph}
                    </p>
                );
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-center font-medium text-4xl">
                    {currentBlog.title}
                </h1>
                <div className="flex flex-col items-center">
                    <img
                        className="size-20 rounded-full"
                        src={currentBlog.author_img}
                        alt={currentBlog.author}
                    />
                    <p className="text-gray-500">{currentBlog.author}</p>
                </div>
                <img
                    className="w-full max-h-96 object-cover rounded-lg border-4 border-red-100"
                    src={currentBlog.image}
                    alt={currentBlog.title}
                />

                <div className="w-full prose max-w-none min-h-64">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                            <p>Generating blog content...</p>
                        </div>
                    ) : error ? (
                        <div className="bg-red-50 p-4 rounded-lg text-red-600">
                            <p className="font-semibold">Error:</p>
                            <p>{error}</p>
                            <button
                                onClick={() =>
                                    generateBlogContent(currentBlog.title)
                                }
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Retry
                            </button>
                        </div>
                    ) : generatedContent ? (
                        <div className="bg-gray-50 p-6 rounded-lg">
                            {renderMarkdown(generatedContent)}
                        </div>
                    ) : (
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <p className="text-gray-700">
                                {currentBlog.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
