import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer'; // Importamos el Footer

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 flex flex-col">
      <Navbar />
      
      {/* El contenido principal crece para empujar el footer abajo si la pag es corta */}
      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;