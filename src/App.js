import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';


function App() {
  const [currentPage, setCurrentPage] = useState('About');
  return (
    <>
    <div>
      <NavBar currentPage = {currentPage} setCurrentPage = {setCurrentPage} />
   
      </div>
      
      {currentPage === 'About' ? <About /> : <></>}
      {currentPage === 'Contact' ? <Contact /> : <></>}
      {currentPage === 'Portfolio' ? <Portfolio /> : <></>}
      {currentPage === 'Resume' ? <Resume /> : <></>}
    </>
  );
}

export default App;
