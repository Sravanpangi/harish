# Sravan's Developer Portfolio 🚀

A modern, responsive, and performance-optimized personal portfolio website built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

---

## ✨ Features

- **Dark & Light Mode**: Seamless theme switching with persistent state saved in `localStorage`.
- **Dynamic Typewriter Hero**: Animated rotating headline showcasing roles and strengths.
- **Glassmorphism & Neon Glow**: Modern dark-mode aesthetic with refined gradients and glass cards.
- **Responsive Layout**: Designed mobile-first, looking sharp on phones, tablets, and 4K desktops.
- **Interactive Project Filter**: Categorize projects by Full Stack, Frontend, Web Apps, etc.
- **Animated Skill Progress**: Scroll-triggered percentage bars and tech stack badges.
- **Career & Education Timeline**: Visual milestone tracker with clean vertical flow.
- **Interactive Contact Form**: Real-time client-side validation and toast confirmation.
- **Zero Heavy Frameworks**: Pure Vanilla JS, super fast loading, zero build tools needed.

---

## 📁 File Structure

```
sravn portfolio/
│
├── index.html        # Main HTML structure & semantic layout
├── style.css         # Custom styling, CSS variables, dark/light themes, animations
├── script.js         # Interactive features, filters, validation, theme toggle
└── README.md         # Documentation & customization guide
```

---

## 🛠️ How to Preview Locally

1. **Directly in Browser**:
   - Double-click `index.html` in your file explorer to open it in your default browser (Chrome, Edge, Firefox, Safari).

2. **Using VS Code Live Server**:
   - Open this folder in VS Code.
   - Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🎨 How to Customize

### 1. Update Personal Information
- Open `index.html`.
- Replace instances of `Sravan` with your full name.
- Update the **About Me**, **Education**, **Email**, and **Location** fields in `<section id="about">` and `<section id="contact">`.

### 2. Update Social Links
- In `index.html`, find `<div class="social-links">`.
- Update the `href` attributes for GitHub, LinkedIn, Twitter/X, and Email.

### 3. Change Animated Roles (Typing Effect)
- Open `script.js`.
- Edit the `words` array in `initTypingEffect()`:
  ```javascript
  const words = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Clean Code Enthusiast',
    'Problem Solver'
  ];
  ```

### 4. Add Your Projects
- In `index.html`, find the `<div class="projects-grid">` section.
- Duplicate or customize any `<div class="project-card">` block with your project title, description, tech stack tags, and demo/GitHub links.

---

## 🌐 Deploying to the Web (Free)

### Option 1: GitHub Pages
1. Push this folder to a GitHub repository (e.g., `username.github.io` or `portfolio`).
2. Go to **Settings** > **Pages**.
3. Select the `main` branch and `/ (root)` folder, then click **Save**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Vercel / Netlify
1. Drag and drop this folder directly into [Vercel](https://vercel.com) or [Netlify](https://netlify.com) dashboard.
2. It will deploy automatically within seconds!
