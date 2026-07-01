import data from "../data/data.json";
import Release from "./Release";

function Releases() {
  const head = data.slice(0, -3);
  const row = data.slice(-3, -1);
  const tail = data.slice(-1);

  return (
    <>
      {head.map((release) => (
        <Release key={release.id} release={release} />
      ))}
      <div className="release-row">
        {row.map((release) => (
          <Release key={release.id} release={release} />
        ))}
      </div>
      {tail.map((release) => (
        <Release key={release.id} release={release} />
      ))}
    </>
  );
}

export default Releases;
