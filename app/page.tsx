'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Shop } from '@/components/Shop';
import { ExperienceCenter } from '@/components/ExperienceCenter';
import { CustomerReviews } from '@/components/CustomerReviews';
import { FAQ } from '@/components/FAQ';
import { StoreLocation } from '@/components/StoreLocation';
import { FloatingSupport } from '@/components/FloatingSupport';
import { AdminDashboard } from '@/components/AdminDashboard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckoutModal } from '@/components/CheckoutModal';
import { AdminLoginModal } from '@/components/AdminLoginModal';
import { Toaster } from 'sonner';
import { Order, Product } from '@/lib/types';

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  if (isAdmin) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        <Toaster theme="dark" />
        <AdminDashboard 
          orders={orders} 
          setOrders={setOrders} 
          onLogout={() => setIsAdmin(false)} 
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      <Toaster theme="dark" />
      <Header onLockClick={() => setShowAdminLogin(true)} />
      
      <Hero />
      <Shop onBuyClick={(product) => setSelectedProduct(product)} />
      <CustomerReviews />
      <ExperienceCenter />
      <FAQ />
      <StoreLocation />
      <Footer onAdminClick={() => setShowAdminLogin(true)} />
      <FloatingSupport />

      {showAdminLogin && (
        <AdminLoginModal 
          onClose={() => setShowAdminLogin(false)} 
          onSuccess={() => {
            setShowAdminLogin(false);
            setIsAdmin(true);
          }} 
        />
      )}

      {selectedProduct && (
        <CheckoutModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onSubmit={(orderData) => {
            const newOrder: Order = {
              id: Math.random().toString(36).substr(2, 9).toUpperCase(),
              product: selectedProduct,
              customer: orderData,
              status: 'Pending',
              createdAt: new Date().toISOString(),
            };
            setOrders([...orders, newOrder]);
            setSelectedProduct(null);
          }}
        />
      )}
    </main>
  );
}
