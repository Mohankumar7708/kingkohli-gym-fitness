
import { Check, ArrowRight, Crown } from "lucide-react";
import "./Membership.css";

const plans = [
  {
    name: "MONTHLY",
    duration: "01 MONTH",
    price: "₹999",
    description: "Perfect for getting started.",
    features: [
      "Access to gym equipment",
      "General workout guidance",
      "Locker facility",
      "Fitness assessment",
    ],
    popular: false,
  },
  {
    name: "QUARTERLY",
    duration: "03 MONTHS",
    price: "₹2,499",
    description: "For consistent fitness progress.",
    features: [
      "Everything in Monthly",
      "Personalized workout plan",
      "Trainer consultation",
      "Progress tracking",
      "Priority workout support",
    ],
    popular: true,
  },
  {
    name: "YEARLY",
    duration: "12 MONTHS",
    price: "₹8,999",
    description: "Commit to your strongest year.",
    features: [
      "Everything in Quarterly",
      "Regular fitness assessments",
      "Advanced workout guidance",
      "Membership priority support",
      "Long-term progress tracking",
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section className="membership section-padding" id="membership">
      <div className="container">
        <div className="membership-heading">
          <span className="section-label">INVEST IN YOURSELF</span>

          <h2 className="section-heading">
            CHOOSE YOUR <span>PLAN.</span>
          </h2>

          <p>
            Your fitness journey deserves the right commitment.
            Find a membership that works for your goals.
          </p>
        </div>

        <div className="membership-grid">
          {plans.map((plan) => (
            <article
              className={`membership-card ${
                plan.popular ? "popular" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Crown size={14} />
                  MOST POPULAR
                </div>
              )}

              <span className="plan-duration">{plan.duration}</span>

              <h3>{plan.name}</h3>

              <p className="plan-description">{plan.description}</p>

              <div className="plan-price">
                <strong>{plan.price}</strong>
                <span>/ {plan.duration === "01 MONTH" ? "month" : plan.duration === "03 MONTHS" ? "3 months" : "year"}</span>
              </div>

              <div className="plan-divider" />

              <p className="features-title">PLAN INCLUDES</p>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="plan-button">
                CHOOSE PLAN <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>

        <p className="membership-note">
          * Demo pricing and membership benefits. Actual offers
          can be customized for each gym client.
        </p>
      </div>
    </section>
  );
}
