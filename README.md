# posts

> A simple React + Vite posts listing app (uses JSONPlaceholder + Picsum). Deployed live at: https://posts-byoq.onrender.com

**Demo:** https://posts-byoq.onrender.com

**Description**
- A small posts listing UI built with React and Vite.
- Fetches posts from `https://jsonplaceholder.typicode.com/posts` and displays them with placeholder images from `https://picsum.photos`.
- Includes pagination and the ability to delete a post client-side.

**Features**
- Fetches and displays posts with pagination
- Client-side delete of posts
- Responsive cards with images

**Tech stack**
- React 19
- Vite
- Tailwind CSS

**Getting started (local)**
1. Clone the repository:

```bash
git clone https://github.com/Kshitij-Vijay-Pawar/posts.git
cd posts
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

**NPM scripts**
- `dev`: start Vite dev server
- `build`: build production assets
- `preview`: locally preview the production build
- `lint`: run ESLint

**Notes**
- Posts are loaded from `https://jsonplaceholder.typicode.com/posts` with a 5 second simulated delay (see `src/context/PostContext.jsx`).
- Images are generated from `https://picsum.photos` using the post `id`.
- This is a client-side demo and does not persist deletions server-side.

**Deployments**
- Live site: https://posts-byoq.onrender.com

**Credits**
- Data: JSONPlaceholder (https://jsonplaceholder.typicode.com)
- Images: Picsum (https://picsum.photos)

If you'd like, I can add a screenshot, CI config for automatic deploys, or a short CONTRIBUTING section.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
