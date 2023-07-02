import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import styles from './css/app.module.css';
import Navbar from './components/NavBar';
import Catagories from './components/Catagories';

function App() {
  return (
    <div id={styles.mainContainer}>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Catagories" element={<Catagories />} />
      </Routes>
    </div>
  );
}

export default App;
