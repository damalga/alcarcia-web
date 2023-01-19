import React from 'react';

class Others extends React.Component{
  render(){
    return (
        <section>
          <div className='others-txt'>
          <h4 className="others-title">OTHERS</h4>
          <ul className="others-list">
            <li className="other"><a href="https://soundcloud.com/alcarcia/sets/mixes" target="_blank" rel="noopener noreferrer">Mixes</a></li>
            <li className="other"><a href="https://unsolvedlabel.bandcamp.com/track/fluotexin-original-mix" target="_blank" rel="noopener noreferrer">Fluotexin</a></li>
            <li className="other"><a href="https://nawalrecords.bandcamp.com/track/all-about" target="_blank" rel="noopener noreferrer">All About</a></li>
          </ul>
          </div>
          <img src={process.env.PUBLIC_URL + '/img/aside.png'} alt="Alcarcia Motor Bike"></img>
        </section>
    );
  }
}

export default Others;
