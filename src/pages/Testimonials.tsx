import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <div className="py-20 animate-fade-in bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2D5016]">Client Stories</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from our satisfied homeowners about their journey with Modular House.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4 border-[#E8F5E9]"
                />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                <p className="text-[#D4AF37] font-medium text-sm uppercase tracking-wide">{testimonial.role}</p>
              </div>
              <div className="relative">
                <svg className="absolute -top-4 -left-4 w-8 h-8 text-gray-100 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.357 13.571 17.389 13.078V11H14.017V4H22V11C22 15.971 18.527 21 14.017 21ZM5 21L5 18C5 16.896 5.304 15.923 5.912 15.081C6.52 14.239 7.34 13.571 8.372 13.078V11H5V4H12.983V11C12.983 15.971 9.51 21 5 21Z" />
                </svg>
                <p className="text-gray-600 italic relative z-10 px-4">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="mt-8 flex justify-center text-[#D4AF37]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
