# Sigma Interior

A modern, responsive interior design website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. The project is designed for fast development, optimized production builds, and a smooth user experience with animations powered by Framer Motion.

---

## 🚀 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Supabase
- Lucide React Icons
- ESLint

---

## 📋 Prerequisites

Before running the project, ensure you have:

- **Node.js** (v18 or later recommended)
- **npm** (comes with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/abdulsamea/sigma-interior.git
```

### 2. Navigate to the project directory

```bash
cd sigma-interior
```

### 3. Install dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

If the project uses Supabase or other external services, create a `.env` file in the project root.

Example:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Note:** Only variables prefixed with `VITE_` are exposed to the client in Vite applications.

---

# 🛠️ Available Commands

## Start Development Server

Runs the application in development mode with Hot Module Replacement (HMR).

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Build for Production

Creates an optimized production build.

```bash
npm run build
```

The compiled files will be generated inside the `dist/` directory.

---

## Preview Production Build

Serves the production build locally for testing.

```bash
npm run preview
```

This command should be run after building the project.

```bash
npm run build
npm run preview
```

---

## Run ESLint

Checks the project for linting issues.

```bash
npm run lint
```

Use this before committing your changes to maintain code quality.

---

## Run TypeScript Type Checking

Performs static type checking without generating any output files.

```bash
npm run typecheck
```

This helps identify TypeScript errors during development.

---

# 📁 Project Structure

```
sigma-interior/
│
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, fonts
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   ├── App.tsx
│   └── main.tsx
│
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> Folder names may vary depending on project requirements.

---

# 🚀 Development Workflow

Start the development server:

```bash
npm run dev
```

Make your changes.

Run linting:

```bash
npm run lint
```

Run type checking:

```bash
npm run typecheck
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# 📦 Production Build

Generate an optimized production build:

```bash
npm run build
```

Preview it locally:

```bash
npm run preview
```

The production-ready files are located in:

```
dist/
```

These files can be deployed to platforms such as:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting
- GitHub Pages
- Any static web hosting provider

---

# 🌿 Git Workflow

Create a new branch:

```bash
git checkout -b feature/your-feature
```

Commit your changes:

```bash
git add .
git commit -m "Add your feature"
```

Push your branch:

```bash
git push origin feature/your-feature
```

Open a Pull Request for review.

---

# 📚 Key Dependencies

| Package          | Purpose                             |
| ---------------- | ----------------------------------- |
| React            | UI Library                          |
| TypeScript       | Static typing                       |
| Vite             | Development server and bundler      |
| Tailwind CSS     | Utility-first CSS framework         |
| React Router DOM | Client-side routing                 |
| Framer Motion    | Animations                          |
| Supabase         | Backend services and authentication |
| Lucide React     | Icon library                        |
| ESLint           | Code quality and linting            |

---

# 📜 Scripts Summary

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm install`       | Install project dependencies                  |
| `npm run dev`       | Start the Vite development server             |
| `npm run build`     | Build the application for production          |
| `npm run preview`   | Preview the production build locally          |
| `npm run lint`      | Run ESLint to identify code quality issues    |
| `npm run typecheck` | Run the TypeScript compiler for type checking |

---

# 🧹 Code Quality

Before creating a Pull Request, ensure:

- The application builds successfully.
- ESLint reports no issues.
- TypeScript type checking passes.
- The application works as expected in the browser.

Recommended commands:

```bash
npm run lint
npm run typecheck
npm run build
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Submit a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---
