"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import CarCard, { Car } from '../../components/CarCard';

interface CarWithCategory extends Car {
  kategori: string;
}

const dummyCars: CarWithCategory[] = [
  { id: "1", merk: "Mercedes Benz", model: "C250 AMG", tahun: 2013, harga: 250000000, gambar: "/c250.png", kategori: "Sedan" },
  { id: "2", merk: "BMW", model: "E90 320i", tahun: 2011, harga: 165000000, gambar: "/e90.png", kategori: "Sedan" },
  { id: "3", merk: "Audi", model: "A4", tahun: 2011, harga: 125000000, gambar: "/a4.png", kategori: "Sedan" }
];

const categories = ["Semua", "Sedan", "SUV", "Coupe"];

export default function CarsPage() {
  const [cars, setCars] = useState<CarWithCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCars(dummyCars);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.merk.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "Semua" || car.kategori === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Katalog Mobil</h1>
            <p className="text-sm text-gray-500 mt-1">Menampilkan unit mobil siap pakai</p>
          </div>
          <Link href="/" className="text-sm font-medium text-blue-600 hover:text-blue-500 self-start sm:self-center">
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Ketik merk atau model mobil yang kamu cari... (Contoh: Mercedes Benz)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm transition-all text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
            <p className="text-gray-500 font-medium">Mobil yang kamu cari tidak ditemukan.</p>
          </div>
        )}

      </div>
    </div>
  );
}