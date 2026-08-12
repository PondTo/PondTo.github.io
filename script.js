/* ==========================================================================
   3 YEARS, ONE LOVE — script.js
   --------------------------------------------------------------------------
   ★ แก้ไขทุกอย่างได้ที่ส่วน CONFIG ด้านล่างนี้ที่เดียว
     ส่วนที่เหลือไม่ต้องแตะก็ได้
   ========================================================================== */


/* ==========================================================================
   ██  CONFIG — แก้ตรงนี้  ██
   ========================================================================== */

const anniversaryConfig = {
  /* ชื่อแฟน (ใส่ชื่อเล่นที่เรียกกันจริง ๆ จะอบอุ่นกว่า) */
  partnerName: "Film",

  /* ชื่อของคุณเอง — ใช้ลงท้ายจดหมาย */
  yourName: "Pond",

  /* วันที่เริ่มคบ — รูปแบบ YYYY-MM-DD (ตัวนับเวลาคำนวณจากค่านี้)
     [START_DATE] ← เปลี่ยนเป็นวันจริงของเรา */
  startDate: "2023-08-13",

  /* เวลาโดยประมาณของวันแรก (ไม่รู้ก็ปล่อยไว้ 00:00) */
  startTime: "00:00",

  /* ครบรอบกี่ปี */
  anniversaryYear: 3,

  /* อักษรบนตราครั่งของซองจดหมาย — ใส่ตัวอักษรตัวแรกของชื่อแฟนก็สวยดี */
  waxInitial: "♥",

  /* เพลงของเรา */
  music: {
    src: "assets/music/our-song.mp3",
    title: "Three Man Down-ข้างกัน",
    artist: "Three Man Down"
  }
};


/* ── SECTION 3 · GALLERY ──────────────────────────────────────────────
   size: "big" | "wide" | "tall" | undefined (ปกติ)
   ใส่ได้ 8–12 รูปกำลังสวย
──────────────────────────────────────────────────────────────────── */
const gallery = [
  { src: "assets/images/photo-01.jpg", caption: "Our first trip",        size: "big"  },
  { src: "assets/images/photo-02.jpg", caption: "That silly day"                       },
  { src: "assets/images/photo-03.jpg", caption: "My favorite memory",    size: "tall" },
  { src: "assets/images/photo-04.jpg", caption: "The day I realized..."                },
  { src: "assets/images/photo-05.jpg", caption: "Rainy afternoon",       size: "wide" },
  { src: "assets/images/photo-06.jpg", caption: "Your laugh, again"                    },
  { src: "assets/images/photo-07.jpg", caption: "Late night talks",      size: "tall" },
  { src: "assets/images/photo-08.jpg", caption: "Just us"                              },
  { src: "assets/images/photo-09.jpg", caption: "Somewhere new",         size: "wide" },
  { src: "assets/images/photo-10.jpg", caption: "The little things"                    },
  { src: "assets/images/photo-11.jpg", caption: "Home",                  size: "big"  },
  { src: "assets/images/photo-12.jpg", caption: "Still my person"                      }
];


/* ── SECTION 4 · THINGS I LOVE ABOUT YOU ──────────────────────────── */
const thingsILove = [
  { title: "Your Smile",            note: "ยิ้มทีเดียววันแย่ ๆ ก็ดีขึ้นได้" },
  { title: "Your Laugh",            note: "เสียงหัวเราะที่ทำให้ทุกที่กลายเป็นบ้าน" },
  { title: "The Way You Care",      note: "ห่วงคนอื่นเก่งจนบางทีลืมห่วงตัวเอง" },
  { title: "How You Always Listen", note: "ฟังจริง ๆ ไม่ใช่แค่รอถึงตาพูด" },
  { title: "Your Silly Side",       note: "ด้านที่มีแค่เราสองคนเท่านั้นที่รู้" },
  { title: "Your Strength",         note: "ล้มได้ ร้องได้ แล้วก็ลุกขึ้นเสมอ" },
  { title: "Your Hands",            note: "มือที่จับแล้วรู้สึกว่าจะไม่เป็นไร" },
  { title: "Simply... You",         note: "ไม่ต้องมีเหตุผลอะไรมากไปกว่านี้" }
];


