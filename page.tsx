'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Droplets,
  HandHeart,
  Leaf,
  Mountain,
  Sprout,
  TreePine,
  Wheat,
  ShieldCheck,
  Landmark,
  Recycle,
  Sun
} from 'lucide-react';

const challengeCards = [
  {
    icon: TreePine,
    title: 'Forest Pressure',
    description:
      'Conventional timber-heavy burial systems increase pressure on forests already balancing construction, fuel, and conservation needs across the continent.'
  },
  {
    icon: Mountain,
    title: 'Land Scarcity',
    description:
      'Rapid urban growth and changing settlement patterns make long-term land use planning more urgent for families and municipalities.'
  },
  {
    icon: Wheat,
    title: 'Agricultural Strain',
    description:
      'Many regions rely on every hectare for food systems, yet soil health continues to decline due to erosion and nutrient depletion.'
  },
  {
    icon: Droplets,
    title: 'Ecosystem Balance',
    description:
      'Communities need farewell practices that protect groundwater, preserve biodiversity, and support living landscapes.'
  }
];

const processFlow = [
  {
    title: 'Burial',
    detail:
      'A respectful return using a plant-based ReGenesis coffin crafted for natural burial contexts and community dignity.'
  },
  {
    title: 'Natural Decomposition',
    detail:
      'The structure safely breaks down without toxic residues, allowing biological processes to continue as intended.'
  },
  {
    title: 'Nutrient Release',
    detail:
      'Organic components gradually release nutrients that support microbial activity and healthier soil structure.'
  },
  {
    title: 'Fertile Soil',
    detail:
      'Soil quality improves over time, opening the door for regenerative land use and long-term ecological value.'
  },
  {
    title: 'New Life',
    detail:
      'Land can host trees, memorial groves, or other restorative planting that benefits future generations.'
  }
];

const legacyPoints = [
  {
    icon: Landmark,
    title: 'Ancestral Dignity',
    text: 'Each design decision respects ceremonial meaning, family honor, and the continuity of lineage.'
  },
  {
    icon: HandHeart,
    title: 'Cultural Consultation',
    text: 'Our approach is informed through dialogue with communities, faith voices, and local custodians of tradition.'
  },
  {
    icon: ShieldCheck,
    title: 'Spiritual Alignment',
    text: 'The practice reflects a familiar truth across many traditions: we return to the earth with reverence.'
  }
];

