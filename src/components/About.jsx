import React from 'react'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">01</span>
          ABOUT ME
        </h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Driving Excellence in Data Engineering & AI</h3>
            <p>Just like a Formula 1 engineer optimizes every component for peak performance, I engineer data solutions that are fast, scalable, and AI-powered to deliver championship-winning results.</p>
            <p>With a passion for cutting-edge technology and a proven track record of delivering 25% enhancements through AI integration, I bring the precision and speed of F1 engineering to data pipelines and machine learning systems.</p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <h4>AI/ML Integration</h4>
                <p>25% decision-making enhancement</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <h4>Cloud Engineering</h4>
                <p>40% OLAP performance gain</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <h4>Data Quality</h4>
                <p>35% improvement in data integrity</p>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="headshot-container">
              <div className="headshot-image">
                <img src="/headshot.jpg" alt="Satya Durgesh Keerthi" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

