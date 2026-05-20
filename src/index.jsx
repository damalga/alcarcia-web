import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Lenis from 'lenis';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './assets/stylesheets/base.scss';

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('alcarcia')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
