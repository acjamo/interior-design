

import React from "react";
import { motion } from "framer-motion";


// Animation variants from Home page
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
const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } }
};
const rotateIn = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.7, delay: 0.5 } }
};
const flipUp = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 0.7, delay: 0.5 } }
};
const stagger = {
    visible: { transition: { staggerChildren: 0.25 } }
};


export default function Contact() {
    return (
        <motion.div
            className="bg-white min-h-screen flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
        >
            {/* Header */}
            <motion.header className="w-full flex flex-col items-center py-10 bg-white" variants={zoomIn} whileHover={{ scale: 1.03 }}>
                <motion.h1 className="text-3xl font-bold" variants={fadeIn} whileHover={{ color: '#CDA274', scale: 1.05 }}>Contact Us</motion.h1>
                <motion.p className="text-gray-500 mt-2" variants={slideLeft} whileHover={{ x: 8, color: '#CDA274' }}>Home / Contact</motion.p>
            </motion.header>
            {/* Image below header */}
            <motion.div className="w-full flex justify-center bg-white" variants={rotateIn} whileHover={{ scale: 1.04, rotate: 2 }}>
                <motion.img src="/public/image1.png" alt="Header Section" className="w-full max-w-5xl h-64 object-cover rounded-xl shadow mb-8" variants={zoomIn} whileHover={{ scale: 1.08 }} />
            </motion.div>

            {/* Main Content */}
            <motion.main className="flex flex-col items-center flex-1" variants={stagger}>
                <motion.h2 className="text-2xl font-semibold text-center mt-8 mb-6" variants={fadeIn} whileHover={{ color: '#CDA274', scale: 1.04 }}>
                    We love meeting new people<br />and helping them.
                </motion.h2>
                <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
                    {/* Contact Info Sidebar */}
                    <motion.aside className="bg-gray-100 rounded-xl p-8 flex flex-col items-start gap-4 md:w-1/3" variants={slideLeft} whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #CDA274' }}>
                        <motion.div variants={fadeIn}>
                            <p className="font-medium">info@yourdomain.com</p>
                            <p className="text-gray-500 text-sm">Email</p>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <p className="font-medium">+1 (378) 400-1234</p>
                            <p className="text-gray-500 text-sm">Phone</p>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <p className="font-medium">www.yourdomain.com</p>
                            <p className="text-gray-500 text-sm">Website</p>
                        </motion.div>
                        <motion.div className="flex gap-3 mt-2" variants={fadeIn}>
                            {/* Social icons (replace with actual icons as needed) */}
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>F</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>T</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>I</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>L</motion.span>
                        </motion.div>
                    </motion.aside>

                    {/* Contact Form */}
                    <motion.form className="flex-1 grid grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow" variants={slideRight} whileHover={{ scale: 1.02, boxShadow: '0 8px 32px #CDA274' }}>
                        <motion.input type="text" placeholder="Name" className="border-b p-2 outline-none col-span-1" variants={fadeIn} whileFocus={{ borderColor: '#CDA274' }} />
                        <motion.input type="email" placeholder="Email" className="border-b p-2 outline-none col-span-1" variants={fadeIn} whileFocus={{ borderColor: '#CDA274' }} />
                        <motion.input type="text" placeholder="Subject" className="border-b p-2 outline-none col-span-2" variants={fadeIn} whileFocus={{ borderColor: '#CDA274' }} />
                        <motion.input type="text" placeholder="Phone" className="border-b p-2 outline-none col-span-2" variants={fadeIn} whileFocus={{ borderColor: '#CDA274' }} />
                        <motion.textarea placeholder="Hello I am Interested in.." className="border-b p-2 outline-none col-span-2 h-24 resize-none" variants={fadeIn} whileFocus={{ borderColor: '#CDA274' }} />
                        <motion.button type="submit" className="col-span-2 mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition" variants={zoomIn} whileHover={{ scale: 1.08, backgroundColor: '#CDA274', color: '#fff' }}>
                            Send Now →
                        </motion.button>
                    </motion.form>
                </div>

                {/* Map Section */}
                <motion.div className="w-full max-w-4xl mt-12 mb-8" variants={flipUp} whileHover={{ scale: 1.04, rotateX: 8 }}>
                    <motion.div className="rounded-2xl overflow-hidden" variants={rotateIn}>
                        <motion.iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.726222323839!2d45.31816247477244!3d2.046934397963342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58c5b2b2b2b2b3%3A0x2b2b2b2b2b2b2b2b!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sso!4v1694781781781!5m2!1sen!2sso"
                            width="100%"
                            height="256"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Somali Location Map"
                            className="w-full h-64"
                            variants={zoomIn}
                            whileHover={{ scale: 1.02 }}
                        />
                    </motion.div>
                </motion.div>
            </motion.main>

            {/* Footer */}
            <motion.footer className="bg-white border-t py-10 mt-auto" variants={fadeIn}>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                    <motion.div variants={fadeIn}>
                        <h3 className="font-bold text-lg mb-2">Interno</h3>
                        <p className="text-gray-500 mb-2">It is a long established fact that a reader will be distracted lookings.</p>
                        <div className="flex gap-3 mt-2">
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>F</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>T</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>I</motion.span>
                            <motion.span className="text-gray-600 hover:text-black cursor-pointer" whileHover={{ color: '#CDA274', scale: 1.2 }}>L</motion.span>
                        </div>
                    </motion.div>
                    <motion.div variants={slideLeft}>
                        <h4 className="font-semibold mb-2">Pages</h4>
                        <ul className="space-y-1">
                            <li>About Us</li>
                            <li>Our Projects</li>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                            <li>Services</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={slideRight}>
                        <h4 className="font-semibold mb-2">Services</h4>
                        <ul className="space-y-1">
                            <li>Kitchen</li>
                            <li>Living Area</li>
                            <li>Bathroom</li>
                            <li>Dinning Hall</li>
                            <li>Bedroom</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={fadeIn}>
                        <h4 className="font-semibold mb-2">Contact</h4>
                        <p>55 East Birchwood Ave.<br />Brooklyn, New York 11201</p>
                        <p>contact@interno.com</p>
                        <p>(123) 456 - 7890</p>
                    </motion.div>
                </div>
                <motion.div className="text-center text-gray-400 text-xs mt-8" variants={fadeIn}>
                    Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
                </motion.div>
            </motion.footer>
        </motion.div>
    );
}
