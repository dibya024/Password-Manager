# DropPin — Password Manager

DropPin is a React web app for keeping website login details together in a single browser-based vault. It includes a responsive interface for adding, viewing, editing, and deleting saved logins.

> **Security notice:** This is a learning project, not a secure password manager. Login details are stored in browser `localStorage` without encryption or authentication. Do not use it to store real or sensitive passwords.

## Features

- Add a website, username, and password to the vault.
- View saved logins, with a consistent color accent for each entry.
- Reveal or hide saved passwords.
- Copy website addresses, usernames, and passwords to the clipboard.
- Edit or delete saved entries.
- Persist entries in the current browser using `localStorage`.
- Navigate between Home, View Store, Settings, and Profile.
- Responsive layout with animated gradients and reduced-motion support.

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS
- React Toastify
- UUID
- ESLint

## Getting started

### Prerequisites

- Node.js and npm

### Install and run

From the directory containing `package.json`:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
DropPin/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx
│   │   ├── Navbar.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   └── ViewStore.jsx
│   ├── images/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Data and security

Saved logins are written to the browser's `localStorage` under the `passwords` key. This storage is specific to the browser and origin; it is not encrypted, synced, or protected by an account. Anyone with access to the browser profile or page scripts may be able to read it.

Do not store real credentials in this app. A production password manager would require, among other things, reviewed encryption and key management, authentication, secure recovery, and a threat model.

## Author

**Dibyaranjan Sahoo** · [GitHub @dibya024](https://github.com/dibya024)
