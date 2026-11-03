/**
 * Soulstice - Data Configuration
 * Swiss International Design / Dekmantel style
 */

// Biglietteria ufficiale Soulstice (Xceed Gate Milano)
const TICKETS_URL = "https://xceed.me/en/milano/event/soulstice-ryan-elliot-saoirse/246847/channel/gate-milano";

// Canale SoundCloud ufficiale Soulstice
const SOUNDCLOUD_URL = "https://soundcloud.com/soulstice-247506189";

// Playlist Spotify ufficiale Soulstice
const SPOTIFY_URL = "https://open.spotify.com/playlist/43ShQEjmuaYXQjMpZoBzZC?si=997d97c9ac7548d3";

// Profilo Instagram Soulstice
const INSTAGRAM_URL = "https://www.instagram.com/soul_stice_?utm_source=ig_web_button_share_sheet&rpxt=ZDNlZDc0MzIxNw==";

// Email ufficiale Soulstice
const CONTACT_EMAIL = "info@soulstice.it";

/**
 * NEXT EVENTS (Prossimi eventi)
 * Formato card 4:5.
 * Campi:
 *  - d: Data evento (all caps)
 *  - t: Titolo evento
 *  - v: Location / Venue
 *  - on: true se biglietti disponibili, false se "SOLD OUT"
 *  - img: URL immagine copertina (4:5). Se mancante o vuoto, mostra riquadro grigio neutro.
 */
const NEXT = [
  {
    d: "05 NOV",
    t: "SOULSTICE x J’ADORE NAPOLI",
    v: "THE SANCTUARY MILAN",
    on: true,
    img: "assets/img/events/jadore-souls.png",
    url: "https://www.instagram.com/thesanctuarymilan/"
  },
  {
    d: "20 NOV",
    t: "SOULSTICE — RYAN ELLIOTT & SAOIRSE",
    v: "GATE MILANO",
    on: true,
    img: "assets/img/events/639281115475728058.jpeg",
    url: TICKETS_URL
  }
];

/**
 * PAST EVENTS (Archivio eventi passati)
 * Formato card 4:5.
 * Inizialmente ne mostra 4, con pulsante "View more" per mostrare le altre.
 * Tutti i titoli, date, venue e lineup corrispondono esattamente ai flyer originali.
 */
const EVENTS = [
  {
    t: "SOULSTICE — ISAAC CARTER & MATTIAS CLAY",
    s: "31 OCT 2026",
    v: "OFFICINA MILANO",
    img: "assets/img/events/639281113973369169.jpeg"
  },
  {
    t: "SOULSTICE & DANCECORE — FOLAMOUR",
    s: "11 APR 2026",
    v: "ARENA FLEGREA, NAPOLI",
    img: "assets/img/events/639113332916296297.jpeg"
  },
  {
    t: "SOULSTICE — DENNIS FERRER",
    s: "21 MAR 2026",
    v: "OFFICINA MILANO",
    img: "assets/img/events/639113260635789888.jpeg"
  },
  {
    t: "MILAN FASHION WEEK — YOUNG MARCO",
    s: "25 FEB 2026",
    v: "VOLT CLUB, MILANO",
    img: "assets/img/events/639064295444193317.jpeg"
  },
  {
    t: "SOULSTICE — SAOIRSE",
    s: "06 FEB 2026",
    v: "ARCA CLUB, MILANO",
    img: "assets/img/events/639113260411031949.jpeg"
  },
  {
    t: "SOULSTICE & CORE — SIMONE DE KUNOVICH",
    s: "27 DEC 2025",
    v: "MUSEO MADRE, NAPOLI",
    img: "assets/img/events/639113260202942626.jpeg"
  },
  {
    t: "SOULSTICE — BUGSY, DUSTIN PHIL, NIIO",
    s: "13 DEC 2025",
    v: "SPAZIO DIAZ, MILANO",
    img: "assets/img/events/639113260060135594.jpeg"
  },
  {
    t: "B MUSIC & SOULSTICE — APRÈS SKI",
    s: "07 DEC 2025",
    v: "PIANI DI BOBBIO (LC)",
    img: "assets/img/events/639113259889263311.jpeg"
  },
  {
    t: "SOULSTICE SHOWCASE LONDON",
    s: "13 NOV 2025",
    v: "GALLERY CLUB, LONDON",
    img: "assets/img/events/639113259753897621.jpeg"
  },
  {
    t: "SOULSTICE — JAMIIE & SOUND SHAPES",
    s: "08 NOV 2025",
    v: "SPAZIO DIAZ, MILANO",
    img: "assets/img/events/639113259592009326.jpeg"
  },
  {
    t: "SOULSTICE — DEETRON",
    s: "31 OCT 2025",
    v: "ARCA CLUB, MILANO",
    img: "assets/img/events/638970778715839741.jpg"
  },
  {
    t: "SOULSTICE — MANO LE TOUGH",
    s: "09 OCT 2025",
    v: "THE SANCTUARY, ROME",
    img: "assets/img/events/639113259152797010.jpeg"
  },
  {
    t: "SOULSTICE PRESENTS — BRADLEY ZERO",
    s: "19 SEP 2025",
    v: "CHIOSTRI DI SAN BARNABA, MILANO",
    img: "assets/img/events/639113259312158354.jpeg"
  }
];

