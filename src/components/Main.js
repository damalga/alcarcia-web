import React from 'react';
import Releases from './Releases';
import './../assets/stylesheets/css/style.css';

import Release from './Release';

class Main extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      releases: []
    }
  }

  render (){    
    return (
      <main>
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
  
        <Releases/>

        <div className="release">
          <div className="others">
            <h4 className="others-title">OTHERS</h4>
            <ul className="others-list">
              <li className="other"><a href="#">Karen Revisited Noise Cut (Intro Alcarcia)</a></li>
            </ul>
          </div>
        </div>
  
      </main>
    );
  }
}

export default Main;
