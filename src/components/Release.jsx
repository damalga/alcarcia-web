import React from 'react';

import cover1 from '../assets/img/cover1.jpg';
import cover2 from '../assets/img/cover2.jpg';
import cover3 from '../assets/img/cover3.jpg';
import cover4 from '../assets/img/cover4.jpg';
import cover5 from '../assets/img/cover5.jpg';
import cover6 from '../assets/img/cover6.jpg';

const covers = {
  'cover1.jpg': cover1,
  'cover2.jpg': cover2,
  'cover3.jpg': cover3,
  'cover4.jpg': cover4,
  'cover5.jpg': cover5,
  'cover6.jpg': cover6,
};

class Release extends React.Component{

   constructor(props) {
        super(props);
        this.state = {
            release: this.props.release
        }
    }

    render () {
        return (
            <div className="release">
                <a href={this.state.release.linkRelease} target="_blank" rel="noopener noreferrer">
                    <img src={covers[this.state.release.cover]} alt="cover"></img>
                </a>
                <div className="release-txt">
                    <a href={this.state.release.linkRelease} className={this.state.release.linkColor} target="_blank" rel="noopener noreferrer">
                        <h3 className="release-title">{this.state.release.title}</h3>
                    </a>
                    <a href={this.state.release.linkLabel} className={this.state.release.linkColor} target="_blank" rel="noopener noreferrer">
                        <h4 className="label">{this.state.release.label}</h4>
                    </a>
                    <h5 className="cat">{this.state.release.cat}</h5>
                    <h6 className="date">{this.state.release.date}</h6>
                    <ul className="tracklist">
                      {this.state.release.tracklist.map((track, idx) => (
                        <li key={idx}>{track.title}</li>
                      ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Release;