/* ── SECTION 6 · LOVE LETTER ──────────────────────────────────────────
   แต่ละบรรทัดใน array = หนึ่งย่อหน้า
   ใส่ <em>ข้อความ</em> เพื่อเน้นเป็นตัวเอียงสีแดงได้
──────────────────────────────────────────────────────────────────── */
const letter = [
  "3 ปีที่ผ่านมาอาจมีทั้งวันที่เราหัวเราะ วันที่เราทะเลาะ วันที่เหนื่อย และวันที่มีความสุข",
  "แต่สิ่งหนึ่งที่ไม่เคยเปลี่ยนคือ <em>ฉันยังดีใจที่มีเธออยู่ข้าง ๆ</em>",
  "ขอบคุณที่อดทนกับวันที่ฉันไม่น่ารัก ขอบคุณที่ยังเลือกจะเข้าใจ และขอบคุณที่เดินมาด้วยกันจนถึงวันนี้",
  "ถ้าย้อนกลับไปวันแรกได้อีกครั้ง ฉันก็ยังเลือกเธอเหมือนเดิม"
];

/* คำลงท้ายจดหมาย */
const letterSignoff = "รักนะ";


/* ── SECTION 7 · OUR FUTURE ───────────────────────────────────────── */
const future = [
  "อยากพาเธอไปที่ที่เราเคยพูดถึงกัน",
  "อยากมีวันธรรมดา ๆ ด้วยกัน",
];


/* ==========================================================================
   ██  จบส่วน CONFIG — ด้านล่างคือโค้ดการทำงาน  ██
   ========================================================================== */


