
import {
  Dumbbell,
  ArrowUpRight,
  Globe,
  MessageCircle,
  PlayCircle,
} from "lucide-react";

import "./Footer.css";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Our Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          {/* Brand Section */}
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-icon">
                <Dumbbell size={27} />
              </span>

              <span className="brand-text">
                KING<span>KOHLI</span>
                <small>GYM & FITNESS</small>
              </span>
            </a>

            <p>
              Build your strength. Challenge your limits.
              Create a stronger version of yourself.
            </p>

            {/* Social Links */}
            <div className="footer-socials">
              <a href="#contact" aria-label="Website">
                <Globe size={18} />
              </a>

              <a href="#contact" aria-label="Community">
                <MessageCircle size={18} />
              </a>

              <a href="#contact" aria-label="Videos">
                <PlayCircle size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-navigation">
            <h3>QUICK LINKS</h3>

            {footerLinks.map((link) => (
              <a href={link.href} key={link.name}>
                {link.name}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>

          {/* Call To Action */}
          <div className="footer-cta">
            <span className="section-label">
              YOUR JOURNEY STARTS NOW
            </span>

            <h3>
              READY TO
              <br />
              <span>GET STRONGER?</span>
            </h3>

            <a href="#membership" className="primary-btn">
              JOIN OUR GYM
              <ArrowUpRight size={17} />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} KingKohli Gym & Fitness.
            Demo website.
          </p>

          <a href="#home">
            BACK TO TOP ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
