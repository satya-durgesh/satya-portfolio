import React, { useEffect, useRef } from 'react'

const SkillBar = ({ skill, width }) => {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (barRef.current) {
                barRef.current.style.width = width + '%'
              }
            }, 200)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) {
      observer.observe(barRef.current.closest('.skill-bar'))
    }

    return () => observer.disconnect()
  }, [width])

  return (
    <div className="skill-bar">
      <div className="skill-fill" ref={barRef} data-width={width}>
        <span>{skill}</span>
      </div>
    </div>
  )
}

const Skills = () => {
  const programmingSkills = [
    { skill: 'Python', width: 95 },
    { skill: 'SQL', width: 90 },
    { skill: 'R', width: 85 },
    { skill: 'Java', width: 75 },
    { skill: 'Bash', width: 80 }
  ]

  const dataEngSkills = [
    { skill: 'AWS Glue', width: 93 },
    { skill: 'dbt', width: 90 },
    { skill: 'Apache Airflow', width: 88 },
    { skill: 'Apache NiFi', width: 87 },
    { skill: 'Spark/PySpark', width: 90 }
  ]

  const cloudMLSkills = [
    { skill: 'AWS Services', width: 92 },
    { skill: 'Redshift/Snowflake', width: 88 },
    { skill: 'Scikit-learn', width: 90 },
    { skill: 'XGBoost', width: 93 },
    { skill: 'Terraform', width: 85 }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">02</span>
          TECHNICAL SKILLS
        </h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-bar-container">
              {programmingSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} width={item.width} />
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Data Engineering & ETL</h3>
            <div className="skill-bar-container">
              {dataEngSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} width={item.width} />
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Cloud & ML Technologies</h3>
            <div className="skill-bar-container">
              {cloudMLSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} width={item.width} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


