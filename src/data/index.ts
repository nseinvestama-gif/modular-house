export const houses = [
  {
    id: '1',
    title: '3X3M',
    category: '1 Lantai',
    price: 'Rp 30.000.000',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&q=80&w=800', 
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
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=800', 
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
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800',
    specs: { bedrooms: 0, bathrooms: 0, area: 'Custom' },
    description: 'Sistem modular tumpuk (stackable) yang bisa dibongkar pasang sesuai kebutuhan proyek besar.',
    features: ['Sistem Modular Fleksibel', 'Bisa Ditumpuk', 'Mudah Dimobilisasi', 'Kustomisasi Penuh']
  },
  {
    id: '6',
    title: 'CUSTOM (WELDED)',
    category: 'Custom',
    price: 'Call for Price',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?auto=format&fit=crop&q=80&w=800',
    specs: { bedrooms: 0, bathrooms: 0, area: 'Custom' },
    description: 'Bangunan permanen/semi-permanen dengan sistem las untuk durabilitas maksimal.',
    features: ['Struktur Las Kuat', 'Bentang Lebar', 'Atap Custom', 'Durabilitas Tinggi']
  }
];

export const addons = [
  { title: 'Indoor Toilet', price: 'Rp 8.000.000', image: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { title: 'AC 1 PK (Midea)', price: 'Rp 4.500.000', image: 'https://images.unsplash.com/photo-1614634458320-b302187f5d92?auto=format&fit=crop&q=80&w=800' },
  { title: 'Partition', price: 'Rp 2.000.000', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800' },
  { title: 'Stairs', price: 'Rp 8.500.000', image: 'https://images.unsplash.com/photo-1552858485-64906f238295?auto=format&fit=crop&q=80&w=800' },
  { title: 'Steel Door', price: 'Rp 1.500.000', image: 'https://images.unsplash.com/photo-1506307323861-124b8979e2c6?auto=format&fit=crop&q=80&w=800' },
  { title: 'Window', price: 'Rp 1.000.000', image: 'https://images.unsplash.com/photo-1506188440788-b4b0e5021c38?auto=format&fit=crop&q=80&w=800' }
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
    image: 'https://images.unsplash.com/photo-1533630654590-e5558d19736c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Rockwool Insulation',
    description: 'Insulasi serat batuan yang tahan api (fire resistant) dan peredam suara yang sangat baik.',
    image: 'https://images.unsplash.com/photo-1606760596637-67c34b676766?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Kaca Tempered 6mm',
    description: 'Kaca keamanan tinggi yang 5x lebih kuat dari kaca biasa. Memberikan tampilan modern dan elegan.',
    image: 'https://images.unsplash.com/photo-1505569127510-72c21921316b?auto=format&fit=crop&q=80&w=1000'
  }
];
