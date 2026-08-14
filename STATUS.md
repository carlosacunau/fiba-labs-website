# STATUS — fibalabs.com bilingual copy revision
Updated: 260814

## Latest (v5, Spanish round 2)
Spanish now exists in full and has been through one round of Carlos's edits. Review runs through an **editable artifact**, not claude-review: https://claude.ai/code/artifact/be9de86f-e4a6-4355-a5c7-d92ae6eb7034 — every ES string is `contenteditable`, edits persist in his browser (localStorage key `fibalabs-enes-v2`), and "Copiar para Claude" exports only changed rows as `key / antes / ahora / nota`. He pastes that back; apply to the `es` block, then regenerate the artifact FROM the source file (script pattern in session history: dump en/es pairs to `rows.json`, group into sections, splice into `const DATA`, bump the storage key so old edits don't resurrect over the new baseline).

Round 2 applied all 16 of his notes. Two touched English and were changed in both blocks. Parse OK, deep parity OK (85/85 keys), dialect scan clean (only known "Después" false positive), no em-dashes, no tuteo leak.

## Where we are
Bilingual revision of [src/i18n.js](src/i18n.js), goal: an executive lands on the page and trusts Carlos enough to book a call. **v5**: naming fixes (v1), annotation round (v2), expert pass Sultanic/Hormozi/Abraham (v3), motivational-copy pass (v4), Spanish translation + Carlos's round-2 edits (v5). NOT committed or deployed.

**Spanish register is `usted`, settled and not to be relitigated.** VOICE.md §16.2: a página de venta is general-audience text, so it takes usted, not tú. The file's own header comment still says "tú throughout" and is now WRONG — fix it when touching the file. Carlos also asked for "el equipo" over "su equipo" wherever it reads naturally.

## Done
- v4 edits in i18n.js: shift body (delegation isomorphism, once/then), offer 01 ends in next week ("nobody starts from a blank page"), offer 03 executive-status payoff ("when the next AI pitch lands on your desk, you'll know what to ask"), method step 03 adoption signal ("weeks later, someone builds a new one on their own"), final CTA honesty line ("If what you need isn't something I do, I'll say so")
- Reading mirror kept in sync: [~/OS/context/en-copy.md](../../context/en-copy.md) (ephemeral, delete when thread closes)
- Earlier this session: removed all "without me"/me-centric framing per Carlos; "we build together" is deliberate and stays; first person for mentoring/teaching/speaking, "we" for builds (recorded in memory `fibalabs-as-protagonist-not-carlos`)

## Next
- Carlos reviews v5 in the artifact and pastes back the "Copiar para Claude" export; apply and republish
- Regenerate `_bilingual-mockup/260812_copy-review.md` from v5 once the Spanish settles. It is stamped OUTDATED (both columns predate v1) and must NOT be annotated until rebuilt
- Commit + push to main deploys to Cloudflare Pages (only when Carlos says so)

## Blocked / waiting on
- Carlos: `method.lede`. His note said the skills stay "en los asistentes", but in Spanish that reads as *the people attending*, not the AI assistants. Currently "Las habilidades quedan en las personas que asisten". If he meant the built assistants: "Las habilidades quedan instaladas en los asistentes que construyen"
- Carlos: CTA labels. He shortened `nav.book` + `hero.cta` to "Agendar"; `ways.cta`, `finalCta.primary`, `footer.book` deliberately left as "Agendar una llamada" (mid-page and footer carry more information). Confirm or shorten all five
- Carlos: one workshop/talk attendee testimonial (all three quotes are build-proof; that is the page's remaining trust gap)
- Carlos: the three testimonials are back-translations. Originals in email or WhatsApp would beat them
- Carlos: hero sub "work" repetition ("real work" + "Your work, your vocabulary, your tools"); proposed trim: "built on what your team actually does"

## Key decisions
- Spanish register = **usted** (VOICE.md 16.2, sales page = general audience). Settled; do not reopen
- `shift.body` is built on Carlos's own **teaching-flow framework** (`expert-kb/carlos-acuna/frameworks/teaching-flow.md`): humano planea/diseña/conecta, agentes recolectan/interpretan/ejecutan/presentan. My invented term "punto de relevo" was cut. The closing beat ("saber qué pedirle, qué esperar de vuelta y en qué punto meterse") deliberately echoes the brochure's "Dirigir a la IA: ustedes deciden dónde usarla y en qué puntos intervenir", so site and deck reinforce each other
- Speaking offer (`ways.items[1]`) no longer says "board conversation" in either language. It now sells a framework that outlives the model, built on the brochure's "La herramienta cambia cada mes. La forma de pensar, no." Audience is teams, not leaders
- Method step 03 trimmed to one sentence in both languages; the adoption signal and the time-saved measure were cut on Carlos's instruction
- Executive mentoring stays group-capable; 1:1 spec defined only when a buyer bites
- "Whether we work together or not" claim rejected for a discovery call (save for future paid-audit copy); the v4 honesty line ("I'll say so") is the accepted preeminence version, pending Carlos's confirmation
- "In 2026" tag (Sultanic +conversion word) considered and rejected: reads listicle-ish on an executive personal-brand page
- fibalabs.com = corporate/executive storefront; cohort product lives on talleres-fiba

## Files that matter
- [src/i18n.js](src/i18n.js) — source of truth, `en` block lines ~13-160
- [~/OS/context/en-copy.md](../../context/en-copy.md) — human-readable v4 mirror with changelog
- [~/OS/fiba-labs/workshops/260610_THE-OFFER.md](../workshops/260610_THE-OFFER.md) — defined offer, locked positioning lines
- [~/OS/fiba-labs/workshops/offering-refinement/brochure-AI-mentoring-es.md](../workshops/offering-refinement/brochure-AI-mentoring-es.md) — group mentoring product definition
