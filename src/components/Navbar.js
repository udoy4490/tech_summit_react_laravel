import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <div className="container nav">
        <div className="nav_brand">
          <h3>Tech summit 🚀</h3>
        </div>
        <div>
          <ul className="nav_link">
            <li>Courses</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar