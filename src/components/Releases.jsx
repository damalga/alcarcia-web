import data from "../data/data.json";
import Release from "./Release";

function Releases() {
  return data.map((release) => (
    <Release key={release.id} release={release} />
  ));
}

export default Releases;
