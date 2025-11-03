import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="speed-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="f1-highlight">SATYA DURGESH</span><br />
            KEERTHI
          </h1>
          <p className="hero-subtitle">Data Engineer | AI/ML Specialist</p>
          <p className="hero-tagline">RACING TOWARDS INNOVATION</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">25%</span>
              <span className="stat-label">AI Enhancement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Performance Gain</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">GET IN TOUCH</a>
            <a href="#projects" className="btn btn-secondary">VIEW PORTFOLIO</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="race-track-container">
            <div className="race-track">
              <div className="f1-car">
                <div className="car-body"></div>
                <div className="car-wheels">
                  <div className="wheel"></div>
                  <div className="wheel"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}

export default Hero


