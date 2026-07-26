# HACK++ATHON

HACK++ATHON is a premium one-page hackathon landing page with a cinematic arcade theme. The frontend is a React app with motion-heavy sections, while the backend is a small FastAPI service used for status checks.

## What’s Inside

- Premium arcade-style landing page for the event
- Centralized event content in `frontend/src/content.js`
- Smooth scrolling, animated reveals, and responsive layouts
- A lightweight FastAPI backend with MongoDB-powered status endpoints

## Project Structure

- `frontend/` React app built with CRACO, Tailwind CSS, Framer Motion, GSAP, and Lenis
- `backend/` FastAPI service with MongoDB integration
- `design_guidelines.md` visual and branding rules
- `plan.md` implementation notes and project status

## Frontend Setup

```bash
cd frontend
yarn install
yarn start
```

Available scripts:

- `yarn start` - run the development server
- `yarn build` - create a production build
- `yarn test` - run the test runner

The app is available at `http://localhost:3000` during development.

## Backend Setup

The backend expects these environment variables:

- `MONGO_URL` - MongoDB connection string
- `DB_NAME` - database name
- `CORS_ORIGINS` - comma-separated allowed origins, defaults to `*`

Run it with:

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## API

- `GET /api/` - basic health response
- `POST /api/status` - create a status check entry
- `GET /api/status` - list stored status checks

## Notes

- Keep event copy, dates, and links in `frontend/src/content.js`.
- The primary CTA should point to Unstop and open in a new tab.
- The landing page is designed to feel continuous and immersive across sections.

