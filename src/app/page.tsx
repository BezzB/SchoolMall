import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import PromoBanner from '@/components/PromoBanner';
import FeaturedCategories from '@/components/FeaturedCategories';
import TrendingProducts from '@/components/TrendingProducts';
import BrandsShowcase from '@/components/BrandsShowcase';
import Testimonials from '@/components/Testimonials';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <TrendingProducts />
        <Products />
        <PromoBanner />
        <BrandsShowcase />
        <Testimonials />
        <NewsletterSubscribe />
      </main>
      <Footer />
    </>
  );
} 