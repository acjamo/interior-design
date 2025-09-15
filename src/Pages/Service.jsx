


function Service() {
  return (
    <div>
      <div className="relative w-full h-[220px] overflow-hidden">
        <img
          src="/service1.jpg"
          alt="Service Background"
          className="w-full h-[220px] object-cover brightness-75"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl px-16 py-8 shadow-lg text-center min-w-[340px]">
          <h1 className="m-0 text-4xl font-semibold text-gray-900">Services</h1>
          <p className="mt-3 text-lg text-gray-600">Home / Services</p>
        </div>
      </div>
      {/* Services Grid Section */}
      <section id="services-section" aria-label="Our Services" className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Project Plan</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Interior Work</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Retail Design</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Row 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">2d/3d Art Work</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-orange-50 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Interior Work</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Decoration Work</h2>
            <p className="text-gray-600 mb-6">There are many variations of the passages of lorem Ipsum from available, majority.</p>
            <a href="#" className="font-semibold text-gray-700 flex items-center gap-2 hover:text-orange-500 transition">Read More <span className="text-orange-400">→</span></a>
          </div>
        </div>
      </section>
    </div>
  );


}



export default Service;