const faqItems = [
  {
    question: 'Is it safe for groundwater?',
    answer:
      'Yes. ReGenesis Earth Coffins are developed with non-toxic, plant-derived materials that are designed to decompose without releasing harmful chemicals into surrounding soils and water systems.'
  },
  {
    question: 'How long does it take to decompose?',
    answer:
      'Timing varies by climate and soil conditions, but natural decomposition is expected within months to a few years, significantly faster than conventional treated materials.'
  },
  {
    question: 'Is it culturally respectful?',
    answer:
      'Yes. The model is built around dignity, family customs, and consultation with local traditions so farewell practices remain spiritually and culturally grounded.'
  },
  {
    question: 'Is it fully biodegradable?',
    answer:
      'Yes. Every core component is selected to support full biodegradability and non-toxic return to the earth.'
  },
  {
    question: 'Can a tree be planted above it?',
    answer:
      'In many natural burial and memorial land models, yes. ReGenesis supports memorial tree and restoration programs where local regulations permit.'
  }
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ReGenesis Earth Coffins',
  description:
    'African-inspired regenerative burial innovation using biodegradable coffins to restore soil health and honor legacy.',
  areaServed: 'Africa',
  knowsAbout: ['Sustainable burial', 'Soil regeneration', 'Biodegradable materials', 'Memorial forestry']
};

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((previous) => (previous + 1) % processFlow.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.18 }
    );

    const revealables = document.querySelectorAll<HTMLElement>('.reveal');
    for (const section of revealables) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="site-shell">
        <header className="top-nav">
          <a href="#top" className="brand" aria-label="ReGenesis Earth Coffins home">
            <span className="brand-mark" aria-hidden="true">
              <Leaf size={18} />
            </span>
            ReGenesis Earth Coffins
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#solution">Solution</a>
            <a href="#legacy">Legacy</a>
            <a href="#faq">FAQ</a>
            <a href="#join" className="nav-cta">
              Join the Movement
            </a>
          </nav>
        </header>

        <section id="top" className="hero">
          <div className="hero-scene" aria-hidden="true">
            <div className="sun-glow" />
            <div className="horizon-layer layer-one" />
            <div className="horizon-layer layer-two" />
            <div className="horizon-layer layer-three" />
            <div className="acacia acacia-left" />
            <div className="acacia acacia-right" />
          </div>

          <div className="hero-content reveal is-visible">
            <p className="eyebrow">African-Inspired Regenerative Burial Movement</p>
            <h1>Return to the Earth. Renew the Future.</h1>
            <p className="hero-subhead">
              An African-rooted biodegradable coffin designed to restore the land and honor legacy.
            </p>
            <div className="hero-actions">
              <a href="#vision" className="btn btn-primary">
                Discover the Vision
              </a>
              <a href="#join" className="btn btn-secondary">
                Partner With Us
              </a>
            </div>
          </div>
        </section>

        <section className="section reveal" aria-labelledby="problem-title">
          <div className="section-heading">
            <p className="eyebrow">The Problem</p>
            <h2 id="problem-title">A land challenge that demands a regenerative response</h2>
            <p>
              Across many African regions, communities are balancing urban growth, land scarcity, and agricultural
              productivity. Farewell practices can become part of a broader environmental solution.
            </p>
          </div>

          <div className="challenge-grid">
            {challengeCards.map(({ icon: Icon, title, description }) => (
              <article key={title} className="info-card">
                <div className="icon-chip" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="solution" className="section solution reveal" aria-labelledby="solution-title">
          <div className="section-heading">
            <p className="eyebrow">Our Regenerative Solution</p>
            <h2 id="solution-title">Designed to return with dignity and rebuild soil health</h2>
            <p>
              ReGenesis Earth Coffins use plant-based materials engineered for safe decomposition, nutrient release, and
              long-term ecological renewal.
            </p>
          </div>

          <div className="flow-shell">
            <div className="flow-track" aria-label="Regenerative process flow">
              {processFlow.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  aria-pressed={activeStep === index}
                  className={`flow-step ${activeStep === index ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="flow-step-index">{index + 1}</span>
                  <span>{step.title}</span>
                  {index < processFlow.length - 1 && <ArrowRight size={15} className="flow-arrow" aria-hidden="true" />}
                </button>
              ))}
            </div>
            <article className="flow-detail" aria-live="polite">
              <h3>{processFlow[activeStep].title}</h3>
              <p>{processFlow[activeStep].detail}</p>
            </article>
          </div>
        </section>

        <section id="legacy" className="section legacy reveal" aria-labelledby="legacy-title">
          <div className="section-heading">
            <p className="eyebrow">African Legacy and Cultural Respect</p>
            <h2 id="legacy-title">Rooted in heritage. Built for continuity.</h2>
            <p>
              ReGenesis is not a replacement for culture. It is a respectful pathway that aligns modern ecological care
              with ancestral values of dignity, return, and continuity.
            </p>
          </div>

          <div className="legacy-grid">
            {legacyPoints.map(({ icon: Icon, title, text }) => (
              <article key={title} className="legacy-card">
                <Icon size={22} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section agriculture reveal" aria-labelledby="agri-title">
          <div className="section-heading">
            <p className="eyebrow">Agriculture and Regeneration</p>
            <h2 id="agri-title">A burial that feeds tomorrow</h2>
          </div>

          <div className="agri-panel">
            <p>
              By restoring soil vitality, ReGenesis contributes to stronger agro-ecological futures: healthier land,
              memorial forests, and regenerative zones that serve families, farmers, and communities.
            </p>
            <ul>
              <li>
                <Sprout size={18} aria-hidden="true" /> Soil fertility support through organic nutrient return
              </li>
              <li>
                <Recycle size={18} aria-hidden="true" /> Circular land use model with minimal long-term material burden
              </li>
              <li>
                <Sun size={18} aria-hidden="true" /> Memorial landscapes that uplift future generations
              </li>
            </ul>
          </div>
        </section>

        <section id="vision" className="section mission reveal" aria-labelledby="mission-title">
          <div className="mission-grid">
            <article className="mission-card">
              <p className="eyebrow">Mission</p>
              <h2 id="mission-title">To transform burial into an act of land restoration.</h2>
            </article>
            <article className="mission-card">
              <p className="eyebrow">Vision</p>
              <h2>A future where every farewell nourishes African soil.</h2>
            </article>
          </div>
        </section>

        <section id="faq" className="section reveal" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Questions families and partners ask most</h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="join" className="section cta reveal" aria-labelledby="cta-title">
          <h2 id="cta-title">Leave a Living Legacy.</h2>
          <p>
            Join a movement where ancestral honor and climate-positive innovation work together for resilient African
            landscapes.
          </p>
          <div className="hero-actions">
            <a href="#top" className="btn btn-primary">
              Join the Movement
            </a>
            <a href="#solution" className="btn btn-secondary">
              Partner With Us
            </a>
            <a href="#faq" className="btn btn-ghost">
              Get Early Access
            </a>
          </div>
        </section>

        <footer className="footer-note">
          <p>From the soil of our ancestors, we nourish the soil of our children.</p>
        </footer>
      </main>
    </>
  );
}
