
import {
  // SiJava,
  SiC,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  // SiRxjs,
  SiNgrx,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiAntdesign,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiEclipseide,
  // SiVisualstudiocode,
  // SiOracle,
} from 'react-icons/si';

import {
  FaJava,

} from 'react-icons/fa';

import { VscCode } from 'react-icons/vsc';

import {
  CodeOutlined,
  ApiOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  CloudUploadOutlined,
  TeamOutlined,
  RobotOutlined,
} from '@ant-design/icons';

import '../styling/TechStack.css';

const techCategories = [
  {
    title: 'Programming Languages',
    icon: CodeOutlined,
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'C', icon: SiC, color: '#659ad2' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    ],
  },
  {
    title: 'Frontend Frameworks',
    icon: CodeOutlined,
    skills: [
      { name: 'Angular 15+', icon: SiAngular, color: '#dd0031' },
      { name: 'React.js', icon: SiReact, color: '#61dafb' },
      { name: 'RxJS', icon: SiFigma, color: '#b7178c' },
      { name: 'NgRx', icon: SiNgrx, color: '#8b5cf6' },
    ],
  },
  {
    title: 'UI & Styling',
    icon: ExperimentOutlined,
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: SiCss, color: '#1572b6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952b3' },
      { name: 'Ng-Zorro', icon: SiAntdesign, color: '#1677ff' },
      { name: 'Ant Design', icon: SiAntdesign, color: '#1677ff' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: ApiOutlined,
    skills: [
      { name: 'Java Backend', icon: FaJava, color: '#f89820' },
      { name: 'REST APIs', icon: ApiOutlined, color: '#22d3ee' },
    ],
  },
  {
    title: 'Databases',
    icon: DatabaseOutlined,
    skills: [
      { name: 'SQL', icon: DatabaseOutlined, color: '#38bdf8' },
      { name: 'PL/SQL', icon: DatabaseOutlined, color: '#f80000' },
    ],
  },
  {
    title: 'Development Tools',
    icon: CodeOutlined,
    skills: [
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'GitHub', icon: SiGithub, color: '#f8fafc' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
      { name: 'Figma', icon: SiFigma, color: '#f24e1e' },
      { name: 'Eclipse', icon: SiEclipseide, color: '#b5a6f8' },
      { name: 'VS Code', icon: VscCode, color: '#007acc' },
    ],
  },
  {
    title: 'Testing & Deployment',
    icon: CloudUploadOutlined,
    skills: [
      { name: 'Manual Testing', icon: ExperimentOutlined, color: '#a78bfa' },
      { name: 'Deployment', icon: CloudUploadOutlined, color: '#22d3ee' },
    ],
  },
  {
    title: 'Methodologies',
    icon: TeamOutlined,
    skills: [
      { name: 'Agile', icon: TeamOutlined, color: '#a78bfa' },
      { name: 'Scrum', icon: TeamOutlined, color: '#22d3ee' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-stack-heading">
          <span className="tech-stack-eyebrow">
            <CodeOutlined /> MY TECHNICAL TOOLKIT
          </span>

          <h2>
            Tech <span>Stack</span>
          </h2>

          <p>
            Technologies and tools I use to build scalable,
            efficient, and user-friendly applications.
          </p>

          <div className="tech-stack-heading-line" />
        </div>

        <div className="tech-stack-grid">
          {techCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div className="tech-category-card" key={category.title}>
                <div className="tech-category-heading">
                  <span className="tech-category-icon">
                    <CategoryIcon />
                  </span>

                  <h3>{category.title}</h3>
                </div>

                <div className="tech-skills-grid">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div className="tech-skill" key={skill.name}>
                        <div
                          className="tech-skill-logo"
                          style={{ '--skill-color': skill.color }}
                        >
                          <SkillIcon />
                        </div>

                        <span className="tech-skill-name">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="tech-stack-footer">
          <span>BUILD</span>
          <span className="tech-footer-dot">•</span>
          <span>LEARN</span>
          <span className="tech-footer-dot">•</span>
          <span>GROW</span>
        </div>
      </div>
    </section>
  );
}
