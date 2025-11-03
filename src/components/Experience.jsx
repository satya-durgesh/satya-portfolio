import React from 'react'

const Experience = () => {
  const experiences = [
    {
      year: 'Jul 2025',
      title: 'Data Engineer Intern',
      company: 'Life Singularity, Inc. - AWS Data Platform',
      description: 'Designed migration workflows for AWS Lex, Kinesis SQL, and Rekognition using Glue, Lambda, and Redshift. Built Python ETL pipelines improving OLAP query performance by 40%.'
    },
    {
      year: 'Jan 2025',
      title: 'Data Engineer - Service Automation',
      company: 'Accure Inc. (Secure AgenticAI Capstone)',
      description: 'Developed Python/SQL ETL workflows to automate SLA reporting. Integrated SecureGPT for ticket classification and built real-time QuickSight dashboards.'
    },
    {
      year: 'Sep 2022',
      title: 'Data Engineer - ETL Development',
      company: 'Demy Software Solutions',
      description: 'Engineered ETL pipelines using Airflow and NiFi processing millions of records. Modeled Snowflake and Redshift warehouses, reducing query latency by 40%.'
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">04</span>
          RACE HISTORY
        </h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


