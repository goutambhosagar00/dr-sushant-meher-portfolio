import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "auto";
}, [open]);


  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="site-title">Dr. Sushant Meher</h1>

        <nav className={`site-nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
          <Link to="/research-5g" onClick={() => setOpen(false)}>Research</Link>
          <Link to="/publications" onClick={() => setOpen(false)}>Publications</Link>
          <Link to="/articles" onClick={() => setOpen(false)}>Articles</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>

        {/* Hamburger / Close */}
        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
