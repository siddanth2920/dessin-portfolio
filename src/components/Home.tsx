import React from "react";
import Header from "./Header";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />

      <section className="hero">
        <div className="overlay">
          <h1 className="title">Designing Spaces. Defining Lifestyles.</h1>
          <p className="subtitle">Luxury interiors crafted by Dessin.</p>
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">Project One</div>
          <div className="project-card">Project Two</div>
          <div className="project-card">Project Three</div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>“Dessin transformed our house into a home full of warmth and elegance.”</p>
          <span>- Client Name</span>
        </div>
      </section>

      <footer className="footer">
        <p>Follow us:</p>
        <div className="social">
          <a href="#">Instagram</a> | <a href="#">Email</a> | <a href="#">Phone</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
