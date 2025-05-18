import React from 'react'
import styles from "./home.style.module.css";
const LatestBlog = () => {
    const blogs = [
        {
          title: "Exploring the Latest Tech Trends",
          date: "April 10, 2024",
          image: "/images/trend-tech.webp"
        },
        {
          title: "Must-Have Gadgets of the Year",
          date: "April 10, 2024",
          image: "/images/must-have-gadget.avif"
        },
        {
          title: "A Guide to Smartphone Buying",
          date: "April 10, 2024",
          image: "/images/smart-phone-buying-guid.jpg"
        },
         {
          title: "Exploring the Latest Tech Trends",
          date: "April 10, 2024",
          image: "/images/trend-tech.webp"
        },
        {
          title: "Must-Have Gadgets of the Year",
          date: "April 10, 2024",
          image: "/images/must-have-gadget.avif"
        },
        {
          title: "A Guide to Smartphone Buying",
          date: "April 10, 2024",
          image: "/images/smart-phone-buying-guid.jpg"
        },
         {
          title: "Must-Have Gadgets of the Year",
          date: "April 10, 2024",
          image: "/images/must-have-gadget.avif"
        },
        {
          title: "A Guide to Smartphone Buying",
          date: "April 10, 2024",
          image: "/images/smart-phone-buying-guid.jpg"
        },
      ];
    
      return (
        <section className={`container ${styles['latest-blog']}`}>
        <h2>Latest Blog</h2>
        <div className={styles['blog-list']}>
            {blogs.map((blog, index) => (
            <div key={index} className={styles['blog-post']}>
                <img src={blog.image} alt={blog.title} />
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
            </div>
            ))}
        </div>
        </section>
      );
}

export default LatestBlog;
