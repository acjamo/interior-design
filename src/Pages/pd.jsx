import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";    


const Pd = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-serif">
            
            {/* Hero Image */}
            <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/kichen1.png')" }} />
            <main className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-12 px-4 py-12">
                {/* Sidebar Info Card */}
                <div className="bg-[#F4F0EC] rounded-2xl p-8 w-full max-w-xs mb-8 md:mb-0 flex-shrink-0 shadow-sm">
                    <div className="mb-4">
                        <div className="font-semibold text-[#292F36] mb-1">Client</div>
                        <div className="text-gray-500">Your client name</div>
                    </div>
                    <div className="mb-4">
                        <div className="font-semibold text-[#292F36] mb-1">Category</div>
                        <div className="text-gray-500">Interiors</div>
                    </div>
                    <div className="mb-4">
                        <div className="font-semibold text-[#292F36] mb-1">Tags</div>
                        <div className="text-gray-500">interior, Home</div>
                    </div>
                    <div className="mb-4">
                        <div className="font-semibold text-[#292F36] mb-1">Date</div>
                        <div className="text-gray-500">Date 23,02,2022</div>
                    </div>
                    <div>
                        <div className="font-semibold text-[#292F36] mb-1">Link</div>
                        <a href="https://example.com" className="text-[#CDA274] hover:underline">Link example.com</a>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#292F36] mb-6">Minimal Look Bedrooms</h1>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellusmassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                    </p>
                    {/* Large Image with Zoom Icon */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md mb-12">
                        <img src="/kichen2.png" alt="Minimal Look Bedroom" className="w-full h-[350px] object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-[#F4F0EC] rounded-full p-4 shadow-lg">
                                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="12" fill="#CDA274" fillOpacity="0.15" />
                                    <path d="M21 21l-4.35-4.35M15 10.5A4.5 4.5 0 1 1 6 10.5a4.5 4.5 0 0 1 9 0Z" stroke="#CDA274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 pt-12 pb-8 px-4 sm:px-8 lg:px-[8%] mt-auto">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-12">
                    {/* Brand */}
                    <div className="space-y-5 max-w-sm">
                        <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                            <span className="text-[#CDA274] text-3xl">▲</span>
                            <span className="font-serif">Interno</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600">
                            It is a long established fact that a reader will be distracted lookings.
                        </p>
                        <div className="flex items-center gap-5 text-gray-500 text-sm">
                            {['f', 't', 'in', 'ig'].map(icon => (
                                <span key={icon} className="cursor-pointer uppercase tracking-wide hover:text-[#CDA274]">{icon}</span>
                            ))}
                        </div>
                    </div>
                    {/* Pages */}
                    <div className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Pages</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="hover:text-[#CDA274] transition">About Us</li>
                            <li className="hover:text-[#CDA274] transition">Our Projects</li>
                            <li className="hover:text-[#CDA274] transition">Our Team</li>
                            <li className="hover:text-[#CDA274] transition">Contact Us</li>
                            <li className="hover:text-[#CDA274] transition">Services</li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="hover:text-[#CDA274] transition">Kitchen</li>
                            <li className="hover:text-[#CDA274] transition">Living Area</li>
                            <li className="hover:text-[#CDA274] transition">Bathroom</li>
                            <li className="hover:text-[#CDA274] transition">Dinning Hall</li>
                            <li className="hover:text-[#CDA274] transition">Bedroom</li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Contact</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <p>55 East Birchwood Ave.<br />Brooklyn, New York 11201</p>
                            <p>contact@interno.com</p>
                            <p>(123) 456 - 7890</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-gray-200 pt-6 text-center text-[11px] sm:text-xs text-gray-500 tracking-wide">
                    Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
                </div>
            </footer>
        </div>
    );
};

export default Pd;


