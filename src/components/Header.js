import React from 'react';
import './../assets/stylesheets/css/style.css';

class Header extends React.Component{
  render(){
    return (
      <header>
        <h1>Alcarcia</h1>
        <p>
          Co-founder of <a href="https://polymorphismrecords.com" target="_blank" rel="noopener noreferrer">Polymorphism Records</a>, currently based in Madrid.
        </p>
      </header>
    );
  }
}

export default Header;
