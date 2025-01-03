import React from 'react';
import { Logo } from './components/Logo';
import { MaintenanceMessage } from './components/MaintenanceMessage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const whatsappNumber = '56994505526';
  
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 text-white">
        <Logo />
        <MaintenanceMessage />
      </div>

      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </div>
  );
}