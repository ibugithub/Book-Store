import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './css/app.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
