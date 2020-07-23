import React from 'react';
import './../assets/stylesheets/css/style.css';

class Footer extends React.Component{
  render(){
    return (
      <footer>
          <section className="support">
              <label>Pick ALCATAPE01 (Cassette) and support <a className="precious-plastic" href="https://preciousplastic.com/">Precious Plastic</a>.</label>
          </section>
          <section className="rrss">
            <ul className="rrss-list">
              <li className="rs"><a className="dg" href="https://www.discogs.com/artist/6426813-Alcarcia">Discogs</a></li>
              <li className="rs"><a className="bc" href="https://alcarcia.bandcamp.com/releases">Bandcamp</a></li>
              <li className="rs"><a className="sc" href="https://soundcloud.com/alcarcia">Soundcloud</a></li>
              <li className="rs"><a className="fb" href="https://www.facebook.com/alcarcia/">Facebook</a></li>
              <li className="rs"><a className="ig" href="https://www.instagram.com/alcarcia/">Instagram</a></li>
            </ul>
          </section>
      </footer>
    );
  }
}

export default Footer;
