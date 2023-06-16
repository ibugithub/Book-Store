import { React } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h1>Math Magician</h1>

    <div className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/Catagories">Catagories</Link>
    </div>
  </nav>
);
export default Navbar;
