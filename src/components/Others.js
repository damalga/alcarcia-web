import React from 'react';
import './../assets/stylesheets/css/style.css';

class Others extends React.Component{
  render(){
    return (
        <section className="release others">
          <h4 className="others-title">OTHERS</h4>
          <ul className="others-list">
            <li className="other"><a href="https://soundcloud.com/alcarcia/sets/mixes">Mixes</a></li>
            <li className="other">Pregabalin (Comming Soon)</li>
          </ul>
        </section>
    );
  }
}

export default Others;
