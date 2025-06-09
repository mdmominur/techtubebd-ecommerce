import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import styles from './Navbar.style.module.css';
import logo from '../../assets/images/logo.png';
import IconMenu from '@/assets/images/icons/IconMenu';
import IconCart from '@/assets/images/icons/IconCart';
import IconClose from '@/assets/images/icons/IconClose';
const Navbar = () => {
    const [isScrolledToTop, setIsScrolledToTop] = useState(true);
    const [isMObileMenuOpened, setIsMobileMenuOpened] = useState(false);
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

  // Functions logic starts here
  const handleMobileNavToggle = () => {
    setIsMobileMenuOpened(state => !state);
  }

  // Ui Codes starts here
  const navContainer = () => {
    return (
       <nav className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    )
  }
  const mobileNavdrawer =  () => {
    return (
      <div className={`${styles.mobileNavContainer}`}>
          <div className={styles.mobileNavHeader}>
              <button onClick={handleMobileNavToggle}>
                <IconClose/>
              </button>
          </div>
          {navContainer()}
      </div>
    )
  }

  return (
    <header className={`default-background ${styles.navbar} ${isScrolledToTop ? '': styles['not-top']}`}>
    <div className={`${styles.container} container`}>
      <h1>
         <Image 
          src={logo} 
          alt="Techtubebd official logo"
          className={styles.logo}
        />
      </h1>
      <div className={styles['desktop-nav']}>
        {navContainer()}
      </div>
      <button className={styles.cartBtn}>
        <IconCart/>
      </button>
      <button className={`${styles['mobile-nav']} ${styles.cartBtn}`} onClick={handleMobileNavToggle}>
        <IconMenu/>
      </button>
    </div>
    {isMObileMenuOpened && mobileNavdrawer()}
  </header>
  )
}

export default Navbar;