import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp Redirect
    const text = `Halo, saya ${formData.name}. Saya tertarik dengan Modular House. \nBudget: ${formData.budget}\nPesan: ${formData.message}`;
    window.open(`https://wa.me/6282124987380?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 animate-fade-in bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0F3460]">Hubungi Kami</h1>
            <p className="text-gray-600 text-lg mb-12">
              Punya pertanyaan seputar spesifikasi atau harga? Tim kami siap membantu Anda.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0F3460] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-2">Kunjungi Showroom</h3>
                  <p className="text-gray-600">
                    Jl. Mulawarman RT. 032 RW 000<br />
                    Sepinggan Raya, Balikpapan Selatan<br />
                    Kota Balikpapan, Kalimantan Timur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0F3460] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-2">Email</h3>
                  <p className="text-gray-600">admin@inclusivemodular.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0F3460] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F3460] mb-2">WhatsApp Only</h3>
                  <div className="flex flex-col gap-1">
                    <a href="https://wa.me/6282124987380" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#0F3460] transition-colors">
                      0821-2498-7380
                    </a>
                    <a href="https://wa.me/6282195384091" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-[#0F3460] transition-colors">
                      0821-9538-4091
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-[#0F3460]">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0F3460] focus:ring-2 focus:ring-[#0F3460]/20 outline-none transition-all"
                    placeholder="Nama Anda"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0F3460] focus:ring-2 focus:ring-[#0F3460]/20 outline-none transition-all"
                    placeholder="email@contoh.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">No. Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0F3460] focus:ring-2 focus:ring-[#0F3460]/20 outline-none transition-all"
                    placeholder="+62..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimasi Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0F3460] focus:ring-2 focus:ring-[#0F3460]/20 outline-none transition-all"
                  >
                    <option value="">Pilih Range</option>
                    <option value="Standard">Standard (Rp 35jt - 55jt)</option>
                    <option value="Premium">Premium (Rp 55jt - 85jt)</option>
                    <option value="Luxury">Luxury (Rp 85jt+)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0F3460] focus:ring-2 focus:ring-[#0F3460]/20 outline-none transition-all resize-none"
                  placeholder="Ceritakan kebutuhan hunian modular Anda..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0F3460] text-white font-bold rounded-lg hover:bg-[#0A2540] transition-all shadow-lg hover:shadow-[#0F3460]/30"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
