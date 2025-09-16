
import React from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";



function About() {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header Section */}
      <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-gray-100">
        <img
          src="/Background.jpg"
          alt="Kitchen background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="relative z-10 bg-white rounded-t-2xl shadow-lg px-8 py-8 md:px-16 md:py-12 flex flex-col items-center mt-24">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">About Us</h1>
          <p className="text-xs text-gray-500">Home / About Us</p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="flex justify-center mt-[-60px] md:mt-[-80px] mb-12">
        <div className="bg-white shadow-xl rounded-2xl px-8 py-10 md:px-16 md:py-14 w-full max-w-xl relative flex flex-col items-center">
          <span className="text-3xl text-gray-400 mb-2">&ldquo;</span>
          <p className="text-center text-lg md:text-xl font-medium text-gray-800 italic mb-2">
            I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it
          </p>
          <span className="text-xs text-gray-500">-BUNNY WILLIAMS</span>
          <div className="absolute border-4 border-[#F4F0EC] rounded-2xl w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[-1]" />
        </div>
      </div>

      {/* What We Do & The End Result Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0 mb-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-900">What We Do</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points of using that it has a more-or-less normal.
          </p>
          <button className="w-fit px-6 py-2 bg-gray-900 text-white rounded-full text-sm shadow hover:bg-gray-800 transition flex items-center gap-2">
            Our Concept <span className="ml-1">→</span>
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <img src="/image3.png" alt="What We Do" className="rounded-2xl w-full h-48 object-cover" />
        </div>
        <div className="flex flex-col gap-6 order-3 md:order-4">
          <img src="/kichen3.jpg" alt="The End Result" className="rounded-2xl w-full h-48 object-cover" />
        </div>
        <div className="flex flex-col gap-6 order-4 md:order-3">
          <h2 className="text-2xl font-semibold text-gray-900">The End Result</h2>
          <p className="text-sm text-gray-600 max-w-xs">
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points of using that it has a more-or-less normal.
          </p>
          <button className="w-fit px-6 py-2 bg-gray-900 text-white rounded-full text-sm shadow hover:bg-gray-800 transition flex items-center gap-2">
            Our Portfolio <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* What the People Thinks About Us */}
      <div className="bg-[#F4F0EC] py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 text-center">What the People Thinks<br />About Us</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center">
            <img src="/Photo1.jpg" alt="Person 1" className="rounded-2xl w-40 h-44 object-cover" />
            <img src="/Photo2.jpg" alt="Person 2" className="rounded-2xl w-40 h-44 object-cover" />
            <div className="bg-white rounded-2xl shadow-md px-6 py-6 flex flex-col items-center w-40 h-44 justify-center">
              <span className="font-semibold text-gray-900 mb-1">Natasha Julie</span>
              <span className="text-xs text-gray-500 mb-2">Design, Australia</span>
              <div className="flex gap-2 mb-2">
                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-instagram"></i></a>
              </div>
              <span className="text-xs text-gray-500 mb-1">+1 (378) 400-1234</span>
              <span className="text-xs text-gray-500">julie@email.com</span>
            </div>
            <img src="/Photo3.jpg" alt="Person 3" className="rounded-2xl w-40 h-44 object-cover" />
          </div>
        </div>
      </div>

      {/* Creative Project Contact Section */}
      <div className="max-w-2xl mx-auto py-16 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2">Creative project? Let's have<br />a productive talk.</h2>
        <form className="w-full flex flex-col gap-4 mt-6">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input type="text" placeholder="Name" className="flex-1 border-b border-gray-300 focus:outline-none py-2 px-2 bg-transparent" />
            <input type="email" placeholder="Email" className="flex-1 border-b border-gray-300 focus:outline-none py-2 px-2 bg-transparent" />
          </div>
          <textarea placeholder="Hello I am Intrested in.." className="border-b border-gray-300 focus:outline-none py-2 px-2 bg-transparent resize-none" rows={2} />
          <div className="flex justify-center mt-4">
            <button type="submit" className="px-8 py-2 bg-gray-900 text-white rounded-full text-sm shadow hover:bg-gray-800 transition flex items-center gap-2">
              Send Now <span className="ml-1">→</span>
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-4 md:px-0">
          <div className="flex flex-col gap-4 min-w-[180px]">
            <div className="flex items-center gap-2 mb-2">
              <img src="/Logo.jpg" alt="Logo" className="w-8 h-8 rounded" />
              <span className="font-semibold text-lg text-gray-900">Interno</span>
            </div>
            <p className="text-xs text-gray-500 max-w-[180px]">It is a long established fact that a reader will be distracted lookings.</p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 flex-1 justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Pages</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>About Us</li>
                <li>Our Projects</li>
                <li>Our Team</li>
                <li>Contact Us</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>Kitcahn</li>
                <li>Living Area</li>
                <li>Bathroom</li>
                <li>Dinning Hall</li>
                <li>Bedroom</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>55 East Birchwood Ave.<br />Brooklyn, New York 11201</li>
                <li>contact@interno.com</li>
                <li>(123) 456 - 7890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow
        </div>
      </footer>
    </div>
  );
}

export default About;
