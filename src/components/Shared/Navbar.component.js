import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import styles from './Navbar.style.module.css';
import logo from '../../assets/images/logo.png';
const Navbar = () => {
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolledToTop(true);
        // Perform your action here for scrollY = 0
      } else {
        setIsScrolledToTop(false);
        // Perform your action here for other scroll positions
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolledToTop ? '': styles['not-top']}`}>
    <div className={`${styles.container} container`}>
      <h1>
         <Image 
          src={logo} 
          alt="Techtubebd official logo"
          className={styles.logo}
        />
      </h1>
      <nav className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <button className={styles.cartBtn}>🛒</button>
    </div>
  </header>
  )
}

export default Navbar;