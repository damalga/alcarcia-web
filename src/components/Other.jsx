import React from 'react';

class Others extends React.Component{
  render(){
    return (
      <div className='other-tracks'>
        <a className='download-cover-letter' href="/img/alcarcia-cover-letter.png" target="_blank">
          <img src="/img/download-cover-letter-2.svg" alt="Download Cover Letter"></img>
        </a>
        <img src="/img/aside.png" className='bg-other' alt="Alcarcia with his old Derbi Terra at home playing one record"></img>
        <div className='other-tracks-txt'>
          <h4 className="other-tracks-title">Other tracks</h4>
          <ul className="other-tracks-list">
            <li className="other-track"><a href="https://soundcloud.com/alcarcia/sets/mixes" target="_blank" rel="noopener noreferrer">Mixes</a></li>
            <li className="other-track"><a href="https://unsolvedlabel.bandcamp.com/track/fluotexin-original-mix" target="_blank" rel="noopener noreferrer">Fluotexin</a></li>
            <li className="other-track"><a href="https://nawalrecords.bandcamp.com/track/all-about" target="_blank" rel="noopener noreferrer">All About</a></li>
            <li className="other-track"><a href="https://alcatapes.bandcamp.com/track/alcarcia-severe-disrepair" target="_blank" rel="noopener noreferrer">Severe Disrepair</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Others;
