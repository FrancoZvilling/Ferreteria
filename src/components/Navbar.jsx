import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Herramientas",
    "Construcción",
    "Electricidad",
    "Pinturas",
    "Plomería",
    "Jardín y Exteriores",
    "Ropa de Trabajo",
    "Iluminación"
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* --- NIVEL 1: Logo, Buscador y Acciones --- */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              PERALTA<span className="text-secondary">FERRETERÍA</span>
            </h1>
          </div>

          {/* Buscador (Solo PC) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input 
              type="text" 
              placeholder="¿Qué estás buscando hoy?" 
              className="w-full border-2 border-gray-200 rounded-l-lg py-2 px-4 focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-secondary hover:bg-secondary-dark text-white px-6 rounded-r-lg transition-colors flex items-center justify-center">
              <Search size={20} />
            </button>
          </div>

          {/* Iconos a la derecha */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex flex-col items-end text-sm text-gray-600">
              <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
                <Phone size={16} className="text-secondary"/> 
                <span>11-1234-5678</span>
              </div>
            </div>

            <div className="relative cursor-pointer group">
              <ShoppingCart size={28} className="text-primary group-hover:text-secondary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>

            <button 
              className="md:hidden text-primary focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Buscador Móvil (Solo celular) */}
        <div className="mt-4 md:hidden flex">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="w-full border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:border-primary"
          />
          <button className="bg-secondary text-white px-4 rounded-r-lg">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* --- NIVEL 2: Categorías (OCULTO EN MÓVIL AHORA) --- */}
      {/* El 'hidden' lo oculta siempre, el 'md:block' lo muestra solo de tablet para arriba */}
      <div className="hidden md:block bg-primary text-white">
        <div className="container mx-auto">
          <ul className="flex justify-center py-3 px-4 gap-8">
            {categories.map((cat, index) => (
              <li key={index} className="cursor-pointer hover:text-secondary font-medium text-sm transition-colors uppercase tracking-wide">
                {cat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="flex items-center gap-3 text-gray-700 py-2 border-b border-gray-100">
              <Phone size={20} className="text-secondary"/> Contacto / WhatsApp
            </a>
            <a href="#" className="flex items-center gap-3 text-gray-700 py-2 border-b border-gray-100">
              <MapPin size={20} className="text-secondary"/> Sucursales
            </a>
            
            {/* Aquí están las categorías para el móvil */}
            <div className="bg-gray-50 p-4 rounded-lg mt-2">
               <p className="text-xs font-bold text-gray-500 uppercase mb-3">Categorías</p>
               <div className="grid grid-cols-1 gap-3">
                 {categories.map((cat, i) => (
                   <span key={i} className="text-sm text-primary font-medium border-b border-gray-200 pb-1">{cat}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;