// Bilingual copy for fibalabs.com.
//
// English is the source copy; Spanish is its translation. When copy changes,
// change `en` first, then bring `es` in line with it.
//
// Spanish register: Colombian neutral, "tú" throughout. No voseo, no
// chilenismos, no em-dashes.

export const LANGS = ['en', 'es'];
export const DEFAULT_LANG = 'es';

export const copy = {
  en: {
    htmlLang: 'en',
    langToggleLabel: 'Cambiar a español',

    meta: {
      title: 'Carlos Acuña · AI Strategy Mentor | Workshops & Speaking | Fiba Labs',
      description:
        'AI strategy mentor for executives and their teams. Custom mentoring workshops, keynotes, and private mentoring built on your real work. 22 years inside enterprise: IBM, Oracle, Red Hat.',
    },

    nav: {
      workshops: 'Workshops',
      speaking: 'Speaking',
      mentoring: 'Mentoring',
      about: 'About',
      book: 'Book',
    },

    hero: {
      overline: 'AI strategy mentor · Workshops · Speaking',
      h1a: 'I make executives',
      h1b: '(and their teams)',
      h1c: 'AI-fluent.',
      sub: "Custom workshops, keynotes, and private mentoring, all built on your team's real work. Twenty-two years inside enterprise. No hype, no generic curriculum.",
      cta: 'Book a call',
      secondary: 'See how I work',
      portraitAlt: 'Carlos Acuña',
      portraitLabel: '[ environmental portrait ]',
    },

    shift: {
      overline: "Why another AI training won't fix it",
      h2a: 'Everyone bought the tools. Almost nobody ',
      h2b: 'changed how they work.',
      body: 'Generic training teaches prompts and demos, and a month later nobody uses any of it. The gap was never the tool. It\'s judgment: knowing what to hand to AI, what to keep, and how to tell good output from plausible output. I start from the work your team already does, and everyone leaves with something they built.',
    },

    ways: {
      overline: 'How we work together',
      h2: 'Three ways in. One outcome.',
      intro:
        'Your people, fluent enough to keep building without me. Everything is built around your real work, so we scope it on a call.',
      items: [
        {
          num: '01',
          label: 'Workshops',
          format: 'Half-day to multi-week · your team, your cases · in person or remote',
          title: "Built on your team's real work, not a curriculum.",
          desc: "Custom mentoring workshops for a team or a leadership group. We take a process you run every week and walk out with an assistant or a workflow that handles it. Not slides about AI: the actual thing, working, in your company's vocabulary. Formats range from a half-day intensive to a multi-week program.",
        },
        {
          num: '02',
          label: 'Speaking',
          format: 'Keynotes · conference workshops · leadership offsites',
          title: 'A talk the room is still using a month later.',
          desc: "Keynotes and hands-on conference sessions, in person or remote, in English or Spanish. I don't do tool demos or hype tours. I give leaders a way to think about AI they can defend in their next board conversation, and when the format allows, everyone builds something with their own case before leaving the room.",
        },
        {
          num: '03',
          label: 'Private mentoring',
          format: '1:1 · a few weeks · your real cases',
          title: 'For the leader who wants to get genuinely good.',
          desc: 'A few weeks working your real cases, not a curriculum. We work them until the output stops sounding like AI and starts sounding like you. You leave with your own assistants built and the judgment to keep going without me.',
        },
      ],
      buildLabel: 'Building',
      buildTitle: 'When mentoring turns into building',
      buildDesc:
        "Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, I build it with you, or bring a team to implement. Scoped case by case, never sold off a menu.",
      cta: 'Book a call',
      ctaNote: "30 minutes · no pitch · we figure out if there's a fit",
    },

    method: {
      overline: 'How I work',
      h2a: 'Three steps. ',
      h2b: 'No dependence on me.',
      lede: 'The skill stays in the room when I leave.',
      steps: [
        {
          num: '01',
          title: 'Map',
          desc: "We find the handful of places your team loses the most time. That's where AI earns its keep, and where we start.",
        },
        {
          num: '02',
          title: 'Build',
          desc: 'We build the first assistants together, live, in your vocabulary and inside your constraints. Real cases, not toy examples.',
        },
        {
          num: '03',
          title: 'Adopt',
          desc: "Your people learn the logic, not just the result, so they keep building after I'm gone. We measure the time actually saved.",
        },
      ],
    },

    proof: {
      overline: 'On stage',
      h3: 'Keynotes and hands-on workshops that a room keeps using.',
      body: 'Corporate events and leadership offsites, in person or remote, in English or Spanish.',
      stageAlt: 'Carlos Acuña speaking',
      stageLabel: '[ speaking photo ]',
      quotes: [
        {
          text: 'Carlos built us an order system that just runs. What used to be manual every day now handles itself, and we get a clean summary without lifting a finger.',
          attr: 'Javier Rocha · President, Onyx Armor',
        },
        {
          text: "We greenlit it on the first call, no hesitation. Carlos gave us an outbound engine we actually own, not a black box we'd depend on him for.",
          attr: 'Daniel Madrid · Co-Founder & CGO, Dots Eco',
        },
        {
          text: 'For the first time the AI actually read my real drawings instead of inventing something off-scale. Carlos taught us to plug it into the tools we already use every day.',
          attr: 'Stefano Bedín · BMAA architecture studio',
        },
      ],
    },

    enterprise: {
      overline: 'Twenty-two years inside enterprise',
    },

    about: {
      overline: 'About',
      quote:
        'Twenty-two years inside enterprise. Now I mentor the leaders navigating what comes next.',
      p1: "I'm Carlos Acuña, founder of Fiba Labs. Two decades across IBM, Sun Microsystems, Oracle, Red Hat, Trellix, Vertiv and Remote.com, in sales, channel and customer success throughout Latin America. Dual MBA, engineering background, and a long habit of being in the room where the decision gets made.",
      p2: "What that taught me: the problem is never the tool. It's whether people have the judgment and the habit to use it well. That's what I mentor. Not a framework adapted from somewhere else, but strategy and fluency built around how your team actually works.",
    },

    finalCta: {
      h2: 'Where do we start?',
      body: 'Thirty minutes, no pitch. We work out whether this makes sense for you, your team, or your event, and what to do first.',
      primary: 'Book a call',
      secondary: 'Reach me on LinkedIn',
    },

    footer: {
      desc: 'AI strategy mentor for executives and their teams. Custom workshops, keynotes, and private mentoring, built on real work. Across the Americas, in person and remote.',
      exploreHead: 'Explore',
      connectHead: 'Connect',
      book: 'Book a call',
      base: 'Fiba Labs · Santiago, Chile',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },

  es: {
    htmlLang: 'es',
    langToggleLabel: 'Switch to English',

    meta: {
      title: 'Carlos Acuña · Mentor de estrategia de IA | Talleres y charlas | Fiba Labs',
      description:
        'Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres de mentoría a medida, keynotes y mentoría privada construidos sobre tu trabajo real. Veintidós años dentro del mundo corporativo: IBM, Oracle, Red Hat.',
    },

    nav: {
      workshops: 'Talleres',
      speaking: 'Charlas',
      mentoring: 'Mentoría',
      about: 'Sobre mí',
      book: 'Agendar',
    },

    hero: {
      overline: 'Mentor de estrategia de IA · Talleres · Charlas',
      h1a: 'Hago que los ejecutivos',
      h1b: '(y sus equipos)',
      h1c: 'dominen la IA.',
      sub: 'Talleres a medida, charlas y mentoría privada, todo construido sobre el trabajo real de tu equipo. Veintidós años dentro del mundo corporativo. Sin humo, sin currículo genérico.',
      cta: 'Agendar una llamada',
      secondary: 'Mira cómo trabajo',
      portraitAlt: 'Carlos Acuña',
      portraitLabel: '[ retrato en contexto ]',
    },

    shift: {
      overline: 'Por qué otra capacitación de IA no lo va a resolver',
      h2a: 'Todos compraron las herramientas. Casi nadie ',
      h2b: 'cambió su forma de trabajar.',
      body: 'La capacitación genérica enseña prompts y demos, y un mes después nadie usa nada de eso. El problema nunca fue la herramienta. Es el criterio: saber qué delegar a la IA, qué conservar, y cómo distinguir un buen resultado de uno que solo suena convincente. Yo parto del trabajo que tu equipo ya hace, y cada persona se va con algo que construyó.',
    },

    ways: {
      overline: 'Cómo trabajamos juntos',
      h2: 'Tres formas de entrar. Un solo resultado.',
      intro:
        'Tu gente, con la soltura para seguir construyendo sin mí. Todo se arma sobre tu trabajo real, así que lo definimos en una llamada.',
      items: [
        {
          num: '01',
          label: 'Talleres',
          format:
            'Desde media jornada hasta varias semanas · tu equipo, tus casos · presencial o remoto',
          title: 'Construido sobre el trabajo real de tu equipo, no sobre un currículo.',
          desc: 'Talleres de mentoría a medida para un equipo o un grupo directivo. Tomamos un proceso que corres cada semana y salimos con un asistente o un flujo que lo resuelve. Nada de diapositivas sobre IA: la cosa funcionando de verdad, en el lenguaje de tu empresa. Los formatos van desde un intensivo de media jornada hasta un programa de varias semanas.',
        },
        {
          num: '02',
          label: 'Charlas',
          format: 'Keynotes · talleres en conferencias · encuentros directivos',
          title: 'Una charla que la sala sigue usando un mes después.',
          desc: 'Keynotes y sesiones prácticas en conferencias, presencial o remoto, en español o en inglés. No hago demos de herramientas ni giras de humo. Le doy a los líderes una forma de pensar la IA que puedan defender en su próxima conversación de directorio, y cuando el formato lo permite, cada persona construye algo con su propio caso antes de salir de la sala.',
        },
        {
          num: '03',
          label: 'Mentoría privada',
          format: '1:1 · unas semanas · tus casos reales',
          title: 'Para el líder que quiere volverse realmente bueno.',
          desc: 'Unas semanas trabajando tus casos reales, no un currículo. Los trabajamos hasta que el resultado deja de sonar a IA y empieza a sonar a ti. Te vas con tus propios asistentes construidos y el criterio para seguir por tu cuenta.',
        },
      ],
      buildLabel: 'Construcción',
      buildTitle: 'Cuando la mentoría se vuelve construcción',
      buildDesc:
        'A veces lo correcto no es enseñar un proceso, es construirlo. Cuando un proyecto lo amerita, lo construyo contigo, o traigo un equipo para implementarlo. Se define caso por caso, nunca se vende de un menú.',
      cta: 'Agendar una llamada',
      ctaNote: '30 minutos · sin pitch · vemos si hay encaje',
    },

    method: {
      overline: 'Cómo trabajo',
      h2a: 'Tres pasos. ',
      h2b: 'Sin dependencia de mí.',
      lede: 'La habilidad se queda en la sala cuando me voy.',
      steps: [
        {
          num: '01',
          title: 'Mapear',
          desc: 'Encontramos el puñado de lugares donde tu equipo pierde más tiempo. Ahí es donde la IA se gana su lugar, y ahí empezamos.',
        },
        {
          num: '02',
          title: 'Construir',
          desc: 'Construimos los primeros asistentes juntos, en vivo, en tu vocabulario y dentro de tus restricciones. Casos reales, no ejemplos de juguete.',
        },
        {
          num: '03',
          title: 'Adoptar',
          desc: 'Tu gente aprende la lógica, no solo el resultado, para seguir construyendo cuando yo ya no esté. Medimos el tiempo que de verdad se ahorra.',
        },
      ],
    },

    proof: {
      overline: 'En escena',
      h3: 'Keynotes y talleres prácticos que una sala sigue usando.',
      body: 'Eventos corporativos y encuentros directivos, presencial o remoto, en español o en inglés.',
      stageAlt: 'Carlos Acuña dando una charla',
      stageLabel: '[ foto en escena ]',
      quotes: [
        {
          text: 'Carlos nos construyó un sistema de pedidos que simplemente funciona. Lo que antes era manual todos los días ahora se resuelve solo, y recibimos un resumen limpio sin mover un dedo.',
          attr: 'Javier Rocha · Presidente, Onyx Armor',
        },
        {
          text: 'Lo aprobamos en la primera llamada, sin dudarlo. Carlos nos dio un motor de prospección que es realmente nuestro, no una caja negra que dependa de él.',
          attr: 'Daniel Madrid · Co-Fundador y CGO, Dots Eco',
        },
        {
          text: 'Por primera vez la IA leyó mis planos reales en vez de inventar algo fuera de escala. Carlos nos enseñó a conectarla con las herramientas que ya usamos todos los días.',
          attr: 'Stefano Bedín · Estudio de arquitectura BMAA',
        },
      ],
    },

    enterprise: {
      overline: 'Veintidós años dentro del mundo corporativo',
    },

    about: {
      overline: 'Sobre mí',
      quote:
        'Veintidós años dentro del mundo corporativo. Ahora acompaño a los líderes que navegan lo que viene.',
      p1: 'Soy Carlos Acuña, fundador de Fiba Labs. Dos décadas entre IBM, Sun Microsystems, Oracle, Red Hat, Trellix, Vertiv y Remote.com, en ventas, canales y éxito de clientes en toda Latinoamérica. Doble MBA, formación en ingeniería, y la costumbre de estar en la sala donde se toma la decisión.',
      p2: 'Lo que eso me enseñó: el problema nunca es la herramienta. Es si la gente tiene el criterio y el hábito para usarla bien. Eso es lo que enseño. No un marco adaptado de otra parte, sino estrategia y soltura construidas alrededor de cómo trabaja tu equipo de verdad.',
    },

    finalCta: {
      h2: '¿Por dónde empezamos?',
      body: 'Treinta minutos, sin pitch. Vemos si esto tiene sentido para ti, tu equipo o tu evento, y qué hacer primero.',
      primary: 'Agendar una llamada',
      secondary: 'Escríbeme por LinkedIn',
    },

    footer: {
      desc: 'Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres a medida, charlas y mentoría privada, construidos sobre trabajo real. En toda América, presencial y remoto.',
      exploreHead: 'Explora',
      connectHead: 'Contacto',
      book: 'Agendar una llamada',
      base: 'Fiba Labs · Santiago, Chile',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  },
};
