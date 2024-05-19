import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Welcome to our university, where academic excellence meets vibrant campus life. Join our
        diverse community of learners and discover endless opportunities for growth, innovation, and success.
      </p>
      <div className="icons">
        <a style={{ padding: '10px' }} href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
        <a style={{ padding: '10px' }} href="https://www.twitter.com/"><i className="fa-brands fa-twitter"></i></a>
        <a style={{ padding: '10px' }} href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
        <a style={{ padding: '10px' }} href="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <p>made with <i className="fa-regular fa-heart"></i> By Juhi</p>
    </section>
  );
};

export default Footer;
