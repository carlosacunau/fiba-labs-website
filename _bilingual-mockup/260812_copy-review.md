# Fiba Labs website: EN / ES copy review

> ⛔ **SUPERSEDED. Do not review or annotate this file.**
> Replaced 260814 by `260814_copy-en.md` and `260814_copy-es.md`, both generated from `src/i18n.js` at v7. Kept only as a record of the pre-v1 wording.
> Both columns are stale. The English here predates v1 of the 260813 revision (it still says "Custom mentoring workshops", "private mentoring", lowercase "AI strategy mentor", `nav.book: Book`), and the Spanish was translated from that English.
> Current English: [../src/i18n.js](../src/i18n.js) `en` block, or the readable mirror at [~/OS/context/en-copy.md](../../../context/en-copy.md).
> This file gets regenerated from final English at the start of the Spanish pass. Until then it is history, not a working document.

**How to use this:** highlight any Spanish line and leave a comment. Say what it should be, or just say it feels off and why. English is the source; Spanish should say what a Chilean or Colombian executive would actually say, not mirror the English word for word.

Each block shows the dictionary key, then EN, then ES. Lines marked ⚑ are ones I already think need a decision.

**Open question that affects most of the page:** everything below uses **tú**. VOICE.md says a sales page should use **ustedes**. Changing it touches most of these strings, so decide that first.

---

## Meta / SEO (browser tab, Google result, link previews)

### `meta.title`

**EN:** Carlos Acuña · AI Strategy Mentor | Workshops & Speaking | Fiba Labs

**ES:** Carlos Acuña · Mentor de estrategia de IA | Talleres y charlas | Fiba Labs

### `meta.description`

**EN:** AI strategy mentor for executives and their teams. Custom mentoring workshops, keynotes, and private mentoring built on your real work. 22 years inside enterprise: IBM, Oracle, Red Hat.

**ES:** Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres de mentoría a medida, keynotes y mentoría privada construidos sobre tu trabajo real. Veintidós años dentro del mundo corporativo: IBM, Oracle, Red Hat.


## Navigation bar

### `nav.workshops`

**EN:** Workshops

**ES:** Talleres

### `nav.speaking`

**EN:** Speaking

**ES:** Charlas

### `nav.mentoring`

**EN:** Mentoring

**ES:** Mentoría

### `nav.about`

**EN:** About

**ES:** Sobre mí

### `nav.book`

**EN:** Book

**ES:** Agendar


## Hero (first screen)

### `hero.overline`

**EN:** AI strategy mentor · Workshops · Speaking

**ES:** Mentor de estrategia de IA · Talleres · Charlas

### `hero.h1a`

**EN:** I make executives

**ES:** Hago que los ejecutivos

### `hero.h1b`

**EN:** (and their teams)

**ES:** (y sus equipos)

### `hero.h1c` ⚑

**EN:** AI-fluent.

**ES:** dominen la IA.

> ⚑ "Dominar" = master/dominate. Bigger, more macho claim than "fluent", and it fights the judgment-over-mastery positioning. Options: "que hablen IA con soltura" / "que sepan usar la IA de verdad".

### `hero.sub`

**EN:** Custom workshops, keynotes, and private mentoring, all built on your team's real work. Twenty-two years inside enterprise. No hype, no generic curriculum.

**ES:** Talleres a medida, charlas y mentoría privada, todo construido sobre el trabajo real de tu equipo. Veintidós años dentro del mundo corporativo. Sin humo, sin currículo genérico.

### `hero.cta`

**EN:** Book a call

**ES:** Agendar una llamada

### `hero.secondary`

**EN:** See how I work

**ES:** Mira cómo trabajo

### `hero.portraitAlt`

**EN:** Carlos Acuña

**ES:** Carlos Acuña

### `hero.portraitLabel`

**EN:** [ environmental portrait ]

**ES:** [ retrato en contexto ]


## The Shift (why another AI training fails)

### `shift.overline`

**EN:** Why another AI training won't fix it

**ES:** Por qué otra capacitación de IA no lo va a resolver

### `shift.h2a`

**EN:** Everyone bought the tools. Almost nobody 

**ES:** Todos compraron las herramientas. Casi nadie 

### `shift.h2b` ⚑

**EN:** changed how they work.

