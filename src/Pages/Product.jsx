import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
    {
        img: "/p2.png",
        title: "Minimal Bedroom",
        subtitle: "Decor / Architecture",
        category: "Bed Room",
    },
    {
        img: "/p3.png",
        title: "Minimal Bedroom",
        subtitle: "Decor / Architecture",
        category: "Bed Room",
    },
    {
        img: "/p4.png",
        title: "Classic Minimal Bedroom",
        subtitle: "Decor / Architecture",
        category: "Bed Room",
    },
    {
        img: "/p5.png",
        title: "Modern Bedroom",
        subtitle: "Decor / Architecture",
        category: "Bed Room",
    },
    {
        img: "/p6.png",
        title: "Minimal Bedroom table",
        subtitle: "Decor / Architecture",
        category: "Bathroom",
    },
    {
        img: "/p7.png",
        title: "System Table",
        subtitle: "Decor / Architecture",
        category: "Kichan",
    },
    {
        img: "/p8.png",
        title: "Modern Medroom",
        subtitle: "Decor / Architecture",
        category: "Bed Room",
    },
    {
        img: "/p9.png",
        title: "Modern Bedroom",
        subtitle: "Decor / Architecture",
        category: "Living Area",
    },
    {
        img: "/p10.png",
        title: "Modern Bedroom",
        subtitle: "Decor / Architecture",
        category: "Living Area",
    },
];

const tabs = [
    { label: "Bathroom" },
    { label: "Bed Room" },
    { label: "Kichan" },
    { label: "Living Area" },
];

const Product = () => {
    const [selectedTab, setSelectedTab] = useState("Bed Room");
    const filteredProducts = products.filter(
        (product) => product.category === selectedTab
    );
    return (
        <div className="bg-[#FAF9F6] min-h-screen w-full flex flex-col items-center font-serif">
            {/* Header Section */}
            <div
                className="w-full h-[300px] bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: "url('/p2.png')" }}
            >
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#292F36] mb-2 tracking-tight">
                    Our Product
                </h1>
                <span className="text-[#4D5053] text-[18px] absolute bottom-4 left-1/2 -translate-x-1/2">
                    Home / Product
                </span>
            </div>
            {/* Tabs */}
            <div className="flex gap-4 mt-8 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.label}
                        className={`px-6 py-2 rounded-full font-semibold border transition-all duration-200 ${selectedTab === tab.label
                            ? "bg-[#CDA274] text-white border-[#CDA274]"
                            : "bg-white text-[#292F36] border-gray-300 hover:bg-[#f6f3ee]"
                            }`}
                        onClick={() => setSelectedTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 mb-16">
                {filteredProducts.map((product, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                    >
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-xl font-bold text-[#292F36] mb-2">
                                {product.title}
                            </h2>
                            <p className="text-[#4D5053] text-sm mb-4">
                                {product.subtitle}
                            </p>
                            <Link
                                to="/Productdetail"
                                className="mt-auto inline-block bg-[#CDA274] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#b68b5e] transition"
                            >
                                Buy
                            </Link>


                            <Link to="/pd" className="mt-4 w-full text-center bg-[#CDA274] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b68b5e] transition block font-serif shadow-md">View Details</Link>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;