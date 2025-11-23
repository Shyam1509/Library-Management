# Library-Management

**Project Summary**
- **Repository:** Monorepo containing a NestJS backend and an Angular frontend for a Library Management system.
- **Purpose:** Demonstration app for managing library-related data with a REST API backend and a single-page frontend.

**What I Did**
- **Backend:** Implemented the NestJS application (located in `backend/`) including controllers, services and basic endpoints. Added development scripts, ESLint/Prettier formatting, and Jest-based tests (unit/e2e).
- **Frontend:** Built the Angular application (located in `frontend/src/`) including app routing, configuration, and main UI entry points.
- **Monorepo:** Configured workspace scripts in the root `package.json` to run backend and frontend concurrently and provided a workspace install script.
- **Tooling:** Added TypeScript, ESLint, Prettier, and basic test setup to streamline development.

**Repository Structure (important files)**
- `backend/` — NestJS backend source and tests (`src/`, `test/`, `package.json`).
- `frontend/` — Angular frontend source (`src/`, `angular.json`, `package.json`).
- `package.json` — Root workspace scripts to run both projects concurrently.

**Requirements**
- Node.js (v16+ recommended)
- npm (v8+ recommended)

**Setup & Run (Windows `cmd.exe`)**
1. Install dependencies for both workspaces:

```cmd
cd "e:\Git Project\Library-Management"
npm run install:all
```

2. Start both backend and frontend concurrently:

```cmd
cd "e:\Git Project\Library-Management"
npm run start
```

3. Or start them individually:

```cmd
cd "e:\Git Project\Library-Management\backend"
npm install
npm run start:dev

cd "e:\Git Project\Library-Management\frontend"
npm install
npm run start
```

**Available Scripts (root)**
- `start` : Runs backend and frontend concurrently.
- `start:backend` : Runs backend only.
- `start:frontend` : Runs frontend only.
- `install:all` : Installs dependencies for all workspaces.

**Testing**
- Backend unit tests / e2e tests (from `backend`):

```cmd
cd backend
npm run test
npm run test:e2e
```

**Notes & Next Steps**
- If you'd like, I can expand the `What I Did` section with more granular bullet points (routes implemented, DTOs, example requests), add screenshots, or include API documentation for endpoints.

**Contributing**
- If you make changes, please run formatting and tests before opening a PR.

**Contact**
- For questions about the implementation, ask me here and I can add more details to this README.
