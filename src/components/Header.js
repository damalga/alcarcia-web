import React from 'react';
import './../assets/stylesheets/css/style.css';

class Header extends React.Component{
  render(){
    return (
      <header>
        <section className="section-1">
          <h1>Alcarcia</h1>
          <p>Co-founder of <a href="https://polymorphismrecords.com" className="poly-red" target="_blank" rel="noopener noreferrer">Polymorphism Records</a>, currently based in Madrid.</p>
          <a href="https://polymorphismrecords.com" className="chip-pm-link" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + '/img/chip-pm.png'} alt="Polymorphism Records - Microchip - Website"></img>
          </a>
        </section>
        <section className="section-2">
          <h2 className="releases-title">Releases</h2>
          <label className="contact">For any enquiry:
            <a href="mailto:alcarcia@gmx.com" className="alca-yellow">alcarcia[at]gmx.com</a>
          </label>
        </section>
      </header>
    );
  }
}

export default Header;
