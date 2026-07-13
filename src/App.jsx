import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

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
const Navbar = () => {
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
          <a href="#work" className="hover:text-text transition-colors">Workshops</a>
          <a href="#proof" className="hover:text-text transition-colors">Speaking</a>
          <a href="#work" className="hover:text-text transition-colors">Mentoring</a>
          <a href="#about" className="hover:text-text transition-colors">About</a>
        </div>
        <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-5 py-2.5 rounded-full bg-accent text-background text-sm">
          <span className="relative z-10 flex items-center gap-1.5">Book <ArrowUpRight className="w-4 h-4" /></span>
        </a>
      </div>
    </nav>
  );
};

// --- HERO ---
const Hero = () => {
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
            AI strategy mentor · Workshops · Speaking
          </div>
          <h1 className="display-serif text-text text-5xl md:text-7xl lg:text-[5.5rem]">
            <span className="hero-elem block">I make executives</span>
            <span className="hero-elem block text-muted font-sans font-normal text-2xl md:text-3xl tracking-normal mt-3 mb-1">(and their teams)</span>
            <span className="hero-elem block italic text-accent">AI-fluent.</span>
          </h1>
          <p className="hero-elem text-lg text-muted max-w-md leading-relaxed font-sans">
            Custom workshops, keynotes, and private mentoring, all built on your team's real work. Twenty-two years inside enterprise. No hype, no generic curriculum.
          </p>
          <div className="hero-elem flex flex-wrap items-center gap-6 pt-2">
            <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-8 py-4 rounded-full bg-accent text-background text-base">
              <span className="relative z-10 font-medium">Book a call</span>
            </a>
            <a href="#work" className="text-sm text-muted hover:text-text transition-colors flex items-center gap-1">
              See how I work <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="lg:col-span-5">
          <Photo
            src="/portrait.jpg"
            alt="Carlos Acuña"
            label="[ environmental portrait ]"
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
  const ref = useReveal();
  return (
    <section ref={ref} id="shift" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <p className="reveal overline">Why another AI training won't fix it</p>
        <h2 className="reveal display-serif text-3xl md:text-5xl text-text leading-tight">
          Everyone bought the tools. Almost nobody <span className="italic text-accent">changed how they work.</span>
        </h2>
        <p className="reveal text-lg text-muted max-w-2xl mx-auto leading-relaxed font-sans">
          Generic training teaches prompts and demos, and a month later nobody uses any of it. The gap was never the tool. It's judgment: knowing what to hand to AI, what to keep, and how to tell good output from plausible output. I start from the work your team already does, and everyone leaves with something they built.
        </p>
      </div>
    </section>
  );
};

// --- WAYS TO WORK (cascading numbered list) ---
const ways = [
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
    desc: "A few weeks working your real cases, not a curriculum. We work them until the output stops sounding like AI and starts sounding like you. You leave with your own assistants built and the judgment to keep going without me.",
  },
];

