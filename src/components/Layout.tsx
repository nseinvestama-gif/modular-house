﻿﻿﻿import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

// WhatsApp Icon SVG Component
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/gallery' },
    { name: 'Material', path: '/materials' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.svg" 
                alt="Modulra" 
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[#0F3460] font-black text-3xl tracking-tight font-sans">MODULAR</span>
                <div className="flex items-center gap-2">
                   <div className="h-[2px] w-4 bg-[#F59E0B]"></div>
                   <span className="text-[#F59E0B] font-bold text-[10px] tracking-[0.3em] uppercase">HOUSE</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#F59E0B] ${
                    location.pathname === link.path ? 'text-[#0F3460] font-bold' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[#0F3460] text-white text-sm font-medium rounded-lg hover:bg-[#0A2540] transition-all shadow-lg shadow-[#0F3460]/20"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-[#0F3460]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === link.path ? 'text-[#0F3460]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center px-5 py-3 bg-[#0F3460] text-white font-medium rounded-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#0F3460] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white tracking-wider">MODULAR HOUSE</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Creating Solutions For Everyone. Solusi hunian modular yang cepat, hemat, dan berkualitas.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-[#F59E0B]">Produk</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><Link to="/gallery" className="hover:text-white transition-colors">Modular 3x6m</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Modular 2 Lantai</Link></li>
                <li><Link to="/gallery" className="hover:text-white transition-colors">Tempered Glass</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-[#F59E0B]">Perusahaan</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Karir</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 text-[#F59E0B]">Kontak</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>admin@modularhouse.com</li>
                <li>
                  <div className="flex flex-col gap-2 mt-2">
                    <a href="https://wa.me/6282124987380" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors group">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>0821-2498-7380</span>
                    </a>
                    <a href="https://wa.me/6282195384091" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors group">
                       <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                      <span>0821-9538-4091</span>
                    </a>
                  </div>
                </li>
                <li>Jl. Mulawarman RT. 032 RW 000, Sepinggan Raya, Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
             2026 Modular House. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
