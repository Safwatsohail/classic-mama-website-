<div align="center">

<img src="logo.png" alt="MMA HomeFitness Academy Logo" width="140" />

# 🥊 MMA HomeFitness Academy

### *Train Elite. Train at Home.*

**Professional martial arts & fitness coaching delivered to your doorstep — across all UAE Emirates.**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-homefitmma.com-blue?style=for-the-badge)](https://homefitmma.com)

---

</div>

## 📖 About

A fully responsive, bilingual **(English 🇬🇧 / Arabic 🇦🇪)** website for a UAE-based home fitness service. Certified coaches travel directly to clients — no commute, no gym membership, just elite training on your schedule.

> 🏆 **200+ happy clients** &nbsp;|&nbsp; 📍 **All UAE Emirates** &nbsp;|&nbsp; ⏱ **12 years of experience**

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌍 **Bilingual i18n** | English & Arabic (RTL) with `localStorage` language persistence |
| 🎬 **Hero Video** | Full-screen background video on landing |
| ⚡ **Scroll Animations** | IntersectionObserver fade-in on all sections |
| 📱 **Responsive** | Mobile-first with overflow-detecting hamburger menu |
| 🎠 **Testimonial Slider** | Auto-advances every 3s with dot + arrow navigation |
| 📋 **Contact Form** | FormSubmit-powered with inline success feedback |
| 💬 **Contact Bubble** | Sticky CTA appears after scrolling past hero |
| 🔼 **Scroll-to-Top** | Smooth-scroll button after 300px |
| 🗺️ **Google Maps Embed** | Pinned head office location |
| ♿ **Accessible** | ARIA labels, semantic HTML, keyboard navigation |

---

## 🥋 Programs

<div align="center">

| Combat Arts | Fitness & Wellness |
|:---:|:---:|
| 🥊 Boxing | 🏃 Cardio Boxing |
| 🦵 Kickboxing | 🏋️ Weight Loss |
| 🥋 Muay Thai | 🧘 Yoga |
| ⚔️ MMA | 💃 Zumba |
| 🎽 Taekwondo | 🩺 Physical Therapy |
| 👊 Karate | 💪 Overall Fitness |

</div>

---

## 🎯 Specialized Training

- 🏠 **Private Coaching** — one-on-one, matched to your discipline
- 👦 **Youth Kickboxing** — energy, focus & fun for kids
- 👥 **Group Classes** — community training, all levels welcome
- 👩 **Women-Only Training** — empowering, safe, female-led sessions
- 💥 **Strength & Conditioning** — science-backed performance training
- 🧒 **Kids Martial Arts** — discipline & confidence through structured play
- 🤸 **Flexibility & Recovery** — mobility, stretching & injury prevention
- 🛡️ **Self-Defense** — practical real-world protection skills

---

## 🗂️ Project Structure

```
📁 root/
├── index.html                  # Main single-page website
├── style-blue-white-final.css  # Active stylesheet (blue & white theme)
├── script.js                   # Nav, slider, i18n, animations, form
├── 📁 i18n/
│   ├── en.json                 # English translations
│   └── ar.json                 # Arabic translations (RTL)
├── logo.png                    # Academy logo
├── hero_video.mp4              # Hero background video (not in repo, >100MB)
└── *.jpg / *.png               # Coach & training photos
```

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)

- **Zero dependencies** — pure HTML/CSS/JS, no build tools or frameworks
- **i18n** via JSON fetch + `data-i18n` attribute system
- **Hosting-ready** — deploy to any static host (GitHub Pages, Netlify, etc.)

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/Safwatsohail/classic-mama-website-.git
cd classic-mama-website-

# Serve with any local server (required for i18n JSON fetch)
npx serve .
```

> Then open `http://localhost:3000` in your browser.
> The i18n system uses `fetch()` so it won't work on bare `file://` — a local server is needed.

---

> ⚠️ `hero_video.mp4` is excluded from this repo (176MB — exceeds GitHub's 100MB limit). Upload it directly to your hosting provider alongside the other files.

---

<div align="center">

**© 2024 MMA HomeFitness Academy**

*Discipline. Integrity. Focus.*

</div>
