import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Code, Database, Fingerprint, Activity, MousePointer2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
        <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <img src="/logo.png" alt="FIBA Labs OS" className="h-20 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text/70">
          <a href="#features" className="hover:text-white transition-colors duration-300">Architecture</a>
          <a href="#philosophy" className="hover:text-white transition-colors duration-300">Philosophy</a>
          <a href="#protocol" className="hover:text-white transition-colors duration-300">Protocol</a>
        </div>
        <a href="#pricing" className="btn-magnetic px-5 py-2.5 rounded-full bg-accent text-white text-sm">
          <span className="relative z-10 flex items-center gap-2">Initialize <ArrowUpRight className="w-4 h-4" /></span>
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
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative h-screen w-full flex items-end justify-start pb-24 md:pb-32 px-6 md:px-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent"></div>
        <div className="absolute inset-0 bg-accent/5 mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="hero-elem data-mono text-accent flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          System Online _
        </div>

        <h1 className="flex flex-col text-6xl md:text-8xl lg:text-9xl text-white">
          <span className="hero-elem heading-sans">Command the</span>
          <span className="hero-elem text-drama text-accent mt-2 ml-4">Future.</span>
        </h1>

        <p className="hero-elem text-lg md:text-xl text-text/80 max-w-xl font-light font-sans mt-8 mb-12 border-l border-white/20 pl-6 py-2">
          We don’t sell chatbots. We build custom AI operating systems that turn SMB CEOs from operators into architects.
        </p>

        <div className="hero-elem pt-4">
          <a href="#pricing" className="btn-magnetic px-8 py-4 rounded-full bg-white text-black text-lg gap-2">
            <span className="relative z-10 font-bold tracking-tight">Access Secure Relay</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// --- 3. FEATURES ---

