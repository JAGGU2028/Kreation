import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Duration for preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="antialiased">
      <CustomCursor />
      <Preloader isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default App;