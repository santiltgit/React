import React, { useState } from 'react';
import Header from './componentes/headear';
import Slider from './componentes/slider';
import Footer from './componentes/footer';
import './App.css';

function App() {
  // Datos para el slider (puedes mover esto a un archivo JSON)
  const slides = [
    {
      image: require('./img/gamer.jpeg'),
      alt: 'Gamer'
    },
    {
      image: require('./img/silla.jpeg'),
      alt: 'Silla Gamer'
    },
    {
      image: require('./img/pc.jpg'),
      alt: 'PC Gamer'
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Slider slides={slides} />
        <section className="content-section">
          <h2>Bienvenido a nuestra página</h2>
          <p>Descubre los mejores productos gamers, desde accesorios hasta tecnología de última generación. Encuentra teclados, mouse, auriculares, sillas y todo lo que necesitas para llevar tu experiencia de juego al siguiente nivel. ¡Equípate como un verdadero gamer y disfruta de ofertas exclusivas en nuestra tienda!</p>
        </section>
        <section className="productos-section" id="productos">
          <h2>Nuestros Productos</h2>
          <div className="productos-grid">
            <div className="producto-card">
              <img src={require('./img/teclado.webp')} alt="Teclado Mecánico Gamer" className="producto-img" />
              <h3>Teclado Mecánico Gamer</h3>
              <p>Iluminación RGB, switches de alta precisión y diseño ergonómico para gamers exigentes.</p>
              <button className="btn-comprar">Comprar</button>
            </div>
            <div className="producto-card">
              <img src={require('./img/audifonos.webp')} alt="Auriculares Gaming Pro" className="producto-img" />
              <h3>Auriculares Gaming Pro</h3>
              <p>Sonido envolvente, micrófono con cancelación de ruido y máxima comodidad para largas sesiones.</p>
              <button className="btn-comprar">Comprar</button>
            </div>
            <div className="producto-card">
              <img src={require('./img/mecanico.jpg')} alt="Mouse Gamer Óptico" className="producto-img" />
              <h3>Mouse Gamer Óptico</h3>
              <p>Alta precisión, múltiples botones programables y luces LED para un control total.</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;