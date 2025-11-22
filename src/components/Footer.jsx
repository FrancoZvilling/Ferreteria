import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CreditCard, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Info Empresa */}
          <div>
            <h4 className="text-2xl font-bold mb-4">FERRETERÍA<span className="text-secondary">EXPRESS</span></h4>
            <p className="text-gray-300 text-sm mb-4">
              Tu aliado en construcción y hogar. Ofrecemos la mejor calidad en herramientas y materiales con envíos a todo el país.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"><Instagram size={20}/></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"><Facebook size={20}/></a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-secondary">Navegación</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Inicio</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Productos</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Ofertas</a></li>
              <li><a href="#" className="hover:text-white hover:pl-1 transition-all">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h5 className="font-bold text-lg mb-4 text-secondary">Contacto</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 shrink-0"/>
                <span>Av. Siempreviva 123,<br/>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0"/>
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0"/>
                <span>ventas@ferreteria.com</span>
              </li>
            </ul>
          </div>

           {/* Columna 4: Pagos y Envíos */}
           <div>
            <h5 className="font-bold text-lg mb-4 text-secondary">Facilidades</h5>
            <div className="mb-4">
                <p className="text-sm text-gray-300 mb-2 flex items-center gap-2"><CreditCard size={16}/> Medios de Pago</p>
                <div className="flex gap-2 flex-wrap">
                    {/* Iconos simulados de tarjetas */}
                    <div className="bg-white text-blue-800 text-xs font-bold px-2 py-1 rounded">VISA</div>
                    <div className="bg-white text-red-600 text-xs font-bold px-2 py-1 rounded">Master</div>
                    <div className="bg-white text-blue-500 text-xs font-bold px-2 py-1 rounded">Amex</div>
                    <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">MP</div>
                </div>
            </div>
            <div>
                <p className="text-sm text-gray-300 mb-2 flex items-center gap-2"><Truck size={16}/> Envíos</p>
                <p className="text-xs text-gray-400">A todo el país por Correo Argentino y Andreani.</p>
            </div>
          </div>

        </div>

        {/* Barra Inferior Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Ferretería Express. Todos los derechos reservados.</p>
          <p>Desarrollado con React y Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;