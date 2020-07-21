import React from 'react';
import data from './../data/data.json';
import Release from './Release';

class Releases extends React.Component{

    render () {
        return data.map(release => {
            return(
                <Release release={release}/>
            )
        })
    }
}

export default Releases;