import Link from 'next/link';
import { notFound } from 'next/navigation';

const dummyCars = [
  { 
    id: "1", 
    merk: "Mercedes Benz", 
    model: "C250 AMG", 
    tahun: 2013, 
    harga: 250000000, 
    deskripsi: "Kondisi sangat mulus seperti baru, kilometer rendah (15rb km), servis rutin record bengkel resmi Hartono Mercy Surabaya. Pajak hidup bulan 06 2027, atas nama pt.", 
    gambar: "/c250.png" 
  },
  { 
    id: "2", 
    merk: "BMW", 
    model: "E90 320i", 
    tahun: 2011, 
    harga: 165000000, 
    deskripsi: "Mesin standard pabrik super responsif, eksterior full coating 3 layer. Interior bersih bebas bau rokok, kaki-kaki senyap empuk. Tinggal gas saja.", 
    gambar: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: "3", 
    merk: "Audi", 
    model: "A4", 
    tahun: 2011, 
    harga: 125000000, 
    deskripsi: "Matic No jedug, kaca film crystalin, Head unit apple car play. Dokumen surat BPKB & STNK lengkap dan dijamin keasliannya.", 
    gambar: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80" 
  }
];

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = dummyCars.find(c => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b bg-white flex items-center justify-between">
          <Link href="/cars" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            ← Kembali ke Katalog
          </Link>
          <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
            Tersedia (Ready)
          </span>
        </div>
        
        <img src={car.gambar} alt={car.model} className="w-full h-80 object-cover bg-gray-100" />
        
        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b pb-6">
            <div>
              <h1 className="text-3xl font-black text-gray-900">{car.merk} {car.model}</h1>
              <p className="text-gray-500 mt-1">Tahun Rilis: {car.tahun}</p>
            </div>
            <div className="text-2xl font-black text-blue-600">
              Rp {car.harga.toLocaleString('id-ID')}
            </div>
          </div>

          <div className="py-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-400 mb-2">Deskripsi Unit</h3>
            <p className="text-gray-600 leading-relaxed text-base">{car.deskripsi}</p>
          </div>

          <div className="mt-4">
            <a 
              href={`https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20mobil%20${car.merk}%20${car.model}%20yang%20di%20Bursa%20Mobil.`}
              target="_blank"
              className="w-full flex items-center justify-center bg-green-600 text-white py-3.5 px-4 rounded-xl font-bold text-center hover:bg-green-700 shadow-sm transition-all"
            >
              Hubungi Pemilik via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}