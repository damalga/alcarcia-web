import React from 'react';
import Releases from './Releases';
import Others from './Others';
import './../assets/stylesheets/css/style.css';

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
  
        <Releases/>

        <Others/>
  
      </main>
    );
  }
}

export default Main;
