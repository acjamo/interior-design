

import { motion } from 'framer-motion';

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


function Blog() {
    // Animation variants array for demo
    const variantsArr = [fadeIn, slideLeft, slideRight, zoomIn, rotateIn, flipUp];
    return (
        <motion.div
            className="min-h-screen bg-white flex flex-col items-center py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
        >
            <motion.h1 className="text-4xl font-bold mb-6 text-[#292F36]" variants={zoomIn} whileHover={{ scale: 1.05, color: '#CDA274' }}>
                Blog
            </motion.h1>
            <motion.p className="text-lg text-gray-600 mb-12 max-w-2xl text-center" variants={slideLeft} whileHover={{ x: 10, color: '#CDA274' }}>
                Welcome to our blog! Scroll down to see posts animate into view.
            </motion.p>
            {/* Example blog posts with all animation variants and hover */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-100 rounded-xl p-6 shadow transition flex flex-col items-center"
                        variants={variantsArr[i % variantsArr.length]}
                        whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, boxShadow: '0 8px 32px #CDA274' }}
                    >
                        <motion.div
                            className="w-full h-40 bg-gray-300 rounded mb-4"
                            variants={zoomIn}
                            whileHover={{ scale: 1.08, backgroundColor: '#CDA274' }}
                        />
                        <motion.h2
                            className="text-xl font-semibold mb-2"
                            variants={slideRight}
                            whileHover={{ color: '#CDA274', x: 8 }}
                        >
                            Blog Post {i}
                        </motion.h2>
                        <motion.p
                            className="text-gray-500 mb-4 text-center"
                            variants={fadeIn}
                            whileHover={{ color: '#292F36', y: -4 }}
                        >
                            This is a sample description for blog post {i}. Scroll to animate more posts!
                        </motion.p>
                        <motion.button
                            className="bg-[#CDA274] text-white px-4 py-2 rounded hover:bg-[#292F36] transition"
                            whileHover={{ scale: 1.1, backgroundColor: '#292F36', color: '#fff' }}
                        >
                            Read More
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
export default Blog;
