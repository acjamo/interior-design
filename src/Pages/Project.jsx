



import React, { useState } from "react";
import { motion } from "framer-motion";
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
    (project) => project.category === selectedTab
  );
  return (
    <div className="bg-[#FAF9F6] min-h-screen w-full flex flex-col items-center font-serif">
      {/* Header Section */}
      <div className="w-full h-[300px] bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('/p2.png')" }}>
        <div className="absolute inset-0 bg-black/20 rounded-b-3xl" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-[40px] md:text-[48px] font-bold text-[#292F36] mb-2 tracking-tight">Our Product</h1>
          <span className="text-[#4D5053] text-[18px]">Home / Product</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-12 mb-10 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setSelectedTab(tab.label)}
            className={`px-10 py-3 rounded-full border border-[#E5E5E5] text-[18px] font-medium transition-all duration-200 shadow-sm ${selectedTab === tab.label
              ? "bg-[#CDA274] text-white shadow-md"
              : "bg-white text-[#4D5053] hover:bg-[#F4F0EC]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14 mb-16 px-4 md:px-0">
        {filteredProducts.map((product, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col border border-[#F4F0EC] hover:shadow-xl transition-shadow duration-200"
            style={{ minHeight: "370px", perspective: 800 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.12 }}
            whileHover={{ scale: 1.03, rotateX: 8, rotateY: 8, zIndex: 2 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[220px] object-cover object-center"
            />
            <div className="flex flex-col justify-between flex-1 p-7">
              <div>
                <h2 className="text-[22px] font-bold text-[#292F36] mb-2 tracking-tight">
                  {product.title}
                </h2>
                <span className="text-[16px] text-[#4D5053]">
                  {product.subtitle}
                </span>
              </div>
              <div className="flex justify-end mt-6">
                <Link to="/Productdetail">
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F0EC] hover:bg-[#CDA274] transition-all group shadow-md">
                    <svg width="24" height="24" fill="none" stroke="#CDA274" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:stroke-white transition-colors">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mb-12">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`w-10 h-10 rounded-full border border-[#E5E5E5] text-[16px] font-medium flex items-center justify-center transition-all duration-200 ${num === 2 ? "bg-[#CDA274] text-white" : "bg-white text-[#4D5053] hover:bg-[#F4F0EC]"}`}
          >
            {`0${num}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;