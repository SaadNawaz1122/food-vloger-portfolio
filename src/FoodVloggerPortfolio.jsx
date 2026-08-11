
import React, { useEffect, useRef, useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaBars,
  FaXmark,
  FaStar,
  FaArrowRight,
  FaUtensils,
  FaCamera,
  FaHeart,
  FaPaperPlane,
  FaPen,
  FaTrash,
  FaCheck,
} from "react-icons/fa6";

/* ============================================================
   PREMIUM FOOD VLOGGER PORTFOLIO
   Everything is inside this ONE FILE.
   Change personal information from CONFIG only.
============================================================ */

const CONFIG = {
  name: "Ahtesham Ul Haq",
  city: "Gojra",

  tagline:
    "Authentic food discoveries, cinematic storytelling and creative brand promotions — all presented with a premium visual experience.",

  bio1:
    "I am a food content creator from Gojra who explores local dhabas, restaurants, cafes and street food spots. My focus is on honest reviews, cinematic visuals and engaging storytelling that helps every place tell its story.",

  bio2:
    "Beyond food reviews, I create promotional content for restaurants, brands, academies, shops and local businesses. Every collaboration is designed to feel natural, creative and valuable to both the business and its audience.",

  collabs: "100+",

  whatsappNumber: "923173480156",

  email: "ahteshamvlogs222@gmail.com",

  socials: {
    instagram: {
      handle: "@ahtesham__g",
      followers: "1K",
      url: "https://www.instagram.com/ahtesham__g",
    },

    youtube: {
      handle: "ahtesham_g",
      url: "https://youtube.com/@ahtesham_g",
    },

    tiktok: {
      handle: "@ahtesham__156",
      followers: "25K+",
      url: "https://www.tiktok.com/@ahtesham__156",
    },
  },

  images: {
    heroProfile: "/images/profile.jpg",
    about: "/images/profile.jpg",
  },

  videos: [
    "/videos/video-1.mp4",
    "/videos/video-2.mp4",
    "/videos/video-3.mp4",
    "/videos/video-4.mp4",
    "/videos/video-5.mp4",
    "/videos/video-6.mp4",
  ],
};

/* ============================================================
   PROMOTION RATES
============================================================ */

const RATES = [
  {
    category: "Doctor Promotion",
    price: "Rs. 15,000",
    description:
      "Professional promotional content for doctors, clinics and healthcare professionals.",
  },
  {
    category: "Academy",
    price: "Rs. 15,000",
    description:
      "Creative promotional content for academies, institutes and educational centers.",
  },
  {
    category: "Bakers",
    price: "Rs. 12,000",
    description:
      "High-quality food content to showcase bakery products, cakes and special items.",
  },
  {
    category: "Restaurant",
    price: "Rs. 8,000",
    description:
      "Engaging food promotion featuring your restaurant, menu and signature dishes.",
  },
  {
    category: "PR",
    price: "Rs. 7,000",
    description:
      "Professional PR and promotional coverage designed to increase local visibility.",
  },
  {
    category: "Local Fast Food Points",
    price: "Rs. 5,000",
    description:
      "Affordable promotional content for local fast food spots and street food businesses.",
  },
  {
    category: "Saloon",
    price: "Rs. 10,000",
    description:
      "Visual promotional content for salons, beauty services and grooming businesses.",
  },
  {
    category: "Clothing Store / Shop",
    price: "Rs. 14,000",
    description:
      "Creative promotional content to showcase clothing collections, products and offers.",
  },
  {
    category: "Shops",
    price: "Rs. 10,000",
    description:
      "Professional promotional coverage for local shops and businesses.",
  },
];

/* ============================================================
   TIKTOK ACCOUNT SETUP PACKAGES
   (Prices are placeholders — set your own price here.)
============================================================ */

const TIKTOK_PACKAGES = [
  {
    category: "Creator Launchpad",
    price: "Rs. 20K",
    description:
      "New TikTok account creation, profile branding, bio, niche selection aur pehli 5 videos ke liye guidance.",
  },
  {
    category: "TikTok Elevate",
    price: "Rs. 30K",
    description:
      "Account setup, content strategy, hashtag research aur consistent posting plan taake account tezi se grow ho.",
  },
  {
    category: "Premium TikTok Management",
    price: "Rs. 50K",
    description:
      "Complete account setup + ongoing content planning, editing tips aur monthly growth strategy — end to end.",
  },
];

/* ============================================================
   NAVIGATION
============================================================ */

