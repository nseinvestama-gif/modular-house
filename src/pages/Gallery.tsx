import { houses, addons } from '../data';
import { useState } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 003.68 12.004a11.813 11.813 0 001.593 5.929l-1.693 6.185 6.324-1.658a11.822 11.822 0 005.657 1.441h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Gallery() {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', '1 Lantai', '2 Lantai', 'Kaca Mewah', 'Custom'];

  const filteredHouses = filter === 'Semua' 
    ? houses 
    : houses.filter(house => house.category === filter);

  return (
    <div className="pt-8 pb-16 bg-white">
      {/* Header Section */}
      <div className="bg-[#0F3460] py-12 mb-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-wide">
            Size Variations
          </h1>
          <p className="text-[#F59E0B] text-xl font-medium tracking-widest uppercase">
            Modular House
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${
                filter === cat
                  ? 'bg-[#0F3460] border-[#0F3460] text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-[#0F3460] hover:text-[#0F3460]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {filteredHouses.map((house) => (
            <div key={house.id} className="group bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={house.image}
                  alt={house.title}
                  className="w-full h-full object-cover p-0 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x400/f3f4f6/0F3460?text=No+Image';
                  }}
                />
                {/* Price Tag Overlay - Red style from brochure */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow-lg border-l-4 border-[#D92323]">
                   <span className="text-[#D92323] font-bold text-lg">{house.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold text-[#D92323] mb-1 uppercase leading-none font-oswald tracking-tight">
                    {house.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {house.category}
                  </span>
                </div>

                <div className="flex gap-4 mb-6 text-sm text-gray-600 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {house.specs.area}
                  </div>
                  {house.specs.bedrooms > 0 && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {house.specs.bedrooms} Bed
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                  {house.description}
                </p>

                {/* Variants List (Price List) */}
                {house.variants && (
                  <div className="mt-2 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 border-b border-gray-200 pb-2">
                      Pilihan Tipe:
                    </p>
                    <ul className="space-y-3">
                      {house.variants.map((v, i) => (
                        <li key={i} className="flex justify-between items-center text-sm group/item">
                          <span className="text-gray-700 font-medium group-hover/item:text-[#0F3460] transition-colors">{v.name}</span>
                          <span className="text-[#D92323] font-bold whitespace-nowrap bg-white px-2 py-0.5 rounded border border-gray-100 shadow-sm">{v.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!house.variants && (
                  <ul className="space-y-2 mb-6">
                    {house.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F3460]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/6282124987380?text=Halo, saya tertarik dengan unit ${house.title}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    Hubungi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-24">
          <div className="bg-[#0F3460] py-8 px-8 mb-10 rounded-t-lg inline-block w-full">
             <h2 className="text-3xl font-bold text-white uppercase tracking-wide">
               Price List <span className="text-[#F59E0B] text-xl block md:inline md:ml-2 font-normal">Additional Options</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 group">
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                   <img 
                      src={addon.image} 
                      alt={addon.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x300/e5e7eb/0F3460?text=Add-on';
                      }}
                   />
                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">{addon.title}</h3>
                      <p className="text-[#F59E0B] font-medium">+ {addon.price}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">
              ( Prices may change at any time )
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
