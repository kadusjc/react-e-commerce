import React from 'react';
import { Link } from 'react-router-dom';
import { Bag, Truck, ShieldCheck, CreditCard2Back } from 'react-bootstrap-icons';

const Home = () => {
  return (
    <div className="hero-section">
      <span className="hero-icon"><Bag size={56}/></span>
      <div className="hero-subtitle">E-Commerce com React</div>
      <h2>React Store</h2>
      <p>
        Explore nossa coleção exclusiva de camisetas com estampas criativas.
        De geek a fashion, temos o estilo perfeito para você.
      </p>
      <div className="hero-cta">
        <Link to="/produtos" className="btn-hero-primary">
          Ver Produtos
        </Link>
        <Link to="/login" className="btn-hero-secondary">
          Fazer Login
        </Link>
      </div>
      <div className="hero-features">
        <div className="hero-feature">
          <span className="hero-feature-icon"><Truck size={28}/></span>
          <span>Frete Grátis</span>
        </div>
        <div className="hero-feature">
          <span className="hero-feature-icon"><ShieldCheck size={28}/></span>
          <span>Compra Segura</span>
        </div>
        <div className="hero-feature">
          <span className="hero-feature-icon"><CreditCard2Back size={28}/></span>
          <span>Parcelamento</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
