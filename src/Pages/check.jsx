import React from "react";
import Header from "../component/Header";
// If you have a Footer component, import it here
// import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const Check = () => {
    return (
        <div className="min-h-screen bg-[#f6f3ee] flex flex-col font-sans">
            {/* <Header /> */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 flex flex-col items-center">
                    <div className="bg-[#CDA274]/10 rounded-full p-3 mb-6">
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="12" fill="#CDA274" fillOpacity="0.15" />
                            <path d="M7 13l3 3 7-7" stroke="#4BB543" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#292F36] text-center mb-2">Your order has been<br />successfully submitted</h2>
                    <div className="w-full bg-[#f6f3ee] rounded-xl mt-6 mb-8 p-4 text-sm">
                        <div className="flex justify-between py-1 text-gray-400">
                            <span>Order ID</span>
                            <span className="text-[#292F36] font-semibold">57625869</span>
                        </div>
                        <div className="flex justify-between py-1 text-gray-400">
                            <span>PAyment Method</span>
                            <span className="text-[#292F36] font-semibold">Apple Pay</span>
                        </div>
                        <div className="flex justify-between py-1 text-gray-400">
                            <span>Date & Time</span>
                            <span className="text-[#292F36] font-semibold">01/02/24 23:46</span>
                        </div>
                        <div className="flex justify-between py-1 text-gray-400">
                            <span>Total</span>
                            <span className="text-[#292F36] font-semibold">$ 129</span>
                        </div>
                    </div>
                    <Link to="/Home" className="w-full mt-2 bg-[#292F36] text-white rounded-full py-3 text-center font-semibold text-lg hover:bg-[#CDA274] transition">Go to my account</Link>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Check;
