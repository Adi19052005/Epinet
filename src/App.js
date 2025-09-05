import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import Partners from './Partners/Partners';
import Contact from './ContactUs/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
