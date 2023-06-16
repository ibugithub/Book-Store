import { React } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.nav}>
      <li>Bookstore CMS</li>
      <li><Link to="/">Books</Link></li>
      <li><Link to="/Catagories">Catagories</Link></li>
    </ul>
  </nav>
);
export default Navbar;
