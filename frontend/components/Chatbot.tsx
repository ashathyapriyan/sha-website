'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hi there! 👋 I am Sha\'s AI Assistant. How can I help you grow your business today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botResponse = "I'm currently a simulated frontend bot! Since an API key wasn't provided, I can't think for myself just yet. But Sha can definitely build a fully functional backend for me!";
      
      const lowerInput = userMsg.text.toLowerCase();
      if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        botResponse = "Our services start at just ₹500 for an audit, up to ₹35,000 for a full custom web application. What specifically do you need built?";
      } else if (lowerInput.includes('seo')) {
        botResponse = "We are experts in Local SEO for Chennai businesses! We can guarantee improvements in your local search rankings.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! Looking for a new website, or do you need to fix a slow one?";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="chatbot-toggle"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#0f7a52',
          color: '#fff',
          border: 'none',
          boxShadow: '0 8px 24px rgba(15, 122, 82, 0.4)',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px'
        }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '24px',
              width: 'calc(100vw - 48px)',
              maxWidth: '350px',
              height: '500px',
              maxHeight: 'calc(100vh - 124px)',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              zIndex: 9998,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid #e0e0d4'
            }}
          >
            {/* Header */}
            <div style={{ background: '#0f7a52', padding: '20px', color: '#fff' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>🤖</span> Sha.dev AI
              </h3>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8, marginTop: '4px' }}>Usually replies instantly</p>
            </div>

            {/* Messages Area */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', background: '#f8f8f2' }}>
              {messages.map((msg) => (
                <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                    background: msg.sender === 'user' ? '#0f7a52' : '#fff',
                    color: msg.sender === 'user' ? '#fff' : '#111',
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    border: msg.sender === 'bot' ? '1px solid #e0e0d4' : 'none'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '16px',
                    borderBottomLeftRadius: '4px',
                    background: '#fff',
                    border: '1px solid #e0e0d4',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                  }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} style={{ width: 6, height: 6, background: '#ccc', borderRadius: '50%' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} style={{ width: 6, height: 6, background: '#ccc', borderRadius: '50%' }} />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} style={{ width: 6, height: 6, background: '#ccc', borderRadius: '50%' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{ padding: '16px', background: '#fff', borderTop: '1px solid #e0e0d4' }}>
              <form onSubmit={handleSend} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '24px',
                    border: '1px solid #e0e0d4',
                    outline: 'none',
                    fontSize: '0.9rem',
                    background: '#f8f8f2'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#0f7a52',
                    color: '#fff',
                    border: 'none',
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}
                  disabled={!inputValue.trim() || isTyping}
                >
                  ↑
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
