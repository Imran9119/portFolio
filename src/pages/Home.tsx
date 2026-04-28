import { Col, Row } from 'antd';
import profile from '../assets/profile.png';
import linkdin from '../assets/linkdin_logo.png';
import github from '../assets/github_logo.png';
import leetcode from '../assets/leetcode_logo.png';


import '../App.css';



export default function Home() {
  return (
    <>
    <Row gutter={[24, 24]} align="middle">
      <Col xs={24} sm={24} md={8} lg={8}>
        <img
          src={profile}
          alt="Rohit's photo"
          className="profilePhoto"
        />
      </Col>

      <Col xs={24} sm={24} md={16} lg={16}>
        <h2>I am a</h2> <h1>SOFTWARE DEVELOPER</h1>
        <h3>with a passion for building impactful products. With experience in both frontend and backend development, I enjoy working on projects that challenge me to learn and grow. I am always eager to collaborate with like-minded individuals and contribute to meaningful projects.</h3>    
        <Row gutter={[24, 24]}>
          <Col><img src={linkdin} alt="" className='logos'/></Col>
          <Col><img src={github} alt="" className='logos'/></Col>
          <Col><img src={leetcode} alt="" className='logos'/></Col>
          <Col></Col>
        </Row>
      </Col>
    </Row>
    </>
  );
  
}
