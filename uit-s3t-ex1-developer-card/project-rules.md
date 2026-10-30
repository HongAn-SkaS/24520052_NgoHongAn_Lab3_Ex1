# UIT S3T – LAB 3 AI GOVERNANCE RULES

## 1. Technology Stack
- React 19
- Vite
- ES2024

## 2. Prohibited Legacy APIs
The following APIs and patterns are strictly prohibited:
- `class extends React.Component`
- `ReactDOM.render`
- `defaultProps`
- `keyCode`
- `window.alert`

## 3. Semantic HTML – Zero Div-Soup
Use semantic HTML elements wherever appropriate:
- `<main>`
- `<section>`
- `<article>`
- `<header>`
- `<dl>`
- `<dt>`
- `<dd>`
- `<figure>`
- `<output>`

Zero `<div>` elements are permitted inside `DeveloperCard.jsx`.

## 4. Accessibility – Forms
- Every `<input>` and `<select>` must have an associated `<label>`.
- Use React 19 `useId()` to generate accessible IDs.
- Maintain meaningful alternative text for images.

## 5. State Management Hygiene
- Use immutable state updates.
- Never synchronize derived filter or sort state inside `useEffect`.
- Prefer calculating derived values directly from current state.

## 6. Effect Cleanup
Every timer, event listener, or fetch operation inside `useEffect` must have appropriate cleanup.
- Clear timers.
- Remove registered event listeners.
- Abort pending fetch requests using `AbortController`.

## 7. Exercise-Specific Constraints
- Build reusable `DeveloperCard` and `SkillBadge` components.
- Use CSS Modules.
- Use CSS Custom Properties.
- Support responsive layouts at 375px.
- Use HTTPS for avatar images.
- Specify explicit image width and height.
- Provide fallback initials when the avatar fails to load.

## 8. Git Commit Requirements

Exactly two implementation commits are required:

1. `feat(ex1): implement semantic DeveloperCard and SkillBadge`
2. `style(ex1): add responsive 375px CSS module`