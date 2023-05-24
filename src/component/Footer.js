import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container transparent">
      <div>
        <p>&copy; {new Date().getFullYear()} VeganHof. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;