
import { Button, Col, Flex, Row } from 'antd';
import {
  ArrowRightOutlined,
  DownloadOutlined,
  CodeOutlined,
  RocketOutlined,
  ApiOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

import profile from '../assets/profile_01.png';
import linkdin from '../assets/linkdin_logo.png';
import github from '../assets/github_logo.png';
import leetcode from '../assets/leetcode_logo.png';
import instagram from '../assets/instagram_logo.png';

import '../App.css';
import '../styling/Home.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/imran-shaikh91/',
    image: linkdin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/imran9119',
    image: github,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Imran9119/',
    image: leetcode,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/official_imran_91/',
    image: instagram,
  },
];

export default function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-glow home-glow-one" />
      <div className="home-glow home-glow-two" />

      <div className="home-container">
        <Row gutter={[40, 40]} align="middle">
          {/* Profile Image */}
          <Col xs={24} sm={24} md={9} lg={9}>
            <div className="home-profile-column">
              <div className="home-profile-badge">
                <span className="home-status-dot" />
                SOFTWARE DEVELOPER
              </div>

              <div className="profileWrapper">
                <div className="profile-ring" />
                <img
                  src={profile}
                  alt="Imran Shaikh - Software Developer"
                  className="profilePhoto"
                />

                <div className="profile-floating-card profile-card-top">
                  <CodeOutlined />
                  <span>Clean Code</span>
                </div>

                <div className="profile-floating-card profile-card-bottom">
                  <RocketOutlined />
                  <span>Building Solutions</span>
                </div>
              </div>

              <p className="home-profile-caption">
                Turning ideas into practical software solutions.
              </p>
            </div>
          </Col>

          {/* Introduction */}
          <Col xs={24} sm={24} md={15} lg={15}>
            <div className="home-content">
              <span className="home-eyebrow">
                <span className="home-eyebrow-line" />
                HELLO, WELCOME TO MY PORTFOLIO
              </span>

              <h1 className="home-title">
                Hi, I'm <span className="home-name">Imran Shaikh</span>
                <br />
                Software <span className="home-gradient-text">Developer</span>
              </h1>

              <h2 className="home-subtitle">
                Building scalable applications for real-world problems.
              </h2>

              <p className="home-description">
                I'm a Software Developer with 2 years of experience, 
                building enterprise FinTech applications.
                My primary expertise is in Angular, TypeScript, JavaScript, Java, RxJS, NgRx and Ant Design, along
                with experience in REST API integration, state management,
                reusable UI components, and banking workflows.
              </p>

              <p className="home-description home-description-secondary">
                I enjoy solving complex problems, improving application
                performance, learning new technologies, and building reliable
                software that delivers meaningful results.
              </p>

              {/* Action Buttons */}
              <Flex gap="middle" wrap="wrap" className="home-actions">
                <Button
                  type="primary"
                  size="large"
                  className="home-primary-button"
                  href="#projects"
                >
                  View My Work <ArrowRightOutlined />
                </Button>

                <Button
                  size="large"
                  href="/Imran_Shaikh_resume.pdf"
                  download="Imran_Shaikh_resume.pdf"
                  className="resume-button"
                >
                  Download Resume <DownloadOutlined />
                </Button>
              </Flex>

              {/* Social Links */}
              <div className="home-social-area">
                <span className="home-social-label">
                  CONNECT WITH ME
                </span>

                <Flex gap="middle" wrap="wrap" className="home-social-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={`Visit my ${social.name} profile`}
                      className="home-social-link"
                    >
                      <img src={social.image} alt="" className="logos" />
                    </a>
                  ))}
                </Flex>
              </div>
            </div>
          </Col>
        </Row>

        {/* Highlights */}
        <div className="home-highlights">
          <div className="home-highlight-item">
            <div className="home-highlight-icon">
              <CodeOutlined />
            </div>
            <div>
              <h3>Angular & NgRx</h3>
              <p>Frontend Development</p>
            </div>
          </div>

          <div className="home-highlight-divider" />

          <div className="home-highlight-item">
            <div className="home-highlight-icon">
              <ApiOutlined />
            </div>
            <div>
              <h3>Enterprise FinTech</h3>
              <p>Banking Applications & APIs</p>
            </div>
          </div>

          <div className="home-highlight-divider" />

          <div className="home-highlight-item">
            <div className="home-highlight-icon">
              <RocketOutlined />
            </div>
            <div>
              <h3>Performance Focus</h3>
              <p>Scalable Software Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
