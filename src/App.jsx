import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Course from './Pages/Course';
import './App.css';

const App = () => {

  return (
  <div>

  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
      </Routes>
     
  </div>
  );
};

export default App;
