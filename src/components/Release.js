import React from 'react';

const RELEASES_FOLDER = '/img/';

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
                    <img src={process.env.PUBLIC_URL + RELEASES_FOLDER + this.state.release.cover} alt="cover"></img>
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
                        {this.state.release.tracklist.map(track => {
                            return (<li>{track.title}</li>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Release;