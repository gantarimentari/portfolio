'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    // Set home section as visible immediately
    setVisibleSections((prev) => new Set(prev).add('home'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero isVisible={visibleSections.has('home')} />
      <About isVisible={visibleSections.has('about')} />
      <Experience isVisible={visibleSections.has('experience')} />
      <Projects isVisible={visibleSections.has('projects')} />
      <Contact isVisible={visibleSections.has('contact')} />
      <Footer />
    </div>
  );
}
