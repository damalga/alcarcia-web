import About from './About';

function Header() {
  return (
    <header>
      <section className="section-1">
        <h1>Alcarcia</h1>
        <p>Spaniard music producer and Co-founder of <a href="https://polymorphismrecords.com" className="poly-red" target="_blank" rel="noopener noreferrer">Polymorphism Records</a>. <About /></p>
        <a href="https://polymorphismrecords.com" className="chip-pm-link" target="_blank" rel="noopener noreferrer">
          <img src="/img/webp/chip-pm.webp" alt="Polymorphism Records - Microchip - Website"></img>
        </a>
      </section>
      <section className="section-2">
        <h2 className="releases-title">Releases</h2>
        <label className="contact">For any enquiry:
          <a href="mailto:alcarcia@protonmail.com" className="alca-yellow">alcarcia@protonmail.com</a>
        </label>
      </section>
    </header>
  );
}

export default Header;
