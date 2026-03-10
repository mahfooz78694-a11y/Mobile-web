'use client';

import { useState } from 'react';
import { Order } from '@/lib/types';
import { PRODUCTS } from '@/lib/data';
import { LogOut, Package, IndianRupee, Clock, CheckCircle2, LayoutDashboard, Users, Smartphone, Settings, Menu, X } from 'lucide-react';

export function AdminDashboard({ 
  orders, 
  setOrders, 
  onLogout 
}: { 
  orders: Order[], 
  setOrders: (orders: Order[]) => void,
  onLogout: () => void 
}) {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalRevenue = orders.reduce((sum, order) => sum + order.product.price, 0);
  const pendingOrders = orders.filter(o => o.status === 'Pending').length;
  const completedOrders = orders.filter(o => o.status === 'Shipped').length;
  const uniqueCustomersCount = new Set(orders.map(o => o.customer.mobile)).size;

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status } : o));
  };

  const updateExpectedDelivery = (orderId: string, date: string) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, expectedDelivery: date } : o));
  };

  const sidebarOptions = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Orders', icon: Package },
    { name: 'Inventory', icon: Smartphone },
    { name: 'Customers', icon: Users },
    { name: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ willChange: 'transform' }}>
                <div className="absolute top-0 right-0 p-6 opacity-10"><IndianRupee size={64} /></div>
                <p className="text-white/50 text-sm font-medium mb-2">Total Revenue</p>
                <p className="text-3xl font-bold text-white">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(totalRevenue)}
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ willChange: 'transform' }}>
                <div className="absolute top-0 right-0 p-6 opacity-10"><Clock size={64} /></div>
                <p className="text-white/50 text-sm font-medium mb-2">Pending Orders</p>
                <p className="text-3xl font-bold text-white">{pendingOrders}</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1" style={{ willChange: 'transform' }}>
                <div className="absolute top-0 right-0 p-6 opacity-10"><Users size={64} /></div>
                <p className="text-white/50 text-sm font-medium mb-2">Total Customers</p>
                <p className="text-3xl font-bold text-white">{uniqueCustomersCount}</p>
              </div>
            </div>
          </div>
        );
      case 'Orders':
        return (
          <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Order Management</h2>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-medium">{orders.length} Total</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="text-white/50 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">Order ID</th>
                    <th className="px-6 py-4 font-medium">Customer</th>
                    <th className="px-6 py-4 font-medium">Product</th>
                    <th className="px-6 py-4 font-medium">Price</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Expected Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {orders.length === 0 ? (
                    <tr><td colSpan={6} className="px-6 py-8 text-center text-white/50">No orders yet.</td></tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 text-white/70 font-mono">{order.id}</td>
                        <td className="px-6 py-4">
                          <div className="text-white font-medium">{order.customer.name}</div>
                          <div className="text-white/50 text-xs mt-1">{order.customer.mobile}</div>
                          <div className="text-white/50 text-xs mt-0.5 truncate max-w-[200px]" title={order.customer.address}>
                            {order.customer.address}, {order.customer.pincode}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-white">{order.product.name}</td>
                        <td className="px-6 py-4 text-purple-400">
                          {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(order.product.price)}
                        </td>
                        <td className="px-6 py-4">
                          <select 
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                            className={`bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                              order.status === 'Pending' ? 'text-yellow-400' : 
                              order.status === 'Processing' ? 'text-blue-400' : 'text-green-400'
                            }`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <input 
                            type="date" 
                            value={order.expectedDelivery || ''}
                            onChange={(e) => updateExpectedDelivery(order.id, e.target.value)}
                            className="bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500 [color-scheme:dark]"
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Inventory':
        return (
          <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Product Inventory</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="text-white/50 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">ID</th>
                    <th className="px-6 py-4 font-medium">Product Name</th>
                    <th className="px-6 py-4 font-medium">Price (INR)</th>
                    <th className="px-6 py-4 font-medium">Stock Status</th>
                    <th className="px-6 py-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-white/50 font-mono">#{product.id.padStart(4, '0')}</td>
                      <td className="px-6 py-4 text-white font-medium flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-white/10 overflow-hidden relative">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
                        </div>
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-purple-400">
                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(product.price)}
                      </td>
                      <td className="px-6 py-4"><span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs">In Stock</span></td>
                      <td className="px-6 py-4"><button className="text-white/50 hover:text-white text-xs underline">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Customers':
        const uniqueCustomers = Array.from(new Set(orders.map(o => o.customer.mobile))).map(mobile => {
          return orders.find(o => o.customer.mobile === mobile)?.customer;
        }).filter(Boolean);
        return (
          <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">Customer Database</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="text-white/50 bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-medium">Name</th>
                    <th className="px-6 py-4 font-medium">Mobile</th>
                    <th className="px-6 py-4 font-medium">Address</th>
                    <th className="px-6 py-4 font-medium">Pincode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {uniqueCustomers.length === 0 ? (
                    <tr><td colSpan={4} className="px-6 py-8 text-center text-white/50">No customers yet.</td></tr>
                  ) : (
                    uniqueCustomers.map((customer, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-4 text-white font-medium">{customer?.name}</td>
                        <td className="px-6 py-4 text-white/70">{customer?.mobile}</td>
                        <td className="px-6 py-4 text-white/70">{customer?.address}</td>
                        <td className="px-6 py-4 text-white/70">{customer?.pincode}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-start min-h-[400px]">
            <h2 className="text-2xl font-semibold text-white mb-6">Store Settings</h2>
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                <span className="text-white/80">Change Store Name</span>
                <button className="text-purple-400 text-sm hover:text-purple-300">Edit</button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                <span className="text-white/80">Update Secret Passcode</span>
                <button className="text-purple-400 text-sm hover:text-purple-300">Edit</button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/30 border border-white/5">
                <span className="text-white/80">Edit Experience Center Photos</span>
                <button className="text-purple-400 text-sm hover:text-purple-300">Edit</button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSidebarContent = () => (
    <>
      <div className="p-6 border-b border-white/10 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            NEXUS ADMIN
          </h1>
          <p className="text-xs text-white/40 mt-1">Super User Dashboard</p>
        </div>
        <button 
          className="md:hidden text-white/50 hover:text-white"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {sidebarOptions.map((option) => (
          <button 
            key={option.name}
            onClick={() => {
              setActiveTab(option.name);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
              activeTab === option.name 
                ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white border border-purple-500/30' 
                : 'text-white/50 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <option.icon size={18} className={activeTab === option.name ? 'text-purple-400' : ''} />
            {option.name}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400/70 hover:text-red-400 hover:bg-red-400/10 transition-colors font-medium"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex-col z-20">
        {renderSidebarContent()}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 w-64 border-r border-white/10 bg-black/90 backdrop-blur-xl flex flex-col z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ willChange: 'transform' }}
      >
        {renderSidebarContent()}
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10 w-full">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden text-white/70 hover:text-white p-2 -ml-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
              <h1 className="text-2xl md:text-3xl font-bold text-white">{activeTab}</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-sm text-white/50">Logged in as Super Admin</span>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shrink-0">
                B
              </div>
            </div>
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
