import React from 'react';
import './../assets/stylesheets/css/style.css';

class Others extends React.Component{
  render(){
    return (
        <section>
          <h4 className="others-title">OTHERS</h4>
          <ul className="others-list">
            <li className="other"><a href="https://soundcloud.com/alcarcia/sets/mixes" target="_blank" rel="noopener noreferrer">Mixes</a></li>
            <li className="other"><a href="https://unsolvedlabel.bandcamp.com/track/fluotexin-original-mix" target="_blank" rel="noopener noreferrer">Fluotexin (Original Mix) - </a></li>
            <li className="other"><a href="https://nawalrecords.bandcamp.com/track/all-about" target="_blank" rel="noopener noreferrer">All About</a></li>
          </ul>
        </section>
    );
  }
}

export default Others;
