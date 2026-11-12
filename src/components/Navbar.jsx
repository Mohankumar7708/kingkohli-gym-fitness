
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon">
            <Dumbbell size={25} />
          </span>

          <span className="brand-text">
            KING<span>KOHLI</span>
            <small>GYM & FITNESS</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#membership" className="nav-cta">
          Join Now
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
