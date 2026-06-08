import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerApp from './CustomerApp';
import AdminApp from './AdminApp';
import { signInCustomer, subscribeToAuth } from './store';
import { Logo } from './components/Logo';

export default function App() {
  const [user, setUser] = useState<any | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Initiate anonymous signin so order updates/creates are valid with auth
    signInCustomer().then(() => {});

    const unsubscribe = subscribeToAuth((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoadingAuth(false);
    });

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  if (loadingAuth || showSplash) {
    return (
      <div className="min-h-screen bg-[#1B422B] flex flex-col items-center justify-center">
        <Logo className="w-32 h-32 mb-8 animate-pulse shadow-2xl rounded-[24px] border border-[#F8FAF7]/20 p-2" />
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F8FAF7]"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerApp />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  );
}


