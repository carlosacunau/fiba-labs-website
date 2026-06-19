# Mentoring reposition — handoff notes

Branch: `mentoring-reposition` (NOT merged, NOT deployed). `main` / production is untouched.
Built: 2026-06-19. Author: Claude, on Carlos's instruction.

## What this is
Full repositioning of fibalabs.com from "we build custom AI operating systems" (agency)
to **AI Mentoring** as the named product. Decisions locked with Carlos before building:

- Scope: full repositioning, mentoring is THE product.
- Language: English.
- Voice: first-person ("I mentor / I speak"), Fiba Labs as the house behind it.
- No prices anywhere. No "book to discuss". One CTA verb: **Book**.
- Page is a credibility + clarity page, not a paid-traffic funnel. Someone hears Carlos
  on a video, lands here, understands the work, books.
- Offer section = "Ways to work together": Workshops / 1:1 Mentoring / Speaking,
  plus a QUIET build offer ("when mentoring turns into building", per-audit only).
- Hero message: "I make executives and their teams AI-fluent."

## IMPORTANT: copy is placeholder
Carlos will do a DEEP INTERVIEW later to write the real copy. Everything in App.jsx
(headline, subhead, the three offer descriptions, About bio, method steps) is a first
draft to make the layout reviewable. Do not treat it as final. The visual structure is
the deliverable for now; the words get rewritten after the interview.

## Before this can go live — TODO
1. **Booking link** — `BOOK_LINK` at top of `src/App.jsx` is `https://cal.com/REPLACE_ME`.
   Replace with the real Cal.com URL (Carlos moved from Calendly to Cal.com).
2. **Email** — `EMAIL` const set to `carlos@fibalabs.com`. Confirm/replace.
3. **LinkedIn** — `LINKEDIN` const set to `https://www.linkedin.com/in/carlosacunau/`. Confirm.
4. **Photos** (real photos of Carlos only — AI may clean backgrounds, never generate his face):
   - `public/stage.jpg` — the cinema / on-stage talking shot. Proof section.
   - `public/portrait.jpg` — environmental portrait (head + torso in context). About section.
   - Until those files exist, the sections show labeled placeholders ([ stage photo ] / [ portrait ]).
     The <img onError> hides the broken image so the placeholder shows cleanly.
5. **Real copy** from the deep interview.
6. **Proof logos** — currently text: IBM, Oracle, Red Hat, Trellix, Vertiv, Remote.com.
   Confirm which engagements to show (these are Carlos's career history, not necessarily mentoring clients).

## Out of scope (separate later tracks)
- LinkedIn profile rewrite + new cover image (the site defines the message first).
- Photography / retouching session.
- Any newsletter / lead-magnet funnel (Claudia has one; Carlos doesn't yet).

## How to review
```
cd ~/OS/fiba-labs/website
npm run dev          # http://localhost:5173 (or whatever Vite picks)
```
Then look at it. To go live later: merge `mentoring-reposition` -> `main`, push,
Cloudflare Pages auto-deploys.

## Rollback
Old agency App.jsx is in git history on `main`. `git checkout main -- src/App.jsx` restores it.
