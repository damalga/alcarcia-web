import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/data.json");

const SITE = "https://www.alcarcia.com";
const ARTIST_ID = `${SITE}/#artist`;

const FORMAT_TO_SCHEMA = {
  Digital: "https://schema.org/DigitalFormat",
  Vinyl: "https://schema.org/VinylFormat",
  Cassette: "https://schema.org/CassetteFormat",
  "Double Cassette": "https://schema.org/CassetteFormat",
  CD: "https://schema.org/CDFormat",
};

// Album 4 is a Various Artists compilation; Alcarcia only contributes track 18.
// Album 5 is a collaboration project (Mambo Caníbal = Alcarcia + Aware).
const RELEASE_OVERRIDES = {
  4: { productionType: "CompilationAlbum", byArtistName: "Various Artists" },
  5: { productionType: "StudioAlbum", byArtistName: "Mambo Caníbal" },
};

function extractCatalogNumber(cat) {
  return cat.split(" ")[0];
}

function extractFormats(cat) {
  const match = cat.match(/\(([^)]+)\)/);
  if (!match) return [];
  return match[1].split(/&|,/).map((s) => s.trim());
}

function absoluteImage(cover) {
  // /img/webp/cover1.webp -> https://www.alcarcia.com/img/cover1.jpg (JPEG is safer for OG/schema)
  const jpg = cover.replace("/webp/", "/").replace(/\.webp$/, ".jpg");
  return `${SITE}${jpg}`;
}

function stripTrackNumber(title) {
  return title.replace(/^\d+\.\s*/, "").trim();
}

function buildTrack(t, i) {
  const track = {
    "@type": "MusicRecording",
    name: stripTrackNumber(t.title),
    byArtist: { "@id": ARTIST_ID },
    position: i + 1,
  };
  if (t.link) track.url = t.link;
  return track;
}

function buildAlbum(r) {
  const override = RELEASE_OVERRIDES[r.id] || {};
  const catNum = extractCatalogNumber(r.cat);
  const formats = extractFormats(r.cat);
  const tracks = (r.tracklist || []).map(buildTrack);

  const byArtist = override.byArtistName
    ? { "@type": "MusicGroup", name: override.byArtistName }
    : { "@id": ARTIST_ID };

  const album = {
    "@type": "MusicAlbum",
    "@id": `${SITE}/#album-${catNum.toLowerCase()}`,
    name: r.title,
    byArtist,
    datePublished: r.date,
    catalogNumber: catNum,
    albumProductionType: `https://schema.org/${override.productionType || "StudioAlbum"}`,
    recordLabel: {
      "@type": "Organization",
      name: r.label,
      url: r.linkLabel,
    },
    url: r.linkRelease,
    image: absoluteImage(r.cover),
    numTracks: tracks.length,
    track: tracks,
  };

  if (formats.length) {
    album.albumRelease = formats.map((f) => ({
      "@type": "MusicRelease",
      musicReleaseFormat: FORMAT_TO_SCHEMA[f] || FORMAT_TO_SCHEMA.Digital,
    }));
  }

  // On the VA compilation, mark Alcarcia as a contributor since he isn't the album artist.
  if (override.byArtistName === "Various Artists") {
    album.contributor = { "@id": ARTIST_ID };
  }

  return album;
}

export default function schemaPlugin() {
  return {
    name: "alcarcia-schema-injector",
    transformIndexHtml(html) {
      const releases = JSON.parse(readFileSync(DATA_PATH, "utf-8"));
      const graph = {
        "@context": "https://schema.org",
        "@graph": releases.map(buildAlbum),
      };
      const script = `<script type="application/ld+json">\n${JSON.stringify(graph, null, 2)}\n</script>`;
      return html.replace("</head>", `    ${script}\n  </head>`);
    },
  };
}
