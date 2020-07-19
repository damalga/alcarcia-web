import React from 'react';
import cover2 from './../assets/img/cover2.jpg';
import cover3 from './../assets/img/cover3.jpg';

import './../assets/stylesheets/css/style.css';

import Release from './Release';

class Main extends React.Component{
  render (){    
    return (
      <main>
        <h2 className="releases-title">Releases</h2>
  
        <Release />
  
        <div className="release">
          <img src={cover2} alt="Leafy plains of incoherence between shadows until dawn cover"></img>
          <div className="release-txt">
            <h3 className="release-title">Leafy Plains of Incoherence Between Shadows Until Dawn</h3>
            <h4 className="label">POLYMORPHISM RECORDS</h4>
            <h5 className="cat">PM001</h5>
            <h6 className="date">2019</h6>
            <ul className="tracklist">
              <li>01. Plain 1</li>
              <li>02. Plain 2</li>
              <li>03. Plain 3</li>
              <li>04. Plain 4</li>
              <li>01. Plain 1 (Hector MAD remix)</li>
              <li>02. Plain 2 (Solarmental remix)</li>
              <li>03. Plain 3 (Neri J remix)</li>
              <li>04. Plain 4 (JLTZ remix)</li>
            </ul>
          </div>
        </div>
  
        <div className="release">
          <img src={cover3} alt="Magia a la luz de bajo consumo cover"></img>
          <div className="release-txt">
            <h3 className="release-title">Magia a la luz de bajo consumo</h3>
            <h4 className="label">Self-release</h4>
            <h5 className="cat">ALCATAPE01</h5>
            <h6 className="date">2020</h6>
            <ul className="tracklist">
              <li>01. Alcarcia - X Lewisham Way X</li>
              <li>02. Wilhelminaplein X</li>
              <li>03. A Space Asoke Ratchada X</li>
              <li>04. Colombia X</li>
              <li>05. Fehrbelliner Straße X</li>
              <li>06. X Lewisham Way X (Marcos F Remix)</li>
              <li>07. Wilhelminaplein X (Aware Rework)</li>
              <li>08. A Space Asoke Ratchada X (Xnx Rmx)</li>
              <li>09. Colombia X (Eduardo Dito Version)</li>
              <li>10. Fehrbelliner Straße X (Ruben Montesco)</li>
            </ul>
          </div>
        </div>
  
      </main>
    );
  }
}

export default Main;
