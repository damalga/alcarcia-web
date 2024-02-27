import React from 'react';
import Other from './Other';
import Images from './Images';
import Support from './Support';
import Releases from './Releases';
import './../assets/stylesheets/css/style.css';

class Main extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      releases: []
    }
  }

  render (){    
    return (
      <main>
        <section className='releases'>
          <Releases/>
        </section>

        <aside className='others'>
          <Other/>
        </aside>

        <section className='support'>
          <Support/>
        </section>
      </main>
    );
  }
}

export default Main;
