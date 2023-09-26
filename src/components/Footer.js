import React from 'react';
import './../assets/stylesheets/css/style.css';

class Footer extends React.Component{
  render(){
    return (
      <footer>
          <section className="support">
              <label>Thanks for your contribution, it is currently paying for <a href='https://www.onearmy.earth/'>One Army</a> subscription...
              <br></br>House of <a href='https://preciousplastic.com/'>Precious Plastic</a> across Patreon: <a href='https://www.patreon.com/one_army/about'>One Army Patreon</a>...
              </label>
          </section>
          <section className="rrss">
            <ul className="rrss-list">
              <li className="rs"><a className="bc" href="https://alcarcia.bandcamp.com/releases" target="_blank" rel="noopener noreferrer">Bandcamp</a></li>
              <li className="rs"><a className="sc" href="https://soundcloud.com/alcarcia" target="_blank" rel="noopener noreferrer">Soundcloud</a></li>
              <li className="rs"><a className="dg" href="https://www.discogs.com/artist/6426813-Alcarcia" target="_blank" rel="noopener noreferrer">Discogs</a></li>
              <li className="rs"><a className="fb" href="https://www.facebook.com/alcarcia/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="rs"><a className="ig" href="https://www.instagram.com/alcarcia/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </section>
      </footer>
    );
  }
}

export default Footer;
