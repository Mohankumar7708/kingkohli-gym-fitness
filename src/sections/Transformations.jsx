
import { ArrowUpRight } from "lucide-react";
import "./Transformations.css";

const transformations = [
  {
    name: "Strength Journey",
    category: "STRENGTH TRAINING",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
  },
  {
    name: "Fitness Progress",
    category: "BODY CONDITIONING",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
  },
  {
    name: "Training Dedication",
    category: "WEIGHT TRAINING",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800",
  },
  {
    name: "Active Lifestyle",
    category: "FITNESS JOURNEY",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800",
  },
];

export default function Transformations() {
  return (
    <section className="transformations section-padding" id="transformations">
      <div className="container">
        <div className="transformations-heading">
          <span className="section-label">PROGRESS IN ACTION</span>
          <h2 className="section-heading">
            EVERY REP. EVERY DAY.
            <br />
            <span>EVERY TRANSFORMATION.</span>
          </h2>
          <p>
            Every fitness journey starts with a decision.
            Celebrate the dedication behind every milestone.
          </p>
        </div>

        <div className="transformation-grid">
          {transformations.map((item, index) => (
            <article className="transformation-card" key={item.name}>
              <img src={item.image} alt={item.name} loading="lazy" />

              <span className="transformation-number">
                0{index + 1}
              </span>

              <div className="transformation-info">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <ArrowUpRight size={22} />
              </div>
            </article>
          ))}
        </div>

        <p className="transformation-note">
          Demo fitness photography. Replace with genuine,
          consent-approved member transformation photos.
        </p>
      </div>
    </section>
  );
}
