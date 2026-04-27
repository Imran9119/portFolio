import { Col, Row } from 'antd';
import rohit_photo from '../assets/rohit_photo.jpg';
import '../App.css';



export default function Home() {
  return (
    <Row gutter={[24, 24]} align="middle">
      <Col xs={24} sm={24} md={8} lg={8}>
        <img
          src={rohit_photo}
          alt="Rohit's photo"
          className="profilePhoto"
        />
      </Col>

      <Col xs={24} sm={24} md={16} lg={16}>
        <h2>I am a</h2> <h1>SOFTWARE DEVELOPER</h1>
         <h3>with a passion for building impactful products. With experience in both frontend and backend development, I enjoy working on projects that challenge me to learn and grow. I am always eager to collaborate with like-minded individuals and contribute to meaningful projects.</h3>    
      </Col>
    </Row>
  );
}