**ES:** cambió su forma de trabajar.

> ⚑ English lands as an accusation. Spanish reads softer. Could sharpen: "casi nadie cambió cómo trabaja".

### `shift.body`

**EN:** Generic training teaches prompts and demos, and a month later nobody uses any of it. The gap was never the tool. It's judgment: knowing what to hand to AI, what to keep, and how to tell good output from plausible output. I start from the work your team already does, and everyone leaves with something they built.

**ES:** La capacitación genérica enseña prompts y demos, y un mes después nadie usa nada de eso. El problema nunca fue la herramienta. Es el criterio: saber qué delegar a la IA, qué conservar, y cómo distinguir un buen resultado de uno que solo suena convincente. Yo parto del trabajo que tu equipo ya hace, y cada persona se va con algo que construyó.


## Three ways to work

### `ways.overline`

**EN:** How we work together

**ES:** Cómo trabajamos juntos

### `ways.h2`

**EN:** Three ways in. One outcome.

**ES:** Tres formas de entrar. Un solo resultado.

### `ways.intro`

**EN:** Your people, fluent enough to keep building without me. Everything is built around your real work, so we scope it on a call.

**ES:** Tu gente, con la soltura para seguir construyendo sin mí. Todo se arma sobre tu trabajo real, así que lo definimos en una llamada.

### `ways.items.0.num`

**EN:** 01

**ES:** 01

### `ways.items.0.label`

**EN:** Workshops

**ES:** Talleres

### `ways.items.0.format`

**EN:** Half-day to multi-week · your team, your cases · in person or remote

**ES:** Desde media jornada hasta varias semanas · tu equipo, tus casos · presencial o remoto

### `ways.items.0.title`

**EN:** Built on your team's real work, not a curriculum.

**ES:** Construido sobre el trabajo real de tu equipo, no sobre un currículo.

### `ways.items.0.desc`

**EN:** Custom mentoring workshops for a team or a leadership group. We take a process you run every week and walk out with an assistant or a workflow that handles it. Not slides about AI: the actual thing, working, in your company's vocabulary. Formats range from a half-day intensive to a multi-week program.

**ES:** Talleres de mentoría a medida para un equipo o un grupo directivo. Tomamos un proceso que corres cada semana y salimos con un asistente o un flujo que lo resuelve. Nada de diapositivas sobre IA: la herramienta funcionando de verdad, en el lenguaje de tu empresa. Los formatos van desde un intensivo de media jornada hasta un programa de varias semanas.

### `ways.items.1.num`

**EN:** 02

**ES:** 02

### `ways.items.1.label`

**EN:** Speaking

**ES:** Charlas

### `ways.items.1.format`

**EN:** Keynotes · conference workshops · leadership offsites

**ES:** Keynotes · talleres en conferencias · encuentros directivos

### `ways.items.1.title`

**EN:** A talk the room is still using a month later.

**ES:** Una charla que la sala sigue usando un mes después.

### `ways.items.1.desc` ⚑

**EN:** Keynotes and hands-on conference sessions, in person or remote, in English or Spanish. I don't do tool demos or hype tours. I give leaders a way to think about AI they can defend in their next board conversation, and when the format allows, everyone builds something with their own case before leaving the room.

**ES:** Keynotes y sesiones prácticas en conferencias, presencial o remoto, en español o en inglés. No hago demos de herramientas ni charlas de humo. Le doy a los líderes una forma de pensar la IA que puedan defender en su próxima conversación de directorio, y cuando el formato lo permite, cada persona construye algo con su propio caso antes de salir de la sala.

> ⚑ "conversación de directorio" is Chilean. Colombia says "junta directiva". Kept Chilean since inbound is Chile, but your Spanish is Colombian neutral everywhere else.

### `ways.items.2.num`

**EN:** 03

**ES:** 03

### `ways.items.2.label`

**EN:** Private mentoring

**ES:** Mentoría privada

### `ways.items.2.format`

**EN:** 1:1 · a few weeks · your real cases

**ES:** 1:1 · unas semanas · tus casos reales

### `ways.items.2.title`

**EN:** For the leader who wants to get genuinely good.

**ES:** Para el líder que quiere volverse realmente bueno.

### `ways.items.2.desc`

