
import { ArrowUpRight } from "lucide-react";
import "./Programs.css";

const programs = [
  {
    number: "01",
    title: "STRENGTH TRAINING",
    description:
      "Build muscle, increase strength and develop a powerful physique with structured weight training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900",
    tag: "BUILD MUSCLE",
  },
  {
    number: "02",
    title: "CARDIO TRAINING",
    description:
      "Improve endurance, boost heart health and increase your overall fitness with cardio workouts.",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=900",
    tag: "BOOST ENDURANCE",
  },
  {
    number: "03",
    title: "CROSSFIT",
    description:
      "Challenge your limits with functional movements, high-intensity workouts and full-body conditioning.",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=900",
    tag: "PUSH YOUR LIMITS",
  },
  {
    number: "04",
    title: "PERSONAL TRAINING",
    description:
      "Get focused coaching and personalized workout guidance to work toward your fitness goals.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900",
    tag: "TRAIN WITH EXPERTS",
  },
];

export default function Programs() {
  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="programs-header">
          <div>
            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2 className="section-heading">
              TRAIN YOUR WAY.
              <br />
              <span>OWN YOUR STRENGTH.</span>
            </h2>
          </div>

          <p>
            Find the right training style for your goals.
            Every workout is another step toward a
            stronger you.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.number}>
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
                loading="lazy"
              />

              <div className="program-overlay" />

              <div className="program-number">
                {program.number}
              </div>

              <div className="program-content">
                <span className="program-tag">
                  {program.tag}
                </span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>

                <a href="#membership" className="program-link">
                  EXPLORE PROGRAM
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
