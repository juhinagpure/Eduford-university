// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import '../App.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Facilities from '../Components/Facilities';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkHeight = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkHeight);
    return () => {
      window.removeEventListener('scroll', checkHeight);
    };
  }, []);
  return (
    <>
      <Header />
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>This is the main classes we provide at our university</p>
        <div className="row">
          <div className="course-col car">
            <h3>Computer science</h3>
            <p>This class typically covers fundamental concepts in computer science such as algorithms, data structures, programming languages, and software engineering principles. Students may learn programming and gain skills in problem-solving and logical thinking.</p>
          </div>
          <div className="course-col car">
            <h3>Principles of Economics:</h3>
            <p>This class introduces students to basic economic principles such as supply and market structures, and theories of consumer behavior. It provides a foundation for understanding economic systems and decision-making at both individual and societal levels.</p>
          </div>
          <div className="course-col car">
            <h3>Introduction to Psychology</h3>
            <p>This class explores the fundamentals of psychology including topics such as human development and mental health. Students may learn about different theoretical perspectives in psychology and how research methods are used to study behavior and mental processes.</p>
          </div>
        </div>
      </section>
      <section className="campus">
        <h1>Our Global Campus</h1>
        <p>Empowering communities locally and globally through our diverse range of campaigns.</p>
        <div className="row">
          <div className="campus-col"><img src="src/assets/london.png" alt="London" />
            <div className="layer">
              <h3>LONDON</h3>
            </div>
          </div>
          <div className="campus-col"><img src="src/assets/newyork.png" alt="New York" />
            <div className="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>
          <div className="campus-col"><img src="src/assets/washington.png" alt="Washington" />
            <div className="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
     <Facilities/>
      <section className="testimonials">
        <h1>What Our Students Say</h1>
        <p>We commit to meet the financial need of every admitted undergraduate student. We don’t consider your ability to pay when we review your application, and we don’t base our decision on whether you can cover the cost. If you’re accepted here, you belong here.</p>
        <div className="row">
          <div className="testimonials-col car">
            <img src="src/assets/user1.jpg" alt="User1" />
            <div>
              <p>“Eduford is home to me not because of the fancy buildings like Healy Hall, or its prestigious reputation, but rather because of the university’s care for the whole person as each of us attempts to live our lives for others.”</p>
              <h3>Christine Berkley</h3>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
          </div>
          <div className="testimonials-col car">
            <img src="src/assets/user2.jpg" alt="User2" />
            <div>
              <p>“It’s likely that you will come to love some of the most amazing souls this campus has to offer. That love may come in the form of friendships that you know will last forever.”</p>
              <h3>David Byer</h3>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="cta">
        <h1>Enroll for Our Various Online Courses <br />Anywhere From The World</h1>
        <Link to="/contact" className="hero-btn">CONTACT US</Link>
      </section>
     <Footer/>
        {isVisible &&   <button   style={{
            display: isVisible ? 'flex' : 'none',
          }} className='go-top-btn' ><img onClick={scrollToTop} src="src/assets/up-arrow.png" alt="" /></button>  }
    </>
  );
};

export default Home;