**EN:** A few weeks working your real cases, not a curriculum. We work them until the output stops sounding like AI and starts sounding like you. You leave with your own assistants built and the judgment to keep going without me.

**ES:** Unas semanas trabajando tus casos reales, no un currículo. Los trabajamos hasta que el resultado deja de sonar a IA y empieza a sonar a ti. Te vas con tus propios asistentes construidos y el criterio para seguir por tu cuenta.

### `ways.buildLabel`

**EN:** Building

**ES:** Construcción

### `ways.buildTitle`

**EN:** When mentoring turns into building

**ES:** Cuando la mentoría se vuelve construcción

### `ways.buildDesc`

**EN:** Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, I build it with you, or bring a team to implement. Scoped case by case, never sold off a menu.

**ES:** A veces lo correcto no es enseñar un proceso, es construirlo. Cuando un proyecto lo amerita, lo construyo contigo, o traigo un equipo para implementarlo. Se define caso por caso, nunca se vende de un menú.

### `ways.cta`

**EN:** Book a call

**ES:** Agendar una llamada

### `ways.ctaNote`

**EN:** 30 minutes · no pitch · we figure out if there's a fit

**ES:** 30 minutos · sin venta · vemos si hay encaje


## How I work (3 steps)

### `method.overline`

**EN:** How I work

**ES:** Cómo trabajo

### `method.h2a`

**EN:** Three steps. 

**ES:** Tres pasos. 

### `method.h2b`

**EN:** No dependence on me.

**ES:** Sin dependencia de mí.

### `method.lede`

**EN:** The skill stays in the room when I leave.

**ES:** La habilidad se queda en la sala cuando me voy.

### `method.steps.0.num`

**EN:** 01

**ES:** 01

### `method.steps.0.title`

**EN:** Map

**ES:** Mapear

### `method.steps.0.desc`

**EN:** We find the handful of places your team loses the most time. That's where AI earns its keep, and where we start.

**ES:** Encontramos el puñado de lugares donde tu equipo pierde más tiempo. Ahí es donde la IA se gana su lugar, y ahí empezamos.

### `method.steps.1.num`

**EN:** 02

**ES:** 02

### `method.steps.1.title`

**EN:** Build

**ES:** Construir

### `method.steps.1.desc`

**EN:** We build the first assistants together, live, in your vocabulary and inside your constraints. Real cases, not toy examples.

**ES:** Construimos los primeros asistentes juntos, en vivo, en tu vocabulario y dentro de tus restricciones. Casos reales, no ejemplos de juguete.

### `method.steps.2.num`

**EN:** 03

**ES:** 03

### `method.steps.2.title`

**EN:** Adopt

**ES:** Adoptar

### `method.steps.2.desc`

**EN:** Your people learn the logic, not just the result, so they keep building after I'm gone. We measure the time actually saved.

**ES:** Tu gente aprende la lógica, no solo el resultado, para seguir construyendo cuando yo ya no esté. Medimos el tiempo que de verdad se ahorra.


## Proof (stage + testimonials)

### `proof.overline`

**EN:** On stage

**ES:** En escena

### `proof.h3`

**EN:** Keynotes and hands-on workshops that a room keeps using.

**ES:** Keynotes y talleres prácticos que una sala sigue usando.

### `proof.body`

**EN:** Corporate events and leadership offsites, in person or remote, in English or Spanish.

**ES:** Eventos corporativos y encuentros directivos, presencial o remoto, en español o en inglés.

### `proof.stageAlt`

**EN:** Carlos Acuña speaking

**ES:** Carlos Acuña dando una charla

### `proof.stageLabel`

**EN:** [ speaking photo ]

**ES:** [ foto en escena ]

### `proof.quotes.0.text`

**EN:** Carlos built us an order system that just runs. What used to be manual every day now handles itself, and we get a clean summary without lifting a finger.

**ES:** Carlos nos construyó un sistema de pedidos que simplemente funciona. Lo que antes era manual todos los días ahora se resuelve solo, y recibimos un resumen limpio sin mover un dedo.

### `proof.quotes.0.attr`

**EN:** Javier Rocha · President, Onyx Armor

**ES:** Javier Rocha · Presidente, Onyx Armor

### `proof.quotes.1.text`

