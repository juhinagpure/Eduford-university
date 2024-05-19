import React from 'react';
import AboutImage from '../assets/about.jpg';
import '../App.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
   <>
   <div className="sub-header">
    <Navbar/>
    <h1>About Us</h1>
   </div>
   <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>Our university stands as the world's largest educational institution</h1>
          <p>
            Welcome to our prestigious university, where academic excellence and innovation merge to shape future leaders. With a rich history, we empower students to reach their full potential and contribute to society. Our diverse community fosters collaboration, exploration, and boundaries. With state-of-the-art facilities and world-renowned faculty, we provide a dynamic learning environment. Join us for academic journeys or career advancements to become part of our legacy of excellence.
          </p>
          <a href="/course" className="hero-btn red-btn">EXPLORE NOW</a>
        </div>
        <div className="about-col">
          <img src={AboutImage} alt="About" />
        </div>
      </div>
    </section>
    <Footer/>
   </>
  );
};

export default About;
