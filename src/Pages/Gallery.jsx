import { motion } from 'framer-motion';

// Animation variants for gallery
const galleryStagger = {
    visible: { transition: { staggerChildren: 0.15 } }
};
const galleryItem = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const images = [
    '/Photo1.jpg',
    '/Photo2.jpg',
    '/Photo3.jpg',
    '/Photo4.jpg',
    '/Photo5.jpg',
    '/service1.jpg',
    '/kichen1.png',
    '/kichen2.png',
    '/kichen3.jpg',
    '/kichen4.png',
    '/image1.png',
    '/image3.png',
    '/image4.png',
    '/image5.png',
    '/p2.png',
    '/p3.png',
    '/p4.png',
    '/p5.png',
    '/p6.png',
    '/p7.png',
    '/p8.png',
    '/p9.png',
    '/p10.png',
    '/pd1.png',
    '/pd2.png',
    '/contact1.jpg',
    '/background2.png',
];

function Gallery() {
    return (
        <motion.div
            className="min-h-screen bg-white flex flex-col items-center py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={galleryStagger}
        >
            <motion.h1
                className="text-4xl font-bold mb-8 text-[#292F36] tracking-tight"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Gallery
            </motion.h1>
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 w-full max-w-6xl px-4"
                variants={galleryStagger}
            >
                {images.map((src, i) => (
                    <motion.div
                        key={src}
                        className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-100"
                        variants={galleryItem}
                        whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10, zIndex: 2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{ perspective: 800 }}
                    >
                        <motion.img
                            src={src}
                            alt={`Gallery ${i + 1}`}
                            className="w-full h-60 object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-100"
                            initial={{ scale: 1, opacity: 0.8 }}
                            whileHover={{ scale: 1.1, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default Gallery;
