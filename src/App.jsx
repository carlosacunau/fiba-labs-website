import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Users, MessageSquare, Mic, Wrench } from 'lucide-react';
import { InteractiveGlobe } from '@/components/ui/interactive-globe';

gsap.registerPlugin(ScrollTrigger);

// Single source of truth for the booking link. Swap with the real Cal.com URL before merge.
const BOOK_LINK = 'https://cal.com/REPLACE_ME';
const LINKEDIN = 'https://www.linkedin.com/in/carlosacunau/';
const EMAIL = 'carlos@fibalabs.com';

// --- 1. NAVBAR ---
const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          if (self.progress > 0) {
            gsap.to(navRef.current, {
              backgroundColor: 'rgba(10, 10, 20, 0.6)',
              borderColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(24px)',
              duration: 0.3,
            });
          } else {
            gsap.to(navRef.current, {
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              backdropFilter: 'blur(0px)',
              duration: 0.3,
            });
          }
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border border-transparent px-6 py-4 transition-colors" ref={navRef}>
      <div className="flex items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <img src="/logo.png" alt="FIBA Labs" className="h-20 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text/70">
          <a href="#work" className="hover:text-white transition-colors duration-300">Ways to work</a>
          <a href="#method" className="hover:text-white transition-colors duration-300">How I work</a>
          <a href="#proof" className="hover:text-white transition-colors duration-300">Where I've worked</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
        </div>
        <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-5 py-2.5 rounded-full bg-accent text-white text-sm">
          <span className="relative z-10 flex items-center gap-2">Book <ArrowUpRight className="w-4 h-4" /></span>
        </a>
      </div>
    </nav>
  );
};

// --- 2. HERO ---
const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });
      gsap.from('.hero-globe', {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={container} className="relative min-h-screen w-full flex items-center overflow-hidden px-6 md:px-16">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-32 pb-24">
        {/* Left -- Content */}
        <div className="flex-1 space-y-6">
          <div className="hero-elem data-mono text-accent flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            AI mentoring · Chile & LATAM
          </div>

          <h1 className="flex flex-col text-4xl md:text-6xl lg:text-7xl text-white">
            <span className="hero-elem heading-sans">I make executives</span>
            <span className="hero-elem heading-sans font-normal text-text/60 text-2xl md:text-3xl lg:text-4xl mt-1">(and their teams)</span>
            <span className="hero-elem text-drama text-accent mt-3 ml-1">AI-fluent.</span>
          </h1>

          <p className="hero-elem text-lg md:text-xl text-text/80 max-w-xl font-light font-sans mt-8 mb-12 border-l border-white/20 pl-6 py-2">
            You earned your seat on judgment, relationships and context. AI doesn't replace any of that. I help your people use it so the work gets sharper and faster, in your voice, not the tool's.
          </p>

          <div className="hero-elem pt-4 flex flex-wrap items-center gap-4">
            <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-8 py-4 rounded-full bg-white text-black text-lg gap-2">
              <span className="relative z-10 font-bold tracking-tight">Book</span>
            </a>
            <a href="#work" className="text-text/70 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              See how I work <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right -- Globe */}
        <div className="hero-globe flex-1 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
          <InteractiveGlobe
            size={500}
            dotColor="rgba(139, 92, 246, ALPHA)"
            arcColor="rgba(139, 92, 246, 0.4)"
            markerColor="rgba(167, 139, 250, 1)"
            autoRotateSpeed={0.003}
          />
        </div>
      </div>
    </section>
  );
};

// --- 3. THE SHIFT (adapted from Philosophy) ---
const Shift = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-word', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out'
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} id="shift" className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80)', backgroundAttachment: 'fixed' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <p className="text-xl md:text-2xl text-text/50 font-sans tracking-tight">
          Most AI training teaches tools and prompts.{' '}
          <span className="text-white">A month later nobody uses any of it.</span>
        </p>

        <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
          {['I', 'teach', 'your', 'people', 'to'].map((w) => (
            <span key={w} className="phil-word inline-block mr-3 md:mr-5 heading-sans">{w}</span>
          ))}
          <br />
          {['build', 'the', 'habit.'].map((w, i) => (
            <span key={w} className={`phil-word inline-block mr-3 md:mr-5 text-drama ${i === 2 ? 'text-accent' : 'text-white'}`}>{w}</span>
          ))}
        </h2>

        <p className="text-lg text-text/75 max-w-2xl mx-auto font-sans">
          We start from the work your team already does, not a generic curriculum. Everyone leaves with something they built and will actually keep using.
        </p>
      </div>
    </section>
  );
};

