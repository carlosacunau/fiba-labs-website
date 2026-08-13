import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { LanguageProvider, useLang } from './LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Single source of truth for the booking link.
const BOOK_LINK = 'https://cal.com/carlos-acuna/30min';
const LINKEDIN = 'https://www.linkedin.com/in/carlosacunau/';
const EMAIL = 'carlos@fibalabs.com';

// Photo slot: shows a labeled placeholder until the real image loads; hides
// the label on success, hides the (broken) img on error so the label stays.
const Photo = ({ src, alt, label, className = '', imgClassName = '' }) => {
  const [state, setState] = React.useState('loading'); // loading | ok | error
  return (
    <div className={`relative overflow-hidden bg-surface border border-line ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${state === 'ok' ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
        onLoad={() => setState('ok')}
        onError={() => setState('error')}
      />
      {state !== 'ok' && (
        <div className="absolute inset-0 flex items-center justify-center text-muted/50 font-mono text-sm pointer-events-none px-4 text-center">
          {label}
        </div>
      )}
    </div>
  );
};

// Small hook: fade/rise reveal on scroll.
// Uses fromTo so the end-state is explicit (opacity:1) and content can never get
// stuck invisible if a trigger mis-fires. immediateRender:false keeps content
// visible until its trigger actually runs.
const useReveal = (selector = '.reveal') => {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });
      ScrollTrigger.refresh();
    }, ref);
    return () => ctx.revert();
  }, [selector]);
  return ref;
};

// --- NAVBAR ---
// EN/ES switcher. Shows the language you'd switch TO, so the label is always
// an action rather than a status.
const LangToggle = ({ className = '' }) => {
  const { lang, toggleLang, t } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t.langToggleLabel}
      className={`font-mono text-xs tracking-wide text-muted hover:text-text transition-colors border border-line rounded-full px-3 py-1.5 ${className}`}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

const Navbar = () => {
  const { t } = useLang();
  const navRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -40',
        onUpdate: (self) => {
          gsap.to(navRef.current, {
            backgroundColor: self.progress > 0 ? 'rgba(250,250,245,0.85)' : 'rgba(250,250,245,0)',
            borderColor: self.progress > 0 ? 'rgba(42,40,37,0.08)' : 'rgba(42,40,37,0)',
            backdropFilter: self.progress > 0 ? 'blur(16px)' : 'blur(0px)',
            duration: 0.3,
          });
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 border-b border-transparent px-6 md:px-12 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src="/logo.png" alt="Fiba Labs" className="h-12 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-10 text-sm text-muted">
          <a href="#work" className="hover:text-text transition-colors">{t.nav.workshops}</a>
          <a href="#proof" className="hover:text-text transition-colors">{t.nav.speaking}</a>
          <a href="#work" className="hover:text-text transition-colors">{t.nav.mentoring}</a>
          <a href="#about" className="hover:text-text transition-colors">{t.nav.about}</a>
        </div>
        <div className="flex items-center gap-3">
          <LangToggle />
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-5 py-2.5 rounded-full bg-accent text-background text-sm">
            <span className="relative z-10 flex items-center gap-1.5">{t.nav.book} <ArrowUpRight className="w-4 h-4" /></span>
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- HERO ---
const Hero = () => {
  const { t } = useLang();
  const container = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', { y: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.15 });
      gsap.from('.hero-photo', { opacity: 0, scale: 1.04, duration: 1.4, ease: 'power3.out', delay: 0.3 });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={container} className="relative px-6 md:px-12 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left — type */}
        <div className="lg:col-span-7 space-y-8">
          <div className="hero-elem overline flex items-center gap-3">
            <span className="w-8 h-px bg-accent"></span>
            {t.hero.overline}
          </div>
          <h1 className="display-serif text-text text-5xl md:text-7xl lg:text-[5.5rem]">
            <span className="hero-elem block">{t.hero.h1a}</span>
            <span className="hero-elem block text-muted font-sans font-normal text-2xl md:text-3xl tracking-normal mt-3 mb-1">{t.hero.h1b}</span>
            <span className="hero-elem block italic text-accent">{t.hero.h1c}</span>
          </h1>
          <p className="hero-elem text-lg text-muted max-w-md leading-relaxed font-sans">
            {t.hero.sub}
          </p>
          <div className="hero-elem flex flex-wrap items-center gap-6 pt-2">
            <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-8 py-4 rounded-full bg-accent text-background text-base">
              <span className="relative z-10 font-medium">{t.hero.cta}</span>
            </a>
            <a href="#work" className="text-sm text-muted hover:text-text transition-colors flex items-center gap-1">
              {t.hero.secondary} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5">
          <Photo
            src="/portrait.jpg"
            alt={t.hero.portraitAlt}
            label={t.hero.portraitLabel}
            className="hero-photo rounded-2xl aspect-[4/5]"
            imgClassName="grayscale"
          />
        </div>
      </div>
    </section>
  );
};

// --- THE SHIFT ---
const Shift = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} id="shift" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="reveal overline">{t.shift.overline}</p>
        <h2 className="reveal display-serif text-3xl md:text-5xl text-text leading-tight">
          {t.shift.h2a}<span className="italic text-accent">{t.shift.h2b}</span>
        </h2>
        <p className="reveal text-lg text-muted max-w-2xl mx-auto leading-relaxed font-sans">
          {t.shift.body}
        </p>
      </div>
    </section>
  );
};

// --- WAYS TO WORK (cascading numbered list) ---
const Ways = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-16 md:mb-20">
          <p className="overline mb-5">{t.ways.overline}</p>
          <h2 className="display-serif text-3xl md:text-5xl text-text">{t.ways.h2}</h2>
          <p className="text-muted mt-5 max-w-xl font-sans leading-relaxed">{t.ways.intro}</p>
        </div>

        <div>
          {t.ways.items.map((w) => (
            <div key={w.num} className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="display-serif text-4xl text-accent">{w.num}</span>
                <span className="overline pt-1">{w.label}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-drama text-2xl md:text-3xl text-text mb-2 leading-snug">{w.title}</h3>
                <p className="font-mono text-xs text-accent/80 mb-3 tracking-wide">{w.format}</p>
                <p className="text-muted leading-relaxed font-sans max-w-2xl">{w.desc}</p>
              </div>
            </div>
          ))}
          {/* Silent build offer */}
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
            <div className="md:col-span-3 flex items-baseline gap-4">
              <span className="display-serif text-4xl text-muted/50">+</span>
              <span className="overline pt-1">{t.ways.buildLabel}</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-drama text-xl md:text-2xl text-text mb-3 leading-snug">{t.ways.buildTitle}</h3>
              <p className="text-muted leading-relaxed font-sans max-w-2xl">
                {t.ways.buildDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 text-center">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-accent text-background text-base">
            <span className="relative z-10 font-medium flex items-center gap-2">{t.ways.cta} <ArrowUpRight className="w-5 h-5" /></span>
          </a>
          <p className="text-muted/70 text-sm mt-4 font-mono">{t.ways.ctaNote}</p>
        </div>
      </div>
    </section>
  );
};

// --- HOW I WORK (typographic timeline) ---
const Method = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} id="method" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16 md:mb-24">
          <p className="overline mb-5">{t.method.overline}</p>
          <h2 className="display-serif text-4xl md:text-6xl text-text">{t.method.h2a}<span className="italic text-accent">{t.method.h2b}</span></h2>
          <p className="text-muted mt-5 font-sans">{t.method.lede}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {t.method.steps.map((s) => (
            <div key={s.num} className="reveal bg-background p-8 md:p-10">
              <div className="display-serif text-5xl text-accent mb-6">{s.num}</div>
              <h3 className="font-drama text-2xl text-text mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed font-sans text-[15px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PROOF (stage editorial split + testimonials + logos) ---
const Proof = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} id="proof" className="py-24 md:py-32">
      {/* Stage editorial split: caption left, real speaking photo right */}
      <div className="reveal max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-background to-surface overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-4 p-8 md:p-12">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="overline">{t.proof.overline}</p>
            <h3 className="display-serif text-2xl md:text-4xl text-text leading-tight">{t.proof.h3}</h3>
            <p className="text-muted font-sans leading-relaxed max-w-md mx-auto md:mx-0">{t.proof.body}</p>
          </div>
          <div className="w-2/3 max-w-[240px] md:w-auto md:h-[340px] shrink-0">
            <Photo
              src="/stage.jpg"
              alt={t.proof.stageAlt}
              label={t.proof.stageLabel}
              className="rounded-2xl aspect-[3/5] md:h-full md:aspect-auto shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="reveal max-w-6xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.proof.quotes.map((q) => (
          <figure key={q.attr} className="border border-line rounded-2xl p-7 bg-surface flex flex-col justify-between">
            <blockquote className="text-text font-sans leading-relaxed text-[15px]">"{q.text}"</blockquote>
            <figcaption className="overline mt-6 not-italic">{q.attr}</figcaption>
          </figure>
        ))}
      </div>

    </section>
  );
};

// --- ENTERPRISE (full-color logo row, light band) ---
const enterpriseLogos = [
  { src: '/logos/ibm.png', alt: 'IBM', h: 'h-8 md:h-9' },
  { src: '/logos/oracle.png', alt: 'Oracle', h: 'h-4 md:h-5' },
  { src: '/logos/sun.png', alt: 'Sun Microsystems', h: 'h-9 md:h-11' },
  { src: '/logos/remote.png', alt: 'Remote', h: 'h-5 md:h-6' },
  { src: '/logos/trellix.png', alt: 'Trellix', h: 'h-5 md:h-6' },
  { src: '/logos/vertiv.png', alt: 'Vertiv', h: 'h-5 md:h-6' },
];
const Enterprise = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} className="px-6 md:px-12 pt-4 md:pt-6 pb-16 md:pb-24 bg-surface">
      <div className="reveal max-w-5xl mx-auto text-center">
        <p className="overline mb-10 text-muted">{t.enterprise.overline}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-11 gap-y-8">
          {enterpriseLogos.map((l) => (
            <img key={l.alt} src={l.src} alt={l.alt} className={`${l.h} w-auto object-contain opacity-80 hover:opacity-100 transition-opacity`} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ABOUT (editorial pull-quote + bio, no portrait) ---
const About = () => {
  const { t } = useLang();
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="px-6 md:px-12 pt-24 md:pt-32 pb-12 md:pb-16 bg-surface">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="reveal overline">{t.about.overline}</p>
        <blockquote className="reveal display-serif text-3xl md:text-5xl text-text border-l-2 border-accent pl-6 md:pl-8 leading-tight">
          {t.about.quote}
        </blockquote>
        <div className="reveal space-y-6 max-w-2xl">
          <p className="text-muted leading-relaxed font-sans md:text-lg">
            {t.about.p1}
          </p>
          <p className="text-muted leading-relaxed font-sans md:text-lg">
            {t.about.p2}
          </p>
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA (plum interruption) ---
const FinalCTA = () => {
  const { t } = useLang();
  return (
    <section className="px-6 md:px-12 py-28 md:py-36 bg-accent text-background text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="display-serif text-4xl md:text-6xl">{t.finalCta.h2}</h2>
        <p className="text-background/80 text-lg font-sans leading-relaxed">
          {t.finalCta.body}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-background text-text text-base">
            <span className="relative z-10 font-semibold">{t.finalCta.primary}</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full border border-background/30 text-background text-base hover:bg-background/10">
            <span className="relative z-10 font-medium">{t.finalCta.secondary}</span>
          </a>
        </div>
        <a href={`mailto:${EMAIL}`} className="inline-block text-background/70 hover:text-background transition-colors font-mono text-sm pt-2">{EMAIL}</a>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="px-6 md:px-12 pt-20 pb-10 bg-background border-t border-line">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="Fiba Labs" className="h-12 w-auto mb-6" />
          <p className="text-muted max-w-sm text-sm leading-relaxed font-sans">
            {t.footer.desc}
          </p>
        </div>
        <div>
          <h4 className="overline mb-6">{t.footer.exploreHead}</h4>
          <ul className="space-y-3 text-sm text-muted font-sans">
            <li><a href="#work" className="hover:text-text transition-colors">{t.nav.workshops}</a></li>
            <li><a href="#proof" className="hover:text-text transition-colors">{t.nav.speaking}</a></li>
            <li><a href="#work" className="hover:text-text transition-colors">{t.nav.mentoring}</a></li>
            <li><a href="#about" className="hover:text-text transition-colors">{t.nav.about}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="overline mb-6">{t.footer.connectHead}</h4>
          <ul className="space-y-3 text-sm text-muted font-sans">
            <li><a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">{t.footer.book}</a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">LinkedIn</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-text transition-colors">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center text-xs text-muted font-sans gap-4">
        <p>&copy; {new Date().getFullYear()} {t.footer.base}</p>
        <div className="flex items-center gap-6">
          <a href="/privacy.html" className="hover:text-text transition-colors">{t.footer.privacy}</a>
          <a href="/terms.html" className="hover:text-text transition-colors">{t.footer.terms}</a>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-accent/20">
        <Navbar />
        <Hero />
        <Shift />
        <Ways />
        <Method />
        <Proof />
        <About />
        <Enterprise />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
