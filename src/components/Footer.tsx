import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black/70 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-lg mb-4">
            Curi-huapi es un pequeño bosque de eucaliptos añosos en donde se cobijan nuestras rústicas cabañas, 
            completamente equipadas, cómodas y de variados diseños.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">CONSULTAS Y RESERVAS</h3>
          <p>Contacto: 35-2469452 | Reservas: 9 – 94505526</p>
        </div>

        <div className="text-sm text-gray-300 pt-4 border-t border-gray-600">
          <p className="mb-4">SÍGUENOS</p>
          <div className="flex justify-center gap-6 mb-4">
            <a 
              href="https://www.instagram.com/cabanascurihuapi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Instagram size={32} />
            </a>
          </div>
          <p>Todos los derechos reservados Cabañas Curi-Huapi 2025</p>
        </div>
      </div>
    </footer>
  );
}