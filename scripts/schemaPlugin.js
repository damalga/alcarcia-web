import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_PATH = resolve(__dirname, "../src/data/data.json");
const BIO_PATH = resolve(__dirname, "../src/data/bio.json");

const SITE = "https://www.alcarcia.com";
const ARTIST_ID = `${SITE}/#artist`;
const PERSON_ID = `${SITE}/#damalga`;
const WEBSITE_ID = `${SITE}/#website`;

const SAME_AS = [
  "https://damalga.com",
  "https://github.com/damalga",
  "https://github.com/damalga/alcarcia-web",
  "https://alcatapes.bandcamp.com/",
  "https://soundcloud.com/alcarcia",
  "https://www.discogs.com/artist/6426813-Alcarcia",
  "https://bsky.app/profile/alcarciandamalga.bsky.social",
  "https://illegalalienrecords.bandcamp.com/album/bossob-ep",
  "https://polymorphism.bandcamp.com/album/leafy-plains-of-incoherence-between-shadows-until-dawn-pm001",
  "https://globoffcorp.bandcamp.com/album/pretensiones-varias-e-inequ-vocas-falacias",
];

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

  if (override.byArtistName === "Various Artists") {
    album.contributor = { "@id": ARTIST_ID };
  }

  return album;
}

function buildArtist(bioParagraphs) {
  return {
    "@type": "MusicGroup",
    "@id": ARTIST_ID,
    name: "Alcarcia",
    alternateName: "Damalga",
    url: `${SITE}/`,
    image: `${SITE}/img/og.webp`,
    description: bioParagraphs.join("\n\n"),
    genre: ["Electronic", "Techno", "Experimental", "Ambient"],
    foundingLocation: {
      "@type": "Place",
      name: "Madrid, Spain",
    },
    sameAs: SAME_AS,
    member: { "@id": PERSON_ID },
  };
}

function buildPerson() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Damalga",
    jobTitle: "Electronic Music Producer, Graphic Designer, Web Developer",
    url: "https://damalga.com",
    sameAs: ["https://damalga.com", "https://github.com/damalga"],
  };
}

function buildWebSite() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE}/`,
    name: "Alcarcia",
    publisher: { "@id": ARTIST_ID },
    inLanguage: "es",
  };
}

export default function schemaPlugin() {
  return {
    name: "alcarcia-schema-injector",
    transformIndexHtml(html) {
      const releases = JSON.parse(readFileSync(DATA_PATH, "utf-8"));
      const { bio } = JSON.parse(readFileSync(BIO_PATH, "utf-8"));

      const graph = {
        "@context": "https://schema.org",
        "@graph": [
          buildArtist(bio),
          buildPerson(),
          buildWebSite(),
          ...releases.map(buildAlbum),
        ],
      };

      const script = `<script type="application/ld+json">\n${JSON.stringify(graph, null, 2)}\n</script>`;
      return html.replace("</head>", `    ${script}\n  </head>`);
    },
  };
}
