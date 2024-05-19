import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const Blog = () => {
  return (
    <>
      <div className="sub-header">
    <Navbar/>
    <h1>Our Certificate and Online Programs for 2024</h1>
   </div>
   <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src="src/assets/certificate.jpg" alt="Certificate" />
          <h2>2024 Certification Programs Overview</h2>
          <p>
            Discover a treasure trove of knowledge and insights within our blog section. Our team of experts and thought leaders delve into diverse topics, offering valuable perspectives, industry trends, and practical advice. From academic discussions to real-world applications, our blogs provide readers with enriching content to enhance their understanding and stimulate curiosity.
          </p>
          <br />
          <h2>Certificate Programs</h2>
          <p>
            Elevate your skills and expertise with our comprehensive certificate programs tailored to meet the demands of today's dynamic workforce. Whether you're looking to advance in your current career or explore new opportunities, our certificate programs offer specialized training and hands-on experience to help you achieve your goals. With industry-recognized credentials, you'll gain a competitive edge and unlock new pathways to success.
          </p>
          <br />
          <h2>2024 Offerings</h2>
          <p>
            In 2024, we're proud to present an exciting array of certificate programs designed to empower individuals at every stage of their professional journey. From cutting-edge technology to business acumen and beyond, our offerings cater to a wide range of interests and career aspirations. Explore our diverse portfolio of programs and embark on a transformative learning experience that will shape your future success.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>
            <form className="comment-form">
              <input type="text" placeholder="Enter Name" name="name" />
              <input type="email" placeholder="Enter Email" name="email" />
              <textarea rows="5" placeholder="Your comment" name="comment"></textarea>
              <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
            </form>
          </div>
        </div>
        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCAD</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Blog;
