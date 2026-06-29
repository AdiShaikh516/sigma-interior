# Sigma Interior

A modern, responsive interior design website built with **React**,
**TypeScript**, **Vite**, and **Tailwind CSS**. The project is designed
for fast development, optimized production builds, and a smooth user
experience with animations powered by Framer Motion.

---

## 🚀 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React Icons
- EmailJS
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
git clone https://github.com/adishaikh516/sigma-interior.git
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

Create a `.env` file in the project root.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Only variables prefixed with `VITE_` are exposed to the
> client in Vite applications.

Restart the development server after creating or updating the `.env`
file.

---

# 📧 EmailJS Setup

The consultation form uses **EmailJS** to send enquiry emails directly
from the client without requiring a backend server.

## 1. Create an EmailJS Account

Visit:

https://www.emailjs.com/

## 2. Add an Email Service

- Open **Email Services**
- Click **Add New Service**
- Connect your email provider (Gmail, Outlook, Zoho, etc.)
- Copy the generated **Service ID**

## 3. Create an Email Template

Navigate to:

**Email Templates → Create New Template**

Example subject:

```text
New Consultation Request from {{name}}
```

Example body:

```text
A new consultation request has been received.

Full Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Project Type: {{project_type}}
Design Style: {{style}}
Timeline: {{timeline}}
```

Save the template and copy the **Template ID**.

## 4. Get Your Public Key

Go to:

**Account → API Keys**

Copy your **Public Key**.

## 5. Configure Environment Variables

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

## 6. Install EmailJS

```bash
npm install @emailjs/browser
```

## 7. Test

```bash
npm run dev
```

Submit the consultation form and verify that the email arrives in the
configured inbox.

---

# 🛠️ Available Commands

Command Description

---

`npm install` Install dependencies
`npm run dev` Start development server
`npm run build` Build for production
`npm run preview` Preview production build
`npm run lint` Run ESLint
`npm run typecheck` Run TypeScript type checking
`npm run deploy` Deploy to GitHub Pages

---

# 📁 Project Structure

```text
sigma-interior/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── .env.example
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# 🚀 Development Workflow

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

---

# 📦 Production Build

```bash
npm run build
```

The production-ready files are generated inside:

```text
dist/
```

---

# 🌐 GitHub Pages Deployment

## Install gh-pages

```bash
npm install --save-dev gh-pages
```

## Update package.json

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## Configure Vite

Repository page:

```ts
base: "/repository-name/";
```

Custom domain:

```ts
base: "/";
```

## Deploy

```bash
npm run deploy
```

## Configure GitHub Pages

Repository →

**Settings → Pages**

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

## Custom Domain

Create:

```text
public/CNAME
```

Contents:

```text
sigmaconstruction.in
```

Configure your DNS records to point to GitHub Pages and enable HTTPS
after DNS propagation.

---

# ☁️ Other Deployment Options

The generated `dist/` folder can also be deployed to:

- Vercel
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages
- Any static web hosting provider

---

# 🌿 Git Workflow

```bash
git checkout -b feature/your-feature

git add .

git commit -m "Add your feature"

git push origin feature/your-feature
```

Then open a Pull Request.

---

# 📚 Key Dependencies

Package Purpose

---

React UI Library
TypeScript Static typing
Vite Build tool
Tailwind CSS Styling
React Router DOM Routing
Framer Motion Animations
EmailJS Contact form emails
Lucide React Icons
ESLint Code quality

---

# 🧹 Code Quality

Before pushing changes:

```bash
npm run lint
npm run typecheck
npm run build
```

Ensure:

- The project builds successfully.
- ESLint reports no issues.
- TypeScript reports no errors.

---

# 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push the branch.
5.  Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.
