# Soulstice — Milano

Sito web ufficiale per **Soulstice**, organizzatore di eventi e sessioni musicali a Milano.
Ispirato allo stile **Swiss International** e al design brutalista di *dekmantel.com*.

## Design & Specifiche

- **Palette**: Monocromatica pura (`#000000` / `#ffffff`) con grigio neutro (`#8a8a8a`) per dettagli secondari.
- **Tipografia**: Suisse Intl, all caps, tracking stretto (`-0.045em`).
- **Geometria**: Angoli rigorosamente retti (zero `border-radius`), griglia a 4 colonne desktop (2 su tablet e mobile) con gutter 20px e filetti sottili.
- **Media**: Immagini e video sempre a colori reali.
- **Sezioni**:
  1. **Navbar fissa**: Logo Soulstice, link di navigazione e pulsante "Buy tickets" collegato a Xceed. Menu a schermo intero su mobile.
  2. **Hero**: Video full-bleed in loop con overlay elegante.
  3. **Next Events**: Griglia con date confermate e badge "Sold out".
  4. **Events Archive**: Archivio completo con tutti i flyer storici in formato portrait 4:5 e pulsante "View more / View less".
  5. **Podcast (SoulCast)**: Episodi con miniature SoundCloud ufficiali e link diretto alle tracce.
  6. **Soul Artists**: Card 4:5 con anteprima video silenziosa in loop (hover su desktop, IntersectionObserver su touch) e scheda dettaglio a tutto schermo.
  7. **Footer**: Iscrizione alla Newsletter e link ufficiali (Instagram, SoundCloud, Spotify, Email).
- **Accessibilità**: Modali nativi `<dialog>` (`showModal()`), chiusura con `×`, `Esc` o click su backdrop, supporto `prefers-reduced-motion` e safe area iOS (`viewport-fit=cover`).

## Struttura Progetto

```
├── index.html              # Entry point di produzione
├── soulstice.html          # File sorgente sincronizzato
├── css/
│   └── style.css           # Design tokens, griglia Swiss e animazioni
├── js/
│   ├── data.js             # Dati eventi, podcast, artisti e link
│   └── main.js             # Logica vanilla JS (modali, video preview, newsletter)
├── assets/
│   ├── fonts/              # Font Suisse Intl
│   └── img/                # Logo SVG vettoriale e flyer degli eventi
└── server.js               # Server locale Node.js
```

## Avvio Locale

Per avviare il server locale:
```bash
node server.js
```
Apri il browser su [http://localhost:8080](http://localhost:8080).
Il sito funziona perfettamente anche tramite apertura diretta del file `index.html`.