// --- 4. WAYS TO WORK TOGETHER ---
const ways = [
  {
    icon: Users,
    label: 'Workshops',
    title: 'Your team builds something real, in the room.',
    desc: "Hands-on sessions for your team or leadership group. We pick a process you run every week and walk out with an assistant or workflow that handles it. For events, conferences and offsites too.",
  },
  {
    icon: MessageSquare,
    label: '1:1 Mentoring',
    title: 'Your use case, your output, over a few weeks.',
    desc: "For a leader who wants to get genuinely good. We work your real cases until the output stops sounding like AI and starts sounding like you. You leave with your own assistants configured and the judgment to keep building.",
  },
  {
    icon: Mic,
    label: 'Speaking',
    title: 'A talk that ends with people having used it.',
    desc: "Keynotes and live workshops for corporate events across LATAM. The audience doesn't just hear about AI. Each person creates something with their own case before they leave the room.",
  },
];

const Ways = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-accent font-mono mb-4">// Ways to work together</h2>
          <p className="text-2xl md:text-4xl heading-sans max-w-3xl text-white">One product, fit to where you are.</p>
          <p className="text-text/75 mt-6 max-w-2xl font-sans">Everything is custom. We scope it on a call. Below is the shape of the work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map((w) => {
            const Icon = w.icon;
            return (
              <div key={w.label} className="bg-[#111116] border border-white/5 rounded-[2rem] p-8 flex flex-col hover:border-white/10 transition-colors">
                <Icon className="w-7 h-7 text-accent mb-6" />
                <div className="data-mono text-accent mb-3">{w.label}</div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-4 leading-snug">{w.title}</h3>
                <p className="text-sm text-text/75 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Silent build offer */}
        <div className="mt-8 bg-[#0c0c12] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <Wrench className="w-7 h-7 text-accent shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">When mentoring turns into building</h3>
            <p className="text-sm text-text/75 max-w-3xl leading-relaxed">
              Sometimes the right move isn't to teach a process, it's to build it. When a project earns it, I build it with you, or bring a team to implement. Scoped per audit, never sold off a menu.
            </p>
          </div>
        </div>

        {/* Single shared CTA */}
        <div className="mt-16 text-center">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-accent text-white text-lg gap-2">
            <span className="relative z-10 font-bold tracking-tight flex items-center gap-2">Book <ArrowUpRight className="w-5 h-5" /></span>
          </a>
          <p className="text-text/40 text-sm mt-4 font-mono">30 minutes · no pitch · we figure out if there's a fit</p>
        </div>
      </div>
    </section>
  );
};

// --- 5. HOW I WORK (Stacking Cards) ---
const Method = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      let ctx = gsap.context(() => {
        cardsRef.current.forEach((card, index) => {
          if (index === cardsRef.current.length - 1) return;
          ScrollTrigger.create({
            trigger: card,
            start: 'top top+=24',
            endTrigger: cardsRef.current[index + 1],
            end: 'top top+=24',
            pin: true,
            pinSpacing: false,
          });

          gsap.to(card, {
            scale: 0.9,
            filter: 'blur(20px)',
            opacity: 0.5,
            scrollTrigger: {
              trigger: cardsRef.current[index + 1],
              start: 'top bottom',
              end: 'top top',
              scrub: true,
            }
          });
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, []);

  const steps = [
    { num: '01', title: 'Map', desc: "We find the handful of places your team loses the most time. That's where AI earns its keep, and where we start.", graphic: <div className="w-24 h-24 border-2 border-accent/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]"><div className="w-16 h-16 border-2 border-accent/60 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div></div> },
    { num: '02', title: 'Build', desc: "We build the first assistants together, live, in your vocabulary and inside your constraints. Real cases, not toy examples.", graphic: <div className="flex gap-2"><div className="w-1 h-24 bg-accent/20 animate-pulse delay-75"></div><div className="w-1 h-16 bg-accent/60 animate-pulse delay-150 mt-4"></div><div className="w-1 h-32 bg-accent animate-pulse delay-300 -mt-4"></div><div className="w-1 h-20 bg-accent/40 animate-pulse delay-700"></div></div> },
    { num: '03', title: 'Adopt', desc: "Your people learn the logic, not just the result, so they keep building after I'm gone. We measure the time actually saved and decide what scales.", graphic: <div className="w-24 h-24 rounded-lg bg-gradient-to-tr from-accent/10 to-transparent border border-white/10 flex items-center justify-center"><Users className="w-12 h-12 text-accent" /></div> }
  ];

  return (
    <section ref={containerRef} id="method" className="relative py-24 px-6 md:px-16 pb-48">
      <div className="mb-24 max-w-2xl mx-auto text-center sticky top-24 z-0">
        <h2 className="text-4xl md:text-6xl text-drama text-white mb-6">How I work</h2>
        <p className="text-text/60 font-sans">No dependence on me when we're done. The skill stays in the room.</p>
      </div>

      <div className="relative z-10 space-y-24 md:space-y-0 text-white pb-32 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="md:h-[70vh] w-full flex items-center justify-center pt-8 md:pt-0"
          >
            <div className="w-full bg-[#111116] border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] items-center justify-between gap-12">
              <div className="flex-1 space-y-6">
                <div className="data-mono text-accent text-lg">Step_{step.num}</div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-lg md:text-xl text-text/75 max-w-md">{step.desc}</p>
              </div>
              <div className="flex-1 flex justify-center items-center opacity-80 mix-blend-screen scale-125 md:scale-150">
                {step.graphic}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 6. PROOF / WHERE I'VE WORKED ---
const Proof = () => {
  const logos = ['IBM', 'Oracle', 'Red Hat', 'Trellix', 'Vertiv', 'Remote.com'];
  return (
    <section id="proof" className="py-24 px-6 md:px-16 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stage photo placeholder — swap /public/stage.jpg with the real cinema talking shot */}
          <div className="relative rounded-[2rem] overflow-hidden border border-white/5 aspect-[4/3] bg-[#111116]">
            <img
              src="/stage.jpg"
              alt="Carlos Acuña speaking"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-text/30 font-mono text-sm pointer-events-none">
              [ stage photo ]
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-semibold">On stage · corporate events across LATAM</p>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-accent font-mono mb-4">// Where I've worked</h2>
            <p className="text-2xl md:text-3xl heading-sans text-white mb-6">22 years inside enterprise, across LATAM.</p>
            <p className="text-text/75 leading-relaxed mb-10 max-w-lg">
              Two decades in sales, channel and customer success at the companies that built enterprise tech. I've sat on the side of the table your team is on now. That's what I bring to the AI shift: not the hype, the judgment.
            </p>
            <div className="grid grid-cols-3 gap-x-6 gap-y-6">
              {logos.map((l) => (
                <div key={l} className="text-text/50 font-mono text-sm tracking-wide flex items-center">{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 7. ABOUT ---
const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Portrait placeholder — swap /public/portrait.jpg with the real environmental portrait */}
        <div className="lg:col-span-2">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/5 aspect-[3/4] bg-[#111116]">
            <img
              src="/portrait.jpg"
              alt="Carlos Acuña"
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-text/30 font-mono text-sm pointer-events-none">
              [ portrait ]
            </div>
          </div>
          <div className="data-mono text-accent mt-4 text-center">Experience · Judgment · Plain talk</div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-accent font-mono">// About</h2>
          <h3 className="text-2xl md:text-4xl heading-sans text-white leading-tight">
            I spent a career selling and delivering enterprise tech. Now I help leaders use the next wave of it.
          </h3>
          <p className="text-text/70 leading-relaxed">
            I'm Carlos Acuña, founder of Fiba Labs. Twenty-two years across IBM, Oracle, Red Hat, Trellix, Vertiv and Remote.com, in sales, channel and customer success throughout Latin America. Dual MBA, engineering background, and a long habit of being in the room where the decision gets made.
          </p>
          <p className="text-text/70 leading-relaxed">
            What that taught me: the problem is never the tool. It's whether people have the judgment and the habit to use it well. That's what I mentor. I don't adapt frameworks from somewhere else. I build them for how teams here actually work.
          </p>
          <div className="pt-4">
            <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-8 py-4 rounded-full bg-accent text-white text-lg gap-2">
              <span className="relative z-10 font-bold tracking-tight flex items-center gap-2">Book <ArrowUpRight className="w-5 h-5" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 8. FINAL CTA ---
const FinalCTA = () => {
  return (
    <section className="py-24 px-6 md:px-16 bg-black relative text-center">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-5xl heading-sans text-white">Where do we start?</h2>
        <p className="text-text/75 text-lg font-sans">
          Thirty minutes. No pitch. We work out whether this makes sense for you or your team, and what to do first.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full bg-white text-black text-lg gap-2">
            <span className="relative z-10 font-bold tracking-tight">Book</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn-magnetic px-10 py-4 rounded-full border border-white/15 text-white text-lg gap-2 hover:bg-white/5">
            <span className="relative z-10 font-medium">Reach me on LinkedIn</span>
          </a>
        </div>
        <a href={`mailto:${EMAIL}`} className="inline-block text-text/50 hover:text-accent transition-colors font-mono text-sm pt-2">{EMAIL}</a>
      </div>
    </section>
  );
};

// --- 9. FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#05050A] pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-6">
            <img src="/logo.png" alt="FIBA Labs" className="h-16 w-auto opacity-90" />
          </div>
          <p className="text-text/50 max-w-sm mb-8 text-sm">AI mentoring for executives and their teams. I help your people use AI without losing the judgment that made them good. Chile and LATAM.</p>
          <div className="flex items-center gap-3 data-mono bg-white/5 px-4 py-2 text-xs rounded-lg inline-flex">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Booking open
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-text/60">
            <li><a href="#work" className="hover:text-accent transition-colors">Ways to work</a></li>
            <li><a href="#method" className="hover:text-accent transition-colors">How I work</a></li>
            <li><a href="#proof" className="hover:text-accent transition-colors">Where I've worked</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <ul className="space-y-4 text-sm text-text/60">
            <li><a href={BOOK_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Book a call</a></li>
            <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text/40">
        <p>&copy; {new Date().getFullYear()} FIBA Labs · Santiago, Chile</p>
        <div className="mt-4 md:mt-0 flex gap-6">
          <a href="/privacy.html" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms.html" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/40 selection:text-white">
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
