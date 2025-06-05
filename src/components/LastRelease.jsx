import React from "react";
import data from "../data/data.json";
import cover6 from "../assets/img/cover6.jpg";

class LastRelease extends React.Component {
  render() {
    // Encuentra el release con id 6
    const release = data.find(r => r.id === 6);

    return (
      <div className="last-release">
        <h4 className="last-release-title">Last Release</h4>
        <a
          href={release.linkRelease}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cover6} alt="cover"></img>
        </a>
        <div className="last-release-txt">
          <a
            href={release.linkRelease}
            className={release.linkColor}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="release-title">{release.title}</h3>
          </a>
          <a
            href={release.linkLabel}
            className={release.linkColor}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 className="label">{release.label}</h4>
          </a>
          <h5 className="cat">{release.cat}</h5>
          <h6 className="date">{release.date}</h6>
          <ul className="tracklist">
            {release.tracklist.map((track, idx) => (
              <li key={idx}>{track.title}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default LastRelease;
