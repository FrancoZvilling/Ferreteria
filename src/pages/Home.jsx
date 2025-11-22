import React from 'react';
// Importamos Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowRight, ShoppingCart, MapPin, Phone, Instagram, Mail } from 'lucide-react';

const Home = () => {
  
  // Datos falsos para probar (luego vendrán de una base de datos)
  const featuredProducts = [
    { id: 1, name: "Taladro Percutor 18V", price: "$125.000", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Set de Llaves Pro", price: "$45.000", image: "https://images.unsplash.com/photo-1615746360032-1ecf87f250fb?q=80&w=1601&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Lijadora Orbital", price: "$89.900", image: "https://plus.unsplash.com/premium_photo-1681506560879-d4129fa18fb5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Compresor de Aire", price: "$210.000", image: "https://media.istockphoto.com/id/1412024739/photo/air-compressor-is-portable.jpg?s=2048x2048&w=is&k=20&c=GnZHv2x0Qr4uyLxVdQwoFfixJvlJbvJFLOeBko6hj4s=" },
    { id: 5, name: "Amoladora Angular", price: "$68.000", image: "https://plus.unsplash.com/premium_photo-1675508139501-5312e9b51e27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

 // Datos de Categorías (Imágenes representativas)
  const categoriesData = [
    { name: "Herramientas", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400" },
    { name: "Construcción", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400" },
    { name: "Electricidad", img: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&q=80&w=400" },
    { name: "Pinturas", img: "https://plus.unsplash.com/premium_photo-1726750875095-a928734b53f0?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Plomería", img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400" },
    { name: "Jardín", img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=400" },
    { name: "Ropa Trabajo", img: "https://plus.unsplash.com/premium_photo-1664301084634-66c524664713?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Iluminación", img: "https://images.unsplash.com/photo-1475783006851-1d68dd683eff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="space-y-16 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[500px] md:h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1581783342308-f792ca439033?auto=format&fit=crop&q=80&w=1920" 
              alt="Fondo Construcción" 
              className="w-full h-full object-cover opacity-60"
            />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-6 text-white">
          <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
            Nueva Temporada
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Construye tus proyectos <br/> con calidad profesional
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
            Todo lo que necesitas en herramientas, materiales y accesorios. Envíos a todo el país en 24hs.
          </p>
          <button className="w-fit bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            Ver Ofertas <ArrowRight size={20}/>
          </button>
        </div>
      </section>

      {/* 2. CARRUSEL PROMOS */}
      <section className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-8 bg-secondary rounded-full"></div>
          <h3 className="text-2xl font-bold text-primary">Promos Exclusivas</h3>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{ 768: { slidesPerView: 2 }}}
          className="w-full rounded-xl overflow-hidden shadow-sm"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-64 bg-primary flex items-center justify-center rounded-xl overflow-hidden cursor-pointer group">
               <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" />
               <div className="relative z-10 text-center text-white p-4">
                 <h4 className="text-4xl font-bold mb-2">30% OFF</h4>
                 <p className="text-xl font-light">En Pinturas de Interior</p>
                 <button className="mt-4 text-sm font-bold border border-white px-4 py-2 rounded hover:bg-white hover:text-primary transition-colors">Ver más</button>
               </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-64 bg-secondary flex items-center justify-center rounded-xl overflow-hidden cursor-pointer group">
               <img src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" />
               <div className="relative z-10 text-center text-white p-4">
                 <h4 className="text-4xl font-bold mb-2">2x1</h4>
                 <p className="text-xl font-light">En Iluminación LED</p>
                 <button className="mt-4 text-sm font-bold border border-white px-4 py-2 rounded hover:bg-white hover:text-secondary transition-colors">Ver más</button>
               </div>
            </div>
          </SwiperSlide>
           {/* Slide 3 */}
           <SwiperSlide>
            <div className="relative h-64 bg-gray-800 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer group">
               <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" />
               <div className="relative z-10 text-center text-white p-4">
                 <h4 className="text-3xl font-bold mb-2">Envío Gratis</h4>
                 <p className="text-lg">En compras superiores a $50.000</p>
               </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 3. PRODUCTOS DESTACADOS */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Productos Destacados</h3>
          </div>
          <a href="#" className="text-secondary font-semibold hover:text-primary transition-colors text-sm md:text-base">Ver todos</a>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8 pl-1 products-swiper"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col h-full group">
                <div className="relative h-48 mb-4 overflow-hidden rounded-md bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:bg-secondary hover:text-white transition-colors z-10">
                    <ShoppingCart size={20} />
                  </button>
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-xs text-gray-400 uppercase font-semibold mb-1">Herramientas</span>
                  <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2 leading-tight">{product.name}</h4>
                  <p className="text-primary font-bold text-xl mt-auto">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. CATEGORÍAS (GRILLA) */}
      <section className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-primary rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Busca por Categoría</h3>
        </div>
        
        {/* Grilla: 2 columnas en móvil, 4 en escritorio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoriesData.map((cat, index) => (
            <div key={index} className="relative h-32 md:h-40 rounded-lg overflow-hidden cursor-pointer group">
              {/* Imagen de fondo */}
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              {/* Capa oscura (Overlay) */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <h4 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase border-b-2 border-transparent group-hover:border-secondary transition-all">
                  {cat.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECCIÓN DE CONTACTO */}
      <section className="bg-gray-100 py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Texto de Contacto */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">¿Necesitas ayuda?</h3>
              <p className="text-gray-600 text-lg">
                Visítanos en nuestra sucursal central o contáctanos por nuestras redes. 
                ¡Estamos para asesorarte en tu proyecto!
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <div className="bg-green-500 p-3 rounded-full text-white">
                     <Phone size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-800">Escríbenos por WhatsApp</p>
                     <p className="text-sm text-gray-500">+54 11 1234 5678</p>
                   </div>
                </a>

                <a href="#" className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                   <div className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-3 rounded-full text-white">
                     <Instagram size={24} />
                   </div>
                   <div>
                     <p className="font-bold text-gray-800">Síguenos en Instagram</p>
                     <p className="text-sm text-gray-500">@peralta.ferreteria</p>
                   </div>
                </a>
              </div>
            </div>

            {/* Mapa (Iframe de Google Maps Embebido) */}
            <div className="h-[300px] md:h-[400px] bg-gray-300 rounded-xl overflow-hidden shadow-lg border-4 border-white relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26274.65992987163!2d-58.43576357418725!3d-34.60628280327341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses!2sar!4v1700670000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;