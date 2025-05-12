import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | SchoolMall',
  description: 'Browse our wide selection of school-related products',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product placeholders - will be replaced with real data */}
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium">Product Name</h3>
                  <p className="text-gray-500 text-sm mb-2">Category</p>
                  <p className="font-bold text-lg">KSh 1,999</p>
                </div>
              </div>
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
} 