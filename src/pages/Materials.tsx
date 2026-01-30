import { materials } from '../data';

export default function Materials() {
  return (
    <div className="py-20 animate-fade-in bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0F3460]">Spesifikasi Material</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Standar kualitas tinggi untuk durabilitas dan kenyamanan jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {materials.map((material, index) => (
            <div 
              key={material.id} 
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={material.image}
                  alt={material.title}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover hover:shadow-3xl transition-shadow duration-300"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-[#0F3460]">{material.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {material.description}
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-[#E0F2FE] text-[#0F3460] rounded-lg font-medium text-sm">
                    Tahan Lama
                  </div>
                  <div className="px-4 py-2 bg-[#FFF7ED] text-[#D97706] rounded-lg font-medium text-sm">
                    High Quality
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
