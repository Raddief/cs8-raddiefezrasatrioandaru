import React from 'react';
import './Footers.css';

const Footer = () => {
  const footerLinks = {
    'Our Research': {
      'Research Index': '#',
      'Research Overview': '#',
      'Research Residency': '#',
      'OpenAI o1': '#',
      'OpenAI o1-mini': '#',
      'GPT-4o': '#',
      'GPT-4o mini': '#',
      'Sora': '#'
    },
    'ChatGPT': {
      'Explore ChatGPT': '#',
      'Team': '#',
      'Enterprise': '#',
      'Education': '#',
      'Pricing': '#',
      'Download': '#'
    },
    'For Business': {
      'Overview': '#',
      'Company': '#',
      'About us': '#',
      'Our Charter': '#',
      'Careers': '#',
      'Brand': '#'
    },
    'Terms & Policies': {
      'Terms of Use': '#',
      'Privacy Policy': '#',
      'Security': '#',
      'Other Policies': '#'
    }
  };

  return (
    <footer className="footer-container">
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category} className="footer-column">
          <h3 className="footer-category">{category}</h3>
          <ul className="footer-links">
            {Object.entries(links).map(([label, href]) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;