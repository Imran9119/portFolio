import { Card, Tag } from 'antd';
import {
  GithubOutlined,
  GlobalOutlined,
  BulbOutlined,
  CloudOutlined,
  ArrowRightOutlined,
  CodeOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import '../shared/Utility.css';
import '../styling/Projects.css';

const projects = [
  {
    id: 1,
    title: 'IseeAI',
    subtitle: 'AI Assistant for Visually Impaired People',
    category: 'AI / Accessibility',
    icon: <BulbOutlined />,
    color: '#a78bfa',
    description:
      'An AI-powered assistant designed to help visually impaired individuals with daily tasks using computer vision and deep learning.',
    features: [
      'AI-assisted accessibility',
      'Computer vision integration',
      'Support for everyday tasks',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'AI'],
    githubUrl: '', // Add your GitHub repository URL
    liveUrl: '', // Add your live demo URL
  },
  {
    id: 2,
    title: 'Weather Application',
    subtitle: 'Real-Time Weather Forecast',
    category: 'Web Development',
    icon: <CloudOutlined />,
    color: '#22d3ee',
    description:
      'A responsive weather application that retrieves real-time weather information through a REST API and dynamically changes its background based on the searched city.',
    features: [
      'Real-time weather data',
      'Search weather by city',
      'Dynamic city-based backgrounds',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
    githubUrl: '', // Add your GitHub repository URL
    liveUrl: 'https://imran9119.github.io/WeatherApp', // Add your live demo URL
  },
  {
  id: 3,
  title: 'Age Calculator',
  subtitle: 'Age Calculation & Date Utility',
  category: 'Web Development',
  icon: <CalendarOutlined />,
  color: '#f59e0b',
  description:
    'A simple and interactive age calculator that calculates a person’s exact age from their date of birth, displaying the result in years, months, and days.',
  features: [
    'Date of birth selection',
    'Age calculation in years, months, and days',
    'Input validation for future dates',
  ],
  technologies: ['HTML', 'CSS', 'JavaScript'],
  githubUrl: '', // Add your GitHub repository URL
  liveUrl: 'https://imran9119.github.io/Agecalculator',
},
];

function ProjectCard({ project }) {
  return (
    <div
      className="project-card-wrapper"
      style={{ '--project-color': project.color }}
    >
      <Card className="project-card" bordered={false}>
        <div className="project-card-header">
          <div className="project-icon">{project.icon}</div>

          <Tag className="project-category">{project.category}</Tag>
        </div>

        <div className="project-card-title">
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-features">
          {project.features.map((feature) => (
            <div className="project-feature" key={feature}>
              <span className="project-feature-check">✓</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="project-tech-heading">
          <CodeOutlined />
          <span>Tech Stack</span>
        </div>

        <div className="project-tech-stack">
          {project.technologies.map((tech) => (
            <Tag className="project-tech-tag" key={tech}>
              {tech}
            </Tag>
          ))}
        </div>

        <div className="project-card-footer">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action project-github"
            >
              <GithubOutlined />
              GitHub
              <ArrowRightOutlined />
            </a>
          ) : (
            <span className="project-action project-action-disabled">
              <GithubOutlined />
              GitHub link pending
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action project-live"
            >
              <GlobalOutlined />
              Live Demo
              <ArrowRightOutlined />
            </a>
          ) : (
            <span className="project-action project-action-disabled">
              <GlobalOutlined />
              Demo link pending
            </span>
          )}
        </div>
      </Card>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">
            <CodeOutlined />
            WHAT I HAVE BUILT
          </span>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            Turning ideas into practical applications through clean code,
            creative problem-solving, and modern technologies.
          </p>

          <div className="projects-heading-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="projects-footer">
          <div className="projects-footer-icon">
            <BulbOutlined />
          </div>

          <div>
            <h3>Ideas into Reality</h3>
            <p>
              Always exploring new technologies and building solutions
              that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}