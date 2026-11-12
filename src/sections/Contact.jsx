
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      program: "",
      message: "",
    });
  };

  const phoneNumber = "916380938348";
  const emailAddress = "mohankumar22005@gmail.com";

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="section-label">
            LET'S GET STARTED
          </span>

          <h2 className="section-heading">
            YOUR NEXT CHAPTER
            <br />
            <span>STARTS HERE.</span>
          </h2>

          <p>
            Have questions about memberships or training?
            Get in touch with us and take your first step
            towards a stronger you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Information */}
          <div className="contact-details">

            <h3>LET'S TALK FITNESS.</h3>

            <p className="contact-intro">
              We are here to help you find the right fitness
              program for your goals. Visit KingKohli Gym &
              Fitness and start your fitness journey today.
            </p>

            {/* Location */}
            <div className="contact-item">
              <span>
                <MapPin size={22} />
              </span>

              <div>
                <strong>OUR LOCATION</strong>
                <p>Thevaram, Theni, Near Bus Stand</p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <span>
                <Phone size={22} />
              </span>

              <div>
                <strong>CALL US</strong>
                <p>
                  <a href="tel:+916380938348">
                    +91 63809 38348
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <span>
                <Mail size={22} />
              </span>

              <div>
                <strong>EMAIL US</strong>
                <p>
                  <a href={`mailto:${emailAddress}`}>
                    {emailAddress}
                  </a>
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="contact-item">
              <span>
                <Clock size={22} />
              </span>

              <div>
                <strong>WORKING HOURS</strong>
                <p>6:00 AM – 9:00 PM</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hello KingKohli Gym & Fitness! I would like to know more about your membership plans."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <MessageCircle size={19} />
              CHAT WITH US ON WHATSAPP
              <ArrowUpRight size={17} />
            </a>

            {/* Google Maps */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Thevaram+Bus+Stand%2C+Theni%2C+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <MapPin size={16} />
              FIND US ON GOOGLE MAPS
              <ArrowUpRight size={15} />
            </a>

          </div>

          {/* Enquiry Form */}
          <div className="contact-form-wrapper">

            <h3>SEND AN ENQUIRY</h3>

            <p className="form-subtitle">
              Fill in your details and take the first step
              towards your fitness goals.
            </p>

            {submitted ? (

              <div className="form-success">
                <CheckCircle2 size={48} />

                <h4>THANK YOU!</h4>

                <p>
                  Your demo enquiry was submitted successfully.
                  Connect a backend to receive actual customer
                  enquiries.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="reset-form"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <div className="form-row">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    minLength={2}
                    maxLength={60}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    pattern="[0-9+\-\s()]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />

                </div>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />

                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select your fitness program
                  </option>

                  <option value="Strength Training">
                    Strength Training
                  </option>

                  <option value="Cardio Training">
                    Cardio Training
                  </option>

                  <option value="CrossFit">
                    CrossFit
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Membership Enquiry">
                    Membership Enquiry
                  </option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={5}
                  maxLength={500}
                  required
                />

                <button
                  type="submit"
                  className="contact-submit"
                >
                  SEND MESSAGE
                  <Send size={17} />
                </button>

                <p className="form-disclaimer">
                  Demo form only. No information is sent
                  to a server yet.
                </p>

              </form>

            )}

          </div>

        </div>
      </div>
    </section>
  );
}
