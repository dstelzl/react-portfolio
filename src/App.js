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
<NavBar />
  if (currentPage==='About') {
    <About />
  }
  if (currentPage==='Contact') {
    <Contact />
  }
  if (currentPage==='Portfolio') {
    <Portfolio />
  }
  if (currentPage==='Resume') {
    <Resume />
  } </>
)}

export default App;
