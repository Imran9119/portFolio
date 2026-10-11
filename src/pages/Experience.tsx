import { Card, Tag, Tooltip } from 'antd';
import {
  CodeOutlined,
  RocketOutlined,
  CalendarOutlined,
  TrophyOutlined,
  ApiOutlined,
  ExperimentOutlined,

} from '@ant-design/icons';
import '../shared/Utility.css';
import '../styling/Experience.css';

const experiences = [
  {
    id: 1,
    company: 'Kyzer Software',
    role: 'Junior Software Developer',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    color: '#8b5cf6',
    icon: <RocketOutlined />,
    description:
      'Building and maintaining enterprise FinTech applications for banking operations, user administration, and trade finance workflows using Angular, RxJS, NgRx, and TypeScript.',
    technologies: [
      'Angular 19',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Ng-Zorro',
      'Ant Design',
      'REST APIs',
      'Bootstrap',
    ],
    achievements: [
      {
        title: 'User Management V2',
        detail:
          'Engineered and maintained a centralized administration module with role-based access control, deployed across 8–9 partner banks.',
      },
      {
        title: 'Performance Optimization',
        detail:
          'Re-architected User Management V1 into V2, improving application load time and overall performance efficiency by approximately 50–60%.',
      },
      {
        title: 'Trade Finance & Banking',
        detail:
          'Developed and maintained LC Issuance, LC Amendment, BG Issuance, BG Amendment, Forward Contract Booking, and other banking workflows across TradeZone and TradeKonnect.',
      },
      {
        title: 'Scalable Frontend Architecture',
        detail:
          'Integrated RESTful APIs, implemented dynamic form validations and reusable Angular components, and used NgRx for scalable state management. Also performed manual testing and deployment.',
      },
    ],
  },
  {
    id: 2,
    company: 'Kyzer Software',
    role: 'Software Developer Intern',
    period: 'Oct 2024 – Jan 2025',
    type: 'Internship',
    color: '#06b6d4',
    icon: <CodeOutlined />,
    description:
      'Contributed to production-grade FinTech applications, developing frontend features and learning enterprise application architecture, authentication, and state management.',
    technologies: [
      'Angular 19',
      'TypeScript',
      'NgRx',
      'Ng-Zorro',
      'Ant Design',
      'JavaScript',
    ],
    achievements: [
      {
        title: 'Pricing Master',
        detail:
          'Built a pricing calculator tool to help banks manage product pricing strategies using Angular, Ng-Zorro, and Ant Design drag-and-drop functionality.',
      },
      {
        title: 'Authentication & Super Admin',
        detail:
          'Implemented authentication-related frontend functionality, route guards, Super Admin features, and NgRx-based state management.',
      },
    ],
  },

  {
    id: 4,
    company: 'Oasis Infobyte',
    role: 'Web Development Intern',
    period: 'Mar 2023 – Apr 2023',
    type: 'Internship',
    color: '#ec4899',
    icon: <ExperimentOutlined />,
    description:
      'Built a foundation in web development by implementing user interfaces and practicing responsive design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    achievements: [
      {
        title: 'Frontend Development',
        detail:
          'Practiced building web pages, styling components, and adding interactive behavior using JavaScript.',
      },
    ],
  },
];

function ExperienceCard({ experience }: { experience: any }) {
  return (
    <div
      className="experience-card-wrapper"
      style={{ '--experience-color': experience.color } as React.CSSProperties}
    >
      <Card className="experience-card" bordered={false}>
        <div className="experience-card-top">
          <div className="experience-company-icon">
            {experience.icon}
          </div>

          <div className="experience-heading">
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
          </div>

          <Tag
            className={`experience-type ${experience.type === 'Full-time'
                ? 'experience-fulltime'
                : 'experience-internship'
              }`}
          >
            {experience.type}
          </Tag>
        </div>

        <div className="experience-period">
          <CalendarOutlined />
          <span>{experience.period}</span>
        </div>

        <p className="experience-description">
          {experience.description}
        </p>

        <div className="experience-subtitle">
          <CodeOutlined />
          <span>Technologies & Tools</span>
        </div>

        <div className="experience-tech-stack">
          {experience.technologies.map((tech:any) => (
            <Tag key={tech} className="experience-tech-tag">
              {tech}
            </Tag>
          ))}
        </div>

        <div className="experience-subtitle experience-achievements-title">
          <TrophyOutlined />
          <span>Key Contributions</span>
        </div>

        <div className="experience-achievements">
          {experience.achievements.map((achievement: any) => (
            <div
              className="experience-achievement"
              key={achievement.title}
            >
              <span className="achievement-dot" />

              <div>
                <h5>{achievement.title}</h5>
                <p>{achievement.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-background-glow experience-glow-one" />
      <div className="experience-background-glow experience-glow-two" />

      <div className="experience-container">
        <div className="experience-section-heading">
          <span className="experience-eyebrow">
            <CodeOutlined /> MY PROFESSIONAL JOURNEY
          </span>

          <h2>
            Experience <span>&</span> Growth
          </h2>

          <p>
            From learning the fundamentals of web development to building
            enterprise FinTech applications — every step has helped me grow
            as a developer.
          </p>

          <div className="experience-heading-line" />
        </div>

        <div className="experience-summary">
          <div className="experience-summary-item">
            <span className="summary-icon">
              <RocketOutlined />
            </span>
            <div>
              <h3>FinTech</h3>
              <p>Industry Experience</p>
            </div>
          </div>

          <div className="experience-summary-divider" />

          <div className="experience-summary-item">
            <span className="summary-icon">
              <CodeOutlined />
            </span>
            <div>
              <h3>Frontend</h3>
              <p>Angular Development</p>
            </div>
          </div>

          <div className="experience-summary-divider" />

          <div className="experience-summary-item">
            <span className="summary-icon">
              <ApiOutlined />
            </span>
            <div>
              <h3>Enterprise</h3>
              <p>APIs & State Management</p>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div
              className={`experience-timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                }`}
              key={experience.id}
            >
              <div
                className="experience-timeline-marker"
                style={{ '--experience-color': experience.color } as React.CSSProperties}
              >
                <Tooltip title={experience.company}>
                  <span>{experience.icon}</span>
                </Tooltip>
              </div>

              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>

        <div className="experience-footer">
          <span className="experience-footer-icon">
            <RocketOutlined />
          </span>
          <div>
            <h3>Always Building. Always Learning.</h3>
            <p>
              Focused on writing maintainable code, solving real-world
              problems, and growing into a stronger software engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}