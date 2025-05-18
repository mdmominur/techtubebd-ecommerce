import React from 'react'
import styles from "./home.style.module.css";
import IconTruck from '@/assets/images/icons/IconTruck';
import IconShield from '@/assets/images/icons/IconShield';
import IconLock from '@/assets/images/icons/IconLock';
import IconHeadphone from '@/assets/images/icons/IconHeadphone';
const WhyChooseUs = () => {
    const features = [
        { icon: <IconTruck/>, label: "Fast Delivery" },
        { icon: <IconShield/> , label: "Genuine Products" },
        { icon: <IconLock/>, label: "Secure Checkout" },
        { icon: <IconHeadphone/>, label: "Fast Tech Support" },
      ];
    
      return (
        <section className={styles['why-choose']}>
          <h2 className='container'>Why Choose Us</h2>
          <div className={`${styles['features']} container`}>
            {features.map((item, index) => (
              <div key={index} className={styles['feature-item']}>
                <span className={styles.icon}>{item.icon}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default WhyChooseUs;
