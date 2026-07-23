# FL-01 Workflow Audit & AI Setup
**Student / Intern:** [Your Name]  
**Role:** Graduating CS Student & Frontend AI Engineer Intern (FlyRank AI)  
**Project Context:** FlyRank Direct Capstone  

---

## Section 1: Weekly Workflow Audit Table

| Task # | Task Description | Classification | One-Line Rationale |
| :--- | :--- | :--- | :--- |
| 1 | Attending thesis advising consultations with my research professor | **Just Me** | High-stakes interpersonal alignment requires authentic human presence, immediate dialogue, and personal accountability. |
| 2 | Evaluating peer contributions and team dynamics during group study sessions | **Just Me** | Qualitative human judgment, social nuances, and interpersonal trust cannot be delegated to an automated language model. |
| 3 | Writing and refining technical documentation (`README.md`, `WORKFLOW.md`, `CLAUDE.md`) | **Collaborate with AI** | I provide architectural decisions and specific edge-case learnings, while AI helps polish phrasing and format markdown structure. |
| 4 | Generating UI layout prototypes for React/Tailwind job-board components | **Collaborate with AI** | AI quickly generates structural JSX layouts and utility classes, which I refine for accessibility, responsiveness, and state management. |
| 5 | Reviewing Git diffs and enforcing Conventional Commit guidelines before pushing code | **Delegate to AI with Review** | AI easily checks commit messages and syntax diffs against established patterns, but I perform the final manual sanity check. |
| 6 | Writing Node.js validation middleware for employer form payloads | **Collaborate with AI** | I define business rules, security boundaries, and edge cases; AI drafts regex patterns and schema checks for me to verify. |
| 7 | Summarizing long academic research papers on machine learning and evaluation engines | **Delegate to AI with Review** | AI quickly extracts core methodology and findings from dense PDFs, saving time before I dive into deep critical reading. |
| 8 | Drafting daily stand-up updates and internship activity logs for FlyRank AI | **Delegate to AI with Review** | I feed raw bullet points of my daily completed commits, and AI formats them into professional status updates that I briefly review. |
| 9 | Formatting API JSON responses and writing mock data payloads for testing | **Fully Automate** | Creating repetitive, well-structured dummy data matches deterministic AI generation scripts perfectly with zero manual effort required. |
| 10 | Writing boilerplate Unit Tests (e.g., Jest tests for Express controllers) | **Delegate to AI with Review** | AI excels at generating standard test assertion blocks based on function parameters, requiring only logic validation from me. |
| 11 | Organizing and prioritizing my weekly sprint tasks across internship work and thesis deadlines | **Collaborate with AI** | AI helps outline and organize chaotic task lists into time-blocked schedules, but I make all final priority calls based on workload. |
| 12 | Debugging complex runtime state errors in Next.js / React components | **Collaborate with AI** | I isolate bug reproduction steps and terminal stack traces, while AI acts as a sounding board to suggest potential root causes. |

---

## Section 2: Target Tasks for FL-02 through FL-04 & Success Definitions

### Target Task 1: Building Backend Data Validation & Anti-Cliche Middleware
* **AI Collaboration Level:** Collaborate with AI (Human defines business logic; AI writes validation code; Human verifies via tests).
* **Measurable Success Criteria ("Done Well"):**
  1. Zero False Positives: Accurately accepts valid job postings while blocking 100% of invalid payloads (e.g., negative headcount, generic strings).
  2. 100% Case-Insensitive Buzzword Detection: Consistently blocks banned words ("rockstar", "etc.") regardless of capitalization.
  3. Automated Verification: Includes passing unit tests proving both pass (`200 OK`) and fail (`400 Bad Request`) paths.

### Target Task 2: Writing & Maintaining Technical Project Governance (`CLAUDE.md` & `WORKFLOW.md`)
* **AI Collaboration Level:** Collaborate with AI (Human identifies architectural learnings; AI structures Markdown).
* **Measurable Success Criteria ("Done Well"):**
  1. Specific Code-Level Evidence: Cites literal code diffs, function signatures, or terminal output errors with zero vague claims.
  2. Actionable Project Rules: Rules added to `CLAUDE.md` are concrete and project-specific.
  3. Low Review Friction: Output requires less than 2 minutes of human editing.

### Target Task 3: Generating Responsive UI Prototypes with Tailwind & React
* **AI Collaboration Level:** Collaborate with AI (AI generates structural JSX/Tailwind; Human integrates state/accessibility).
* **Measurable Success Criteria ("Done Well"):**
  1. Accessibility & Responsive Layout: Renders cleanly across desktop and mobile screens without layout breakage.
  2. Semantic HTML & Clean Props: Uses semantic markup (`<form>`, `<section>`) and explicitly typed props/state handlers.
  3. Immediate Integration Readiness: Imports cleanly into a React/Next.js tree without requiring utility class refactoring.

---
