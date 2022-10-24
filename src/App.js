import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <>
  
      <NavBar currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
   
    
      
      {currentPage === 'About' ? <About /> : <></>}
      {currentPage === 'Contact' ? <Contact /> : <></>}
      {currentPage === 'Portfolio' ? <Portfolio /> : <></>}
      {currentPage === 'Resume' ? <Resume /> : <></>}

      <Footer currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
    </>
  );
}

export default App;
