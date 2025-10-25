import React from "react";
import Header from "./Header";
import "./Home.css";
import Carousel from './carousel';
import TestimonialCard from './testimonalcard';
import ProjectCard from "./FeatureProjects";

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
    const projects = [
    {
      title: 'Modern Minimalist Villa',
      category: 'Residential',
      location: 'Jubilee Hills, Hyderabad',
      year: '2024',
      description: 'A stunning 4000 sq ft villa featuring clean lines, neutral tones, and abundant natural light.',
      imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800',
    },
    {
      title: 'Contemporary Office Space',
      category: 'Commercial',
      location: 'Banjara Hills, Hyderabad',
      year: '2023',
      description: 'A 6000 sq ft tech office designed to inspire creativity and collaboration.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    },
    {
      title: 'Luxury Penthouse',
      category: 'Residential',
      location: 'Gachibowli, Hyderabad',
      year: '2023',
      description: 'An opulent 5000 sq ft penthouse with panoramic city views and sophisticated design.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
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
      <section className="py-20 px-4" style={{ backgroundColor: '#F5F0ED' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light tracking-[0.1em] text-center mb-4"
            style={{ color: '#5D4157', textAlign: 'center' }}
          >
            FEATURED PROJECTS
          </h2>
          <p className="text-center mb-12" style={{ color: '#8B6F7F', textAlign: 'center'  }}>
            A glimpse into our recent transformations
          </p>
          
          <Carousel autoPlay={true} autoPlayInterval={5000}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Carousel>
        </div>
      </section>
      {/* <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">Project One</div>
          <div className="project-card">Project Two</div>
          <div className="project-card">Project Three</div>
        </div>
      </section> */}

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
