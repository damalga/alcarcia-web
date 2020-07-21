import React from 'react';
import './../assets/stylesheets/css/style.css';

class Footer extends React.Component{
  render(){
    return (
      <footer>
          <section className="support">
              <label>Pick ALCATAPE01 (Cassette) and support <a href="https://preciousplastic.com/">Precious Plastic</a>.</label>
          </section>
          <section className="contact">
              <label>For any enquiry: <a href="mailto:alcarcia@gmx.com">alcarcia[at]gmx.com</a></label>
          </section>
      </footer>
    );
  }
}

export default Footer;