const NAV = [
  { id: "about", label: "About" },
  { id: "rates", label: "Rates" },
  { id: "tiktok", label: "TikTok Setup" },
  { id: "portfolio", label: "Portfolio" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

/* ============================================================
   INITIAL REVIEWS
============================================================ */

const SEED_REVIEWS = [
  {
    id: "seed-1",
    name: "Client Naam",
    biz: "Restaurant / Brand Naam",
    rating: 5,
    text: "Promotion se hamari sales aur reach dono mein zabardast farq aaya. Professional aur time par kaam.",
  },
  {
    id: "seed-2",
    name: "Client Naam",
    biz: "Restaurant / Brand Naam",
    rating: 5,
    text: "Content quality aur delivery time dono behtareen thay. Dobara collab zaroor karenge.",
  },
  {
    id: "seed-3",
    name: "Client Naam",
    biz: "Restaurant / Brand Naam",
    rating: 5,
    text: "Audience engagement bohat acha raha, khaas kar reel ke baad reservations badh gaye.",
  },
];

/* ============================================================
   REVEAL ANIMATION
============================================================ */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity .8s cubic-bezier(.22,1,.36,1) ${delay}s,
                     transform .8s cubic-bezier(.22,1,.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   IMAGE COMPONENT
============================================================ */

function ImgOrFallback({ src, alt, fallback }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div className="image-fallback">
        <FaCamera size={35} />
        <span>{fallback}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setBroken(true)}
      className="cover-image"
    />
  );
}

/* ============================================================
   VIDEO CARD
============================================================ */

function VideoCard({ src, index }) {
  const [error, setError] = useState(false);

  return (
    <div className="video-card">
      <div className="video-number">
        WORK {String(index + 1).padStart(2, "0")}
      </div>

      {!error ? (
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          onError={() => setError(true)}
        />
      ) : (
        <div className="video-error">
          <FaCamera size={32} />
          <strong>Video {index + 1}</strong>
          <span>Video load nahi ho saki.</span>
          <small>Path check karein: {src}</small>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   TYPING INDICATOR (hero rotating tagline)
============================================================ */

function TypingIndicator({
  phrases,
  typingSpeed = 75,
  deletingSpeed = 40,
  pause = 1700,
}) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 350);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting
              ? current.slice(0, t.length - 1)
              : current.slice(0, t.length + 1)
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typing-indicator">
      {text}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  );
}

/* ============================================================
   STARS
============================================================ */

function Stars({ rating = 5 }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={14}
          style={{
            opacity: star <= rating ? 1 : 0.2,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function FoodVloggerPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [hideHeader, setHideHeader] = useState(false);

  const [reviews, setReviews] = useState(SEED_REVIEWS);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const lastY = useRef(0);

  const [form, setForm] = useState({
    name: "",
    biz: "",
    rating: 5,
    text: "",
  });

  const [booking, setBooking] = useState({
    name: "",
    service: "Restaurant",
    msg: "",
  });

  const waLink = `https://wa.me/${CONFIG.whatsappNumber}`;

  /* ============================================================
     LOAD REVIEWS
  ============================================================ */

  useEffect(() => {
    try {
      const saved = localStorage.getItem("food-vlogger-reviews");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
        }
      }
    } catch (error) {
      console.error("Reviews load error:", error);
    }
  }, []);

  /* ============================================================
     SAVE REVIEWS
  ============================================================ */

  const saveReviews = (data) => {
    try {
      localStorage.setItem(
        "food-vlogger-reviews",
        JSON.stringify(data)
      );
    } catch (error) {
      console.error("Review save error:", error);
    }
  };

  /* ============================================================
     SCROLL
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setHideHeader(y > lastY.current && y > 220);

      lastY.current = y;

      let current = "";

      NAV.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && y >= section.offsetTop - 180) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     RESET REVIEW
  ============================================================ */

  const resetReview = () => {
    setForm({
      name: "",
      biz: "",
      rating: 5,
      text: "",
    });

    setEditingId(null);
  };

  /* ============================================================
     SUBMIT REVIEW
  ============================================================ */

  const submitReview = (event) => {
    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.biz.trim() ||
      !form.text.trim()
    ) {
      return;
    }

    setSaving(true);

    const reviewData = {
      name: form.name.trim(),
      biz: form.biz.trim(),
      rating: Number(form.rating),
      text: form.text.trim(),
    };

    let updated;

    if (editingId) {
      updated = reviews.map((review) =>
        review.id === editingId
          ? {
              ...review,
              ...reviewData,
            }
          : review
      );
    } else {
      updated = [
        {
          id: `review-${Date.now()}`,
          ...reviewData,
        },
        ...reviews,
      ];
    }

    setReviews(updated);
    saveReviews(updated);
    resetReview();

    setTimeout(() => {
      setSaving(false);
    }, 300);

    setTimeout(() => {
      document
        .getElementById("reviews")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  /* ============================================================
     EDIT REVIEW
  ============================================================ */

  const editReview = (review) => {
    setEditingId(review.id);

    setForm({
      name: review.name,
      biz: review.biz,
      rating: review.rating,
      text: review.text,
    });

    setTimeout(() => {
      document
        .getElementById("review-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  /* ============================================================
     DELETE REVIEW
  ============================================================ */

  const deleteReview = (id) => {
    const review = reviews.find((item) => item.id === id);

    if (!review) return;

    const confirmed = window.confirm(
      `Kya aap "${review.name}" ka review delete karna chahte hain?`
    );

    if (!confirmed) return;

    const updated = reviews.filter(
      (item) => item.id !== id
    );

    setReviews(updated);
    saveReviews(updated);

    if (editingId === id) {
      resetReview();
    }
  };

  /* ============================================================
     RATE WHATSAPP
  ============================================================ */

  const openRateWhatsApp = (rate) => {
    const message =
      `Assalam o Alaikum!\n\n` +
      `Mujhe ${rate.category} promotion ke hawalay se details chahiye.\n` +
      `Rate: ${rate.price}\n\n` +
      `Please mujhe complete details share kar dein.`;

    window.open(
      `${waLink}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ============================================================
     BOOKING
  ============================================================ */

  const submitBooking = (event) => {
    event.preventDefault();

    const message =
      `Assalam o Alaikum!\n\n` +
      `Promotion Request\n\n` +
      `Business / Naam: ${booking.name}\n` +
      `Service: ${booking.service}\n` +
      `Message: ${
        booking.msg || "No additional message."
      }\n\n` +
      `Sent from Ahtesham Ul Haq Food Vlogger website.`;

    window.open(
      `${waLink}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ============================================================
     RENDER
  ============================================================ */

  return (
    <>
     <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,500;1,9..144,600;1,9..144,700&display=swap');

  :root {
    --bg: #03060f;
    --bg2: #040a19;
    --card: #060e24;

    --gold: #99d939;
    --gold-light: #b1e662;
    --gold-bright: #d0ff8a;

    --text: #f9f9fa;
    --muted: #7e8db6;
    --muted2: #55607f;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: "Manrope", sans-serif;
    font-size: 17px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  ::selection {
    background: var(--gold);
    color: #0c1006;
  }

  .portfolio {
    min-height: 100vh;
    overflow: hidden;
    background: var(--bg);
  }

  .display-font {
    font-family: "Fraunces", serif;
  }

  .mono-font {
    font-family: "Space Mono", monospace;
  }

  /* ================= HEADER ================= */

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(3,6,15,.82);
    border-bottom: 1px solid rgba(177,230,98,.08);
    backdrop-filter: blur(22px);
    transition: transform .5s ease;
  }

  .nav {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .brand-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(153,217,57,.35);
    background: rgba(153,217,57,.08);
    color: var(--gold-light);
    border-radius: 13px;
  }

  .brand-title {
    display: block;
    color: white;
    font-weight: 700;
    font-size: 16px;
  }

  .brand-subtitle {
    display: block;
    margin-top: 4px;
    color: #6d799c;
    font-size: 12px;
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  .desktop-nav {
    display: flex;
    gap: 30px;
  }

  .desktop-nav a {
    color: #8892ae;
    font-size: 15px;
    font-weight: 600;
    transition: .25s ease;
  }

  .desktop-nav a:hover,
  .desktop-nav a.active {
    color: var(--gold-light);
  }

  .collab-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 19px;
    border: 1px solid rgba(153,217,57,.35);
    border-radius: 999px;
    color: var(--gold-light);
    font-size: 15px;
    font-weight: 700;
    transition: .3s ease;
  }

  .collab-button:hover {
    background: rgba(153,217,57,.1);
    transform: translateY(-2px);
  }

  .mobile-menu-button {
    display: none;
    border: 0;
    background: transparent;
    color: white;
  }

  .mobile-menu {
    display: none;
  }

  /* ================= HERO ================= */

  .hero {
    position: relative;
    min-height: 100vh;
    padding-top: 150px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .grid-bg {
    background-image:
      linear-gradient(
        rgba(177,230,98,.025) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(177,230,98,.025) 1px,
        transparent 1px
      );
    background-size: 55px 55px;
  }

  .hero-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(110px);
    pointer-events: none;
  }

  .hero-glow.one {
    left: -250px;
    top: 20%;
    background: rgba(153,217,57,.09);
  }

  .hero-glow.two {
    right: -250px;
    bottom: -180px;
    background: rgba(92,130,35,.10);
  }

  .hero-container {
    position: relative;
    z-index: 2;
    width: min(1180px, calc(100% - 40px));
    margin: auto;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 60px;
    padding-bottom: 90px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border: 1px solid rgba(153,217,57,.25);
    border-radius: 999px;
    background: rgba(153,217,57,.06);
    color: var(--gold-light);
    font-size: 13px;
    font-family: "Space Mono", monospace;
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gold-light);
    box-shadow: 0 0 14px var(--gold);
  }

  .hero-title {
    margin: 24px 0 0;
    font-size: clamp(65px, 8.5vw, 115px);
    line-height: .92;
    letter-spacing: -.055em;
    font-weight: 700;
  }

  .gold-text {
    background: linear-gradient(
      110deg,
      #eeeff0 0%,
      #b1e662 45%,
      #72a920 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero-subtitle {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 28px;
  }

  .hero-line {
    width: 55px;
    height: 2px;
    background: var(--gold);
  }

  .hero-subtitle span {
    color: #bec7df;
    font-family: "Space Mono", monospace;
    font-size: 15px;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .typing-indicator {
    display: inline-flex;
    align-items: center;
    min-height: 1em;
  }

  .typing-cursor {
    display: inline-block;
    width: 2px;
    height: 15px;
    margin-left: 3px;
    background: var(--gold-light);
    animation: blinkCursor .85s step-end infinite;
  }

  @keyframes blinkCursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  .hero-description {
    max-width: 650px;
    margin-top: 25px;
    color: #8892ae;
    font-size: 19px;
    line-height: 1.9;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
  }

  .gold-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 15px 23px;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(
      135deg,
      var(--gold-bright),
      #81bd27
    );
    color: #0c1006;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0 15px 40px rgba(153,217,57,.16);
    transition: .3s ease;
  }

  .gold-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 45px rgba(153,217,57,.28);
  }

  .outline-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 23px;
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 999px;
    background: rgba(255,255,255,.025);
    color: white;
    font-size: 15px;
    font-weight: 600;
    transition: .3s ease;
  }

  .outline-button:hover {
    border-color: rgba(153,217,57,.45);
    background: rgba(153,217,57,.06);
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 540px;
    gap: 10px;
    margin-top: 40px;
  }

  .stat {
    padding: 18px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 17px;
    background: linear-gradient(
      145deg,
      rgba(255,255,255,.05),
      rgba(153,217,57,.015)
    );
  }

  .stat-value {
    color: var(--gold-light);
    font-family: "Fraunces", serif;
    font-size: 30px;
    font-weight: 700;
  }

  .stat-label {
    margin-top: 6px;
    color: #677291;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  /* ================= HERO PROFILE ================= */

  .profile-area {
    position: relative;
    width: min(100%, 550px);
    height: 600px;
    margin: auto;
    display: grid;
    place-items: center;
  }

  .profile-glow {
    position: absolute;
    width: 430px;
    height: 430px;
    border-radius: 50%;
    background: rgba(153,217,57,.12);
    filter: blur(70px);
  }

  .orbit {
    position: absolute;
    border-radius: 50%;
  }

  .orbit.one {
    width: 500px;
    height: 500px;
    border: 1px dashed rgba(153,217,57,.27);
    animation: spin 28s linear infinite;
  }

  .orbit.two {
    width: 435px;
    height: 435px;
    border: 1px solid rgba(177,230,98,.09);
  }

  .profile-frame {
    position: relative;
    z-index: 5;
    width: 400px;
    height: 400px;
    padding: 7px;
    overflow: hidden;
    border-radius: 43%;
    border: 1px solid rgba(177,230,98,.65);
    background: linear-gradient(
      135deg,
      #d0ff8a,
      #81bd27,
      #436412
    );
    box-shadow:
      0 30px 100px rgba(153,217,57,.20);
  }

  .profile-inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 7px solid #03060f;
    border-radius: 40%;
    background: #060e24;
  }

  .cover-image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .image-fallback {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 25px;
    color: #6d799c;
    background: linear-gradient(
      135deg,
      #08132f,
      #030712
    );
    text-align: center;
  }

  .profile-label {
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    padding: 11px 17px;
    border: 1px solid rgba(153,217,57,.35);
    border-radius: 999px;
    background: rgba(0,0,0,.82);
    color: #e9f3d9;
    backdrop-filter: blur(15px);
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .18em;
    text-transform: uppercase;
  }

  .floating-icon {
    position: absolute;
    z-index: 20;
    width: 58px;
    height: 58px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(153,217,57,.28);
    border-radius: 17px;
    background: rgba(6,14,36,.94);
    color: var(--gold-light);
    box-shadow: 0 20px 40px rgba(0,0,0,.4);
    backdrop-filter: blur(15px);
  }

  .floating-icon.camera {
    left: 5px;
    top: 80px;
    animation: floatA 4s ease-in-out infinite;
  }

  .floating-icon.heart {
    right: 0;
    top: 120px;
    color: #f0a2b4;
    border-color: rgba(240,162,180,.2);
    animation: floatB 5s ease-in-out infinite;
  }

  .floating-icon.food {
    left: 20px;
    bottom: 105px;
    animation: floatB 4.5s ease-in-out infinite;
  }

  .instagram-float {
    position: absolute;
    z-index: 20;
    right: -10px;
    bottom: 70px;
    padding: 14px 16px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 15px;
    background: rgba(6,14,36,.94);
    backdrop-filter: blur(15px);
    animation: floatA 5s ease-in-out infinite;
  }

  .instagram-float-inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .instagram-float small {
    display: block;
    color: #66708d;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .15em;
    text-transform: uppercase;
  }

  .instagram-float strong {
    display: block;
    margin-top: 3px;
    color: white;
    font-size: 15px;
  }

  /* ================= SECTION ================= */

  section {
    scroll-margin-top: 90px;
  }

  .section {
    padding: 110px 0;
  }

  .dark-section {
    background: var(--bg2);
    border-top: 1px solid rgba(177,230,98,.06);
    border-bottom: 1px solid rgba(177,230,98,.06);
  }

  .container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
  }

  .section-kicker {
    color: var(--gold-light);
    font-family: "Space Mono", monospace;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: .28em;
    text-transform: uppercase;
  }

  .section-title {
    margin: 14px 0 0;
    color: white;
    font-family: "Fraunces", serif;
    font-size: clamp(44px, 5vw, 64px);
    line-height: 1.05;
  }

  .section-description {
    margin-top: 17px;
    color: #747f9f;
    font-size: 17px;
    line-height: 1.8;
  }

  /* ================= ABOUT ================= */

  .about-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    align-items: center;
    gap: 80px;
  }

  .about-image {
    position: relative;
    width: 100%;
    max-width: 420px;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 30px;
    border: 1px solid rgba(153,217,57,.35);
    background: #060e24;
    box-shadow: 0 30px 80px rgba(0,0,0,.3);
  }

  .about-overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 90px 25px 25px;
    background: linear-gradient(
      transparent,
      rgba(0,0,0,.92)
    );
  }

  .about-name {
    color: white;
    font-family: "Fraunces", serif;
    font-size: 29px;
  }

  .about-role {
    margin-top: 5px;
    color: var(--gold-light);
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .22em;
    text-transform: uppercase;
  }

  .about-content p {
    color: #828ca9;
    font-size: 17px;
    line-height: 1.9;
  }

  .about-content strong {
    color: white;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }

  .chip {
    padding: 10px 14px;
    border: 1px solid rgba(255,255,255,.09);
    border-radius: 999px;
    background: rgba(255,255,255,.025);
    color: #78829e;
    font-family: "Space Mono", monospace;
    font-size: 12px;
  }

  /* ================= RATES ================= */

  .center-heading {
    max-width: 680px;
    margin: 0 auto 55px;
    text-align: center;
  }

  .rates-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .rate-card {
    position: relative;
    min-height: 320px;
    padding: 27px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 26px;
    background: #060e24;
    transition: .45s ease;
  }

  .rate-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background:
      linear-gradient(
        120deg,
        rgba(153,217,57,.7),
        transparent 35%,
        transparent 70%,
        rgba(153,217,57,.2)
      );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: .7;
  }

  .rate-card:hover {
    transform: translateY(-8px);
    background: #08122c;
    border-color: rgba(153,217,57,.28);
    box-shadow: 0 25px 70px rgba(0,0,0,.25);
  }

  .rate-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rate-number {
    color: #59627b;
    font-family: "Space Mono", monospace;
    font-size: 12px;
  }

  .rate-tag {
    padding: 7px 10px;
    border-radius: 999px;
    background: rgba(153,217,57,.09);
    color: var(--gold);
    font-family: "Space Mono", monospace;
    font-size: 11px;
    letter-spacing: .15em;
    text-transform: uppercase;
  }

  .rate-title {
    margin-top: 28px;
    color: white;
    font-family: "Fraunces", serif;
    font-size: 29px;
  }

  .rate-description {
    min-height: 70px;
    margin-top: 10px;
    color: #69728a;
    font-size: 16px;
    line-height: 1.7;
  }

  .rate-price {
    margin-top: 23px;
    padding-top: 17px;
    border-top: 1px solid rgba(255,255,255,.06);
  }

  .rate-price small {
    display: block;
    color: #5a6277;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .rate-price strong {
    display: block;
    margin-top: 3px;
    color: var(--gold-light);
    font-family: "Fraunces", serif;
    font-size: 34px;
  }

  .rate-button {
    width: 100%;
    margin-top: 18px;
    padding: 13px;
    border: 1px solid rgba(153,217,57,.28);
    border-radius: 12px;
    background: rgba(153,217,57,.07);
    color: var(--gold-light);
    font-size: 14px;
    font-weight: 700;
    transition: .3s ease;
  }

  .rate-button:hover {
    background: var(--gold);
    color: #0c1006;
  }

  /* ================= PORTFOLIO ================= */

  .portfolio-heading {
    max-width: 700px;
    margin-bottom: 50px;
  }

  .videos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .video-card {
    position: relative;
    height: 470px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 24px;
    background: #03060f;
    box-shadow: 0 20px 50px rgba(0,0,0,.25);
  }

  .video-card video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  .video-number {
    position: absolute;
    z-index: 10;
    top: 14px;
    left: 14px;
    padding: 8px 11px;
    border: 1px solid rgba(153,217,57,.15);
    border-radius: 999px;
    background: rgba(0,0,0,.65);
    color: var(--gold-light);
    backdrop-filter: blur(10px);
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .15em;
  }

  .video-error {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 30px;
    color: #6a7287;
    text-align: center;
    background:
      radial-gradient(
        circle at center,
        rgba(153,217,57,.08),
        transparent 55%
      ),
      #060e24;
  }

  .video-error strong {
    color: #e5eed8;
  }

  .video-error small {
    word-break: break-all;
    color: #52596c;
  }

  /* ================= REVIEWS ================= */

  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .review-card {
    position: relative;
    padding: 27px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 25px;
    background: #060e24;
    transition: .4s ease;
  }

  .review-card:hover {
    transform: translateY(-5px);
    border-color: rgba(153,217,57,.28);
  }

  .quote-mark {
    position: absolute;
    right: 23px;
    top: 13px;
    color: rgba(153,217,57,.12);
    font-family: Georgia, serif;
    font-size: 63px;
  }

  .stars {
    display: flex;
    gap: 4px;
    color: #b1e662;
  }

  .review-text {
    min-height: 105px;
    margin-top: 20px;
    color: #abb5d1;
    font-size: 16px;
    line-height: 1.9;
  }

  .review-author {
    margin-top: 20px;
    padding-top: 17px;
    border-top: 1px solid rgba(255,255,255,.06);
  }

  .review-name {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  .review-business {
    margin-top: 5px;
    color: #5c6479;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .review-actions {
    display: flex;
    gap: 7px;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid rgba(255,255,255,.05);
  }

  .small-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 11px;
    border: 1px solid rgba(255,255,255,.08);
    border-radius: 8px;
    background: rgba(255,255,255,.025);
    color: #7d859b;
    font-size: 12px;
    font-weight: 600;
    transition: .25s ease;
  }

  .small-button:hover {
    color: var(--gold-light);
    border-color: rgba(153,217,57,.3);
  }

  .small-button.delete:hover {
    color: #f58a9c;
    border-color: rgba(245,138,156,.3);
  }

  /* ================= FORMS ================= */

  .form-card {
    max-width: 850px;
    margin-top: 45px;
    padding: 32px;
    border: 1px solid rgba(153,217,57,.25);
    border-radius: 27px;
    background: #060e24;
  }

  .form-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 15px;
  }

  .form-kicker {
    color: var(--gold-light);
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  .form-title {
    margin-top: 6px;
    color: white;
    font-family: "Fraunces", serif;
    font-size: 30px;
  }

  .cancel-button {
    border: 0;
    background: transparent;
    color: #6f7585;
    font-size: 14px;
  }

  .cancel-button:hover {
    color: white;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-top: 25px;
  }

  .form-group.full {
    grid-column: 1 / -1;
  }

  .form-label {
    display: block;
    margin-bottom: 8px;
    color: #697187;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  .input {
    width: 100%;
    padding: 14px 15px;
    outline: none;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 12px;
    background: #040a19;
    color: #f9f9fa;
    transition: .25s ease;
  }

  .input::placeholder {
    color: #505769;
  }

  .input:focus {
    border-color: rgba(153,217,57,.6);
    box-shadow: 0 0 0 4px rgba(153,217,57,.07);
  }

  textarea.input {
    min-height: 120px;
    resize: vertical;
  }

  select.input option {
    background: #060e24;
    color: white;
  }

  .form-submit {
    margin-top: 18px;
  }

  /* ================= CONTACT ================= */

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    align-items: start;
  }

  .social-list {
    margin-top: 30px;
    max-width: 620px;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  .social-left {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #6a7287;
    font-family: "Space Mono", monospace;
    font-size: 13px;
    letter-spacing: .13em;
    text-transform: uppercase;
  }

  .social-value {
    max-width: 65%;
    overflow-wrap: anywhere;
    color: #bac2d8;
    font-size: 15px;
    font-weight: 600;
    text-align: right;
    transition: .25s ease;
  }

  .social-link:hover .social-value {
    color: var(--gold-light);
  }

  .booking-card {
    padding: 32px;
    border: 1px solid rgba(153,217,57,.25);
    border-radius: 27px;
    background: #060e24;
  }

  .booking-heading {
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .booking-icon {
    width: 47px;
    height: 47px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: rgba(153,217,57,.1);
    color: var(--gold-light);
  }

  .booking-title {
    color: white;
    font-family: "Fraunces", serif;
    font-size: 29px;
  }

  .booking-subtitle {
    margin-top: 4px;
    color: #60677a;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .15em;
    text-transform: uppercase;
  }

  .booking-form {
    margin-top: 27px;
  }

  .booking-form .form-group {
    margin-bottom: 17px;
  }

  .booking-note {
    margin-top: 10px;
    color: #535a6c;
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .1em;
    text-align: center;
    text-transform: uppercase;
  }

  /* ================= FOOTER ================= */

  footer {
    padding: 55px 0 25px;
    background: #03060f;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  .footer-description {
    max-width: 400px;
    margin-top: 17px;
    color: #5f6575;
    font-size: 16px;
    line-height: 1.8;
  }

  .footer-title {
    color: var(--gold-light);
    font-family: "Space Mono", monospace;
    font-size: 12px;
    letter-spacing: .2em;
    text-transform: uppercase;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }

  .footer-links a {
    color: #6a7287;
    font-size: 15px;
    transition: .2s ease;
  }

  .footer-links a:hover {
    color: white;
  }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-top: 22px;
    color: #484e5e;
    font-family: "Space Mono", monospace;
    font-size: 12px;
  }

  /* ================= ANIMATIONS ================= */

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes floatA {
    0%,100% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(-15px) rotate(4deg);
    }
  }

  @keyframes floatB {
    0%,100% {
      transform: translateY(0) rotate(0deg);
    }

    50% {
      transform: translateY(12px) rotate(-5deg);
    }
  }

  /* ================= RESPONSIVE ================= */

  @media (max-width: 1000px) {
    .desktop-nav,
    .collab-button {
      display: none;
    }

    .mobile-menu-button {
      display: block;
    }

    .mobile-menu {
      display: block;
      padding: 10px 20px 22px;
      border-top: 1px solid rgba(153,217,57,.06);
      background: #040916;
    }

    .mobile-menu a {
      display: block;
      padding: 13px;
      border-radius: 10px;
      color: #9fa8c0;
      font-size: 15px;
    }

    .mobile-menu a:hover {
      background: rgba(153,217,57,.05);
      color: var(--gold-light);
    }

    .hero-container {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .hero-content {
      text-align: center;
    }

    .badge,
    .hero-subtitle {
      justify-content: center;
    }

    .hero-description {
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons,
    .stats {
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
    }

    .profile-area {
      height: 530px;
    }

    .about-grid {
      grid-template-columns: 1fr;
    }

    .about-image {
      margin: auto;
    }

    .about-content {
      text-align: center;
    }

    .chips {
      justify-content: center;
    }

    .rates-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .videos-grid,
    .reviews-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 650px) {
    .nav {
      width: min(100% - 28px, 1180px);
    }

    .hero {
      padding-top: 120px;
    }

    .hero-container,
    .container {
      width: min(100% - 28px, 1180px);
    }

    .hero-title {
      font-size: 55px;
    }

    .hero-description {
      font-size: 16px;
      line-height: 1.8;
    }

    .hero-subtitle span {
      font-size: 13px;
    }

    .stats {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .stat {
      padding: 13px 9px;
    }

    .stat-value {
      font-size: 23px;
    }

    .stat-label {
      font-size: 10px;
      letter-spacing: .08em;
    }

    .profile-area {
      height: 440px;
    }

    .profile-frame {
      width: 285px;
      height: 285px;
    }

    .orbit.one {
      width: 350px;
      height: 350px;
    }

    .orbit.two {
      width: 310px;
      height: 310px;
    }

    .profile-glow {
      width: 300px;
      height: 300px;
    }

    .floating-icon {
      width: 45px;
      height: 45px;
    }

    .floating-icon.camera {
      left: 8px;
      top: 50px;
    }

    .floating-icon.heart {
      right: 5px;
      top: 70px;
    }

    .floating-icon.food {
      left: 10px;
      bottom: 55px;
    }

    .instagram-float {
      right: 0;
      bottom: 35px;
    }

    .section {
      padding: 80px 0;
    }

    .section-title {
      font-size: 43px;
    }

    .rates-grid,
    .videos-grid,
    .reviews-grid {
      grid-template-columns: 1fr;
    }

    .video-card {
      height: 520px;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-group.full {
      grid-column: auto;
    }

    .form-card,
    .booking-card {
      padding: 23px;
    }

    .footer-grid {
      grid-template-columns: 1fr;
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }

    .social-link {
      align-items: flex-start;
    }

    .social-value {
      font-size: 13px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
`}</style>

      <div className="portfolio">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header
          className="site-header"
          style={{
            transform: hideHeader
              ? "translateY(-100%)"
              : "translateY(0)",
          }}
        >
          <nav className="nav">

            <a href="#top" className="brand">
              <span className="brand-icon">
                <FaUtensils size={16} />
              </span>

              <span>
                <span className="brand-title display-font">
                  Ahtesham
                </span>

                <span className="brand-subtitle mono-font">
                  Content Creator · Gojra
                </span>
              </span>
            </a>

            <div className="desktop-nav">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    active === item.id ? "active" : ""
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="collab-button mono-font"
            >
              Let's Collaborate
              <FaArrowRight size={9} />
            </a>

            <button
              className="mobile-menu-button"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label="Open menu"
            >
              {menuOpen ? (
                <FaXmark size={23} />
              ) : (
                <FaBars size={23} />
              )}
            </button>

          </nav>

          {menuOpen && (
            <div className="mobile-menu">
              {NAV.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "#bae579",
                  background: "rgba(164,216,85,.07)",
                }}
              >
                Let's Collaborate →
              </a>
            </div>
          )}
        </header>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section id="top" className="hero grid-bg">

          <div className="hero-glow one" />
          <div className="hero-glow two" />

          <div className="hero-container">

            <Reveal>
              <div className="hero-content">

                <div className="badge">
                  <span className="badge-dot" />
                  Food Content Creator · Gojra
                </div>

                <h1 className="hero-title display-font">
                  Ahtesham
                  <br />
                  <span className="gold-text">
                    Ul Haq
                  </span>
                </h1>

                <div className="hero-subtitle">
                  <span className="hero-line" />

                  <TypingIndicator
                    phrases={[
                      "Best Vlogger in Gojra",
                      "Best Food Vlogger in Gojra",
                    ]}
                  />
                </div>

                <p className="hero-description">
                  {CONFIG.tagline}
                </p>

                <div className="hero-buttons">

                  <a
                    href="#portfolio"
                    className="gold-button"
                  >
                    View My Work
                    <FaArrowRight size={11} />
                  </a>

                  <a
                    href="#contact"
                    className="outline-button"
                  >
                    Book a Promotion
                  </a>

                </div>

                <div className="stats">

                  <div className="stat">
                    <div className="stat-value">
                      {CONFIG.socials.instagram.followers}
                    </div>

                    <div className="stat-label">
                      Instagram
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">
                      {CONFIG.socials.tiktok.followers}
                    </div>

                    <div className="stat-label">
                      TikTok
                    </div>
                  </div>

                  <div className="stat">
                    <div className="stat-value">
                      {CONFIG.collabs}
                    </div>

                    <div className="stat-label">
                      Brand Collabs
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>

            <Reveal delay={0.12}>

              <div className="profile-area">

                <div className="profile-glow" />

                <div className="orbit one" />
                <div className="orbit two" />

                <div className="floating-icon camera">
                  <FaCamera size={20} />
                </div>

                <div className="floating-icon heart">
                  <FaHeart size={19} />
                </div>

                <div className="floating-icon food">
                  <FaUtensils size={19} />
                </div>

                <div className="instagram-float">
                  <div className="instagram-float-inner">
                    <FaInstagram
                      size={18}
                      color="#e58bb2"
                    />

                    <div>
                      <small>Instagram</small>
                      <strong>
                        {CONFIG.socials.instagram.handle}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="profile-frame">

                  <div className="profile-inner">

                    <ImgOrFallback
                      src={CONFIG.images.heroProfile}
                      alt={CONFIG.name}
                      fallback="Profile photo yahan add karein"
                    />

                  </div>

                  <div className="profile-label">
                    ● Content Creator · Gojra
                  </div>

                </div>

              </div>

            </Reveal>

          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="section dark-section"
        >
          <div className="container about-grid">

            <Reveal>

              <div className="about-image">

                <ImgOrFallback
                  src={CONFIG.images.about}
                  alt={CONFIG.name}
                  fallback="About photo yahan add karein"
                />

                <div className="about-overlay">

                  <div className="about-name">
                    Ahtesham Ul Haq
                  </div>

                  <div className="about-role">
                    Content Creator · Gojra
                  </div>

                </div>

              </div>

            </Reveal>

            <Reveal delay={0.1}>

              <div className="about-content">

                <div className="section-kicker">
                  About Me
                </div>

                <h2 className="section-title">
                  More Than Content—
                  <span className="gold-text">
                    {" "}
                   It’s Creativity
                  </span>
                </h2>

                <p>
                  <strong>{CONFIG.name}</strong>{" "}
                  {CONFIG.bio1}
                </p>

                <p>
                  {CONFIG.bio2}
                </p>

                <div className="chips">

                  {[
                    "Street Food",
                    "Fine Dining",
                    "Cafe Reviews",
                    "Recipe Content",
                    "Brand Collabs",
                    "Business Promotions",
                  ].map((item) => (
                    <span
                      key={item}
                      className="chip"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </Reveal>

          </div>
        </section>

        {/* =====================================================
            RATES
        ===================================================== */}

        <section
          id="rates"
          className="section grid-bg"
        >
          <div className="container">

            <Reveal className="center-heading">

              <div className="section-kicker">
                 Promotion Rates
              </div>

              <h2 className="section-title">
                Choose your{" "}
                <span className="gold-text">
                  promotion.
                </span>
              </h2>

              <p className="section-description">
                Premium promotional content tailored
                for restaurants, brands and local
                businesses.
              </p>

            </Reveal>

            <div className="rates-grid">

              {RATES.map((rate, index) => (
                <Reveal
                  key={rate.category}
                  delay={(index % 3) * 0.06}
                >
                  <div className="rate-card">

                    <div className="rate-top">

                      <span className="rate-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rate-tag">
                        Promotion
                      </span>

                    </div>

                    <div className="rate-title">
                      {rate.category}
                    </div>

                    <div className="rate-description">
                      {rate.description}
                    </div>

                    <div className="rate-price">

                      <small>
                        Starting Rate
                      </small>

                      <strong>
                        {rate.price}
                      </strong>

                    </div>

                    <button
                      className="rate-button"
                      onClick={() =>
                        openRateWhatsApp(rate)
                      }
                    >
                      Request This Package →
                    </button>

                  </div>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            TIKTOK ACCOUNT SETUP
        ===================================================== */}

        <section
          id="tiktok"
          className="section dark-section"
        >
          <div className="container">

            <Reveal className="center-heading">

              <div className="section-kicker">
                 TikTok Account Setup
              </div>

              <h2 className="section-title">
                Want your own{" "}
                <span className="gold-text">
                  TikTok account?
                </span>
              </h2>

              <p className="section-description">
                Naya TikTok account banwana chahte hain?
                Main aap ka account setup, branding aur
                growth strategy sath handle karta hoon.
                <br></br>  
                Rates ki final pricing WhatsApp par
                confirm ki jayegi.
              </p>

            </Reveal>

            <div className="rates-grid">

              {TIKTOK_PACKAGES.map((pkg, index) => (
                <Reveal
                  key={pkg.category}
                  delay={(index % 3) * 0.06}
                >
                  <div className="rate-card">

                    <div className="rate-top">

                      <span className="rate-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rate-tag">
                        TikTok
                      </span>

                    </div>

                    <div className="rate-title">
                      {pkg.category}
                    </div>

                    <div className="rate-description">
                      {pkg.description}
                    </div>

                    <div className="rate-price">

                      <small>
                        Price
                      </small>

                      <strong>
                        {pkg.price}
                      </strong>

                    </div>

                    <button
                      className="rate-button"
                      onClick={() =>
                        openRateWhatsApp(pkg)
                      }
                    >
                      Let’s Chat on WhatsApp→
                    </button>

                  </div>
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            PORTFOLIO
        ===================================================== */}

        <section
          id="portfolio"
          className="section dark-section"
        >
          <div className="container">

            <Reveal className="portfolio-heading">

              <div className="section-kicker">
                View my Recent Work
              </div>

              <h2 className="section-title">
                A Glimpse Into My{" "}
                <span className="gold-text">
                  Creative World.
                </span>
              </h2>

              <p className="section-description">
                Recent videos, reels and
                promotional collaborations.
              </p>

            </Reveal>

            <div className="videos-grid">

              {CONFIG.videos.map((src, index) => (
                <Reveal
                  key={src}
                  delay={(index % 3) * 0.06}
                >
                  <VideoCard
                    src={src}
                    index={index}
                  />
                </Reveal>
              ))}

            </div>

          </div>
        </section>

        {/* =====================================================
            REVIEWS
        ===================================================== */}

        <section
          id="reviews"
          className="section grid-bg"
        >
          <div className="container">

            <Reveal className="portfolio-heading">

              <div className="section-kicker">
                Client Reviews
              </div>

              <h2 className="section-title">
                What clients{" "}
                <span className="gold-text">
                  say.
                </span>
              </h2>

              <p className="section-description">
                Honest words from the people who’ve enjoyed the experience.
              </p>

            </Reveal>

            <div className="reviews-grid">

              {reviews.map((review, index) => (
                <Reveal
                  key={review.id}
                  delay={(index % 3) * 0.06}
                >
                  <article className="review-card">

                    <div className="quote-mark">
                      “
                    </div>

                    <Stars
                      rating={review.rating}
                    />

                    <div className="review-text">
                      “{review.text}”
                    </div>

                    <div className="review-author">

                      <div className="review-name">
                        {review.name}
                      </div>

                      <div className="review-business">
                        {review.biz}
                      </div>

                    </div>

                    <div className="review-actions">

                      <button
                        className="small-button"
                        onClick={() =>
                          editReview(review)
                        }
                      >
                        <FaPen size={9} />
                        Edit
                      </button>

                      <button
                        className="small-button delete"
                        onClick={() =>
                          deleteReview(review.id)
                        }
                      >
                        <FaTrash size={9} />
                        Delete
                      </button>

                    </div>

                  </article>
                </Reveal>
              ))}

            </div>

            {/* REVIEW FORM */}

            <Reveal>

              <div
                id="review-form"
                className="form-card"
              >

                <div className="form-header">

                  <div>

                    <div className="form-kicker">
                      {editingId
                        ? "Edit Review"
                        : "Share Your Experience"}
                    </div>

                    <div className="form-title">
                      {editingId
                        ? "Update your review"
                        : "Leave a valuable review"}
                    </div>

                  </div>

                  {editingId && (
                    <button
                      className="cancel-button"
                      onClick={resetReview}
                    >
                      Cancel edit
                    </button>
                  )}

                </div>

                <form onSubmit={submitReview}>

                  <div className="form-grid">

                    <div className="form-group">

                      <label className="form-label">
                        Your Name
                      </label>

                      <input
                        className="input"
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        placeholder="e.g. Ali Raza"
                        required
                      />

                    </div>

                    <div className="form-group">

                      <label className="form-label">
                        Restaurant / Brand
                      </label>

                      <input
                        className="input"
                        value={form.biz}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            biz: e.target.value,
                          })
                        }
                        placeholder="e.g. Karahi Point"
                        required
                      />

                    </div>

                    <div className="form-group">

                      <label className="form-label">
                        Rating
                      </label>

                      <select
                        className="input"
                        value={form.rating}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            rating: Number(
                              e.target.value
                            ),
                          })
                        }
                      >
                        <option value={5}>
                          ★★★★★ (5)
                        </option>

                        <option value={4}>
                          ★★★★☆ (4)
                        </option>

                        <option value={3}>
                          ★★★☆☆ (3)
                        </option>

                        <option value={2}>
                          ★★☆☆☆ (2)
                        </option>

                        <option value={1}>
                          ★☆☆☆☆ (1)
                        </option>
                      </select>

                    </div>

                    <div className="form-group">

                      <label className="form-label">
                        Service
                      </label>

                      <select className="input">
                        {RATES.map((rate) => (
                          <option
                            key={rate.category}
                          >
                            {rate.category}
                          </option>
                        ))}
                      </select>

                    </div>

                    <div className="form-group full">

                      <label className="form-label">
                        Your Review
                      </label>

                      <textarea
                        className="input"
                        value={form.text}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            text: e.target.value,
                          })
                        }
                        placeholder="Share your experience here..."
                        required
                      />

                    </div>

                  </div>

                  <button
                    className="gold-button form-submit"
                    type="submit"
                    disabled={saving}
                    style={{
                      opacity: saving ? 0.6 : 1,
                    }}
                  >
                    {saving ? (
                      "Saving..."
                    ) : editingId ? (
                      <>
                        <FaCheck size={10} />
                        Update Review
                      </>
                    ) : (
                      <>
                        Submit Review
                        <FaArrowRight size={10} />
                      </>
                    )}
                  </button>

                </form>

              </div>

            </Reveal>

          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="section dark-section"
        >
          <div className="container contact-grid">

            <Reveal>

              <div className="section-kicker">
                06 / Get in Touch:
              </div>

              <h2 className="section-title">
                Have an Idea?{" "}
                <span className="gold-text">
                  Let's Talk
                </span>
              </h2>

              <p className="section-description">
                Want to promote your restaurant,
                business, brand or service? Send a
                request and the details will open
                directly in WhatsApp.
              </p>

              <div className="social-list">

                <a
                  href={
                    CONFIG.socials.instagram.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span className="social-left">
                    <FaInstagram size={15} />
                    Instagram
                  </span>

                  <span className="social-value">
                    {CONFIG.socials.instagram.handle}
                  </span>
                </a>

                <a
                  href={CONFIG.socials.youtube.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span className="social-left">
                    <FaYoutube size={15} />
                    YouTube
                  </span>

                  <span className="social-value">
                    {CONFIG.socials.youtube.handle}
                  </span>
                </a>

                <a
                  href={CONFIG.socials.tiktok.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span className="social-left">
                    <FaTiktok size={15} />
                    TikTok
                  </span>

                  <span className="social-value">
                    {CONFIG.socials.tiktok.handle}
                  </span>
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span className="social-left">
                    <FaWhatsapp size={15} />
                    WhatsApp
                  </span>

                  <span className="social-value">
                    +92 317 3480156
                  </span>
                </a>

                <a
                  href={`mailto:${CONFIG.email}`}
                  className="social-link"
                >
                  <span className="social-left">
                    <FaEnvelope size={15} />
                    Email
                  </span>

                  <span className="social-value">
                    {CONFIG.email}
                  </span>
                </a>

              </div>

            </Reveal>

            {/* BOOKING FORM */}

            <Reveal delay={0.1}>

              <div className="booking-card">

                <div className="booking-heading">

                  <div className="booking-icon">
                    <FaPaperPlane size={16} />
                  </div>

                  <div>
                    <div className="booking-title">
                      Promotion Request
                    </div>

                    <div className="booking-subtitle">
                      Direct WhatsApp enquiry
                    </div>
                  </div>

                </div>

                <form
                  className="booking-form"
                  onSubmit={submitBooking}
                >

                  <div className="form-group">

                    <label className="form-label">
                      Business / Name
                    </label>

                    <input
                      className="input"
                      value={booking.name}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          name: e.target.value,
                        })
                      }
                      placeholder="Restaurant ya brand ka naam"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label className="form-label">
                      Promotion Category
                    </label>

                    <select
                      className="input"
                      value={booking.service}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          service: e.target.value,
                        })
                      }
                    >
                      {RATES.map((rate) => (
                        <option
                          key={rate.category}
                          value={rate.category}
                        >
                          {rate.category} —{" "}
                          {rate.price}
                        </option>
                      ))}

                      {TIKTOK_PACKAGES.map((pkg) => (
                        <option
                          key={pkg.category}
                          value={pkg.category}
                        >
                          {pkg.category} —{" "}
                          {pkg.price}
                        </option>
                      ))}
                    </select>

                  </div>

                  <div className="form-group">

                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      className="input"
                      value={booking.msg}
                      onChange={(e) =>
                        setBooking({
                          ...booking,
                          msg: e.target.value,
                        })
                      }
                      placeholder="Give some details..."
                    />

                  </div>

                  <button
                    type="submit"
                    className="gold-button"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                    }}
                  >
                    Submit Promotion Request
                    <FaArrowRight size={11} />
                  </button>

                  <div className="booking-note">
                    Click submit → message opens directly
                    in WhatsApp
                  </div>

                </form>

              </div>

            </Reveal>

          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer>

          <div className="container">

            <div className="footer-grid">

              <div>

                <div className="brand">

                  <span className="brand-icon">
                    <FaUtensils size={15} />
                  </span>

                  <span>
                    <span className="brand-title display-font">
                      Ahtesham Ul Haq
                    </span>

                    <span className="brand-subtitle mono-font">
                      Content Creator · Gojra
                    </span>
                  </span>

                </div>

                <p className="footer-description">
                  Authentic food reviews, cinematic
                  storytelling and creative promotional
                  content from Gojra.
                </p>

              </div>

              <div>

                <div className="footer-title">
                  Quick Links
                </div>

                <div className="footer-links">

                  {NAV.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                    >
                      {item.label}
                    </a>
                  ))}

                </div>

              </div>

              <div>

                <div className="footer-title">
                  Social
                </div>

                <div className="footer-links">

                  <a
                    href={
                      CONFIG.socials.instagram.url
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>

                  <a
                    href={
                      CONFIG.socials.youtube.url
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    YouTube
                  </a>

                  <a
                    href={CONFIG.socials.tiktok.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    TikTok
                  </a>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>

            <div className="footer-bottom">

              <span>
                © 2026 {CONFIG.name}. All rights
                reserved.
              </span>

              <span>
                Made by Saad Ansari.
              </span>

            </div>

          </div>

        </footer>

      </div>
    </>
  );
}
