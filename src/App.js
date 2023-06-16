import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import './css/app.css';
import Navbar from './components/NavBar';
import Catagories from './components/Catagories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Catagories" element={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
