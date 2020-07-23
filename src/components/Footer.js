import React from 'react';
import './../assets/stylesheets/css/style.css';

class Footer extends React.Component{
  render(){
    return (
      <footer>
          <section className="support">
              <label>Pick ALCATAPE01 (Cassette) and support <a href="https://preciousplastic.com/">Precious Plastic</a>.</label>
          </section>
          <section className="rrss">
            <ul className="rrss-list">
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Bandcamp</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Discogs</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Soundcloud</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Facebook</a></li>
              <li className="rs"><a href="https://soundcloud.com/alcarcia">Instagram</a></li>
            </ul>
          </section>
      </footer>
    );
  }
}

export default Footer;
