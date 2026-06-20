import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Single source of truth for the booking link. Swap with the real Cal.com URL before merge.
const BOOK_LINK = 'https://cal.com/REPLACE_ME';
const LINKEDIN = 'https://www.linkedin.com/in/carlosacunau/';
const EMAIL = 'carlos@fibalabs.com';

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
          <a href="#work" className="hover:text-text transition-colors">Ways to work</a>
          <a href="#method" className="hover:text-text transition-colors">How I work</a>
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
            AI mentoring · Chile &amp; LATAM
          </div>
          <h1 className="display-serif text-text text-5xl md:text-7xl lg:text-[5.5rem]">
            <span className="hero-elem block">I make executives</span>
            <span className="hero-elem block text-muted font-sans font-normal text-2xl md:text-3xl tracking-normal mt-3 mb-1">(and their teams)</span>
            <span className="hero-elem block italic text-accent">AI-fluent.</span>
          </h1>
          <p className="hero-elem text-lg text-muted max-w-md leading-relaxed font-sans">
            You earned your seat on judgment, relationships and context. AI doesn't replace any of that. I help your people use it so the work gets sharper and faster, in your voice, not the tool's.
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
          <div className="hero-photo relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface border border-line">
            <img
              src="/portrait.jpg"
              alt="Carlos Acuña"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-muted/50 font-mono text-sm pointer-events-none">
              [ environmental portrait ]
            </div>
          </div>
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
        <p className="reveal overline">The problem with most AI training</p>
        <h2 className="reveal display-serif text-3xl md:text-5xl text-text leading-tight">
          It teaches tools and prompts. A month later, <span className="italic text-accent">nobody uses any of it.</span>
        </h2>
        <p className="reveal text-lg text-muted max-w-2xl mx-auto leading-relaxed font-sans">
          I start from the work your team already does, not a generic curriculum. Everyone leaves with something they built, and the judgment to keep using it.
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
    title: 'Your team builds something real, in the room.',
    desc: "Hands-on sessions for your team or leadership group. We pick a process you run every week and walk out with an assistant or workflow that handles it. For events and offsites too.",
  },
  {
    num: '02',
    label: '1:1 Mentoring',
    title: 'Your use case, your output, over a few weeks.',
    desc: "For a leader who wants to get genuinely good. We work your real cases until the output stops sounding like AI and starts sounding like you. You leave with your own assistants configured.",
  },
  {
    num: '03',
    label: 'Speaking',
    title: 'A talk that ends with people having used it.',
    desc: "Keynotes and live workshops for corporate events across LATAM. The audience doesn't just hear about AI. Each person creates something with their own case before they leave the room.",
  },
];

const Ways = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="work" className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="reveal mb-16 md:mb-20">
          <p className="overline mb-5">Ways to work together</p>
          <h2 className="display-serif text-3xl md:text-5xl text-text">One product, fit to where you are.</h2>
          <p className="text-muted mt-5 max-w-xl font-sans leading-relaxed">Everything is custom. We scope it on a call. Below is the shape of the work.</p>
        </div>

        <div>
          {ways.map((w) => (
            <div key={w.num} className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-t border-line">
              <div className="md:col-span-3 flex items-baseline gap-4">
                <span className="display-serif text-4xl text-accent">{w.num}</span>
                <span className="overline pt-1">{w.label}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-drama text-2xl md:text-3xl text-text mb-3 leading-snug">{w.title}</h3>
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
                Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, I build it with you, or bring a team to implement. Scoped per audit, never sold off a menu.
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

// --- PROOF (full-bleed stage photo + floating logos) ---
const Proof = () => {
  const ref = useReveal();
  const logos = ['IBM', 'Oracle', 'Red Hat', 'Trellix', 'Vertiv', 'Remote.com'];
  return (
    <section ref={ref} id="proof" className="py-24 md:py-32">
      {/* Stage photo band */}
      <div className="reveal max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-surface border border-line">
          <img
            src="/stage.jpg"
            alt="Carlos Acuña speaking"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-muted/50 font-mono text-sm pointer-events-none">
            [ on-stage speaking photo, full-bleed cinematic crop ]
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/50 to-transparent">
            <p className="text-white font-sans font-medium">On stage · corporate events across LATAM</p>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="reveal max-w-5xl mx-auto px-6 md:px-12 mt-16 text-center">
        <p className="overline mb-10">Twenty-two years inside enterprise</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((l) => (
            <span key={l} className="font-drama text-xl md:text-2xl text-text/70">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ABOUT (B&W portrait + blockquote bio) ---
const About = () => {
  const ref = useReveal();
  return (
    <section ref={ref} id="about" className="px-6 md:px-12 py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="reveal relative rounded-2xl overflow-hidden aspect-[3/4] bg-background border border-line">
            <img
              src="/portrait-bw.jpg"
              alt="Carlos Acuña"
              className="w-full h-full object-cover grayscale"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-muted/50 font-mono text-sm pointer-events-none">
              [ b&amp;w portrait ]
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-6">
          <p className="reveal overline">About</p>
          <blockquote className="reveal display-serif text-3xl md:text-4xl text-text border-l-2 border-accent pl-6 leading-tight">
            Twenty-two years inside enterprise. Now I help leaders use the next wave of it.
          </blockquote>
          <p className="reveal text-muted leading-relaxed font-sans">
            I'm Carlos Acuña, founder of Fiba Labs. Two decades across IBM, Oracle, Red Hat, Trellix, Vertiv and Remote.com, in sales, channel and customer success throughout Latin America. Dual MBA, engineering background, and a long habit of being in the room where the decision gets made.
          </p>
          <p className="reveal text-muted leading-relaxed font-sans">
            What that taught me: the problem is never the tool. It's whether people have the judgment and the habit to use it well. That's what I mentor. I don't adapt frameworks from somewhere else. I build them for how teams here actually work.
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
          Thirty minutes. No pitch. We work out whether this makes sense for you or your team, and what to do first.
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
            AI mentoring for executives and their teams. I help your people use AI without losing the judgment that made them good. Chile and LATAM.
          </p>
        </div>
        <div>
          <h4 className="overline mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-muted font-sans">
            <li><a href="#work" className="hover:text-text transition-colors">Ways to work</a></li>
            <li><a href="#method" className="hover:text-text transition-colors">How I work</a></li>
            <li><a href="#proof" className="hover:text-text transition-colors">Where I've worked</a></li>
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
      <FinalCTA />
      <Footer />
    </div>
  );
}
