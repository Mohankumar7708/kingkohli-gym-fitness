
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const reviews = [
  {
    name: "Rahul M.",
    role: "MEMBER",
    text: "The training environment is motivating and the equipment is excellent. A great place to stay consistent with fitness.",
  },
  {
    name: "Priya S.",
    role: "MEMBER",
    text: "I love the positive atmosphere and structured workout guidance. It makes every training session worthwhile.",
  },
  {
    name: "Arun K.",
    role: "MEMBER",
    text: "A comfortable place to focus on strength, fitness and discipline. The overall experience has been great.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <span className="section-label">MEMBER EXPERIENCES</span>
          <h2 className="section-heading">
            STRONGER TOGETHER.
            <br />
            <span>BETTER EVERY DAY.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.name}>
              <Quote className="quote-icon" size={38} />

              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={15} fill="currentColor" />
                ))}
              </div>

              <p className="review-text">"{review.text}"</p>

              <div className="review-author">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="testimonial-note">
          Illustrative testimonials for the demo. Replace with genuine
          member feedback before publishing.
        </p>
      </div>
    </section>
  );
}
