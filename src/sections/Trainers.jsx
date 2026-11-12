
import { Dumbbell, ArrowUpRight } from "lucide-react";
import "./Trainers.css";

const trainers = [
  {
    name: "ARJUN REDDY",
    role: "HEAD FITNESS COACH",
    specialty: "Strength & Conditioning",
    experience: "8 YEARS EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900",
  },
  {
    name: "PRIYA SHARMA",
    role: "PERSONAL TRAINER",
    specialty: "Fitness & Weight Management",
    experience: "5 YEARS EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900",
  },
  {
    name: "ROHAN KUMAR",
    role: "STRENGTH COACH",
    specialty: "Muscle Building & CrossFit",
    experience: "6 YEARS EXPERIENCE",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900",
  },
];

export default function Trainers() {
  return (
    <section className="trainers section-padding" id="trainers">
      <div className="container">
        <div className="trainers-header">
          <div>
            <span className="section-label">THE PEOPLE BEHIND YOUR PROGRESS</span>
            <h2 className="section-heading">
              TRAIN WITH THE <span>BEST.</span>
            </h2>
          </div>

          <p>
            Expert guidance, personalized attention and
            motivation to help you become stronger every day.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer, index) => (
            <article className="trainer-card" key={trainer.name}>
              <div className="trainer-image-wrap">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer-image"
                  loading="lazy"
                />

                <span className="trainer-index">
                  0{index + 1}
                </span>
<a
  href="#contact"
  className="trainer-social"
  aria-label={`Enquire about ${trainer.name}`}
>
  <Dumbbell size={19} />
</a>
              </div>

              <div className="trainer-info">
                <span className="trainer-role">{trainer.role}</span>
                <h3>{trainer.name}</h3>
                <p>{trainer.specialty}</p>

                <div className="trainer-bottom">
                  <span>{trainer.experience}</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
