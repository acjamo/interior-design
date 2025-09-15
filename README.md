<div align="center">
	<h1>Interior Design Web App</h1>
	<p>Modern React + Vite single-page site showcasing interior design services, projects, blog posts, and contact information.</p>
</div>

## ✨ Features
- Responsive layout with multiple pages (Home, About, Services, Projects, Blog, Contact)
- Fast development with Vite + React
- Reusable components (e.g. `Header`)
- Asset-based gallery (images in `public/`)
- Clean project structure for easy extension

## 🗂 Project Structure
```
root
├─ public/            # Static assets (images)
├─ src/
│  ├─ component/      # Shared UI components
│  ├─ Pages/          # Page-level React components
│  ├─ App.jsx         # Route composition
│  ├─ main.jsx        # App bootstrap
│  └─ App.css         # Global / component styles
└─ README.md
```

## 🚀 Getting Started
### Prerequisites
- Node.js (v18+ recommended) & npm

### Install Dependencies
```powershell
npm install
```

### Run Dev Server
```powershell
npm run dev
```
Visit the URL printed in the terminal (usually `http://localhost:5173`).

### Build for Production
```powershell
npm run build
```
Output goes into the `dist/` folder.

### Preview Production Build
```powershell
npm run preview
```

## 📦 Available Scripts
| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Create production build |
| `npm run preview` | Preview local production build |
| `npm run lint` | Run ESLint (if configured) |

## 🧩 Tech Stack
- React (SPA architecture)
- Vite (bundler & dev server)
- JavaScript (ES modules)
- CSS (global styling)

## 🔧 Customization Ideas
- Add routing via `react-router-dom`
- Integrate a CMS (e.g. Contentful) for blog content
- Add a contact form backend (Formspree / serverless)
- Convert to TypeScript for type safety
- Responsive improvements & accessibility refinements

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/awesome`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push branch: `git push origin feature/awesome`
5. Open a Pull Request

## 📜 License
Add a license (MIT recommended) if you plan to make it open source.

## 🙏 Acknowledgements
Built using the React + Vite starter template and expanded for an interior design portfolio/service site.

---
Feel free to adapt and extend. Questions or improvements welcome!
