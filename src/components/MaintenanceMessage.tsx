import { MapPin } from 'lucide-react';

export function MaintenanceMessage() {
  return (
    <div className="bg-black/50 p-8 rounded-lg max-w-2xl text-center backdrop-blur-sm">
      <h2 className="text-3xl font-semibold mb-4">Página en Mantención</h2>
      <p className="text-xl mb-6">
        Estamos trabajando para brindarte una mejor experiencia.
        Para reservar nuestras cabañas, contáctanos directamente por WhatsApp.
      </p>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
        <p className="mb-4">Av central 0465 Isla Negra, El Quisco</p>
        
        <a 
          href="https://www.google.cl/maps/place/Cabañas+Curi-Huapi/@-33.4380605,-71.6773692,17.75z/data=!4m9!3m8!1s0x9662167c7f395719:0x40032ba0e5beb49a!5m2!4m1!1i2!8m2!3d-33.438834!4d-71.6766708!16s%2Fg%2F11c58gyjsl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
        >
          <MapPin size={24} />
          <span>Ver en Google Maps</span>
        </a>
      </div>
    </div>
  );
}