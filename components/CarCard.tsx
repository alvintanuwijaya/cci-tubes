import Link from 'next/link';

export interface Car {
  id: string;
  merk: string;
  model: string;
  tahun: number;
  harga: number;
  gambar: string;
}

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="border rounded-xl shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300">
      <img src={car.gambar} alt={car.model} className="w-full h-48 object-cover bg-gray-100" />
      <div className="p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {car.merk}
        </span>
        <h3 className="text-xl font-bold text-gray-800 mt-2">{car.model}</h3>
        <p className="text-sm text-gray-500 mt-1">Tahun Produksi: {car.tahun}</p>
        
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <span className="text-lg font-black text-gray-900">
            Rp {car.harga.toLocaleString('id-ID')}
          </span>
          <Link 
            href={`/cars/${car.id}`} 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}