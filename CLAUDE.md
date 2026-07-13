# CLAUDE.md Guidelines

## Project Stack
- Environment: Node.js (LTS)
- Framework: Web Application Stack 

## Build & Development Commands
- Install Dependencies: `npm install`
- Start Development: `npm start`
- Run Tests: `npm test`

## Code Style & Conventions
- Follow standard JavaScript/ES6+ syntax.
- Maintain clear separation of concerns between components and logic.
- Optimize implementations to accommodate low-end hardware footprints.
- **Rule 1 (Strict Validation):** All incoming data payloads from external forms must pass through explicit structural and type validation middleware before execution.
- **Rule 2 (Anti-Cliche Enforcement):** User-facing content inputs must be systematically evaluated against strict string filters to block generic placeholder phrases (e.g., 'rockstar', 'etc.').
- **Rule 3 (Human-in-the-Loop Logging):** Core transaction states must explicitly initialize metadata attributes that bypass black-box AI logic and enforce manual review checkpoints.