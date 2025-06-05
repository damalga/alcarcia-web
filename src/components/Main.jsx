import React from 'react';
import Other from './Other';
import Design from './Design';
import Releases from './Releases';
import Images from './Images';

import data from '../data/data.json';

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
          <Images/>
        </aside>

        <section className='design'>
          <Design/>
        </section>
      </main>
    );
  }
}

export default Main;
