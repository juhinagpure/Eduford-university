import '../App.css';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Contact = () => {


  return (
    <>
    <div className="sub-header">
    <Navbar/>
    <h1>About Us</h1>
   </div>
   <section className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.974544521806!2d79.12488161485517!3d21.07367888597395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4b9d4a7fad533%3A0xa02e6b148c2d3861!2sDeeplaxmi%20Celebration%20the%20Banquet!5e0!3m2!1sen!2sin!4v1674977505995!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
   <section className="Contact-Us">
      <div className="contact-col">
        <div>
          <i className="fa fa-home"></i>
          <span>
            <h5>XYZ Road, ABC Building</h5>
            <p>Banglore, Karnataka, INDIA</p>
          </span>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <span>
            <h5>+1 0123456789</h5>
            <p>Monday to Saturday, 10AM TO 6PM</p>
          </span>
        </div>
        <div>
          <i className="fa fa-envelope-o"></i>
          <span>
            <h5>info@gmail.com</h5>
            <p>Email Us your Query</p>
          </span>
        </div>
      </div>

      <div className="contact-col">
        <form action="form-handler.php" method="post">
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter email address" required />
          <input type="text" name="subject" placeholder="Enter Your Subject" required />
          <textarea rows="8" name="message" placeholder="message" required></textarea>
          <button type="submit" className="hero-btn red-btn">Send Message</button>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
