import { Facebook, Instagram } from 'lucide-react';

export function SocialLinks() {
  return (
    <div className="mt-8 flex gap-6">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Facebook size={32} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <Instagram size={32} />
      </a>
    </div>
  );
}