const Ways = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-16 md:mb-20">
          <p className="overline mb-5">How we work together</p>
          <h2 className="display-serif text-3xl md:text-5xl text-text">Three ways in. One outcome.</h2>
          <p className="text-muted mt-5 max-w-xl font-sans leading-relaxed">Your people, fluent enough to keep building without me. Everything is built around your real work, so we scope it on a call.</p>
        </div>

        <div>
          {ways.map((w) => (
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
              <span className="overline pt-1">Building</span>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-drama text-xl md:text-2xl text-text mb-3 leading-snug">When mentoring turns into building</h3>
              <p className="text-muted leading-relaxed font-sans max-w-2xl">
                Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, I build it with you, or bring a team to implement. Scoped case by case, never sold off a menu.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal mt-16 text-center">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-accent text-background text-base">
            <span className="relative z-10 font-medium flex items-center gap-2">Book a call <ArrowUpRight className="w-5 h-5" /></span>
          </a>
          <p className="text-muted/70 text-sm mt-4 font-mono">30 minutes · no pitch · we figure out if there's a fit</p>
        </div>
      </div>
    </section>
  );
};

// --- HOW I WORK (typographic timeline) ---
const steps = [
  { num: '01', title: 'Map', desc: "We find the handful of places your team loses the most time. That's where AI earns its keep, and where we start." },
  { num: '02', title: 'Build', desc: "We build the first assistants together, live, in your vocabulary and inside your constraints. Real cases, not toy examples." },
  { num: '03', title: 'Adopt', desc: "Your people learn the logic, not just the result, so they keep building after I'm gone. We measure the time actually saved." },
];

const Method = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="method" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-16 md:mb-24">
          <p className="overline mb-5">How I work</p>
          <h2 className="display-serif text-4xl md:text-6xl text-text">Three steps. <span className="italic text-accent">No dependence on me.</span></h2>
          <p className="text-muted mt-5 font-sans">The skill stays in the room when I leave.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {steps.map((s) => (
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
const quotes = [
  {
    text: "Carlos built us an order system that just runs. What used to be manual every day now handles itself, and we get a clean summary without lifting a finger.",
    attr: 'Javier Rocha · President, Onyx Armor',
  },
  {
    text: "We greenlit it on the first call, no hesitation. Carlos gave us an outbound engine we actually own, not a black box we'd depend on him for.",
    attr: 'Daniel Madrid · Co-Founder & CGO, Dots Eco',
  },
  {
    text: "For the first time the AI actually read my real drawings instead of inventing something off-scale. Carlos taught us to plug it into the tools we already use every day.",
    attr: 'Stefano Bedín · BMAA architecture studio',
  },
];

const Proof = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="proof" className="py-24 md:py-32">
      {/* Stage editorial split: caption left, real speaking photo right */}
      <div className="reveal max-w-6xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl border border-line bg-gradient-to-br from-background to-surface overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-4 p-8 md:p-12">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="overline">On stage</p>
            <h3 className="display-serif text-2xl md:text-4xl text-text leading-tight">Keynotes and hands-on workshops that a room keeps using.</h3>
            <p className="text-muted font-sans leading-relaxed max-w-md mx-auto md:mx-0">Corporate events and leadership offsites, in person or remote, in English or Spanish.</p>
          </div>
          <div className="w-2/3 max-w-[240px] md:w-auto md:h-[340px] shrink-0">
            <Photo
              src="/stage.jpg"
              alt="Carlos Acuña speaking"
              label="[ speaking photo ]"
              className="rounded-2xl aspect-[3/5] md:h-full md:aspect-auto shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="reveal max-w-6xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((q) => (
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
  const ref = useReveal();
  return (
    <section ref={ref} className="px-6 md:px-12 py-16 md:py-20 bg-surface">
      <div className="reveal max-w-5xl mx-auto text-center">
        <p className="overline mb-12 text-muted">Twenty-two years inside enterprise</p>
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
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="reveal overline">About</p>
        <blockquote className="reveal display-serif text-3xl md:text-5xl text-text border-l-2 border-accent pl-6 md:pl-8 leading-tight">
          Twenty-two years inside enterprise. Now I mentor the leaders navigating what comes next.
        </blockquote>
        <div className="reveal space-y-6 max-w-2xl">
          <p className="text-muted leading-relaxed font-sans md:text-lg">
            I'm Carlos Acuña, founder of Fiba Labs. Two decades across IBM, Oracle, Red Hat, Trellix, Vertiv and Remote.com, in sales, channel and customer success throughout Latin America. Dual MBA, engineering background, and a long habit of being in the room where the decision gets made.
          </p>
          <p className="text-muted leading-relaxed font-sans md:text-lg">
            What that taught me: the problem is never the tool. It's whether people have the judgment and the habit to use it well. That's what I mentor. Not a framework adapted from somewhere else, but strategy and fluency built around how your team actually works.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA (plum interruption) ---
const FinalCTA = () => {
  return (
    <section className="px-6 md:px-12 py-28 md:py-36 bg-accent text-background text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="display-serif text-4xl md:text-6xl">Where do we start?</h2>
        <p className="text-background/80 text-lg font-sans leading-relaxed">
          Thirty minutes, no pitch. We work out whether this makes sense for you, your team, or your event, and what to do first.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-background text-text text-base">
            <span className="relative z-10 font-semibold">Book a call</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full border border-background/30 text-background text-base hover:bg-background/10">
            <span className="relative z-10 font-medium">Reach me on LinkedIn</span>
          </a>
        </div>
        <a href={`mailto:${EMAIL}`} className="inline-block text-background/70 hover:text-background transition-colors font-mono text-sm pt-2">{EMAIL}</a>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  return (
    <footer className="px-6 md:px-12 pt-20 pb-10 bg-background border-t border-line">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="Fiba Labs" className="h-12 w-auto mb-6" />
          <p className="text-muted max-w-sm text-sm leading-relaxed font-sans">
            AI strategy mentor for executives and their teams. Custom workshops, keynotes, and private mentoring, built on real work. Across the Americas, in person and remote.
          </p>
        </div>
        <div>
          <h4 className="overline mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-muted font-sans">
            <li><a href="#work" className="hover:text-text transition-colors">Workshops</a></li>
            <li><a href="#proof" className="hover:text-text transition-colors">Speaking</a></li>
            <li><a href="#work" className="hover:text-text transition-colors">Mentoring</a></li>
            <li><a href="#about" className="hover:text-text transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="overline mb-6">Connect</h4>
          <ul className="space-y-3 text-sm text-muted font-sans">
            <li><a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">Book a call</a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">LinkedIn</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-text transition-colors">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center text-xs text-muted font-sans gap-4">
        <p>&copy; {new Date().getFullYear()} Fiba Labs · Santiago, Chile</p>
        <div className="flex gap-6">
          <a href="/privacy.html" className="hover:text-text transition-colors">Privacy</a>
          <a href="/terms.html" className="hover:text-text transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
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
  );
}
