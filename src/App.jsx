
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Membership from "./sections/Membership";
import Transformations from "./sections/Transformations";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

import "./components/Navbar.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Transformations />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
