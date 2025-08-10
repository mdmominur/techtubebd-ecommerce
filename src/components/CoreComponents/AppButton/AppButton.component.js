import React from 'react'
import styles from './AppButton.style.module.css';
const AppButton = ({children, variant = 'primary'}) => {
  return (
    <button className={`${styles['button']} ${styles[variant]}`}>{children}</button>
  )
}

export default AppButton