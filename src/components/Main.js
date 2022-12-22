import React from 'react';
import Releases from './Releases';
import Other from './Other';
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
  
      </main>
    );
  }
}

export default Main;
