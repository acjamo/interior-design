import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import { motion } from 'framer-motion';

// Animation variants (copied from Home.jsx for footer)
const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
};
const slideLeft = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
};
const slideRight = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
};
const stagger = {
    visible: { transition: { staggerChildren: 0.25 } }
};

function Productdetail() {
    const [color, setColor] = useState('light');
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    return (
        <div className="bg-[#e2dbd7] min-h-screen flex flex-col font-sans">
            {/* Main Product Section */}
            <main className="flex-1 flex flex-col items-center justify-center py-12 px-2 sm:px-6 lg:px-0">
                <div className="bg-white rounded-2xl shadow-xl max-w-5xl w-full flex flex-col lg:flex-row gap-12 p-8 lg:p-16 border border-[#e5e1de]">
                    {/* Product Images */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="relative w-52 h-64 flex items-center justify-center">
                            <img src="/image1.png" alt="Product" className="object-contain h-48 w-24 mx-auto drop-shadow-md" />
                            <img src="/image3.png" alt="Product open" className="object-contain h-48 w-24 mx-auto absolute left-24 top-0 drop-shadow-md" />
                        </div>
                        {/* Dots for image navigation */}
                        <div className="flex gap-2 mt-4">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#bdb7b2] inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#e5e1de] inline-block" />
                        </div>
                    </div>
                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#c7a97f] text-lg tracking-widest">★★★★★</span>
                            <span className="text-xs text-[#bdb7b2]">201 reviews</span>
                        </div>
                        <h1 className="text-4xl font-serif font-semibold tracking-wider mb-2 text-[#222]">LIT UP</h1>
                        <div className="text-xs text-[#bdb7b2] mb-4 tracking-widest font-medium">HIGHLIGHT STICK 17G/0.5OZ</div>
                        <p className="text-[#222] mb-6 max-w-md text-base leading-relaxed">
                            This clean, translucent gel highlighter imparts skin with a natural, dewy radiance. Buildable, easy-to-use formula glides onto skin for a fresh, glassy effect. Can be used on cheekbones, eyelids, cupid’s bow, and more.
                        </p>
                        <div className="text-2xl font-bold mb-6 text-[#222] tracking-wider">52 €</div>
                        {/* Color selector */}
                        <div className="mb-4 flex items-center">
                            <span className="text-sm font-medium mr-4 text-[#222]">Color:</span>
                            <button onClick={() => setColor('light')} className={`w-7 h-7 rounded-full border-2 mr-2 ${color === 'light' ? 'border-[#222]' : 'border-[#e5e1de]'} bg-[#f5e3d6] transition`} aria-label="Light color" />
                            <button onClick={() => setColor('tan')} className={`w-7 h-7 rounded-full border-2 ${color === 'tan' ? 'border-[#222]' : 'border-[#e5e1de]'} bg-[#e2c6b2] transition`} aria-label="Tan color" />
                        </div>
                        {/* Quantity selector - custom */}
                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-sm font-medium text-[#222]">Quantity:</span>
                            <button
                                type="button"
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="w-8 h-8 rounded-full border border-[#e5e1de] flex items-center justify-center text-lg font-bold text-[#222] bg-[#f8f6f4] hover:bg-[#e5e1de] transition cursor-pointer"
                                aria-label="Decrease quantity"
                            >-</button>
                            <input
                                type="number"
                                min={1}
                                max={99}
                                value={quantity}
                                onChange={e => {
                                    const val = Math.max(1, Math.min(99, Number(e.target.value)));
                                    setQuantity(val);
                                }}
                                className="w-12 text-center text-[#222] border border-[#e5e1de] rounded bg-[#f8f6f4] focus:outline-none"
                                aria-label="Quantity"
                            />
                            <button
                                type="button"
                                onClick={() => setQuantity(q => Math.min(99, q + 1))}
                                className="w-8 h-8 rounded-full border border-[#e5e1de] flex items-center justify-center text-lg font-bold text-[#222] bg-[#f8f6f4] hover:bg-[#e5e1de] transition cursor-pointer"
                                aria-label="Increase quantity"
                            >+</button>
                        </div>
                        <button
                            className="w-full py-3 rounded-full bg-[#222] text-white font-semibold text-lg tracking-wide hover:bg-[#c7a97f] transition font-serif"
                            onClick={() => navigate('/payment')}
                        >
                            ADD TO BAG
                        </button>
                    </div>
                </div>

            </main>
            {/* Footer (copied from Home.jsx) */}
            <motion.footer
                className="bg-white text-[#292F36] pt-16 pb-8 px-4 sm:px-8 lg:px-[8%] border-t border-gray-200 mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-12">
                    {/* Brand */}
                    <motion.div variants={fadeIn} className="space-y-5 max-w-sm">
                        <div className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
                            <span className="text-[#CDA274] text-3xl">▲</span>
                            <span className="font-serif">Interno</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600">
                            It is a long established fact that a reader will be distracted lookings.
                        </p>
                        <div className="flex items-center gap-5 text-gray-500 text-sm">
                            {['f', 't', 'in', 'ig'].map(icon => (
                                <motion.span key={icon} whileHover={{ scale: 1.2, color: '#CDA274' }} className="cursor-pointer uppercase tracking-wide">
                                    {icon}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                    {/* Pages */}
                    <motion.div variants={slideLeft} className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Pages</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="hover:text-[#CDA274] transition">About Us</li>
                            <li className="hover:text-[#CDA274] transition">Our Projects</li>
                            <li className="hover:text-[#CDA274] transition">Our Team</li>
                            <li className="hover:text-[#CDA274] transition">Contact Us</li>
                            <li className="hover:text-[#CDA274] transition">Services</li>
                        </ul>
                    </motion.div>
                    {/* Services */}
                    <motion.div variants={slideRight} className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="hover:text-[#CDA274] transition">Kitchen</li>
                            <li className="hover:text-[#CDA274] transition">Living Area</li>
                            <li className="hover:text-[#CDA274] transition">Bathroom</li>
                            <li className="hover:text-[#CDA274] transition">Dinning Hall</li>
                            <li className="hover:text-[#CDA274] transition">Bedroom</li>
                        </ul>
                    </motion.div>
                    {/* Contact */}
                    <motion.div variants={fadeIn} className="space-y-5">
                        <h4 className="font-serif font-semibold text-lg">Contact</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <p>55 East Birchwood Ave.<br />Brooklyn, New York 11201</p>
                            <p>contact@interno.com</p>
                            <p>(123) 456 - 7890</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div variants={fadeIn} className="max-w-7xl mx-auto border-t border-gray-200 pt-6 text-center text-[11px] sm:text-xs text-gray-500 tracking-wide">
                    Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
                </motion.div>
            </motion.footer>
        </div>
    );
}

export default Productdetail;
<li className="hover:text-[#CDA274] transition">Our Products</li>
