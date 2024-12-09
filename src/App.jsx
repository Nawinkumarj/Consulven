import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Industrie from './Pages/Industries';
import Contact from './Pages/ContactUs';
import Careers from './Pages/Careers';
import JobDetails from './Pages/JobDetails';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ScrollProgress from './Components/ScrollProgress.jsx';
import Teams from './Pages/Teams';
import ServiceMain from './Pages/ServiceMain';
import ServiceCard1 from './Pages/ServiceCard1';
import ServiceCard2 from './Pages/ServiceCard2';
import TeamMember from './Pages/TeamMember';
import NotFound from './Pages/NotFound';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <ScrollProgress />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/industrie' element={<Industrie />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/career' element={<Careers />} />
        <Route path='/career/:jobId' element={<JobDetails />} />
        <Route path='/team' element={<Teams />} />
        <Route path='/team/:id' element={<TeamMember />} />
        <Route path='/service' element={<ServiceMain />} />
        <Route path="/service/Card1" element={<ServiceCard1 />} />
        <Route path="/service/Card2" element={<ServiceCard2 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
