import React from 'react';
import chip from './../assets/img/chip-pm.png';
import './../assets/stylesheets/css/style.css';

class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>Alcarcia</h1>
        <p>
          Co-founder of <a href="https://polymorphismrecords.com" target="_blank" rel="noopener noreferrer">Polymorphism Records</a>, currently based in Madrid.
        </p>
        <a href="https://polymorphismrecords.com" className="chip-pm-link" target="_blank">
          <img src={chip} alt="Polymorphism Records - Microchip - Website"></img>
        </a>
      </header>
    );
  }
}

export default Header;
