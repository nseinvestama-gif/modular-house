﻿﻿﻿﻿﻿﻿﻿import { Link } from 'react-router-dom';
import { houses, testimonials } from '../data';

export default function Home() {
  const featuredHouses = houses.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[500px] md:h-[600px] flex items-center justify-center bg-[#0F3460] overflow-hidden py-20 md:py-0">
        <div className="absolute inset-0 bg-[url('./products/real-4.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            INCLUSIVE MODULAR CONCEPTS<br/>
            <span className="text-[#F59E0B] text-xl md:text-4xl font-normal tracking-widest mt-2 block">CREATING SOLUTIONS FOR EVERYONE</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
            Solusi hunian dan kantor modular modern yang Cepat, Kuat, dan Hemat Biaya.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-[#F59E0B] text-[#0F3460] font-bold rounded-lg hover:bg-[#e0900a] transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Lihat Produk
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#0F3460] transition-all"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Our Product Description Section (Collage) */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/2">
                <div className="bg-[#0F3460] p-6 rounded-lg shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B] rounded-bl-full opacity-20"></div>
                   <h2 className="text-3xl font-bold text-white mb-2 uppercase relative z-10">Our Product</h2>
                   <h3 className="text-[#F59E0B] text-xl tracking-widest uppercase mb-6 relative z-10">Modular House</h3>
                   
                   {/* Collage Grid */}
                   <div className="grid grid-cols-2 gap-3 relative z-10">
                      {/* Main Tall Image */}
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg group">
                        <img 
                          src="./products/real-3.jpg" 
                          alt="2 Floor Modular" 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Right Column Stacked Images */}
                      <div className="flex flex-col gap-3">
                        <div className="relative h-32 md:h-40 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg group">
                           <img 
                              src="./products/real-1.jpg" 
                              alt="Modular Compact" 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                           />
                        </div>
                        <div className="relative h-30 md:h-36 flex-grow rounded-lg overflow-hidden border-2 border-white/20 shadow-lg group">
                           <img 
                              src="./products/real-2.jpg" 
                              alt="Modular Standard" 
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                           />
                        </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="w-full md:w-1/2 space-y-6 text-gray-700">
                <h2 className="text-3xl font-bold text-[#0F3460] leading-tight">
                  Efficient, Durable, and Modern Modular Residential & Office Solutions
                </h2>
                <p className="leading-relaxed">
                  Modular container systems developed by <strong>PT Prefab Modular Construction Indonesia</strong> offer a smart solution for modern residential and office needs that require fast construction, structural strength, and cost efficiency.
                </p>
                <p className="leading-relaxed">
                  Built with engineered steel structures and high-performance insulation panels, our modular units are designed to perform reliably under extreme weather conditions, high temperatures, noise exposure, and seismic activity.
                </p>
                <p className="leading-relaxed">
                  Our solutions are available in a range of standard modular configurations, with customization options to meet specific project requirements in terms of size, layout, and functionality.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F3460] mb-4">Produk Unggulan</h2>
            <div className="w-24 h-1 bg-[#F59E0B] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHouses.map((house) => (
              <Link key={house.id} to="/gallery" className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={house.image}
                      alt={house.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/f3f4f6/0F3460?text=Image';
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-[#F59E0B] text-[#0F3460] font-bold px-3 py-1 rounded text-sm shadow">
                      {house.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0F3460] mb-2 group-hover:text-[#F59E0B] transition-colors">
                      {house.title}
                    </h3>
                    <p className="text-[#D92323] font-bold text-lg">{house.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block px-8 py-3 border-2 border-[#0F3460] text-[#0F3460] font-bold rounded-lg hover:bg-[#0F3460] hover:text-white transition-all"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-[#0F3460] text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Apa Kata Mereka?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#1a4b85] p-8 rounded-xl shadow-lg border border-[#ffffff10]">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#F59E0B]"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
