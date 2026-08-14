// Bilingual copy for fibalabs.com.
//
// English is the source copy; Spanish is its translation. When copy changes,
// change `en` first, then bring `es` in line with it.
//
// Spanish register: Colombian neutral, "usted" throughout (VOICE.md 16.2, a
// sales page is general-audience text). Prefer "el equipo" over "su equipo"
// where it reads naturally. No voseo, no chilenismos, no em-dashes.

export const LANGS = ['en', 'es'];
export const DEFAULT_LANG = 'es';

export const copy = {
  en: {
    htmlLang: 'en',
    langToggleLabel: 'Cambiar a español',

    meta: {
      title: 'Carlos Acuña · AI Strategy Mentor | Workshops & Speaking | Fiba Labs',
      description:
        'AI Strategy Mentor for executives and their teams. Custom workshops, keynotes, and executive mentoring, built on your real work. 22 years inside enterprise: IBM, Oracle, Red Hat.',
    },

    nav: {
      workshops: 'Workshops',
      speaking: 'Speaking',
      mentoring: 'Mentoring',
      about: 'About',
      book: 'Book a call',
    },

    hero: {
      overline: 'AI Strategy Mentor · Workshops · Speaking',
      h1a: 'I make executives',
      h1b: '(and their teams)',
      h1c: 'AI-fluent.',
      sub: "Custom workshops, keynotes, and executive mentoring, all built on your team's real work. Twenty-two years inside enterprise. Your work, your vocabulary, your tools.",
      cta: 'Book a call',
      secondary: 'See how I work',
      portraitAlt: 'Carlos Acuña',
      portraitLabel: '[ environmental portrait ]',
    },

    shift: {
      overline: "Why another AI training won't fix it",
      h2a: 'Everyone bought the tools. Almost nobody ',
      h2b: 'changed how they work.',
      body: "Generic training shows what AI can do, and a month later nobody is using it. The gap was never the tool, it's judgment: people plan, design, connect. Agents collect, interpret, execute, display. Once that judgment is in place, people know what to ask for, what to expect back, and when they need to step in and correct it. We start from the work the team already does, and everyone leaves with something built for their own job.",
    },

    ways: {
      overline: 'How we work together',
      h2: 'Three ways in. One outcome.',
      intro:
        'Your people, fluent enough to keep building on their own. Nothing here is off the shelf, so we scope it on a call.',
      items: [
        {
          num: '01',
          label: 'Workshops',
          format: 'Half-day to multi-week · your team, your cases · in person or remote',
          title: "Built on your team's real work, not a curriculum.",
          desc: "Custom workshops for a team or a leadership group. We take a process you run every week and walk out with an assistant installed and handling it. Not a lecture about AI: the tool itself, working, in your company's vocabulary. The next time that process comes around, nobody starts from a blank page.",
        },
        {
          num: '02',
          label: 'Speaking',
          format: 'Keynotes · conference workshops · leadership offsites',
          title: 'A talk the room is still using a month later.',
          desc: "I give teams a way to think about AI that outlives the tool. The model changes every month; how you decide where AI fits does not. Keynotes and hands-on sessions, in person or remote, in English or Spanish. When the format allows, everyone builds something with their own case before leaving the room.",
        },
        {
          num: '03',
          label: 'Executive mentoring',
          format: '1:1 · a few weeks · your real cases',
          title: 'For the leader who wants to get genuinely good.',
          desc: "We work your cases until the output stops sounding like AI and starts sounding like you. You leave with your own assistants built and the judgment to keep building on your own. And when the next AI pitch lands on your desk, you'll know what to ask.",
        },
      ],
      buildLabel: 'Building',
      buildTitle: 'When mentoring turns into building',
      buildDesc:
        "Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, we build it together, or I bring a team to implement. What you get is a way of working, not a bot to babysit. Scoped case by case.",
      cta: 'Book a call',
      ctaNote: '30 minutes · you leave knowing where to start',
    },

    method: {
      overline: 'How I work',
      h2a: 'Three steps. ',
      h2b: 'Then your team keeps going.',
      lede: 'The skill stays in the room.',
      steps: [
        {
          num: '01',
          title: 'Map',
          desc: "We find the handful of places your team loses the most time. That's where AI earns its keep, and where we start.",
        },
        {
          num: '02',
          title: 'Build',
          desc: 'We build the first assistants together, live, and install them in the tools your team already uses. Real cases, in your vocabulary, inside your constraints.',
        },
        {
          num: '03',
          title: 'Adopt',
          desc: 'Your people learn the logic, not just the result.',
        },
      ],
    },

    proof: {
      overline: 'Proof',
      h3: 'Rooms that keep using it. Systems that keep running.',
      body: 'Keynotes and workshops for corporate events and leadership offsites, in English or Spanish. And when the work turns into building, it ships: these clients run what we built together.',
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
      body: "Thirty minutes, no pitch. Tell me how you work, and you'll get my honest read: where AI would pay off for you, your team, or your event, and what to do first. If what you need isn't something I do, I'll say so.",
      primary: 'Book a call',
      secondary: 'Reach me on LinkedIn',
    },

    footer: {
      desc: 'AI Strategy Mentor for executives and their teams. Custom workshops, keynotes, and executive mentoring. Across the Americas, in person and remote.',
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
      title: 'Carlos Acuña · Mentor de Estrategia de IA | Talleres y Charlas | Fiba Labs',
      description:
        'Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres a la medida, charlas y mentoría ejecutiva, construidos sobre su trabajo real. 22 años en el mundo corporativo: IBM, Oracle, Red Hat.',
    },

    nav: {
      workshops: 'Talleres',
      speaking: 'Charlas',
      mentoring: 'Mentoría',
      about: 'Sobre mí',
      book: 'Agendar',
    },

    hero: {
      overline: 'Mentor de Estrategia de IA · Talleres · Charlas',
      h1a: 'Ayudo a ejecutivos',
      h1b: '(y sus equipos)',
      h1c: 'a manejar la IA con fluidez.',
      sub: 'Talleres a la medida, charlas y mentoría ejecutiva, todo construido sobre el trabajo real del equipo. Veintidós años en el mundo corporativo. Su trabajo, su vocabulario, sus herramientas.',
      cta: 'Agendar',
      secondary: 'Ver cómo trabajo',
      portraitAlt: 'Carlos Acuña',
      portraitLabel: '[ retrato en contexto ]',
    },

    shift: {
      overline: 'Por qué otra capacitación de IA no lo va a resolver',
      h2a: 'Todos compraron las herramientas. Casi nadie ',
      h2b: 'cambió su forma de trabajar.',
      body: 'Una capacitación genérica muestra lo que se puede hacer con IA, pero un mes después nadie la usa. La brecha nunca fue la herramienta, es el criterio: la persona planea, diseña y conecta; los agentes recolectan, interpretan, ejecutan y presentan. Cuando ese criterio está, se sabe qué pedirle, qué esperar de vuelta y en qué momento es necesario corregir. Partimos del trabajo que el equipo ya hace, y cada persona sale con algo construido para su trabajo.',
    },

    ways: {
      overline: 'Cómo podemos trabajar juntos',
      h2: 'Tres formas diferentes. Un mismo resultado.',
      intro:
        'Un equipo con la fluidez suficiente para seguir construyendo por su cuenta. No generamos soluciones estándar: definimos el objetivo y hacemos un plan a la medida.',
      items: [
        {
          num: '01',
          label: 'Talleres',
          format:
            'De media jornada a varias semanas · su equipo, sus casos · presencial o remoto',
          title: 'Construidos sobre el trabajo real del equipo, no sobre un curriculum.',
          desc: 'Talleres a la medida para un equipo o un grupo directivo. Tomamos un proceso que su equipo repite cada semana y salimos con un asistente instalado y haciéndose cargo. No es una cátedra sobre IA: es la herramienta misma, funcionando, en el vocabulario de su empresa. La próxima vez que toque ese proceso, nadie empieza desde una página en blanco.',
        },
        {
          num: '02',
          label: 'Charlas',
          format: 'Keynotes · talleres en conferencias · jornadas de liderazgo',
          title: 'Una charla que la sala sigue usando un mes después.',
          desc: 'Le doy al equipo una forma de pensar la IA que sobrevive a la herramienta. El modelo cambia cada mes; cómo deciden dónde encaja la IA, no. Keynotes y sesiones prácticas, presenciales o remotas, en español o en inglés. Cuando el formato lo permite, cada persona construye algo con su propio caso antes de salir de la sala.',
        },
        {
          num: '03',
          label: 'Mentoría ejecutiva',
          format: '1:1 · unas semanas · sus casos reales',
          title: 'Para el líder que quiere volverse realmente bueno en esto.',
          desc: 'Trabajamos sus casos hasta que el resultado deja de sonar a IA y empieza a sonar a usted. Sale con sus propios asistentes construidos y con el criterio para seguir construyendo por su cuenta. Y cuando la próxima propuesta de IA llegue a su escritorio, va a saber qué preguntar.',
        },
      ],
      buildLabel: 'Construcción',
      buildTitle: 'Cuando la mentoría se convierte en construcción',
      buildDesc:
        'A veces lo correcto no es enseñar un proceso sino construirlo. Cuando un proyecto lo amerita, lo construimos juntos, o traigo un equipo para implementarlo. Lo que recibe es una forma de trabajar, no un bot que hay que andar cuidando. Se define caso por caso.',
      cta: 'Agendar una llamada',
      ctaNote: '30 minutos · sale sabiendo por dónde empezar',
    },

    method: {
      overline: 'Cómo trabajo',
      h2a: 'Tres pasos. ',
      h2b: 'Después el equipo sigue solo.',
      lede: 'Las habilidades quedan en las personas que asisten.',
      steps: [
        {
          num: '01',
          title: 'Mapear',
          desc: 'Encontramos los pocos puntos donde su equipo pierde más tiempo. Ahí es donde la IA se gana su lugar, y por ahí empezamos.',
        },
        {
          num: '02',
          title: 'Construir',
          desc: 'Construimos los primeros asistentes juntos, en vivo, y los instalamos en las herramientas que su equipo ya usa. Casos reales, en su vocabulario, dentro de sus restricciones.',
        },
        {
          num: '03',
          title: 'Adoptar',
          desc: 'Su gente aprende la lógica, no solo el resultado.',
        },
      ],
    },

    proof: {
      overline: 'Resultados',
      h3: 'Equipos que siguen usando el proceso. Sistemas que siguen funcionando.',
      body: 'Keynotes y talleres para eventos corporativos y jornadas de liderazgo, en español o en inglés. Y cuando el trabajo se convierte en construcción, se entrega: estos clientes operan lo que construimos juntos.',
      stageAlt: 'Carlos Acuña dando una charla',
      stageLabel: '[ foto en escena ]',
      quotes: [
        {
          text: 'Carlos construyó un sistema de pedidos que simplemente funciona. Lo que antes era manual todos los días ahora se resuelve solo, y recibimos un resumen limpio sin mover un dedo.',
          attr: 'Javier Rocha · Presidente, Onyx Armor',
        },
        {
          text: 'Lo aprobamos en la primera llamada, sin dudarlo. Carlos nos dio un motor de prospección que es realmente nuestro, no una caja negra que nos dejara dependiendo de él.',
          attr: 'Daniel Madrid · Co-Fundador y CGO, Dots Eco',
        },
        {
          text: 'Por primera vez la IA leyó mis planos reales en vez de inventar algo fuera de escala. Carlos nos enseñó a conectarla con las herramientas que ya usamos todos los días.',
          attr: 'Stefano Bedín · Estudio de arquitectura BMAA',
        },
      ],
    },

    enterprise: {
      overline: 'Veintidós años en el mundo corporativo',
    },

    about: {
      overline: 'Sobre mí',
      quote:
        'Veintidós años en el mundo corporativo. Hoy soy mentor de los líderes que enfrentan lo que viene.',
      p1: 'Soy Carlos Acuña, fundador de Fiba Labs. Dos décadas entre IBM, Sun Microsystems, Oracle, Red Hat, Trellix, Vertiv y Remote.com, en ventas, canales y customer success en toda Latinoamérica. Doble titulación de Máster en Administración de Empresas, formación en ingeniería, y una larga costumbre de estar en la sala donde se toma la decisión.',
      p2: 'Lo que eso me enseñó: el problema nunca es la herramienta. Es si la gente tiene el criterio y el hábito para usarla bien. Eso es lo que trabajo como mentor. No un marco adaptado de otra parte, sino estrategia y fluidez construidas alrededor de cómo trabaja su equipo de verdad.',
    },

    finalCta: {
      h2: '¿Por dónde empezamos?',
      body: 'Treinta minutos, sin discurso de ventas. Revisamos cómo trabajan y qué quieren lograr, y definimos dónde la IA tendría el mayor impacto, para usted, su empresa y su equipo. Si no es el momento para trabajar juntos, se lo haré saber.',
      primary: 'Agendar una llamada',
      secondary: 'Escríbame por LinkedIn',
    },

    footer: {
      desc: 'Mentor de estrategia de IA para ejecutivos y sus equipos. Talleres a la medida, charlas y mentoría ejecutiva. En toda América, presencial y remoto.',
      exploreHead: 'Explorar',
      connectHead: 'Contacto',
      book: 'Agendar una llamada',
      base: 'Fiba Labs · Santiago, Chile',
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  },
};
