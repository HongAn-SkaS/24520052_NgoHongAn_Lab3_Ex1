# Task Composition – Exercise 1: Semantic Engineer & Pro-Gamer Profile Card

## 1. Project Overview

**Objective:** Build reusable `DeveloperCard` and `SkillBadge` components using React 19, Vite, and ES2024.

**Core Requirements:**
- Semantic HTML with zero `<div>` elements inside `DeveloperCard.jsx`.
- Reusable and composable React components.
- CSS Modules and CSS Custom Properties.
- Responsive layout supporting a minimum viewport width of 375px.
- Secure HTTPS avatar with explicit dimensions and fallback initials.
- Accessible and maintainable implementation.
- Exactly two atomic Git commits.

## 2. Work Breakdown Structure (WBS)

| WBS ID | Task | Description | Deliverable |
|---|---|---|---|
| 1.0 | Project Preparation | Inspect existing Lab 2 project structure, dependencies, and React 19 + Vite configuration. | Verified project environment |
| 1.1 | Project Structure | Identify component, style, and asset locations. | Organized project structure |
| 1.2 | Project Rules | Apply `project_rules.md` and exercise-specific constraints. | Compliance baseline |
| 2.0 | React Components | Implement reusable semantic React components. | Functional components |
| 2.1 | SkillBadge | Build a reusable skill badge component with appropriate props. | `SkillBadge.jsx` |
| 2.2 | DeveloperCard | Build the profile card using semantic HTML elements and `SkillBadge`. | `DeveloperCard.jsx` |
| 2.3 | Avatar Security | Use an HTTPS avatar, explicit width/height, and fallback initials. | Secure avatar implementation |
| 2.4 | Component Composition | Integrate profile information, developer details, and skill badges. | Complete component composition |
| 3.0 | Styling & Responsiveness | Implement CSS Modules and responsive styling. | Component stylesheet |
| 3.1 | CSS Custom Properties | Define reusable design tokens for colors, spacing, typography, and layout. | CSS variables |
| 3.2 | Component Styling | Style the profile card and skill badges using CSS Modules. | `DeveloperCard.module.css` |
| 3.3 | Responsive Layout | Ensure usability and layout integrity at 375px and larger viewports. | Responsive profile card |
| 4.0 | Testing & Validation | Verify functionality, accessibility, security, and project compliance. | Validated implementation |
| 4.1 | Semantic Validation | Verify zero `<div>` elements inside `DeveloperCard.jsx`. | Semantic compliance |
| 4.2 | Functional Validation | Verify props, component composition, and avatar fallback. | Functional validation |
| 4.3 | Responsive Validation | Test layout at 375px and desktop viewport sizes. | Responsive validation |
| 4.4 | Governance Audit | Check React 19, accessibility, state hygiene, and effect cleanup rules. | Compliance audit |
| 5.0 | Git & Documentation | Create atomic commits and maintain required documentation. | Submission-ready repository |
| 5.1 | Implementation Commit | Commit component implementation. | Commit 1 |
| 5.2 | Styling Commit | Commit CSS Module and responsive styling. | Commit 2 |
| 5.3 | Documentation | Maintain AI failure audit, task composition, and project rules. | Three required documents |

## 3. Git Commit Strategy

The implementation must be separated into exactly two logical commits.

| Commit | Message | Scope |
|---|---|---|
| 1 | `feat(ex1): implement semantic DeveloperCard and SkillBadge` | React components and semantic structure |
| 2 | `style(ex1): add responsive 375px CSS module` | CSS Modules, custom properties, and responsive styling |

**Important:** Commit 1 must contain a functional semantic component implementation. Commit 2 must contain the styling and responsive improvements without mixing unrelated changes.

## 4. Acceptance Criteria

The exercise is considered complete when all conditions below are satisfied.

### Component Requirements
- [ ] `DeveloperCard` renders a complete developer profile.
- [ ] `SkillBadge` is reusable and receives data through props.
- [ ] Components use React 19 conventions.
- [ ] `DeveloperCard.jsx` contains zero `<div>` elements.

### Semantic HTML & Accessibility
- [ ] Appropriate semantic HTML elements are used.
- [ ] Profile information is structured appropriately.
- [ ] Avatar has meaningful alternative text.
- [ ] Avatar has explicit width and height.
- [ ] Avatar uses HTTPS.
- [ ] Fallback initials are displayed when the avatar fails to load.

### CSS & Responsive Design
- [ ] Styling uses CSS Modules.
- [ ] CSS Custom Properties replace inline styling.
- [ ] Layout works at a minimum viewport width of 375px.
- [ ] No horizontal overflow at the target viewport.

### Project Governance
- [ ] No prohibited legacy React APIs.
- [ ] Immutable state updates are maintained.
- [ ] No unnecessary synchronization of derived state through `useEffect`.
- [ ] Every timer, listener, or fetch inside `useEffect` has appropriate cleanup.
- [ ] Every input/select has an associated label using React 19 `useId()` when applicable.

### Git & Documentation
- [ ] Commit 1 matches the required commit message.
- [ ] Commit 2 matches the required commit message.
- [ ] `AI_Failure_Audit.md` exists.
- [ ] `Task_composition.md` exists.
- [ ] `project_rules.md` exists.

## 5. Final Deliverables

1. `DeveloperCard.jsx`
2. `SkillBadge.jsx`
3. `DeveloperCard.module.css`
4. `AI_Failure_Audit.md`
5. `Task_composition.md`
6. `project_rules.md`

**Final Goal:** Deliver a reusable, accessible, semantic, responsive React 19 profile card while complying with all UIT S3T Lab 3 AI Governance Rules.