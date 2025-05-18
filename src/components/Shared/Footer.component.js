import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
        <p>&copy; {new Date().getFullYear()} TechTubeBD. All rights reserved.</p>
        <nav>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/contact">Contact</a>
        </nav>
        </div>
    </footer>
  )
}

export default Footer