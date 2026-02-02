﻿﻿
export const houses = [
  {
    id: '1',
    title: '3X3M',
    category: '1 Lantai',
    price: 'Rp 30.000.000',
    image: './products/real-1.jpg', 
    specs: { bedrooms: 0, bathrooms: 0, area: '9m' },
    description: 'Unit kompak 3x3m. Cocok untuk pos keamanan, booth tiket, atau gudang kecil.',
    features: ['Struktur Baja', 'Dinding Sandwich Panel', '1 Pintu & 1 Jendela', 'Instalasi Cepat'],
    variants: [
      { name: 'Standard Type', price: 'Rp 30.000.000' },
      { name: 'EPS Fire Resistance', price: 'Rp 32.000.000' },
      { name: 'Rockwool Type', price: 'Rp 34.000.000' },
      { name: 'Standard Type + WC', price: 'Rp 38.000.000' }
    ]
  },
  {
    id: '2',
    title: '3X6M',
    category: '1 Lantai',
    price: 'Rp 35.000.000',
    image: './products/real-2.jpg', 
    specs: { bedrooms: 1, bathrooms: 0, area: '18m' },
    description: 'Unit standar 3x6m. Ideal untuk kantor lapangan, mess karyawan, atau hunian sementara.',
    features: ['Struktur Baja Kokoh', 'Dinding Insulasi', 'Tahan Cuaca', 'Peredam Suara'],
    variants: [
      { name: 'Standard Type', price: 'Rp 35.000.000' },
      { name: 'EPS Fire Resistance', price: 'Rp 38.000.000' },
      { name: 'Rockwool Type', price: 'Rp 40.000.000' },
      { name: 'Standard Type + WC', price: 'Rp 43.000.000' }
    ]
  },
  {
    id: '3',
    title: '3X6M 2 FLOORS',
    category: '2 Lantai',
    price: 'Rp 85.000.000',
    image: './products/real-3.jpg',
    specs: { bedrooms: 2, bathrooms: 1, area: '36m' },
    description: 'Solusi 2 lantai untuk efisiensi lahan. Dilengkapi tangga eksternal dan balkon.',
    features: ['Hemat Lahan', 'Tangga & Railing', 'Konstruksi Bertingkat Aman', 'Layout Fleksibel'],
    variants: [
      { name: 'Standard Type', price: 'Rp 85.000.000' },
      { name: 'EPS Fire Resistance', price: 'Rp 87.000.000' },
      { name: 'Rockwool Type', price: 'Rp 89.000.000' },
      { name: 'Standard Type + Toilet', price: 'Rp 92.000.000' }
    ]
  },
  {
    id: '4',
    title: '3X6M + TEMPERED GLASS',
    category: 'Kaca Mewah',
    price: 'Rp 55.000.000',
    image: './products/real-4.jpg',
    specs: { bedrooms: 1, bathrooms: 0, area: '18m' },
    description: 'Tampilan premium dengan dinding kaca tempered full. Cocok untuk cafe, showroom, atau villa.',
    features: ['Kaca Tempered Tebal', 'Pencahayaan Alami', 'Frame Hitam Elegan', 'Tampilan Modern'],
    variants: [
      { name: 'Standard Type', price: 'Rp 55.000.000' },
      { name: 'EPS Fire Resistance', price: 'Rp 58.000.000' },
      { name: 'Rockwool Type', price: 'Rp 60.000.000' },
      { name: 'Standard Type + Toilet', price: 'Rp 63.000.000' }
    ]
  },
  {
    id: '5',
    title: 'CUSTOM (KNOCK DOWN)',
    category: 'Custom',
    price: 'Call for Price',
    image: './products/real-5.jpg',
    specs: { bedrooms: 0, bathrooms: 0, area: 'Custom' },
    description: 'Sistem modular tumpuk (stackable) yang bisa dibongkar pasang sesuai kebutuhan proyek besar.',
    features: ['Sistem Modular Fleksibel', 'Bisa Ditumpuk', 'Mudah Dimobilisasi', 'Kustomisasi Penuh']
  },
  {
    id: '6',
    title: 'CUSTOM (WELDED)',
    category: 'Custom',
    price: 'Call for Price',
    image: './products/real-6.jpg',
    specs: { bedrooms: 0, bathrooms: 0, area: 'Custom' },
    description: 'Bangunan permanen/semi-permanen dengan sistem las untuk durabilitas maksimal.',
    features: ['Struktur Las Kuat', 'Bentang Lebar', 'Atap Custom', 'Durabilitas Tinggi']
  }
];

export const addons = [
  { title: 'Indoor Toilet', price: 'Rp 8.000.000', image: './products/real-7.jpg' },
  { title: 'AC 1 PK (Midea)', price: 'Rp 4.500.000', image: './products/real-8.jpg' },
  { title: 'Partition', price: 'Rp 2.000.000', image: './products/real-9.jpg' },
  { title: 'Stairs', price: 'Rp 8.500.000', image: './products/real-10.jpg' },
  { title: 'Steel Door', price: 'Rp 1.500.000', image: './products/real-11.jpg' },
  { title: 'Window', price: 'Rp 1.000.000', image: './products/real-12.jpg' }
];

export const testimonials = [
  {
    id: '1',
    name: 'Budi Santoso',
    role: 'Project Manager',
    content: 'Unit 3x6m sangat membantu operasional site kami. Pemasangan cepat dan unit kokoh.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Siti Aminah',
    role: 'Pemilik Cafe',
    content: 'Tipe Tempered Glass bikin cafe saya terlihat sangat instagramable. Pelanggan suka!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Developer',
    content: 'Pesan custom knockdown untuk mess pekerja. Sangat efisien bisa dipindah-pindah.',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
    rating: 5
  }
];

export const materials = [
  {
    id: '1',
    title: 'Sandwich Panel EPS',
    description: 'Material dinding ringan dengan insulasi styrofoam (density 10-15). Tahan panas dan ekonomis.',
    image: './products/real-13.jpg'
  },
  {
    id: '2',
    title: 'Rockwool Insulation',
    description: 'Insulasi serat batuan yang tahan api (fire resistant) dan peredam suara yang sangat baik.',
    image: './products/real-14.jpg'
  },
  {
    id: '3',
    title: 'Kaca Tempered 6mm',
    description: 'Kaca keamanan tinggi yang 5x lebih kuat dari kaca biasa. Memberikan tampilan modern dan elegan.',
    image: './products/real-4.jpg'
  }
];