**EN:** We greenlit it on the first call, no hesitation. Carlos gave us an outbound engine we actually own, not a black box we'd depend on him for.

**ES:** Lo aprobamos en la primera llamada, sin dudarlo. Carlos nos dio un motor de prospección que es realmente nuestro, no una caja negra que dependa de él.

### `proof.quotes.1.attr`

**EN:** Daniel Madrid · Co-Founder & CGO, Dots Eco

**ES:** Daniel Madrid · Co-Fundador y CGO, Dots Eco

### `proof.quotes.2.text`

**EN:** For the first time the AI actually read my real drawings instead of inventing something off-scale. Carlos taught us to plug it into the tools we already use every day.

**ES:** Por primera vez la IA leyó mis planos reales en vez de inventar algo fuera de escala. Carlos nos enseñó a conectarla con las herramientas que ya usamos todos los días.

### `proof.quotes.2.attr`

**EN:** Stefano Bedín · BMAA architecture studio

**ES:** Stefano Bedín · Estudio de arquitectura BMAA


## Enterprise logo band

### `enterprise.overline` ⚑

**EN:** Twenty-two years inside enterprise

**ES:** Veintidós años dentro del mundo corporativo

> ⚑ "el mundo corporativo" is generic. English implies inside big enterprise IT, which is the actual credential.


## About

### `about.overline`

**EN:** About

**ES:** Sobre mí

### `about.quote` ⚑

**EN:** Twenty-two years inside enterprise. Now I mentor the leaders navigating what comes next.

**ES:** Veintidós años dentro del mundo corporativo. Ahora acompaño a los líderes que navegan lo que viene.

> ⚑ Same "mundo corporativo" issue as the logo band.

### `about.p1`

**EN:** I'm Carlos Acuña, founder of Fiba Labs. Two decades across IBM, Sun Microsystems, Oracle, Red Hat, Trellix, Vertiv and Remote.com, in sales, channel and customer success throughout Latin America. Dual MBA, engineering background, and a long habit of being in the room where the decision gets made.

**ES:** Soy Carlos Acuña, fundador de Fiba Labs. Dos décadas entre IBM, Sun Microsystems, Oracle, Red Hat, Trellix, Vertiv y Remote.com, en ventas, canales y éxito de clientes en toda Latinoamérica. Doble MBA, formación en ingeniería, y la costumbre de estar en la sala donde se toma la decisión.

### `about.p2`

**EN:** What that taught me: the problem is never the tool. It's whether people have the judgment and the habit to use it well. That's what I mentor. Not a framework adapted from somewhere else, but strategy and fluency built around how your team actually works.

**ES:** Lo que eso me enseñó: el problema nunca es la herramienta. Es si la gente tiene el criterio y el hábito para usarla bien. Eso es lo que enseño. No un marco adaptado de otra parte, sino estrategia y soltura construidas alrededor de cómo trabaja tu equipo de verdad.


## Final CTA

### `finalCta.h2`

**EN:** Where do we start?

**ES:** ¿Por dónde empezamos?

### `finalCta.body`

**EN:** Thirty minutes, no pitch. We work out whether this makes sense for you, your team, or your event, and what to do first.

**ES:** Treinta minutos, sin venta. Vemos si esto tiene sentido para ti, tu equipo o tu evento, y qué hacer primero.

### `finalCta.primary`

**EN:** Book a call

**ES:** Agendar una llamada

### `finalCta.secondary`

**EN:** Reach me on LinkedIn

**ES:** Escríbeme por LinkedIn


## Footer

### `footer.desc`

**EN:** AI strategy mentor for executives and their teams. Custom workshops, keynotes, and private mentoring, built on real work. Across the Americas, in person and remote.

**ES:** Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres a medida, charlas y mentoría privada, construidos sobre trabajo real. En toda América, presencial y remoto.

### `footer.exploreHead`

**EN:** Explore

**ES:** Explora

### `footer.connectHead`

**EN:** Connect

**ES:** Contacto

### `footer.book`

**EN:** Book a call

**ES:** Agendar una llamada

### `footer.base`

**EN:** Fiba Labs · Santiago, Chile

**ES:** Fiba Labs · Santiago, Chile

### `footer.privacy`

**EN:** Privacy

**ES:** Privacidad

### `footer.terms`

**EN:** Terms

**ES:** Términos

