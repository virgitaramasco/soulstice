/**
 * Soulstice - Main JavaScript Application
 * Swiss International Design / Dekmantel style
 */

(function () {
  'use strict';

  // Carica i dati da window.SOULSTICE_DATA (o variabili globali)
  const data = window.SOULSTICE_DATA || window;
  const TICKETS_URL = data.TICKETS_URL || '';
  const SOUNDCLOUD_URL = data.SOUNDCLOUD_URL || '';
  const NEXT = data.NEXT || [];
  const EVENTS = data.EVENTS || [];
  const EPS = data.EPS || [];
  const ARTISTS = data.ARTISTS || [];

  document.addEventListener('DOMContentLoaded', () => {
    initTicketsButton();
    initMobileMenu();
    renderNextEvents();
    renderPastEvents();
    renderPodcasts();
    renderArtists();
    initEventDialog();
    initArtistDialog();
    initNewsletter();
    initScrollAnimations();
    initLoader();
  });

  /* ==========================================================================
     1. TICKETS & HEADER NAVIGATION
     ========================================================================== */

  function initTicketsButton() {
    const buyTicketsBtn = document.getElementById('buy-tickets-btn');
    if (buyTicketsBtn) {
      // TODO: Collegare il pulsante "Buy tickets" al link della biglietteria esterna o interna
      if (TICKETS_URL && TICKETS_URL.startsWith('http')) {
        buyTicketsBtn.href = TICKETS_URL;
        buyTicketsBtn.target = '_blank';
        buyTicketsBtn.rel = 'noopener noreferrer';
      } else {
        buyTicketsBtn.href = '#next';
      }
    }

    const scChannelLink = document.getElementById('sc-channel-link');
    if (scChannelLink) {
      scChannelLink.href = SOUNDCLOUD_URL || '#';
    }

    // Collegamento link dinamici del footer
    const igLink = document.getElementById('footer-instagram');
    if (igLink && INSTAGRAM_URL) {
      igLink.href = INSTAGRAM_URL;
    }
    const scFooterLink = document.getElementById('footer-soundcloud');
    if (scFooterLink && SOUNDCLOUD_URL) {
      scFooterLink.href = SOUNDCLOUD_URL;
    }
    const spFooterLink = document.getElementById('footer-spotify');
    if (spFooterLink && SPOTIFY_URL) {
      spFooterLink.href = SPOTIFY_URL;
    }
    const emailFooterLink = document.getElementById('footer-email');
    if (emailFooterLink && CONTACT_EMAIL) {
      emailFooterLink.href = `mailto:${CONTACT_EMAIL}`;
    }
  }

  function initMobileMenu() {
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('main-nav');

    if (!burgerBtn || !navMenu) return;

    burgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Chiudi menu al click su un link
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navMenu.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Chiudi menu con tasto Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.focus();
      }
    });
  }

  /* ==========================================================================
     2. NEXT EVENTS SECTION (4:5 Card Grid)
     ========================================================================== */

  function renderNextEvents() {
    const container = document.getElementById('next-grid');
    if (!container) return;

    container.innerHTML = NEXT.map((item, index) => {
      const isSoldOut = !item.on;
      const mediaHtml = item.img
        ? `<img src="${item.img}" alt="${escapeHtml(item.t)}" class="card-media" loading="lazy">`
        : `<div class="card-placeholder-box">SOULSTICE • ${escapeHtml(item.d)}</div>`;

      const soldOutBadge = isSoldOut
        ? `<span class="badge-sold-out" aria-label="Status: Sold Out">SOLD OUT</span>`
        : '';

      return `
        <button type="button" class="card" data-event-type="next" data-index="${index}" aria-label="Open event details: ${escapeHtml(item.t)}">
          ${mediaHtml}
          ${soldOutBadge}
          <div class="card-caption">
            <div class="card-date">${escapeHtml(item.d)}</div>
            <div class="card-title">${escapeHtml(item.t)}</div>
            <div class="card-location">${escapeHtml(item.v)}</div>
          </div>
        </button>
      `;
    }).join('');
  }

  /* ==========================================================================
     3. EVENTS ARCHIVE SECTION (4:5 Cards + View More)
     ========================================================================== */

  function renderPastEvents() {
    const container = document.getElementById('events-grid');
    const moreBtn = document.getElementById('events-toggle-btn');
    if (!container) return;

    container.innerHTML = EVENTS.map((item, index) => {
      const isHidden = index >= 4;
      const mediaHtml = item.img
        ? `<img src="${item.img}" alt="${escapeHtml(item.t)}" class="card-media" loading="lazy">`
        : `<div class="card-placeholder-box">ARCHIVE • ${escapeHtml(item.s)}</div>`;

      return `
        <button type="button" class="card${isHidden ? ' is-hidden' : ''}" data-event-type="past" data-index="${index}" aria-label="Open event details: ${escapeHtml(item.t)}">
          ${mediaHtml}
          <div class="card-caption">
            <div class="card-date">${escapeHtml(item.s)}</div>
            <div class="card-title">${escapeHtml(item.t)}</div>
            <div class="card-location">${escapeHtml(item.v || 'MILAN')}</div>
          </div>
        </button>
      `;
    }).join('');

    if (moreBtn) {
      if (EVENTS.length <= 4) {
        moreBtn.style.display = 'none';
      } else {
        moreBtn.addEventListener('click', () => {
          const isExpanded = container.classList.toggle('is-expanded');
          moreBtn.textContent = isExpanded ? 'VIEW LESS' : 'VIEW MORE';
          moreBtn.setAttribute('aria-expanded', String(isExpanded));
          if (isExpanded) {
            container.querySelectorAll('.card').forEach((c) => {
              c.classList.add('is-revealed');
            });
          }
        });
      }
    }
  }

  /* ==========================================================================
     4. PODCAST SECTION (List of Episodes)
     ========================================================================== */

  function renderPodcasts() {
    const container = document.getElementById('podcast-list');
    if (!container) return;

    container.innerHTML = EPS.map((ep, index) => {
      const trackUrl = ep.u || SOUNDCLOUD_URL || '#';
      const initialThumb = ep.img
        ? `<img src="${ep.img}" alt="Cover ${escapeHtml(ep.t)}" loading="lazy">`
        : `<div class="podcast-thumb-placeholder">EP ${escapeHtml(ep.n)}</div>`;

      return `
        <a class="podcast-row" href="${trackUrl}" target="_blank" rel="noopener noreferrer" data-index="${index}" aria-label="Listen to Episode ${escapeHtml(ep.n)}: ${escapeHtml(ep.t)} on SoundCloud">
          <div class="podcast-thumb" id="podcast-thumb-${index}">
            ${initialThumb}
          </div>
          <div class="podcast-info">
            <div class="podcast-title">${escapeHtml(ep.t)}</div>
            <div class="podcast-meta">EPISODE ${escapeHtml(ep.n)}, ${escapeHtml(ep.a)}</div>
          </div>
          <div class="podcast-duration">${escapeHtml(ep.l)}</div>
          <div class="podcast-play" aria-hidden="true">
            <span class="podcast-play-icon"></span>
          </div>
        </a>
      `;
    }).join('');

    // Fetch copertine da SoundCloud oEmbed se non è definita un'immagine esplicita
    EPS.forEach((ep, index) => {
      if (ep.img) return; // Immagine già presente
      if (!ep.u) return; // Nessun URL traccia

      const thumbContainer = document.getElementById(`podcast-thumb-${index}`);
      if (!thumbContainer) return;

      const oembedUrl = `https://soundcloud.com/oembed?format=json&url=${encodeURIComponent(ep.u)}`;

      fetch(oembedUrl)
        .then((res) => {
          if (!res.ok) throw new Error('SoundCloud oEmbed request failed');
          return res.json();
        })
        .then((data) => {
          if (data && data.thumbnail_url) {
            const img = new Image();
            img.src = data.thumbnail_url;
            img.alt = `Cover ${ep.t}`;
            img.loading = 'lazy';
            img.onload = () => {
              thumbContainer.innerHTML = '';
              thumbContainer.appendChild(img);
            };
          }
        })
        .catch(() => {
          // Fallback silenzioso sul riquadro grigio segnaposto
        });
    });
  }

  /* ==========================================================================
     5. SOUL ARTISTS SECTION (4:5 Cards, Solo Nome, Video Hover/Touch)
     ========================================================================== */

  function renderArtists() {
    const container = document.getElementById('artists-grid');
    if (!container) return;

    container.innerHTML = ARTISTS.map((artist, index) => {
      let mediaHtml = '';

      if (artist.v) {
        // Se l'artista ha un video, mostra il primo fotogramma e anteprima muta in loop
        mediaHtml = `
          <video muted loop playsinline preload="metadata" src="${artist.v}#t=0.001" aria-hidden="true"></video>
          <span class="artist-card-play-tag" aria-hidden="true"></span>
        `;
      } else if (artist.p) {
        mediaHtml = `<img src="${artist.p}" alt="${escapeHtml(artist.n)}" class="card-media" loading="lazy">`;
      } else {
        mediaHtml = `<div class="card-placeholder-box card-placeholder-plain"></div>`;
      }

      return `
        <button type="button" class="card-artist" data-index="${index}" aria-label="Open artist profile: ${escapeHtml(artist.n)}">
          ${mediaHtml}
          <div class="card-artist-caption">
            <h3 class="card-artist-name">${escapeHtml(artist.n)}</h3>
          </div>
        </button>
      `;
    }).join('');

    // Gestione anteprime video: Hover su Desktop, IntersectionObserver su Touch
    initArtistVideoPreviews();
  }

  function initArtistVideoPreviews() {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const artistCards = document.querySelectorAll('.card-artist');

    if (!isTouch) {
      // Desktop: riproduzione muta in loop all'hover
      artistCards.forEach((card) => {
        const video = card.querySelector('video');
        if (!video) return;

        card.addEventListener('mouseenter', () => {
          video.play().catch(() => {});
        });

        card.addEventListener('mouseleave', () => {
          video.pause();
        });
      });
    } else if ('IntersectionObserver' in window) {
      // Mobile / Touch: parte quando la card è visibile per almeno il 60%
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target.querySelector('video');
            if (!video) return;

            if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.6 }
      );

      artistCards.forEach((card) => {
        if (card.querySelector('video')) {
          observer.observe(card);
        }
      });
    }
  }

  /* ==========================================================================
     6. EVENT DIALOG (Next & Past Events)
     ========================================================================== */

  function initEventDialog() {
    const dialog = document.getElementById('event-dialog');
    const closeBtn = document.getElementById('event-dialog-close');
    const imgContainer = document.getElementById('event-dialog-img');
    const titleEl = document.getElementById('event-dialog-title');
    const metaEl = document.getElementById('event-dialog-meta');
    const actionsEl = document.getElementById('event-dialog-actions');

    if (!dialog || !closeBtn) return;

    function openModal(eventData) {
      if (!eventData) return;

      if (eventData.img) {
        imgContainer.innerHTML = `<img src="${eventData.img}" alt="${escapeHtml(eventData.t)}">`;
      } else {
        imgContainer.innerHTML = `<div class="card-placeholder-box" style="font-size:16px;">SOULSTICE • ${escapeHtml(eventData.d || eventData.s)}</div>`;
      }

      titleEl.textContent = eventData.t;

      const dateStr = eventData.d || eventData.s || '';
      const locStr = eventData.v ? `• ${eventData.v}` : '';
      metaEl.textContent = `${dateStr} ${locStr}`.trim();

      if (actionsEl) {
        if (eventData.url) {
          actionsEl.innerHTML = `<a href="${escapeHtml(eventData.url)}" target="_blank" rel="noopener noreferrer" class="btn-event-link">INFO & TICKETS ↗</a>`;
          actionsEl.style.display = 'block';
        } else {
          actionsEl.innerHTML = '';
          actionsEl.style.display = 'none';
        }
      }

      dialog.showModal();
    }

    function closeModal() {
      dialog.close();
    }

    // Listener card Next Events
    const nextGrid = document.getElementById('next-grid');
    if (nextGrid) {
      nextGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && card.dataset.index !== undefined) {
          openModal(NEXT[card.dataset.index]);
        }
      });
    }

    // Listener card Past Events
    const eventsGrid = document.getElementById('events-grid');
    if (eventsGrid) {
      eventsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && card.dataset.index !== undefined) {
          openModal(EVENTS[card.dataset.index]);
        }
      });
    }

    // Chiusura con ×
    closeBtn.addEventListener('click', closeModal);

    // Chiusura cliccando all'esterno sul backdrop
    dialog.addEventListener('click', (e) => {
      const rect = dialog.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.bottom &&
        rect.left <= e.clientX &&
        e.clientX <= rect.right
      );
      if (!isInDialog) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     7. ARTIST RADAR DIALOG (Dekmantel Inspired)
     ========================================================================== */

  function initArtistDialog() {
    const dialog = document.getElementById('artist-dialog');
    const closeBtn = document.getElementById('artist-dialog-close');
    const nameEl = document.getElementById('artist-radar-name');
    const bioEl = document.getElementById('artist-radar-bio');
    const photoContainer = document.getElementById('artist-radar-photo');
    const videoEl = document.getElementById('artist-radar-video');
    const playBtn = document.getElementById('artist-radar-play');
    const bufferingLoader = document.getElementById('artist-video-loader');
    const noVideoNotice = document.getElementById('artist-radar-no-video');
    const latestEl = document.getElementById('artist-radar-latest');

    if (!dialog || !closeBtn) return;

    function openArtist(artist) {
      if (!artist) return;

      nameEl.textContent = artist.n;
      bioEl.textContent = artist.b || 'Information coming soon.';
      latestEl.textContent = artist.ev || 'LATEST PERFORMANCE: SOULSTICE MILANO';

      // Gestione Foto dettaglio (portrait max 300px; su mobile 50% max 200px)
      if (artist.p) {
        photoContainer.innerHTML = `<img src="${artist.p}" alt="Portrait of ${escapeHtml(artist.n)}">`;
      } else {
        photoContainer.innerHTML = `<div class="card-placeholder-box">PHOTO ARCHIVE<br>${escapeHtml(artist.n)}</div>`;
      }

      // Reset video player
      videoEl.pause();
      videoEl.controls = false;
      bufferingLoader.classList.remove('is-active');

      if (artist.v) {
        videoEl.src = artist.v;
        videoEl.style.display = 'block';
        noVideoNotice.style.display = 'none';
        playBtn.style.display = 'flex';
      } else {
        videoEl.removeAttribute('src');
        videoEl.style.display = 'none';
        noVideoNotice.style.display = 'flex';
        playBtn.style.display = 'none';
      }

      dialog.showModal();
    }

    function closeArtist() {
      videoEl.pause();
      dialog.close();
    }

    // Click su card artista
    const artistsGrid = document.getElementById('artists-grid');
    if (artistsGrid) {
      artistsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.card-artist');
        if (card && card.dataset.index !== undefined) {
          openArtist(ARTISTS[card.dataset.index]);
        }
      });
    }

    // Primo play video: attiva controlli nativi e avvia riproduzione
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        videoEl.controls = true;
        playBtn.style.display = 'none';
        bufferingLoader.classList.add('is-active');
        videoEl.play().catch(() => {});
      });
    }

    // Eventi video per il buffering loader (stesso logo del preloader)
    if (videoEl) {
      videoEl.addEventListener('waiting', () => {
        bufferingLoader.classList.add('is-active');
      });

      ['playing', 'pause', 'canplay', 'error'].forEach((eventName) => {
        videoEl.addEventListener(eventName, () => {
          bufferingLoader.classList.remove('is-active');
        });
      });
    }

    // Chiusura con ×
    closeBtn.addEventListener('click', closeArtist);

    // Chiusura con click esterno
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        closeArtist();
      }
    });

    // Chiusura con ESC (evento close nativo)
    dialog.addEventListener('close', () => {
      videoEl.pause();
    });
  }

  /* ==========================================================================
     8. FULL SCREEN LOADER
     ========================================================================== */

  function initLoader() {
    const loader = document.getElementById('app-loader');
    if (!loader) return;

    function hideLoader() {
      loader.classList.add('is-hidden');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    // Scompare dopo l'evento load della pagina con dissolvenza fluida
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 600);
    });

    // Fallback di sicurezza: massimo 3 secondi
    setTimeout(hideLoader, 3000);
  }

  /* ==========================================================================
     9. FOOTER NEWSLETTER
     ========================================================================== */

  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    const feedback = document.getElementById('newsletter-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email || !email.includes('@') || !email.includes('.')) {
        feedback.style.color = '#ff4444';
        feedback.textContent = 'PLEASE ENTER A VALID EMAIL ADDRESS.';
        return;
      }

      feedback.style.color = '#ffffff';
      feedback.textContent = 'THANK YOU FOR SUBSCRIBING. WELCOME TO SOULSTICE.';
      form.reset();
    });
  }

  /* ==========================================================================
     10. SCROLL REVEAL ANIMATIONS
     ========================================================================== */

  function initScrollAnimations() {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const selector = '.section-header, .card, .card-artist, .podcast-row, .btn-more';
    const elements = document.querySelectorAll(selector);

    if (isReduced || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    elements.forEach(el => el.classList.add('scroll-reveal'));

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px 40px 0px',
      threshold: 0.05
    });

    elements.forEach(el => observer.observe(el));
  }

  /* ==========================================================================
     UTILITIES
     ========================================================================== */

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();
