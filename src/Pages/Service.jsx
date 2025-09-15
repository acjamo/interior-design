import React from "react";
import { motion } from "framer-motion";

// Animation variants
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

// Services data with local images from public folder
const services = [
  { title: "Kitchen Design", desc: "Modern and functional kitchen spaces.", img: "/kichen1.png" },
  { title: "Living Area", desc: "Comfortable and stylish living rooms.", img: "/image1.png" },
  { title: "Bathroom", desc: "Elegant and practical bathrooms.", img: "/service1.jpg" },
  { title: "Dining Hall", desc: "Spacious dining areas for families.", img: "/image3.png" },
  { title: "Bedroom", desc: "Cozy and relaxing bedrooms.", img: "/Photo5.jpg" }
];

// Work steps using local images
const workSteps = [
  { step: "01", title: "Consultation", desc: "We discuss your needs.", img: "/Photo1.jpg" },
  { step: "02", title: "Planning", desc: "We create a design plan.", img: "/Photo2.jpg" },
  { step: "03", title: "Execution", desc: "We build and decorate.", img: "/Photo3.jpg" },
  { step: "04", title: "Delivery", desc: "We hand over your dream space.", img: "/Photo4.jpg" }
];

const Service = () => {
  return (
    <>
      <motion.div className="font-serif bg-white min-h-screen" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        {/* Header Section */}
  <motion.div className="bg-cover bg-center h-44 flex items-center justify-center" style={{ backgroundImage: "url('/background2.png')" }} variants={fadeIn}>
          <motion.h2 className="bg-white rounded-xl px-12 py-6 text-3xl font-semibold shadow-md" variants={zoomIn}>Services</motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 px-4" variants={fadeIn}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              className={`rounded-xl shadow-md p-6 text-center min-h-[280px] flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl ${i === 4 ? 'bg-[#f6f3ee]' : 'bg-white'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={zoomIn}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            >
              <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-lg mb-4" loading="lazy" />
              <motion.h4 className="font-semibold text-lg mb-2 transition-colors duration-300 hover:text-[#cdaa7c]" whileHover={{ color: '#cdaa7c' }}>{s.title}</motion.h4>
              <motion.p className="text-gray-500 text-sm mb-3 px-1">{s.desc}</motion.p>
              <motion.span className="text-[#cdaa7c] font-medium text-sm cursor-pointer transition-colors duration-300 hover:text-[#a67c52] mt-auto" whileHover={{ color: '#a67c52' }}>Read More &rarr;</motion.span>
            </motion.div>
          ))}
        </motion.div>
        {/* How We Work Section */}
        <div className="bg-[#f6f3ee] rounded-3xl max-w-5xl mx-auto my-16 p-12 animate-fade-in">
          <h3 className="text-center font-bold text-2xl mb-3">How We Work</h3>
          <p className="text-center text-gray-500 mb-10">It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {workSteps.map((step, i) => (
              <div key={i} className="flex items-center mb-8 group">
                <img src={step.img} alt={step.title} className="w-36 h-36 object-cover rounded-[32px_0_32px_0] mr-6 shadow-md transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <span className="text-2xl text-[#cdaa7c] font-bold transition-colors duration-300 group-hover:text-[#a67c52]">{step.step}</span>
                  <h5 className="font-semibold text-lg my-2 transition-colors duration-300 group-hover:text-[#cdaa7c]">{step.title}</h5>
                  <p className="text-gray-500 text-base transition-colors duration-300 group-hover:text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#222] rounded-2xl max-w-3xl mx-auto mb-12 py-10 text-center animate-fade-in">
          <h3 className="text-white font-semibold text-xl mb-3">Wanna join the interno?</h3>
          <p className="text-white mb-6">It is a long established fact will be distracted.</p>
          <button className="bg-[#cdaa7c] text-white rounded-md px-8 py-3 font-semibold text-base cursor-pointer transition-all duration-300 hover:bg-[#a67c52] hover:scale-105 animate-pulse">Contact With Us &rarr;</button>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-8">
          <div className="flex flex-wrap justify-between max-w-5xl mx-auto gap-8">
            <div className="min-w-[180px]">
              <h4 className="font-bold text-lg mb-2">Interno</h4>
              <p className="text-gray-500 text-sm">It is a long established fact that a reader will be distracted lookings.</p>
              <div className="mt-3 flex space-x-2 text-gray-500 text-lg">
                <span className="hover:animate-bounce"><i className="fab fa-facebook" /></span>
                <span className="hover:animate-bounce"><i className="fab fa-twitter" /></span>
                <span className="hover:animate-bounce"><i className="fab fa-linkedin" /></span>
                <span className="hover:animate-bounce"><i className="fab fa-instagram" /></span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-2">Pages</h5>
              <ul className="list-none p-0 text-gray-500 text-sm">
                <li>About Us</li>
                <li>Our Projects</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-2">Services</h5>
              <ul className="list-none p-0 text-gray-500 text-sm">
                <li>Kichan</li>
                <li>Living Area</li>
                <li>Bathroom</li>
                <li>Dining Hall</li>
                <li>Bedroom</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-2">Contact</h5>
              <ul className="list-none p-0 text-gray-500 text-sm">
                <li>55 East Birchwood Ave.<br />Brooklyn, New York 11201</li>
                <li>contact@interno.com</li>
                <li>(123) 456 - 7890</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-xs mt-8">
            Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
          </div>
        </footer>
      </motion.div>
    </>
  );
};

// Ensure default export for Service component  
export default Service;