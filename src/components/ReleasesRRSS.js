import React from 'react';
import './../assets/stylesheets/css/style.css';

class ReleasesRRSS extends React.Component{
  render(){
    return (
      <section className="release-rrss">
          <h2 className="releases-title">Releases</h2>
          <div className="rrss">
            <ul className="rrss-list">
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Bandcamp</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Discogs</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Soundcloud</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Facebook</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Instagram</a></li>
            </ul>
          </div>
        </section>
    );
  }
}

export default ReleasesRRSS;
