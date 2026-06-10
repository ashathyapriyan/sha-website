'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function TransformationStory() {
  const [phase, setPhase] = useState(0);

  // Auto-play the story
  useEffect(() => {
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 4000); // Change phase every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const storyContent = [
    {
      id: 'problem',
      label: 'The Problem',
      title: 'Struggling Business',
      desc: 'Falling sales, no online presence, invisible to local customers on Google.',
      image: '/images/business_struggling.png',
      bgColor: '#fff',
      borderColor: '#ef4444',
      textColor: '#111',
      badgeColor: 'rgba(239, 68, 68, 0.1)',
      badgeText: '#ef4444'
    },
    {
      id: 'solution',
      label: 'The Catalyst',
      title: 'Partner with sha.dev',
      desc: 'Expert Web Development, Local SEO, and 24/7 AI Automation chat bots.',
      image: '/images/sha_dev_catalyst.png',
      bgColor: '#111',
      borderColor: '#0f7a52',
      textColor: '#fff',
      badgeColor: 'rgba(15, 122, 82, 0.2)',
      badgeText: '#6cd6a3'
    },
    {
      id: 'result',
      label: 'The Result',
      title: 'Business Boom',
      desc: '3× more leads, increased sales, and dominating the local search market!',
      image: '/images/business_booming.png',
      bgColor: '#0f7a52',
      borderColor: '#6cd6a3',
      textColor: '#fff',
      badgeColor: 'rgba(255, 255, 255, 0.2)',
      badgeText: '#fff'
    }
  ];

  return (
    <section id="transformation" style={{ padding: '80px 5%', background: '#f8f8f2', overflow: 'hidden' }}>
      <div className="section-wrap" style={{ textAlign: 'center' }}>
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          The sha.dev Effect
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Watch Your Business Transform
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-sub" 
          style={{ margin: '0 auto 40px auto' }}
        >
          We provide all the digital services you need to go from an invisible local business to a market leader.
        </motion.p>

        <div style={{ position: 'relative', width: '100%', maxWidth: '500px', height: '420px', margin: '0 auto', perspective: '1200px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={phase}
              initial={{ rotateY: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: phase === 2 ? 1.05 : 1 }}
              exit={{ rotateY: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: storyContent[phase].bgColor,
                border: `2px solid ${storyContent[phase].borderColor}`,
                borderRadius: '24px',
                padding: '40px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transformStyle: 'preserve-3d',
                boxShadow: phase === 2 ? '0 20px 50px rgba(15, 122, 82, 0.3)' : '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <motion.div 
                animate={{ z: 40 }}
                style={{
                  background: storyContent[phase].badgeColor,
                  color: storyContent[phase].badgeText,
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '20px'
                }}
              >
                {storyContent[phase].label}
              </motion.div>
              <motion.div 
                animate={{ y: [-8, 8, -8], z: 80 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ height: '140px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <img 
                  src={storyContent[phase].image} 
                  alt={storyContent[phase].title} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
                />
              </motion.div>
              <motion.h3 
                animate={{ z: 60 }}
                style={{ color: storyContent[phase].textColor, fontSize: '1.6rem', fontWeight: 800, marginBottom: '12px' }}
              >
                {storyContent[phase].title}
              </motion.h3>
              <motion.p 
                animate={{ z: 30 }}
                style={{ color: phase === 0 ? '#666' : 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: '320px', lineHeight: 1.6 }}
              >
                {storyContent[phase].desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
          {storyContent.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPhase(idx)}
              style={{
                width: phase === idx ? '30px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: phase === idx ? '#0f7a52' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to phase ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
