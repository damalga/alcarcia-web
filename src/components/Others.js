import React from 'react';
import './../assets/stylesheets/css/style.css';

class Others extends React.Component{
  render(){
    return (
        <section className="release others">
          <h4 className="others-title">OTHERS</h4>
          <ul className="others-list">
            <li className="other"><a href="https://soundcloud.com/alcarcia/sets/mixes" target="_blank">Mixes</a></li>
            <li className="other"><a href="https://unsolvedlabel.bandcamp.com/track/fluotexin-original-mix" target="_blank">Fluotexin (Original Mix)</a></li>
          </ul>
        </section>
    );
  }
}

export default Others;
