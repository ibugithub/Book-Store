import { React } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.nav}>
      <li id={styles.title}>Bookstore CMS</li>
      <li><NavLink to="/">Books</NavLink></li>
      <li><NavLink to="/Catagories">Catagories</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
