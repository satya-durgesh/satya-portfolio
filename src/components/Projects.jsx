import React from 'react'

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'Market Insights & Population Health Analytics',
      description: 'Built ETL pipelines with AWS Glue and dbt to integrate multi-source datasets into Redshift. Developed Tableau dashboards visualizing real-time marketing and demographic analytics.',
      tech: ['AWS Glue', 'Redshift', 'Tableau', 'dbt']
    },
    {
      number: '02',
      title: 'Healthcare Utilization Forecasting',
      description: 'Engineered ETL pipelines in SQL to aggregate Medicaid claims data. Trained XGBoost model achieving 92% accuracy in service utilization forecasting.',
      tech: ['Python', 'XGBoost', 'SQL', 'Power BI']
    },
    {
      number: '03',
      title: 'Breast Cancer Risk Prediction API',
      description: 'Developed AdaBoost classifier API with Flask achieving 98% accuracy. Implemented SHAP-based explainability for clinical decision-making workflows.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'SHAP']
    },
    {
      number: '04',
      title: 'Microgrid Optimization Simulator',
      description: 'Simulated hybrid energy grid designs in HOMER Pro, identifying configurations with up to 15% operational cost savings. Automated scenario analysis using Python.',
      tech: ['Python', 'HOMER Pro', 'Tableau', 'Data Analytics']
    }
  ]

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-number">03</span>
          FEATURED PROJECTS
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-number">{project.number}</div>
              <div className="project-image">
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project →</a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