(function () {
  "use strict";

  /* ── Helpers ───────────────────────────────────────────────────── */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 640px)").matches;

  /** สร้างกรอบรูปพร้อม fallback เมื่อยังไม่มีไฟล์ภาพ */
  function buildMedia(src, alt, ratio) {
    const box = document.createElement("div");
    box.className = "media";
    if (ratio) box.style.aspectRatio = ratio;
    box.dataset.file = src || "ยังไม่ได้ใส่รูป";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = alt || "";
    img.addEventListener("error", () => box.classList.add("media--empty"));
    if (src) img.src = src;
    else box.classList.add("media--empty");

    box.appendChild(img);
    return box;
  }

  /** แปลงวินาทีเป็น m:ss */
  function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ":" + String(s).padStart(2, "0");
  }

  const pad = (n, len = 2) => String(n).padStart(len, "0");


  /* ══════════════════════════════════════════════════════════════
     1. เติมชื่อ / วันที่ จาก CONFIG ลงในหน้าเว็บ
  ══════════════════════════════════════════════════════════════ */
  const name = anniversaryConfig.partnerName;

  ["partnerNameHero", "partnerNameFinale", "partnerNameFoot"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = name;
  });

  const startDT = new Date(
    anniversaryConfig.startDate + "T" + (anniversaryConfig.startTime || "00:00") + ":00"
  );
  const validDate = !isNaN(startDT.getTime());

  const startLabel = $("#startDateLabel");
  if (startLabel) {
    startLabel.textContent = validDate
      ? startDT.toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" })
      : "[START_DATE]";
  }

  const footYear = $("#footYear");
  if (footYear) footYear.textContent = new Date().getFullYear();


  /* ══════════════════════════════════════════════════════════════
     2. SCROLL REVEAL — ใช้ IntersectionObserver ตัวเดียวร่วมกัน
  ══════════════════════════════════════════════════════════════ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  function observeReveals(root = document) {
    $$("[data-reveal]", root).forEach(el => {
      if (el.dataset.delay) el.style.setProperty("--d", el.dataset.delay);
      revealObserver.observe(el);
    });
  }


  /* ══════════════════════════════════════════════════════════════
     3. RENDER — GALLERY (bento) + LIGHTBOX
  ══════════════════════════════════════════════════════════════ */
  const failedImages = new Set();

  (function renderGallery() {
    const host = $("#bento");
    if (!host) return;

    gallery.forEach((item, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tile" + (item.size ? " tile--" + item.size : "");
      btn.style.setProperty("--d", i % 6);
      btn.dataset.index = i;
      btn.setAttribute("aria-label", "เปิดภาพ: " + (item.caption || "ความทรงจำ"));

      const media = buildMedia(item.src, item.caption);
      const img = media.querySelector("img");
      img.addEventListener("error", () => failedImages.add(i));

      const cap = document.createElement("span");
      cap.className = "tile__cap";
      cap.textContent = item.caption || "";

      btn.append(media, cap);
      btn.addEventListener("click", () => openLightbox(i));
      host.appendChild(btn);

      revealObserver.observe(btn);
    });
  })();

  /* — Lightbox — */
  const lb        = $("#lightbox");
  const lbImg     = $("#lbImg");
  const lbEmpty   = $("#lbEmpty");
  const lbPath    = $("#lbEmptyPath");
  const lbCaption = $("#lbCaption");
  const lbCount   = $("#lbCount");
  let lbIndex = 0;
  let lastFocused = null;

  function showSlide(i) {
    lbIndex = (i + gallery.length) % gallery.length;
    const item = gallery[lbIndex];

    if (failedImages.has(lbIndex)) {
      lbImg.hidden = true;
      lbEmpty.hidden = false;
      lbPath.textContent = item.src;
    } else {
      lbEmpty.hidden = true;
      lbImg.hidden = false;
      lbImg.src = item.src;
      lbImg.alt = item.caption || "";
      // เผื่อกรณีโหลดไม่ผ่านตอนเปิดเต็มจอ
      lbImg.onerror = () => {
        failedImages.add(lbIndex);
        lbImg.hidden = true;
        lbEmpty.hidden = false;
        lbPath.textContent = item.src;
      };
    }

    lbCaption.textContent = item.caption || "";
    lbCount.textContent = pad(lbIndex + 1) + " / " + pad(gallery.length);
  }

  function openLightbox(i) {
    if (!lb) return;
    lastFocused = document.activeElement;
    lb.hidden = false;
    document.body.classList.add("is-modal");
    requestAnimationFrame(() => lb.classList.add("is-open"));
    showSlide(i);
    $("#lbClose").focus({ preventScroll: true });
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove("is-open");
    document.body.classList.remove("is-modal");
    setTimeout(() => { lb.hidden = true; }, 380);
    if (lastFocused) lastFocused.focus({ preventScroll: true });
  }

  if (lb) {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => showSlide(lbIndex - 1));
    $("#lbNext").addEventListener("click", () => showSlide(lbIndex + 1));

    // คลิกพื้นที่ว่างเพื่อปิด
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target === $("#lbFigure")) closeLightbox();
    });

    // คีย์บอร์ด
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape")     closeLightbox();
      if (e.key === "ArrowLeft")  showSlide(lbIndex - 1);
      if (e.key === "ArrowRight") showSlide(lbIndex + 1);
    });

    // ปัดนิ้วบนมือถือ
    let touchX = 0;
    lb.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 55) showSlide(dx > 0 ? lbIndex - 1 : lbIndex + 1);
    }, { passive: true });
  }


  /* ══════════════════════════════════════════════════════════════
     4. RENDER — CARDS (Things I love about you)
  ══════════════════════════════════════════════════════════════ */
  (function renderCards() {
    const host = $("#cards");
    if (!host) return;

    thingsILove.forEach((item, i) => {
      const card = document.createElement("article");
      card.className = "card";
      card.style.setProperty("--d", i % 4);
      card.tabIndex = 0;

      card.innerHTML =
        '<span class="card__no">' + pad(i + 1) + "</span>" +
        '<div>' +
          '<h3 class="card__title"></h3>' +
          '<p class="card__note"></p>' +
        "</div>" +
        '<span class="card__heart" aria-hidden="true">&#10084;</span>';

      card.querySelector(".card__title").textContent = item.title;
      card.querySelector(".card__note").textContent = item.note || "";

      // แสงตามเมาส์ (ข้ามถ้าเปิดโหมดลดการเคลื่อนไหว)
      if (!prefersReduced) {
        card.addEventListener("pointermove", (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
          card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
        });
      }

      // แตะบนมือถือ = สลับสถานะ active
      card.addEventListener("click", () => card.classList.toggle("is-tapped"));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.classList.toggle("is-tapped");
        }
      });

      host.appendChild(card);
      revealObserver.observe(card);
    });
  })();


  /* ══════════════════════════════════════════════════════════════
     5. RENDER — LOVE LETTER + FUTURE
  ══════════════════════════════════════════════════════════════ */
  (function renderLetter() {
    const salute = $("#paperSalute");
    const body   = $("#paperBody");
    const sign   = $("#paperSign");
    const from   = $("#paperFrom");
    const envTo  = $("#envelopeTo");
    const wax    = $("#waxInitial");

    if (salute) salute.textContent = "ถึง " + name;
    if (envTo)  envTo.textContent  = "To " + name;
    if (sign)   sign.textContent   = letterSignoff;
    if (from)   from.textContent   = "— " + anniversaryConfig.yourName;
    if (wax)    wax.innerHTML      = anniversaryConfig.waxInitial;

    if (body) {
      body.innerHTML = letter.map(p => "<p>" + p + "</p>").join("");
    }
  })();

  (function renderFuture() {
    const host = $("#futureList");
    if (!host) return;

    future.forEach((text, i) => {
      const row = document.createElement("div");
      row.className = "fut";
      row.style.setProperty("--d", i);
      row.innerHTML =
        '<span class="fut__mark" aria-hidden="true">&#10022;</span>' +
        '<p class="fut__text"></p>';
      row.querySelector(".fut__text").textContent = text;
      host.appendChild(row);
      revealObserver.observe(row);
    });
  })();


  /* ══════════════════════════════════════════════════════════════
     6. LIVE COUNTER — นับจากวันเริ่มคบจริง
  ══════════════════════════════════════════════════════════════ */
  (function liveCounter() {
    const dEl = $("#cDays"), hEl = $("#cHours"), mEl = $("#cMins"), sEl = $("#cSecs");
    const foot = $("#counterFoot");
    if (!dEl) return;

    if (!validDate) {
      foot.textContent = "ใส่วันที่เริ่มคบใน script.js (anniversaryConfig.startDate) เพื่อเริ่มนับ";
      return;
    }

    let lastSec = -1;

    function tick() {
      let diff = Date.now() - startDT.getTime();
      if (diff < 0) diff = 0;

      const totalSec = Math.floor(diff / 1000);
      const days  = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const mins  = Math.floor((totalSec % 3600) / 60);
      const secs  = totalSec % 60;

      dEl.textContent = pad(days, 3);
      hEl.textContent = pad(hours);
      mEl.textContent = pad(mins);

      if (secs !== lastSec) {
        sEl.textContent = pad(secs);
        if (!prefersReduced) {
          sEl.classList.remove("tick");
          void sEl.offsetWidth;          // บังคับให้ animation เล่นซ้ำ
          sEl.classList.add("tick");
        }
        lastSec = secs;
      }
    }

    tick();
    setInterval(tick, 1000);

    if (foot) {
      const yrs = anniversaryConfig.anniversaryYear;
      foot.textContent = "และยังนับต่อไปเรื่อย ๆ · " + yrs + " ปีนี้เป็นแค่จุดเริ่มต้น";
    }
  })();


  /* ══════════════════════════════════════════════════════════════
     7. MUSIC PLAYER — custom UI, ไม่ autoplay
  ══════════════════════════════════════════════════════════════ */
  (function musicPlayer() {
    const wrap  = $("#player");
    const audio = $("#audio");
    if (!wrap || !audio) return;

    const playBtn = $("#playBtn");
    const playText = $("#playText");
    const bar     = $("#seek");
    const fill    = $("#seekFill");
    const knob    = $("#seekKnob");
    const tNow    = $("#timeNow");
    const tAll    = $("#timeAll");
    const vol     = $("#volume");
    const hint    = $("#playerHint");

    $("#songTitle").textContent  = anniversaryConfig.music.title;
    $("#songArtist").textContent = anniversaryConfig.music.artist;

    audio.src = anniversaryConfig.music.src;
    audio.volume = 0.8;

    let ready = true;

    audio.addEventListener("error", () => {
      ready = false;
      hint.hidden = false;
      playBtn.disabled = true;
      playBtn.style.opacity = ".45";
      playBtn.style.cursor = "not-allowed";
    });

    audio.addEventListener("loadedmetadata", () => {
      tAll.textContent = fmtTime(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      fill.style.width = pct + "%";
      knob.style.left = pct + "%";
      tNow.textContent = fmtTime(audio.currentTime);
      bar.setAttribute("aria-valuenow", Math.round(pct));
    });

    audio.addEventListener("ended", () => {
      wrap.classList.remove("is-playing");
      playText.textContent = "Play Our Song";
      playBtn.setAttribute("aria-label", "เล่นเพลง");
    });

    playBtn.addEventListener("click", () => {
      if (!ready) return;
      if (audio.paused) {
        audio.play().then(() => {
          wrap.classList.add("is-playing");
          playText.textContent = "Pause";
          playBtn.setAttribute("aria-label", "หยุดเพลงชั่วคราว");
        }).catch(() => {
          hint.hidden = false;
        });
      } else {
        audio.pause();
        wrap.classList.remove("is-playing");
        playText.textContent = "Play Our Song";
        playBtn.setAttribute("aria-label", "เล่นเพลง");
      }
    });

    /* — เลื่อนตำแหน่งเพลง (คลิก + ลาก + คีย์บอร์ด) — */
    let dragging = false;

    function seekTo(clientX) {
      const r = bar.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      if (audio.duration) audio.currentTime = ratio * audio.duration;
      fill.style.width = ratio * 100 + "%";
      knob.style.left = ratio * 100 + "%";
    }

    bar.addEventListener("pointerdown", (e) => {
      if (!ready) return;
      dragging = true;
      bar.setPointerCapture(e.pointerId);
      seekTo(e.clientX);
    });
    bar.addEventListener("pointermove", (e) => { if (dragging) seekTo(e.clientX); });
    bar.addEventListener("pointerup",   () => { dragging = false; });
    bar.addEventListener("pointercancel", () => { dragging = false; });

    bar.addEventListener("keydown", (e) => {
      if (!ready || !audio.duration) return;
      if (e.key === "ArrowRight") audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      if (e.key === "ArrowLeft")  audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    vol.addEventListener("input", () => { audio.volume = vol.value / 100; });
  })();


  /* ══════════════════════════════════════════════════════════════
     8. LOVE LETTER — animation เปิดซอง
  ══════════════════════════════════════════════════════════════ */
  (function letterOpen() {
    const envelope = $("#envelope");
    const btn      = $("#letterBtn");
    const paper    = $("#paper");
    if (!envelope || !btn || !paper) return;

    btn.addEventListener("click", () => {
      if (envelope.classList.contains("is-open")) return;
      envelope.classList.add("is-open");

      // หัวใจฟุ้งออกจากซองเล็กน้อย
      if (!prefersReduced) {
        const r = envelope.getBoundingClientRect();
        popHearts(r.left + r.width / 2, r.top + r.height / 2, 10, 140);
      }

      const delay = prefersReduced ? 0 : 1250;
      setTimeout(() => {
        envelope.classList.add("is-gone");
        paper.hidden = false;
        paper.setAttribute("tabindex", "-1");
        paper.focus({ preventScroll: true });
      }, delay);
    });
  })();


  /* ══════════════════════════════════════════════════════════════
     9. หัวใจลอยรอบ ๆ + ดาวใน section อนาคต
  ══════════════════════════════════════════════════════════════ */
  function buildAmbientHearts() {
    const host = $("#ambientHearts");
    if (!host || prefersReduced) return;

    const count = isMobile ? 8 : 14;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const h = document.createElement("span");
      h.className = "fheart";
      h.textContent = "♥";
      h.style.left = Math.random() * 100 + "%";
      h.style.fontSize = (8 + Math.random() * 14) + "px";
      h.style.animationDuration = (16 + Math.random() * 16) + "s";
      h.style.animationDelay = (-Math.random() * 24) + "s";
      h.style.setProperty("--x", (Math.random() * 14 - 7) + "vw");
      frag.appendChild(h);
    }
    host.appendChild(frag);
  }

  function buildStars() {
    const host = $("#stars");
    if (!host || prefersReduced) return;

    const count = isMobile ? 22 : 44;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDuration = (2.2 + Math.random() * 4) + "s";
      s.style.animationDelay = (-Math.random() * 5) + "s";
      const size = Math.random() < 0.18 ? 3 : 2;
      s.style.width = s.style.height = size + "px";
      frag.appendChild(s);
    }
    host.appendChild(frag);
  }

  /** หัวใจพุ่งกระจายจากจุดหนึ่ง (ใช้ตอนกดปุ่มเปิดเว็บ / เปิดจดหมาย) */
  function popHearts(x, y, count, spread) {
    for (let i = 0; i < count; i++) {
      const h = document.createElement("span");
      h.className = "pop-heart";
      h.textContent = "♥";
      h.style.left = x + "px";
      h.style.top = y + "px";
      h.style.fontSize = (12 + Math.random() * 22) + "px";
      const ang = Math.random() * Math.PI * 2;
      const dist = spread * (0.4 + Math.random() * 0.8);
      h.style.setProperty("--px", Math.cos(ang) * dist + "px");
      h.style.setProperty("--py", (Math.sin(ang) * dist - 60) + "px");
      h.style.setProperty("--pr", (Math.random() * 80 - 40) + "deg");
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 1500);
    }
  }


  /* ══════════════════════════════════════════════════════════════
     10. SCROLL PROGRESS + DOT NAV + PARALLAX
  ══════════════════════════════════════════════════════════════ */
  (function scrollUI() {
    const progress = $("#scrollProgress");
    const heroInner = $(".hero__inner");
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const top = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = (max > 0 ? (top / max) * 100 : 0) + "%";

        // parallax เบา ๆ เฉพาะ hero
        if (heroInner && !prefersReduced && top < window.innerHeight) {
          heroInner.style.transform = "translate3d(0," + top * 0.16 + "px,0)";
          heroInner.style.opacity = String(Math.max(0, 1 - top / (window.innerHeight * 0.85)));
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ไฮไลต์จุดนำทางตาม section ที่กำลังดู
    const links = $$(".dotnav a");
    const sections = links
      .map(a => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if (sections.length) {
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          links.forEach(a => a.classList.toggle(
            "is-active",
            a.getAttribute("href") === "#" + entry.target.id
          ));
        });
      }, { threshold: 0.4, rootMargin: "-20% 0px -40% 0px" });

      sections.forEach(s => navObserver.observe(s));
    }
  })();


  /* ══════════════════════════════════════════════════════════════
     11. FINALE — หัวใจบนผืน canvas
  ══════════════════════════════════════════════════════════════ */
  (function finale() {
    const section = $("#finale");
    const canvas  = $("#heartCanvas");
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    const MAX = isMobile ? 26 : 54;
    let particles = [];
    let running = false;
    let rafId = null;
    let w = 0, h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function heartPath(x, y, s) {
      ctx.beginPath();
      ctx.moveTo(x, y + s * 0.32);
      ctx.bezierCurveTo(x, y - s * 0.08, x - s * 0.5, y - s * 0.05, x - s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x - s * 0.5, y + s * 0.62, x - s * 0.16, y + s * 0.78, x, y + s);
      ctx.bezierCurveTo(x + s * 0.16, y + s * 0.78, x + s * 0.5, y + s * 0.62, x + s * 0.5, y + s * 0.3);
      ctx.bezierCurveTo(x + s * 0.5, y - s * 0.05, x, y - s * 0.08, x, y + s * 0.32);
      ctx.closePath();
    }

    const COLORS = ["#d98c9a", "#f3d2d0", "#6e1230", "#c9a583"];

    function spawn(burst) {
      return {
        x: Math.random() * w,
        y: burst ? h * (0.45 + Math.random() * 0.4) : h + 40 + Math.random() * 120,
        size: 7 + Math.random() * 15,
        speed: 0.25 + Math.random() * 0.75,
        drift: Math.random() * 0.7 - 0.35,
        phase: Math.random() * Math.PI * 2,
        spin: Math.random() * 0.012 - 0.006,
        rot: Math.random() * Math.PI,
        alpha: 0.18 + Math.random() * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)]
      };
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.phase += 0.012;
        p.x += Math.sin(p.phase) * 0.5 + p.drift * 0.25;
        p.rot += p.spin;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.alpha * Math.min(1, p.y / (h * 0.25));
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 18;
        ctx.shadowColor = "rgba(217,140,154,.55)";
        heartPath(-p.size / 2, -p.size / 2, p.size);
        ctx.fill();
        ctx.restore();

        if (p.y < -60) particles[i] = spawn(false);
      }

      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (running || prefersReduced) return;
      running = true;
      resize();
      if (!particles.length) {
        particles = Array.from({ length: MAX }, () => spawn(true));
      }
      loop();
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    // เริ่ม/หยุด ตามการมองเห็น เพื่อไม่ให้กินเครื่องตอนอยู่นอกจอ
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add("is-in");
          start();
        } else {
          stop();
        }
      });
    }, { threshold: 0.25 });

    io.observe(section);

    window.addEventListener("resize", () => { if (running) resize(); }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (section.classList.contains("is-in")) start();
    });

    // ปุ่ม "อ่านอีกครั้ง"
    const again = $("#againBtn");
    if (again) {
      again.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
      });
    }
  })();


  /* ══════════════════════════════════════════════════════════════
     12. OPENING — ปุ่มเปิดเว็บ + transition
  ══════════════════════════════════════════════════════════════ */
  (function opening() {
    const overlay = $("#opening");
    const btn     = $("#openBtn");
    const burst   = $("#burst");
    const dotnav  = $("#dotnav");
    if (!overlay || !btn) return;

    let opened = false;

    function openSite(e) {
      if (opened) return;
      opened = true;

      // หัวใจพุ่งจากตำแหน่งปุ่ม
      if (!prefersReduced) {
        const r = btn.getBoundingClientRect();
        popHearts(r.left + r.width / 2, r.top + r.height / 2, 18, 220);
        burst.classList.add("is-fire");
      }

      const wait = prefersReduced ? 0 : 620;
      setTimeout(() => {
        overlay.classList.add("is-open");
        document.body.classList.remove("is-locked");
        if (dotnav) dotnav.classList.add("is-ready");

        // เริ่มเผยเนื้อหาหลังจากม่านเปิด
        observeReveals();
        buildAmbientHearts();
        buildStars();

        setTimeout(() => { overlay.remove(); }, 1300);
      }, wait);
    }

    btn.addEventListener("click", openSite);

    // เผื่อกรณีมีคนกด Enter ค้างไว้ หรือ JS ผิดพลาด → ปลดล็อกหลัง 20 วิ
    setTimeout(() => {
      if (!opened && document.body.classList.contains("is-locked")) {
        document.body.classList.remove("is-locked");
      }
    }, 20000);
  })();

})();
