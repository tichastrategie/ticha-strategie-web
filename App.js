import React, { useState } from 'react';

const translations = {
  en: { 
    welcome: "Wealth Accumulation Strategy", 
    save: "Monthly Contribution", 
    currency: "USD", 
    defaultAmount: 100,
    action: "Calculate My Future"
  },
  cz: { 
    welcome: "Strategie tichého bohatství", 
    save: "Měsíční úspora", 
    currency: "Kč", 
    defaultAmount: 2500,
    action: "Spočítat moji budoucnost"
  },
  pl: { 
    welcome: "Strategia cichego bogactwa", 
    save: "Miesięczne oszczędności", 
    currency: "PLN", 
    defaultAmount: 450,
    action: "Oblicz moją przyszłość"
  }
};

export default function App() {
  const [lang, setLang] = useState('en'); // Startujeme v angličtině

  return (
    <div style={{ backgroundColor: '#0a192f', color: '#64ffda', minHeight: '100vh', padding: '40px', fontFamily: 'Arial' }}>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('cz')} style={{ margin: '0 10px' }}>CZ</button>
        <button onClick={() => setLang('pl')}>PL</button>
      </div>
      
      <h1>{translations[lang].welcome}</h1>
      <div style={{ background: '#112240', padding: '20px', borderRadius: '10px', maxWidth: '400px' }}>
        <p>{translations[lang].save}:</p>
        <h2>{translations[lang].defaultAmount} {translations[lang].currency}</h2>
        <button style={{ background: '#64ffda', color: '#0a192f', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
          {translations[lang].action}
        </button>
      </div>
    </div>
  );
}
