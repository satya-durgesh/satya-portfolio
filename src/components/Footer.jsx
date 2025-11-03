import React from 'react'

const Footer = () => {
  const handleNavClick = (e) => {
    e.preventDefault()
    const targetId = e.target.getAttribute('href')
    if (targetId === '#') return
    
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SATYA DURGESH KEERTHI</h3>
            <p>Racing towards innovation, one line of code at a time.</p>
          </div>
          <div className="footer-nav">
            <a href="#home" onClick={handleNavClick}>HOME</a>
            <a href="#about" onClick={handleNavClick}>ABOUT</a>
            <a href="#skills" onClick={handleNavClick}>SKILLS</a>
            <a href="#projects" onClick={handleNavClick}>PROJECTS</a>
            <a href="#contact" onClick={handleNavClick}>CONTACT</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/satyadurgesh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:satya.dugesh4@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Satya Durgesh Keerthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


