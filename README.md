# 🔐 High‑Entropy Password Generator

A modern, offline‑first password generator that produces **high‑entropy cryptographic passwords** using secure randomness from the browser’s native `crypto.getRandomValues()` API. Designed for personal use, this tool focuses on security, simplicity, and a vibrant, premium interface.

This project runs entirely in the browser — no backend, no tracking, no data collection. Just clean, secure password generation.

---

## ✨ Features

- **High‑entropy cryptographic output**  
  Generates unpredictable, entropy‑rich passwords resistant to brute‑force and GPU‑accelerated cracking.

- **Crypto‑secure randomness**  
  Uses `window.crypto.getRandomValues()` for true cryptographic entropy.

- **No similar characters**  
  Avoids ambiguous characters like `O/0`, `l/1`, etc.

- **Password strength analysis**  
  Text‑based strength meter (Weak → Medium → Strong → Very Strong).

- **Show/hide password**  
  Eye toggle for visibility control.

- **Regenerate button**  
  Instantly produce a new password with the same settings.

- **Multiple password generation**  
  Generate a batch of 5 high‑entropy passwords at once.

- **Save to file**  
  Export any generated password as a `.txt` file.

- **Copy to clipboard**  
  One‑click copying with toast notification feedback.

- **Toast notifications**  
  Clean, modern feedback without intrusive alerts.

- **Dark/light mode**  
  Smooth theme switching with vibrant electric‑blue accents.

- **Fully offline**  
  Works without internet — ideal for personal, secure use.

- **Mobile‑optimized**  
  Responsive layout for phones, tablets, and desktops.

---

## 🚀 Project Roadmap

This project begins as a **personal offline tool**, but it is designed to evolve into a full **Next.js + Supabase SaaS application** with cloud sync, automation, and subscription‑ready features.

### **Phase 1 — Personal App (Current)**  
- Pure HTML/CSS/JS  
- Offline password generation  
- Vibrant UI  
- High‑entropy output  
- No backend  
- Runs locally or on GitHub Pages  

### **Phase 2 — PWA Upgrade**  
- Installable desktop/mobile app  
- Offline caching  
- App icon + splash screen  
- Local password storage  
- Optional weekly password rotation  

### **Phase 3 — Next.js Migration**  
Rebuild the project using:

- **Next.js** (frontend + API routes)  
- **Supabase** (auth, database, storage, scheduled functions)  
- **Material UI or Tailwind** (enterprise UI)  

### **Phase 4 — Cloud Features**  
- User accounts  
- Encrypted cloud storage  
- App‑linked passwords  
- Password history  
- Multi‑device sync  
- Scheduled password rotation  
- Push notifications  

### **Phase 5 — SaaS Platform**  
- Subscription tiers  
- Team accounts  
- Admin dashboard  
- Audit logs  
- API access  
- Enterprise password policy enforcement  

This roadmap transforms the project from a simple generator into a **full password lifecycle management platform**.

---

## 📁 Project Structure (Current Version)


No frameworks. No dependencies. Fully portable.

---

## 🔒 Security Notes

This generator uses **cryptographically secure entropy** and avoids predictable patterns. All operations happen client‑side, and no data is stored or transmitted. For maximum security, generated passwords should be stored in a trusted password manager.

---

## 📄 License

MIT License — free for personal and educational use.

