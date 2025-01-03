import React from 'react';
import logo from '/logo.webp';

export function Logo() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <img 
        src={logo} 
        alt="Cabañas Curi-Huapi"
        style={{ display: 'inline-block' }} 
      />
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>Cabañas Curi-Huapi</h1>
    </div>
  );
}
