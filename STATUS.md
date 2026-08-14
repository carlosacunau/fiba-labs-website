# STATUS — fibalabs.com bilingual copy revision
Updated: 260814

## Latest (v7 SHIPPED to fibalabs.com)
Deployed 260814, commits `e48b24e` (copy), `74937f5` (md mirrors), `d1250cb` (static meta fix). Verified on the live bundle, not just locally: "la persona planea", "es el criterio", "Ayudo a ejecutivos", "outlives the tool" all present; deployed bundle hash matches the local build.

**Caught at deploy time:** `index.html` still carried pre-v1 Spanish in its `<title>` / description / og tags ("mentoría privada", "tu trabajo real"). React overwrites those on mount, so humans saw v7 but **crawlers and WhatsApp/LinkedIn link previews served rejected copy**. Fixed in `d1250cb`. Those static tags are the Spanish fallback and must be kept in sync with `copy.es.meta` by hand, there is no build step that does it. Re-check them after any meta change.

**Language resolution** ([src/LanguageContext.jsx](src/LanguageContext.jsx)): stored choice (`fiba-lang`) → `navigator.languages` first match → Spanish. So Spanish is the **fallback**, not an override: an English browser gets English. `DEFAULT_LANG = 'es'` is only the terminal branch.

## Where we are
Bilingual revision of [src/i18n.js](src/i18n.js), goal: an executive lands on the page and trusts Carlos enough to book a call. **v7, live**: naming fixes (v1), annotation round (v2), expert pass Sultanic/Hormozi/Abraham (v3), motivational-copy pass (v4), Spanish translation (v5), Carlos's round-2 edits (v6), shift.body judgment hinge + "la persona" (v7).

**Spanish register is `usted`, settled and not to be relitigated.** VOICE.md §16.2: a página de venta is general-audience text, so it takes usted, not tú. The file header comment now records this (fixed 260814). Carlos also asked for "el equipo" over "su equipo" wherever it reads naturally.

## Done
- v7 copy shipped and verified live in both languages (see Latest)
- Static `index.html` meta synced to `copy.es.meta`; link previews and crawlers now serve v7
- Generated mirrors, one per language, committed: [_bilingual-mockup/260814_copy-en.md](_bilingual-mockup/260814_copy-en.md) and [260814_copy-es.md](_bilingual-mockup/260814_copy-es.md). Both are generated from `src/i18n.js`, never hand-edited
- `_bilingual-mockup/260812_copy-review.md` stamped SUPERSEDED, points at the two new files
- Review tooling: the editable artifact (https://claude.ai/code/artifact/be9de86f-e4a6-4355-a5c7-d92ae6eb7034) replaced claude-review for this thread. Every ES string is contenteditable, "Copiar para Claude" exports only changed rows. Regenerate it FROM the source file after each round and bump the localStorage key so stale edits don't resurrect

## Next
- Nothing blocking. The page is live and correct in both languages
- If Carlos resolves any Blocked item below: edit `src/i18n.js`, `npm run build`, regenerate both `260814_copy-*.md`, commit, push. Check `index.html` meta by hand if `meta.*` changed
- Delete the ephemeral bilingual mirror `~/OS/context/en-copy.md` when this thread closes; the committed `_bilingual-mockup/260814_copy-*.md` are the durable record

## Blocked / waiting on
- Carlos: `method.lede`. His note said the skills stay "en los asistentes", but in Spanish that reads as *the people attending*, not the AI assistants. Currently "Las habilidades quedan en las personas que asisten". If he meant the built assistants: "Las habilidades quedan instaladas en los asistentes que construyen"
- Carlos: CTA labels. He shortened `nav.book` + `hero.cta` to "Agendar"; `ways.cta`, `finalCta.primary`, `footer.book` deliberately left as "Agendar una llamada" (mid-page and footer carry more information). Confirm or shorten all five
- Carlos: one workshop/talk attendee testimonial (all three quotes are build-proof; that is the page's remaining trust gap)
- Carlos: the three testimonials are back-translations. Originals in email or WhatsApp would beat them
- Carlos: hero sub "work" repetition ("real work" + "Your work, your vocabulary, your tools"); proposed trim: "built on what your team actually does"

## Key decisions
- Spanish register = **usted** (VOICE.md 16.2, sales page = general audience). Settled; do not reopen
- `shift.body` is built on Carlos's own **teaching-flow framework** (`expert-kb/carlos-acuna/frameworks/teaching-flow.md`): humano planea/diseña/conecta, agentes recolectan/interpretan/ejecutan/presentan. My invented term "punto de relevo" was cut. The closing beat ("saber qué pedirle, qué esperar de vuelta y en qué momento es necesario corregir") deliberately echoes the brochure's "Dirigir a la IA: ustedes deciden dónde usarla y en qué puntos intervenir", so site and deck reinforce each other
- Speaking offer (`ways.items[1]`) no longer says "board conversation" in either language. It now sells a framework that outlives the model, built on the brochure's "La herramienta cambia cada mes. La forma de pensar, no." Audience is teams, not leaders
- Method step 03 trimmed to one sentence in both languages; the adoption signal and the time-saved measure were cut on Carlos's instruction
- Executive mentoring stays group-capable; 1:1 spec defined only when a buyer bites
- "Whether we work together or not" claim rejected for a discovery call (save for future paid-audit copy); the v4 honesty line ("I'll say so") is the accepted preeminence version, pending Carlos's confirmation
- "In 2026" tag (Sultanic +conversion word) considered and rejected: reads listicle-ish on an executive personal-brand page
- fibalabs.com = corporate/executive storefront; cohort product lives on talleres-fiba

## Files that matter
- [src/i18n.js](src/i18n.js) — source of truth, `en` block lines ~13-160
- [_bilingual-mockup/260814_copy-en.md](_bilingual-mockup/260814_copy-en.md) / [260814_copy-es.md](_bilingual-mockup/260814_copy-es.md) — generated v7 mirrors, one per language
- [src/LanguageContext.jsx](src/LanguageContext.jsx) — language resolution; Spanish is fallback, not override
- [index.html](index.html) — static meta, the Spanish fallback crawlers read; sync by hand
- [~/OS/fiba-labs/workshops/260610_THE-OFFER.md](../workshops/260610_THE-OFFER.md) — defined offer, locked positioning lines
- [~/OS/fiba-labs/workshops/offering-refinement/brochure-AI-mentoring-es.md](../workshops/offering-refinement/brochure-AI-mentoring-es.md) — group mentoring product definition
