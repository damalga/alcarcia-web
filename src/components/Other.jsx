import React from 'react';

import asideImg from '../assets/img/aside.png';
import downloadCoverLetter from '../assets/img/download-cover-letter.svg';

class Others extends React.Component{
  render(){
    return (
        <div>
          <a className='download-cover-letter' href="/img/alcarcia-cover-letter.png" target="_blank">
            <img src={downloadCoverLetter} alt="Download Cover Letter"></img>
          </a>
          <img src={asideImg} className='bg-other' alt="Alcarcia Motor Bike"></img>
          <div className='others-txt'>
            <h4 className="others-title">OTHER TRACKS</h4>
            <ul className="others-list">
              <li className="other"><a href="https://soundcloud.com/alcarcia/sets/mixes" target="_blank" rel="noopener noreferrer">Mixes</a></li>
              <li className="other"><a href="https://unsolvedlabel.bandcamp.com/track/fluotexin-original-mix" target="_blank" rel="noopener noreferrer">Fluotexin</a></li>
              <li className="other"><a href="https://nawalrecords.bandcamp.com/track/all-about" target="_blank" rel="noopener noreferrer">All About</a></li>
              <li className="other"><a href="https://alcatapes.bandcamp.com/track/alcarcia-severe-disrepair" target="_blank" rel="noopener noreferrer">Severe Disrepair</a></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Others;
