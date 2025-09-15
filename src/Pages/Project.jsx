




import React, { useState } from "react";

const projects = [
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

const Project = () => {
  const [selectedTab, setSelectedTab] = useState("Bed Room");
  const filteredProjects = projects.filter(
    (project) => project.category === selectedTab
  );
  return (
    <div className="bg-[#FAF9F6] min-h-screen w-full flex flex-col items-center font-serif">
      {/* Header Section */}
      <div className="bg-cover bg-center h-44 w-full flex items-center justify-center" style={{ backgroundImage: "url('/p2.png')" }}>
        <div className="bg-white rounded-xl px-12 py-6 text-3xl font-semibold shadow-md flex flex-col items-center">
          <h1 className="text-[32px] font-semibold text-[#222] mb-2">Our Project</h1>
          <span className="text-[#A9A9A9] text-[15px]">Home / Project</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-8 mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setSelectedTab(tab.label)}
            className={`px-8 py-2 rounded-full border border-[#E5E5E5] text-[15px] font-medium transition-all duration-200 ${selectedTab === tab.label
                ? "bg-[#D6BFA8] text-white shadow-md"
                : "bg-white text-[#A9A9A9] hover:bg-[#F3EDE7]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-[900px] grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[18px] shadow-md overflow-hidden flex flex-col"
            style={{ minHeight: "320px" }}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-[180px] object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <h2 className="text-[15px] font-semibold text-[#222] mb-1">
                  {project.title}
                </h2>
                <span className="text-[13px] text-[#A9A9A9]">
                  {project.subtitle}
                </span>
              </div>
              <div className="flex justify-end mt-4">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F3EDE7] hover:bg-[#D6BFA8] transition-all">
                  <svg width="18" height="18" fill="none" stroke="#D6BFA8" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mb-10">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`w-8 h-8 rounded-full border border-[#E5E5E5] text-[13px] font-medium flex items-center justify-center transition-all duration-200 ${num === 2 ? "bg-[#D6BFA8] text-white" : "bg-white text-[#A9A9A9] hover:bg-[#F3EDE7]"
              }`}
          >
            {`0${num}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Project;