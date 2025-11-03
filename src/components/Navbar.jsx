import React, { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

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
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-number">21</span>
          <span className="logo-name">SATYA</span>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="navMenu">
          <li><a href="#home" className="nav-link" onClick={handleNavClick}>HOME</a></li>
          <li><a href="#about" className="nav-link" onClick={handleNavClick}>ABOUT</a></li>
          <li><a href="#skills" className="nav-link" onClick={handleNavClick}>SKILLS</a></li>
          <li><a href="#projects" className="nav-link" onClick={handleNavClick}>PROJECTS</a></li>
          <li><a href="#experience" className="nav-link" onClick={handleNavClick}>EXPERIENCE</a></li>
          <li><a href="#contact" className="nav-link" onClick={handleNavClick}>CONTACT</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


