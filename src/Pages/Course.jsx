import '../App.css';
import Facilities from '../Components/Facilities';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Course = () => {
  return (
    <>
     <div className="sub-header">
    <Navbar/>
    <h1>Our Courses</h1>
   </div>
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Explore the diverse range of courses we offer at Eduford. Whether you are interested in science, arts, or technology, we have something for everyone.</p>
        <div className="row">
          <div className="course-col car">
            <h3>Computer Science</h3>
            <p>This class typically covers fundamental concepts in computer science such as algorithms, data structures, programming languages, and software engineering principles. Students may learn programming and gain skills in problem-solving and logical thinking.</p>
          </div>
          <div className="course-col car">
            <h3>Principles of Economics</h3>
            <p>This class introduces students to basic economic principles such as supply and market structures, and theories of consumer behavior. It provides a foundation for understanding economic systems and decision-making at both individual and societal levels.</p>
          </div>
          <div className="course-col car">
            <h3>Introduction to Psychology</h3>
            <p>This class explores the fundamentals of psychology including topics such as human development and mental health. Students may learn about different theoretical perspectives in psychology and how research methods are used to study behavior and mental processes.</p>
          </div>
        </div>
      </section>
      <Facilities/>
      <Footer/>
    </>
  );
};

export default Course;
