function Release({ release }) {
  return (
    <div className="release">
      <a href={release.linkRelease} target="_blank" rel="noopener noreferrer">
        <img src={release.cover} alt="cover"></img>
      </a>
      <div className="release-txt">
        <h3 className="release-title">
          <a href={release.linkRelease} className={release.linkColor} target="_blank" rel="noopener noreferrer">
            {release.title}
          </a>
        </h3>
        <h4 className="label">
          <a href={release.linkLabel} className={release.linkColor} target="_blank" rel="noopener noreferrer">
            {release.label}
          </a>
        </h4>
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

export default Release;
