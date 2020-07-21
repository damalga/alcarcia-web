import React from 'react';
import cover1 from './../assets/img/cover1.jpg';
import Data from './../data/data.json';

class Release extends React.Component{
    render () {
        return (
            <div className="release">
                <img src={cover1} alt="BoSsOb cover"></img>
                <div className="release-txt">
                    <h3 className="release-title">
                        <a href="#" className="underlined underlined--thin"></a>
                        {Data.title}</h3>
                    <h4 className="label">
                        <a href="#" className="underlined underlined--thin"></a>
                        {Data.label}</h4>
                    <h5 className="cat">
                        <a href="#" className="underlined underlined--thin"></a>
                        {Data.cat}</h5>
                    <h6 className="date">
                        <a href="#" className="underlined underlined--thin"></a>
                        {Data.date}</h6>
                    <ul className="tracklist">
                    <li>{Data.tracklist[1]}</li>
                    <li>{Data.tracklist[2]}</li>
                    <li>{Data.tracklist[3]}</li>
                    <li>{Data.tracklist[4]}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Release;