
import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" />
          YOUR FITNESS JOURNEY STARTS HERE
        </div>

        <h1>
          BUILD YOUR
          <br />
          <span>STRONGEST</span>
          <br />
          SELF.
        </h1>

        <p>
          Push your limits. Build your strength.
          Transform your body with expert trainers
          and world-class fitness facilities.
        </p>

        <div className="hero-actions">
          <a href="#membership" className="primary-btn">
            START YOUR JOURNEY <ArrowRight size={18} />
          </a>

          <a href="#about" className="hero-secondary">
            <span><Play size={16} fill="white" /></span>
            EXPLORE MORE
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>10+</strong>
            <span>TRAINING PROGRAMS</span>
          </div>
          <div>
            <strong>Expert</strong>
            <span>FITNESS TRAINERS</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>DEDICATION</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        SCROLL TO EXPLORE <span />
      </div>
    </section>
  );
}