// Card 1: Diagnostic Shuffler
const FeatureShuffler = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Auto-Sync Pipelines', data: 'Active API' },
    { id: 2, title: 'Context Engine', data: 'Synced' },
    { id: 3, title: 'Multi-Agent Routing', data: 'Optimizing' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const arr = [...prev];
        const last = arr.pop();
        arr.unshift(last);
        return arr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 flex bg-dark/50 rounded-3xl p-6 border border-white/5 overflow-hidden group">
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="z-10 w-full flex flex-col pt-2">
        <Database className="w-6 h-6 text-accent mb-4" />
        <h3 className="text-xl font-bold mb-2">Unified Command Center</h3>
        <p className="text-sm text-text/60">Your data, mapped and synchronized autonomously.</p>
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2 w-48 h-40">
        {cards.map((card, i) => {
          const isTop = i === 0;
          return (
            <div
              key={card.id}
              className="absolute w-full p-4 rounded-2xl border border-white/10 bg-background/80 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col gap-2"
              style={{
                transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
                opacity: 1 - i * 0.3,
                zIndex: 10 - i,
                boxShadow: isTop ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              <div className="text-xs text-text/50 font-mono flex justify-between">
                <span>Process_{card.id}</span>
                <span className={isTop ? 'text-accent' : ''}>{card.data}</span>
              </div>
              <div className="text-sm font-semibold truncate">{card.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Card 2: Telemetry Typewriter
const FeatureTypewriter = () => {
  const [text, setText] = useState('');
  const messages = [
    "Analyzing meetings...",
    "Revenue updated: +12%",
    "Anomaly detected in pipeline...",
    "Drafting daily brief...",
  ];
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    const currentMsg = messages[msgIdx];
    const typeInterval = setInterval(() => {
      setText(currentMsg.slice(0, charIdx));
      charIdx++;
      if (charIdx > currentMsg.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setMsgIdx((prev) => (prev + 1) % messages.length);
        }, 1500);
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, [msgIdx]);

  return (
    <div className="relative h-64 flex flex-col bg-dark/50 rounded-3xl p-6 border border-white/5 overflow-hidden group">
      <div className="flex justify-between items-start mb-auto z-10">
        <div>
          <Activity className="w-6 h-6 text-accent mb-4" />
          <h3 className="text-xl font-bold mb-2">Daily Intelligence Briefs</h3>
          <p className="text-sm text-text/60">Delivered directly to your pocket.</p>
        </div>
        <div className="flex items-center gap-2 bg-recessed/30 px-3 py-1 rounded-full text-xs font-mono text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          Live Feed
        </div>
      </div>

      <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-text/80 h-20 border border-white/5 flex items-center z-10">
        <span>&gt; {text}<span className="inline-block w-2.5 h-4 bg-accent ml-1 animate-pulse align-middle"></span></span>
      </div>
    </div>
  );
};

// Card 3: Cursor Scheduler
const FeatureScheduler = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set('.cursor-svg', { x: 0, y: 0, opacity: 0 })
        .to('.cursor-svg', { opacity: 1, duration: 0.2 })
        .to('.cursor-svg', { x: 85, y: -45, duration: 0.8, ease: "power2.inOut" })
        .to('.cursor-svg', { scale: 0.9, duration: 0.1 })
        .to('.target-cell', { backgroundColor: 'rgba(139, 92, 246, 0.4)', duration: 0.2 }, "+=0.1")
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.cursor-svg', { x: 190, y: 40, duration: 0.8, ease: "power2.inOut", delay: 0.2 })
        .to('.cursor-svg', { scale: 0.9, duration: 0.1 })
        .to('.save-btn', { backgroundColor: '#8B5CF6', duration: 0.2 }, "+=0.1")
        .to('.cursor-svg', { scale: 1, duration: 0.1 })
        .to('.cursor-svg', { opacity: 0, duration: 0.3, delay: 0.5 })
        .to('.target-cell', { backgroundColor: 'transparent', duration: 0.3 }, "-=0.3")
        .to('.save-btn', { backgroundColor: 'rgba(255, 255, 255, 0.05)', duration: 0.3 }, "-=0.3");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-64 flex flex-col justify-between bg-dark/50 rounded-3xl p-6 border border-white/5 overflow-hidden group">
      <div>
        <Code className="w-6 h-6 text-accent mb-4" />
        <h3 className="text-xl font-bold mb-2">Autonomous Workflows</h3>
        <p className="text-sm text-text/60">Self-healing systems run tasks silently.</p>
      </div>

      <div className="relative w-full h-24 mt-4 select-none">
        <div className="flex gap-2">
          {['M', 'T', 'W', 'T', 'F'].map((day, i) => (
            <div key={i} className={`flex-1 h-12 rounded border border-white/10 flex items-center justify-center font-mono text-xs text-text/40 ${i === 2 ? 'target-cell' : ''}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-end">
          <div className="save-btn px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono tracking-widest uppercase">Execute</div>
        </div>
        <MousePointer2 className="cursor-svg absolute left-4 bottom-2 w-6 h-6 text-white drop-shadow-md z-20 pointer-events-none" style={{ fill: 'white' }} />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-16 container mx-auto">
      <div className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-accent font-mono mb-4">// System Modules</h2>
        <p className="text-3xl md:text-4xl heading-sans max-w-2xl">Three layers of functionality that multiply your organizational power.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FeatureShuffler />
        <FeatureTypewriter />
        <FeatureScheduler />
      </div>
    </section>
  );
};

// --- 4. PHILOSOPHY ---
const Philosophy = () => {
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
    <section ref={container} id="philosophy" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80)', backgroundAttachment: 'fixed' }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <p className="text-xl md:text-2xl text-text/50 font-sans tracking-tight">
          Most AI agencies focus on:{' '}
          <span className="text-white">generic chatbots and disconnected dashboards.</span>
        </p>

        <h2 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1]">
          {['We', 'focus', 'on:'].map((w, i) => (
            <span key={i} className="phil-word inline-block mr-3 md:mr-5 heading-sans">{w}</span>
          ))}
          <br />
          {['actionable', 'intelligence.'].map((w, i) => (
            <span key={w} className={`phil-word inline-block mr-3 md:mr-5 text-drama ${i === 1 ? 'text-accent' : 'text-white'}`}>{w}</span>
          ))}
        </h2>
      </div>
    </section>
  );
};

// --- 5. PROTOCOL (Stacking Cards) ---
const Protocol = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Only apply complex scrolltrigger pinning on desktop for smoothness
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
    { num: '01', title: 'Context & Diagnosis', desc: "We map your workflow. The system doesn't learn generalities; it learns your specific business.", graphic: <div className="w-24 h-24 border-2 border-accent/40 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]"><div className="w-16 h-16 border-2 border-accent/60 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div></div> },
    { num: '02', title: 'Data Integration', desc: "We pipe your tools directly into the brain. Revenue, pipeline, metrics — synthesized automatically.", graphic: <div className="flex gap-2"><div className="w-1 h-24 bg-accent/20 animate-pulse delay-75"></div><div className="w-1 h-16 bg-accent/60 animate-pulse delay-150 mt-4"></div><div className="w-1 h-32 bg-accent animate-pulse delay-300 -mt-4"></div><div className="w-1 h-20 bg-accent/40 animate-pulse delay-700"></div></div> },
    { num: '03', title: 'Command Operations', desc: "Deploy specialized multi-agent systems to execute workflows and deliver daily intel briefs.", graphic: <div className="w-24 h-24 rounded-lg bg-gradient-to-tr from-accent/10 to-transparent border border-white/10 flex items-center justify-center"><Fingerprint className="w-12 h-12 text-accent" /></div> }
  ];

  return (
    <section ref={containerRef} id="protocol" className="relative py-24 px-6 md:px-16 pb-48">
      <div className="mb-24 max-w-2xl mx-auto text-center sticky top-24 z-0">
        <h2 className="text-5xl md:text-7xl text-drama text-white mb-6">The Process</h2>
        <p className="text-text/60 font-sans">Precision over hype. Diagnosis before prescription.</p>
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
                <div className="data-mono text-accent text-lg">Phase_{step.num}</div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{step.title}</h3>
                <p className="text-lg md:text-xl text-text/60 max-w-md">{step.desc}</p>
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

// --- 6. MEMBERSHIP / CTA ---
const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-16 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl heading-sans mb-4">Command Avenues</h2>
          <p className="text-text/60 data-mono">Select execution protocol // </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* Tier 1 */}
          <div className="bg-[#111116] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Diagnostic Audit</h3>
            <p className="text-sm text-text/50 mb-8 border-b border-white/5 pb-8">Identify massive workflow bottlenecks and map AI viability.</p>
            <ul className="space-y-4 text-sm text-text/70 mb-12 flex-1 font-mono">
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> 90-min Discovery Call</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Workflow Mapping</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Friction Analysis</li>
            </ul>
            <button className="btn-magnetic w-full py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5">
              <span className="relative z-10">Book Audit Call</span>
            </button>
          </div>

          {/* Tier 2 (Focus) */}
          <div className="bg-[#181820] border border-accent/30 rounded-[2.5rem] p-8 md:p-10 flex flex-col shadow-[0_0_80px_-20px_rgba(139,92,246,0.2)] md:transform md:scale-105 relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
              Most Common Target
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Personal Assistant</h3>
            <p className="text-sm text-text/50 mb-8 border-b border-white/5 pb-8">A bespoke intelligence layer built for executive context.</p>
            <ul className="space-y-4 text-sm text-text/80 mb-12 flex-1 font-mono">
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Daily Intel Briefs</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Secure Comms Relay</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> 2 Custom Automations</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Direct Support</li>
            </ul>
            <button className="btn-magnetic w-full py-4 rounded-full bg-accent text-white font-bold tracking-wide">
              <span className="relative z-10">Implement Assistant</span>
            </button>
          </div>

          {/* Tier 3 */}
          <div className="bg-[#111116] border border-white/5 rounded-[2.5rem] p-8 md:p-10 flex flex-col hover:border-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Complete OS</h3>
            <p className="text-sm text-text/50 mb-8 border-b border-white/5 pb-8">The total transformation. Replace departments with systems.</p>
            <ul className="space-y-4 text-sm text-text/70 mb-12 flex-1 font-mono">
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Custom Architecture</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Multi-Agent Networks</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Unlimited Automations</li>
              <li className="flex gap-3 items-center"><span className="text-accent">+</span> Private Infrastructure</li>
            </ul>
            <button className="btn-magnetic w-full py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5">
              <span className="relative z-10">Install Full OS</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 7. FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-[#05050A] pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="mb-6">
            <img src="/logo.png" alt="FIBA Labs" className="h-16 w-auto opacity-90" />
          </div>
          <p className="text-text/50 max-w-sm mb-8 text-sm">We provide the "System of Intelligence" for executive leadership. Moving beyond simple dashboards to structured, actionable intelligence.</p>
          <div className="flex items-center gap-3 data-mono bg-white/5 px-4 py-2 text-xs rounded-lg inline-flex">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Operational
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm text-text/60">
            <li><a href="#features" className="hover:text-accent transition-colors">Architecture</a></li>
            <li><a href="#philosophy" className="hover:text-accent transition-colors">Philosophy</a></li>
            <li><a href="#protocol" className="hover:text-accent transition-colors">Protocol</a></li>
            <li><a href="#pricing" className="hover:text-accent transition-colors">Avenues</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm text-text/60">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text/40">
        <p>&copy; {new Date().getFullYear()} FIBA Labs. Interlocking Function and Intelligence.</p>
        <div className="mt-4 md:mt-0 data-mono text-[10px]">v2.0_DEPLOYMENT</div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/40 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
    </div>
  );
}
