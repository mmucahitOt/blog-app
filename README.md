# Blog App - Full Stack Application

A full-stack blog application built with React frontend, Express backend, and MongoDB database.

## Project Structure

```
blog-app/
├── backend/          # Express.js backend API
├── frontend/         # React frontend application
├── e2e/             # End-to-end tests with Playwright
├── scripts/         # Build and deployment scripts
├── dist/            # Build output directory
├── package.json     # Unified package management
├── eslint.config.mjs # Unified ESLint configuration
├── vite.config.js   # Vite configuration for frontend
├── playwright.config.js # Playwright configuration for E2E tests
└── .gitignore       # Unified git ignore rules
```

## Features

- **Backend**: Express.js REST API with MongoDB
- **Frontend**: React with Vite for fast development
- **Testing**: Unit tests, integration tests, and E2E tests
- **Linting**: Unified ESLint configuration for all code
- **Build**: Automated build process for production

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. Clone the repository
2. Install all dependencies:

   ```bash
   npm run install:all
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start the development servers:
   ```bash
   npm run dev
   ```

This will start both the backend (port 3000) and frontend (port 5173) servers concurrently.

## Available Scripts

### Development

- `npm run dev` - Start both backend and frontend in development mode
- `npm run dev:backend` - Start only the backend server
- `npm run dev:frontend` - Start only the frontend server

### Testing

- `npm run test` - Run all tests (backend + frontend)
- `npm run test:backend` - Run backend tests only
- `npm run test:frontend` - Run frontend tests only
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:all` - Run all tests including E2E

### Linting

- `npm run lint` - Lint all code (backend + frontend)
- `npm run lint:backend` - Lint backend code only
- `npm run lint:frontend` - Lint frontend code only

### Build & Production

- `npm run build` - Build frontend for production
- `npm run build:render` - Build for Render deployment
- `npm run start` - Start production backend server
- `npm run start:prod` - Start production backend with environment
- `npm run preview` - Preview production frontend build

### E2E Testing

- `npm run e2e:install` - Install Playwright browsers
- `npm run e2e:ui` - Run E2E tests with UI
- `npm run e2e:report` - Show E2E test reports

## Configuration Files

### ESLint (`eslint.config.mjs`)

Unified ESLint configuration that handles:

- Backend JavaScript files (CommonJS)
- Frontend React files (ES modules)
- E2E test files (ES modules)

### Vite (`vite.config.js`)

Frontend build configuration with:

- React plugin
- API proxy to backend
- Test environment setup
- Production build output

### Playwright (`playwright.config.js`)

E2E testing configuration with:

- Multiple browser support
- Automatic server startup
- Test reporting

## Development Workflow

1. **Start Development**: `npm run dev`
2. **Write Code**: Edit files in `backend/` or `frontend/`
3. **Run Tests**: `npm run test` or `npm run test:all`
4. **Lint Code**: `npm run lint`
5. **Build**: `npm run build`

## Deployment

### Render Deployment

Use the `build:render` script which includes:

- Frontend build
- Backend setup
- Environment configuration

### Local Production

1. Build the application: `npm run build`
2. Start production server: `npm run start:prod`

## Contributing

1. Follow the ESLint rules
2. Write tests for new features
3. Run all tests before committing
4. Use conventional commit messages

## License

ISC
