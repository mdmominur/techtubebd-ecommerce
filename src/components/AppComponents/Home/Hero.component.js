import React from 'react'
import styles from "./home.style.module.css";
import iphoneImage from "../../../assets/images/iphone.png";
import Image from 'next/image';
const HeroComponent = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles['hero-inner']} container`}>
        <div>
          <h1>Your Ultimate <br />Tech Destination</h1>
          <a className={styles['shop-button']} href="/shop">Shop Now</a>
        </div>
        <Image 
          src={iphoneImage} 
          alt="iPhone Tech Product" 
          className={styles['hero-image']} 
          width={300} // specify actual width
          height={300} // and height
        />
      </div>
  </section>
  )
}

export default HeroComponent;
