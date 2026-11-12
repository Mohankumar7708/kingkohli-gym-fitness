
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import "./About.css";

const benefits = [
  "Modern strength training equipment",
  "Professional fitness guidance",
  "Personalized workout programs",
  "Supportive training environment",
];

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image-main">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000"
              alt="Modern gym fitness equipment"
            />
          </div>

          <div className="about-image-small">
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600"
              alt="Athlete strength training"
            />
          </div>

          <div className="about-experience">
            <strong>01</strong>
            <span>YOUR FITNESS<br />YOUR JOURNEY</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">
            WHO WE ARE
          </span>

          <h2 className="section-heading">
            MORE THAN A GYM.
            <br />
            <span>A LIFESTYLE.</span>
          </h2>

          <p className="about-description">
            Welcome to KingKohli Gym & Fitness, where
            strength meets discipline. We believe fitness
            is not just about lifting weights. It's about
            building confidence, consistency and a
            stronger version of yourself.
          </p>

          <p className="about-description secondary">
            Whether you're beginning your fitness journey
            or pushing toward your next personal record,
            our training environment is designed to help
            you move forward.
          </p>

          <div className="about-benefits">
            {benefits.map((benefit) => (
              <div className="about-benefit" key={benefit}>
                <CheckCircle2 size={19} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <a href="#programs" className="about-link">
            DISCOVER OUR PROGRAMS
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
