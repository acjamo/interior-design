import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants with delays and custom transitions
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

function Home() {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        setResult(search ? `You searched for: ${search}` : 'Please enter a search term.');
    };
    return (
        <>
            {/* Hero Section - Interactive motion with search bar */}
            <motion.section
                className="relative flex flex-col items-center justify-center min-h-[60vh] md:flex-row md:items-center md:min-h-[80vh] bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-[8%]"
                style={{ backgroundImage: "url('/Background.jpg')" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.div className="w-full md:w-1/2 max-w-xl md:ml-0 lg:ml-[8%] py-8 md:py-0" variants={fadeIn}>
                    <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#292F36] mb-4 leading-tight" variants={zoomIn} whileHover={{ scale: 1.05, color: '#CDA274' }}>
                        Let Your Home<br />Be Unique
                    </motion.h1>
                    <motion.p className="text-base sm:text-lg text-[#292F36] mb-8" variants={slideLeft} whileHover={{ x: 10, color: '#CDA274' }}>
                        There are many variations of the passages of lorem Ipsum from available, variations of the passages.
                    </motion.p>
                    <form className="flex items-center gap-2 mb-6" onSubmit={handleSearch}>
                        <motion.input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search..."
                            className="border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#292F36]"
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                        <motion.button
                            type="submit"
                            className="bg-[#292F36] text-white p-2 rounded-full hover:bg-[#22262b] transition flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            aria-label="Search"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </motion.button>
                    </form>
                    {result && (
                        <motion.div className="text-[#292F36] text-base mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            {result}
                        </motion.div>
                    )}
                    <motion.button
                        className="bg-[#292F36] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base font-semibold flex items-center gap-2 transition"
                        variants={slideRight}
                        whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started <span className="text-lg">→</span>
                    </motion.button>
                </motion.div>
            </motion.section>

            {/* Services Section - Staggered flipUp, interactive cards */}
            <motion.section className="py-12 px-4 sm:px-6 md:px-8 lg:px-[8%] bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.h2 className="text-3xl md:text-4xl font-bold text-[#292F36] mb-12 text-center" variants={zoomIn}>
                    Our Services
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    <motion.div className="border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center cursor-pointer" variants={flipUp} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.h3 className="text-xl sm:text-2xl font-bold text-[#292F36] mb-4" variants={zoomIn}>Project Plan</motion.h3>
                        <motion.h3 className="text-xl sm:text-2xl font-bold text-[#292F36] mb-4" variants={zoomIn}>Product Plan</motion.h3>
                        {/* Products Section - Slide, Zoom, interactive cards */}
                        Our Products
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Success Product</motion.div>
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Active Product</motion.div>
                        <li className="hover:text-[#CDA274] transition">Our Products</li>
                        <motion.p className="text-gray-500 mb-8 text-sm sm:text-base" variants={fadeIn}>
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </motion.p>
                        <motion.a href="#" className="flex items-center gap-2 font-semibold text-[#292F36] hover:text-[#CDA274] transition" variants={slideRight} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                            Read More <span className="text-[#CDA274] text-lg">→</span>
                        </motion.a>
                    </motion.div>
                    <motion.div className="border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center cursor-pointer" variants={flipUp} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.h3 className="text-xl sm:text-2xl font-bold text-[#292F36] mb-4" variants={zoomIn}>Interior Work</motion.h3>
                        <motion.p className="text-gray-500 mb-8 text-sm sm:text-base" variants={fadeIn}>
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </motion.p>
                        <motion.a href="#" className="flex items-center gap-2 font-semibold text-[#292F36] hover:text-[#CDA274] transition" variants={slideLeft} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                            Read More <span className="text-[#CDA274] text-lg">→</span>
                        </motion.a>
                    </motion.div>
                    <motion.div className="border border-gray-200 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center cursor-pointer" variants={flipUp} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.h3 className="text-xl sm:text-2xl font-bold text-[#292F36] mb-4" variants={zoomIn}>Realization</motion.h3>
                        <motion.p className="text-gray-500 mb-8 text-sm sm:text-base" variants={fadeIn}>
                            There are many variations of the passages of lorem Ipsum from available, majority.
                        </motion.p>
                        <motion.a href="#" className="flex items-center gap-2 font-semibold text-[#292F36] hover:text-[#CDA274] transition" variants={slideRight} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                            Read More <span className="text-[#CDA274] text-lg">→</span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section - RotateIn for image, Slide for text, interactive phone box */}
            <motion.section className="py-12 px-4 sm:px-6 md:px-8 lg:px-[8%] bg-white flex flex-col md:flex-row items-center gap-8 md:gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.div className="flex-1 w-full max-w-xl" variants={slideLeft}>
                    <motion.h2 className="text-4xl md:text-5xl font-bold text-[#292F36] mb-6 leading-tight" variants={zoomIn}>
                        We Create The Art<br />Of Stylish Living<br />Stylishly
                    </motion.h2>
                    <motion.p className="text-gray-500 mb-8" variants={fadeIn}>
                        It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.
                    </motion.p>
                    <motion.div className="flex items-center gap-4 mb-8" variants={fadeIn}>
                        <motion.div className="bg-[#F4F0EC] rounded-full p-4" variants={zoomIn} whileHover={{ scale: 1.15, backgroundColor: '#CDA274' }}>
                            {/* Phone Icon */}
                            <svg width="32" height="32" fill="none" stroke="#CDA274" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.24.72 3.31a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.07.35 2.18.59 3.31.72A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </motion.div>
                        <div>
                            <div className="text-xl font-bold text-[#292F36]">012345678</div>
                            <div className="text-gray-500">Call Us Anytime</div>
                        </div>
                    </motion.div>
                    <motion.button
                        className="bg-[#292F36] text-white px-8 py-4 rounded-xl text-base font-semibold flex items-center gap-2 transition"
                        variants={zoomIn}
                        whileHover={{ scale: 1.08, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Free Estimate <span className="text-lg">→</span>
                    </motion.button>
                </motion.div>
                <motion.div className="flex-1 w-full flex justify-center" variants={rotateIn}>
                    <motion.img
                        src="/image1.png"
                        alt="Stylish Interior"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto rounded-[0_60px_0_0] md:rounded-[0_120px_0_0]"
                        style={{ borderTopRightRadius: "60px", md: { borderTopRightRadius: "120px" } }}
                        initial="hidden"
                        whileInView="visible"
                        variants={zoomIn}
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }}
                    />
                </motion.div>
            </motion.section>

            {/* Testimonials Section - Staggered fade, interactive cards */}
            <motion.section className="py-12 px-4 sm:px-6 md:px-8 lg:px-[8%] bg-[#F4F0EC] rounded-[32px] md:rounded-[60px] flex flex-col items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.h2 className="text-4xl md:text-5xl font-bold text-[#292F36] mb-12 text-center" variants={fadeIn}>
                    What the People Thinks<br />About Us
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    <motion.div className="bg-white rounded-[32px] p-8 flex flex-col items-start cursor-pointer" variants={fadeIn} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.div className="w-16 h-16 rounded-full overflow-hidden mb-4" variants={zoomIn}>
                            <motion.img src="pepole.png" alt="Nattasha Mith" className="w-full h-full object-cover" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        </motion.div>
                        <motion.div className="font-bold text-xl text-[#292F36] mb-1" variants={slideLeft}>Natasha Mith</motion.div>
                        <motion.div className="text-gray-500 mb-4" variants={fadeIn}>Sydney, USA</motion.div>
                        <motion.p className="text-gray-500" variants={fadeIn}>
                            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.
                        </motion.p>
                    </motion.div>
                    <motion.div className="bg-white rounded-[32px] p-8 flex flex-col items-start cursor-pointer" variants={fadeIn} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.div className="w-16 h-16 rounded-full overflow-hidden mb-4" variants={zoomIn}>
                            <motion.img src="pepole.png" alt="Raymond Galario" className="w-full h-full object-cover" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        </motion.div>
                        <motion.div className="font-bold text-xl text-[#292F36] mb-1" variants={slideRight}>Raymond Galario</motion.div>
                        <motion.div className="text-gray-500 mb-4" variants={fadeIn}>Sydney, Australia</motion.div>
                        <motion.p className="text-gray-500" variants={fadeIn}>
                            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.
                        </motion.p>
                    </motion.div>
                    <motion.div className="bg-white rounded-[32px] p-8 flex flex-col items-start cursor-pointer" variants={fadeIn} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.div className="w-16 h-16 rounded-full overflow-hidden mb-4" variants={zoomIn}>
                            <motion.img src="/pepole.png" alt="Nattasha Mith" className="w-full h-full object-cover" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        </motion.div>
                        <motion.div className="font-bold text-xl text-[#292F36] mb-1" variants={zoomIn}>Benny Roll</motion.div>
                        <motion.div className="text-gray-500 mb-4" variants={fadeIn}>Sydney, New York</motion.div>
                        <motion.p className="text-gray-500" variants={fadeIn}>
                            Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Projects Section - Slide, Zoom, interactive cards */}
            <motion.section className="py-12 px-4 sm:px-6 md:px-8 lg:px-[8%] bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.h2 className="text-3xl md:text-4xl font-bold text-[#292F36] mb-12 text-center" variants={zoomIn}>
                    Our Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
                    <motion.div className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col cursor-pointer" variants={slideLeft} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.img src="/kichen1.png" alt="Modern Kitchen" className="w-full h-[340px] object-cover rounded-t-[40px]" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.08 }} />
                        <div className="p-6 flex items-center justify-between">
                            <motion.div variants={fadeIn}>
                                <motion.div className="text-xl font-bold text-[#292F36] mb-1" variants={slideLeft}>Modern Kitchan</motion.div>
                                <motion.div className="text-gray-500 text-base" variants={fadeIn}>Decor / Architecture</motion.div>
                            </motion.div>
                            <motion.button
                                className="bg-[#F4F0EC] rounded-full w-12 h-12 flex items-center justify-center transition"
                                variants={zoomIn}
                                whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-[#CDA274] text-2xl">→</span>
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div className="bg-white rounded-[40px] overflow-hidden shadow-sm flex flex-col cursor-pointer" variants={slideRight} whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.img src="/kichen2.png" alt="Modern Kitchen" className="w-full h-[340px] object-cover rounded-t-[40px]" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.08 }} />
                        <div className="p-6 flex items-center justify-between">
                            <motion.div variants={fadeIn}>
                                <motion.div className="text-xl font-bold text-[#292F36] mb-1" variants={slideRight}>Modern Kitchan</motion.div>
                                <motion.div className="text-gray-500 text-base" variants={fadeIn}>Decor / Architecture</motion.div>
                            </motion.div>
                            <motion.button
                                className="bg-[#F4F0EC] rounded-full w-12 h-12 flex items-center justify-center transition"
                                variants={zoomIn}
                                whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-[#CDA274] text-2xl">→</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section - Zoom, interactive numbers */}
            <motion.section className="w-full py-10 sm:py-12 md:py-16 bg-[#F4F0EC] flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center rounded-[24px] md:rounded-[40px]">
                    <motion.div className="flex flex-col items-center justify-center cursor-pointer" variants={zoomIn} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                        <motion.div className="text-6xl font-bold text-[#CDA274] mb-2" variants={zoomIn}>12</motion.div>
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Years Of Experience</motion.div>
                    </motion.div>
                    <motion.div className="hidden md:block h-20 border-r border-[#CDA274] mx-auto" variants={fadeIn}></motion.div>
                    <motion.div className="flex flex-col items-center justify-center cursor-pointer" variants={zoomIn} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                        <motion.div className="text-6xl font-bold text-[#CDA274] mb-2" variants={zoomIn}>85</motion.div>
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Success Project</motion.div>
                    </motion.div>
                    <motion.div className="hidden md:block h-20 border-r border-[#CDA274] mx-auto" variants={fadeIn}></motion.div>
                    <motion.div className="flex flex-col items-center justify-center cursor-pointer" variants={zoomIn} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                        <motion.div className="text-6xl font-bold text-[#CDA274] mb-2" variants={zoomIn}>15</motion.div>
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Active Project</motion.div>
                    </motion.div>
                    <motion.div className="hidden md:block h-20 border-r border-[#CDA274] mx-auto" variants={fadeIn}></motion.div>
                    <motion.div className="flex flex-col items-center justify-center cursor-pointer" variants={zoomIn} whileHover={{ scale: 1.12, color: '#CDA274' }}>
                        <motion.div className="text-6xl font-bold text-[#CDA274] mb-2" variants={zoomIn}>95</motion.div>
                        <motion.div className="text-gray-500 text-lg" variants={fadeIn}>Happy Customers</motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Articles Section - Slide, Zoom, Fade, interactive cards */}
            <motion.section className="py-12 px-4 sm:px-6 md:px-8 lg:px-[8%] bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.h2 className="text-4xl md:text-5xl font-bold text-[#292F36] mb-4 text-center font-serif" variants={zoomIn}>
                    Articles & News
                </motion.h2>
                <motion.p className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto" variants={fadeIn}>
                    It is a long established fact that a reader will be distracted by the of readable content
                    of a page when looking at its layouts the points of using.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 sm:mb-16">
                    <motion.div className="bg-white rounded-[32px] border border-[#F4F0EC] p-6 flex flex-col shadow-sm cursor-pointer" variants={slideLeft} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.img src="/image3.png" alt="Kitchen Design" className="w-full h-[180px] object-cover rounded-[24px] mb-6" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        <motion.span className="bg-[#F4F0EC] text-[#292F36] text-xs font-medium px-4 py-1 rounded-lg mb-4 w-fit" variants={zoomIn}>Kichan Design</motion.span>
                        <motion.div className="font-bold text-lg text-[#292F36] mb-2 font-serif" variants={fadeIn}>
                            Let’s Get Solution For Building Construction Work
                        </motion.div>
                        <motion.div className="flex items-center justify-between mt-4" variants={fadeIn}>
                            <span className="text-gray-400 text-sm">26 December,2022</span>
                            <motion.button
                                className="bg-[#F4F0EC] rounded-full w-8 h-8 flex items-center justify-center transition"
                                variants={zoomIn}
                                whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-[#CDA274] text-xl">→</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="bg-[#F4F0EC] rounded-[32px] p-6 flex flex-col shadow-sm cursor-pointer" variants={zoomIn} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.img src="/image4.png" alt="Living Design" className="w-full h-[180px] object-cover rounded-[24px] mb-6" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        <motion.span className="bg-white text-[#292F36] text-xs font-medium px-4 py-1 rounded-lg mb-4 w-fit" variants={zoomIn}>Living Design</motion.span>
                        <motion.div className="font-bold text-lg text-[#292F36] mb-2 font-serif" variants={fadeIn}>
                            Low Cost Latest Invented Interior Designing Ideas.
                        </motion.div>
                        <motion.div className="flex items-center justify-between mt-4" variants={fadeIn}>
                            <span className="text-gray-400 text-sm">22 December,2022</span>
                            <motion.button
                                className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition"
                                variants={zoomIn}
                                whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-[#CDA274] text-xl">→</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="bg-white rounded-[32px] border border-[#F4F0EC] p-6 flex flex-col shadow-sm cursor-pointer" variants={slideRight} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #CDA27433' }} whileTap={{ scale: 0.98 }}>
                        <motion.img src="/image5.png" alt="Interior Design" className="w-full h-[180px] object-cover rounded-[24px] mb-6" initial="hidden" whileInView="visible" variants={zoomIn} whileHover={{ scale: 1.1 }} />
                        <motion.span className="bg-[#F4F0EC] text-[#292F36] text-xs font-medium px-4 py-1 rounded-lg mb-4 w-fit" variants={zoomIn}>Interior Design</motion.span>
                        <motion.div className="font-bold text-lg text-[#292F36] mb-2 font-serif" variants={fadeIn}>
                            Best For Any Office & Business Interior Solution
                        </motion.div>
                        <motion.div className="flex items-center justify-between mt-4" variants={fadeIn}>
                            <span className="text-gray-400 text-sm">25 December,2022</span>
                            <motion.button
                                className="bg-[#F4F0EC] rounded-full w-8 h-8 flex items-center justify-center transition"
                                variants={zoomIn}
                                whileHover={{ scale: 1.15, backgroundColor: '#CDA274', color: '#292F36', boxShadow: '0 8px 32px #CDA27433' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-[#CDA274] text-xl">→</span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section - Matches provided design (dark, rounded, centered) */}
            <motion.section
                className="px-4 sm:px-6 md:px-10 lg:px-[8%] mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.div
                    className="w-full bg-[#292F36] text-center text-white rounded-[40px] md:rounded-[60px] py-16 sm:py-20 px-4 sm:px-8 flex flex-col items-center justify-center"
                    variants={fadeIn}
                    whileHover={{ boxShadow: '0 12px 48px #00000033', scale: 1.01 }}
                >
                    <motion.h2
                        className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight"
                        variants={zoomIn}
                        whileHover={{ color: '#CDA274' }}
                    >
                        Wanna join the interno?
                    </motion.h2>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg text-gray-200 mb-8 max-w-2xl"
                        variants={slideRight}
                    >
                        It is a long established fact  will be distracted.
                    </motion.p>
                    <Link to="/contact">
                        <motion.button
                            className="bg-[#CDA274] text-[#292F36] font-semibold rounded-xl px-8 sm:px-10 md:px-14 py-3 sm:py-4 text-sm sm:text-base flex items-center gap-2 shadow-md hover:shadow-lg transition"
                            variants={zoomIn}
                            whileHover={{ scale: 1.08, backgroundColor: '#e2b88e', boxShadow: '0 8px 32px #CDA27455' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact With Us <span className="text-lg">→</span>
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.section>
            {/* Footer Section - Dark themed */}
            <motion.footer
                className="bg-white text-[#292F36] pt-16 pb-8 px-4 sm:px-8 lg:px-[8%] border-t border-gray-200"
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
        </>

    );
}

export default Home;
