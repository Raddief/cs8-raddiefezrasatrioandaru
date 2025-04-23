import './App.css';
import { useState } from 'react';
import Sidebar from './sidebar';
import Scroll from './Scroll';
import Footer from './Footers';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false); // New state to track expansion

  const handleSearch = () => {
    console.log('Search triggered:', searchQuery);
  };

  const handleShiftEnter = () => {
    console.log('Shift + Enter triggered:', searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
      handleShiftEnter();
      setIsExpanded(true); 
    } else if (e.key === 'Enter') {
      handleSearch();
      setIsExpanded(false); 
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <header className="navbar">
        <div className="logo">OpenAI</div>
        <div className="nav-links">
          <button className="login-button">Log in</button>
        </div>
      </header>
      
      <main className="hero">
        <h1>What can I help with?</h1>
        <div className="search-bar">
          <textarea
            type="text"
            placeholder="Aura farming 101"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className={isExpanded ? 'expanded' : ''} 
          />
          <button className="search-button" onClick={handleSearch}>↑</button>
        </div>
        <div className="quick-links">
          <button>Search with ChatGPT</button>
          <button>Talk with ChatGPT</button>
          <button>Research</button>
          <button>Sora</button>
          <button>More</button>
        </div>
        <Scroll />
      </main>

      <Footer />
      <footer className="footer">
        © 2025 OpenAI. All rights reserved.
      </footer>
    </div>
  );
}