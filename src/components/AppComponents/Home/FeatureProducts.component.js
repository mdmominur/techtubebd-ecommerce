import React from 'react'
import styles from "./home.style.module.css";
const FeatureProducts = (props) => {

    const {products} = props;
  return (
    <section className={`${styles['featured']} container`}>
    <h2>Featured Products</h2>
    <div className={styles['product-list']}>
      {products.map(product => (
        <div key={product.id} className={styles['product-card']}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
  )
}

export default FeatureProducts;
