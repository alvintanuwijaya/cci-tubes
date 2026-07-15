import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border text-sm font-medium text-gray-700">
          Aplikasi 'FIH' tempat jual beli mobil bekas premium 
        </div>
        <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl">
          Berbagai Brand mulai dari Jepang sampai Eropa
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mx-auto">
         Mudah diakses,cepat,amanah,dealer berpengalaman berbagai mobil kompleks.
        </p>
        <div className="pt-4">
          <Link 
            href="/cars" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Catalogue
          </Link>
        </div>
      </div>
    </main>
  );
}