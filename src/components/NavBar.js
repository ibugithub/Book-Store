import { React } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.nav}>
      <li id={styles.title} className={styles.fontMontserrat}>Bookstore CMS</li>
      <li className={styles.fontMontserrat}><NavLink to="/">Books</NavLink></li>
      <li className={styles.fontMontserrat}><NavLink to="/Catagories">Catagories</NavLink></li>
    </ul>
  </nav>
);
export default Navbar;