/**
 * PODCAST EPISODES (SoulCast su SoundCloud)
 * Tracce e copertine ufficiali SoundCloud
 */
const EPS = [
  {
    n: "009",
    t: "SOULCAST #009 — DIRTY CHANNELS",
    a: "DIRTY CHANNELS",
    l: "62:15",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-009-dirty-channels",
    img: "https://i1.sndcdn.com/artworks-skXKoUyEmbjV10Ut-TXvUwg-t500x500.jpg"
  },
  {
    n: "008",
    t: "SOULCAST #008 — OLIVIERO",
    a: "OLIVIERO",
    l: "58:40",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-008-oliviero",
    img: "https://i1.sndcdn.com/artworks-04TL51FyuSV5IOFi-GuXqaw-t500x500.jpg"
  },
  {
    n: "007",
    t: "SOULCAST #007 — WE.AMPS",
    a: "WE.AMPS",
    l: "60:10",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-007-we-amps",
    img: "https://i1.sndcdn.com/artworks-uLgQ92ECESbbXqZW-OKfoQg-t500x500.jpg"
  },
  {
    n: "006",
    t: "SOULCAST #006 — MUSUMECI",
    a: "MUSUMECI",
    l: "64:25",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-006-musumeci",
    img: "https://i1.sndcdn.com/artworks-CZqT8Y0TaTVnsyAh-Y5q28g-t500x500.jpg"
  },
  {
    n: "005",
    t: "SOULCAST #005 — RE.YOU",
    a: "RE.YOU",
    l: "59:30",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-005-re-you",
    img: "https://i1.sndcdn.com/artworks-gR6S5KAUjPdR9PET-Poh3YA-t500x500.jpg"
  },
  {
    n: "004",
    t: "SOULCAST #004 — NIIO",
    a: "NIIO",
    l: "55:18",
    u: "https://soundcloud.com/soulstice-247506189/soulcast-004-niio",
    img: "https://i1.sndcdn.com/artworks-cRu753OeEj4IsJ9V-Cqcaig-t500x500.jpg"
  }
];

/**
 * SOUL ARTISTS
 * Formato card 4:5, solo nome senza generi musicali.
 * Campi:
 *  - n: Nome artista
 *  - b: Breve biografia
 *  - v: URL video (opzionale, es. mp4). Se presente, la card riproduce l'anteprima muta in loop.
 *  - p: URL foto di dettaglio (opzionale, portrait max 300px).
 *  - ev: Ultima esibizione ("LATEST PERFORMANCE: ...")
 */
const ARTISTS = [
  {
    n: "DIRTY CHANNELS",
    b: "Italian duo fusing Chicago house roots, disco sensibilities and contemporary European groove. Headliners of SoulCast #009.",
    v: "",
    p: "", // TODO: Inserire foto ritratto artista (max 300px)
    ev: "LATEST PERFORMANCE: SOULCAST #009 SESSION"
  },
  {
    n: "OLIVIERO",
    b: "Milan-based sound architect delivering deep, hypnotic selections crafted for late night warehouse dancefloors.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #008 SESSION"
  },
  {
    n: "WE.AMPS",
    b: "Electronic collective blending broken beats, dub chords and warm vinyl cuts with surgical precision.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #007 SESSION"
  },
  {
    n: "MUSUMECI",
    b: "Internationally renowned Sicilian producer exploring emotive techno, melodic synth lines and intricate percussion.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #006 SESSION"
  },
  {
    n: "RE.YOU",
    b: "Known for dynamic builds, powerful drum patterns and boundary-pushing deep tech releases worldwide.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #005 SESSION"
  },
  {
    n: "NIIO",
    b: "Fast rhythms and crate-digger selections spanning early Detroit techno, UK bass and underground white labels.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #004 SESSION"
  },
  {
    n: "MAUEZ",
    b: "Resident artist with an organic, percussive approach, building tension over extended marathon sets.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #003 SESSION"
  },
  {
    n: "DUSTIN PHIL",
    b: "Foundational presence in the Milan underground scene, shaping the distinct acoustic identity of Soulstice.",
    v: "",
    p: "",
    ev: "LATEST PERFORMANCE: SOULCAST #002 SESSION"
  }
];

// Esportazione per browser globale (funziona nativamente sia su http:// che su file:///)
const SOULSTICE_DATA = {
  TICKETS_URL,
  SOUNDCLOUD_URL,
  SPOTIFY_URL,
  INSTAGRAM_URL,
  CONTACT_EMAIL,
  NEXT,
  EVENTS,
  EPS,
  ARTISTS
};

if (typeof window !== 'undefined') {
  window.SOULSTICE_DATA = SOULSTICE_DATA;
  window.NEXT = NEXT;
  window.EVENTS = EVENTS;
  window.EPS = EPS;
  window.ARTISTS = ARTISTS;
  window.TICKETS_URL = TICKETS_URL;
  window.SOUNDCLOUD_URL = SOUNDCLOUD_URL;
  window.SPOTIFY_URL = SPOTIFY_URL;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SOULSTICE_DATA;
}
