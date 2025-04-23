import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {/* Toggle button visible at all viewport sizes */}
      <button className="menu-icon" onClick={toggleSidebar}>
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">OpenAI</div>
        </div>
        <div className="sidebar-links">
          <a href="#">Research</a>
          <a href="#">Safety</a>
          <a href="#">ChatGPT</a>
          <a href="#">Sora</a>
          <a href="#">API Platform</a>
          <a href="#">For Business</a>
          <a href="#">Company</a>
        </div>
        <div className="sidebar-footer">
          {/* Optional footer content */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
