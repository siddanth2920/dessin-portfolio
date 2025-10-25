import React from "react";
import Header from "./Header";
import "./Home.css";
import Carousel from './carousel';
import TestimonialCard from './testimonalcard';

const Home: React.FC = () => {
      const testimonials = [
      {
        quote: 'Thank you Dessin for being able to give us the best with the utmost care and concern to our requirements. We loved your effort and attention to the detail. 🙏🏼',
        author: 'Isha Coliving',
        project: 'Co-living Space Design',
      },
      {
        quote: 'Mytri transformed our vision into reality. The attention to detail and understanding of our lifestyle made all the difference. Our home is now a perfect blend of aesthetics and functionality.',
        author: 'Rajesh & Priya Kumar',
        project: 'Modern Minimalist Villa',
      },
      {
        quote: 'Working with Dessin was exceptional. They created a workspace that not only looks stunning but has significantly improved team productivity and morale.',
        author: 'Aditya Reddy',
        project: 'Contemporary Office Space',
      },
    ];
  return (
    <div className="home">
      <Header />

      <section className="hero">
        <div className="overlay">
          <h1 className="title">Designing Spaces. Defining Lifestyles.</h1>
          <p className="subtitle">Design + Space Planning</p>
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

      {/* <section className="testimonials">
        <h2>What Our Clients Say</h2>
          <Carousel itemsPerView={1} autoPlay={true} autoPlayInterval={6000}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Carousel>
    
      </section> */}
      <section style={{
        backgroundColor: '#E8DDD5',
        padding: '80px 0',
        overflow: 'hidden',
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: '300',
          letterSpacing: '0.1em',
          color: '#5D4157',
          marginBottom: '16px'
        }}>
          What Our Clients Say
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#8B6F7F',
          marginBottom: '48px',
          fontSize: '16px'
        }}>
          Hear from those who've experienced our work
        </p>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Carousel autoPlay={true} autoPlayInterval={6000}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Carousel>
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
