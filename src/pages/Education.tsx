import { Card, Carousel, Col, Row } from 'antd';
import '../shared/Utility.css';
// import ElectricBorder from '../shared/ElectricBorder ';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import m4 from '../assets/m4.png';
import m5 from '../assets/m5.png';
import mm1 from '../assets/mm1.png';
import mm2 from '../assets/mm2.png';
import mm3 from '../assets/mm3.png';
import mm4 from '../assets/mm4.png';
import mm5 from '../assets/mm5.png';
import mm7 from '../assets/mm7.png';

export default function Education() {
  return (
    <>
      <div className='mb-30'>Education</div>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} sm={24} md={8} lg={8}>
          {/* <ElectricBorder
            color="#7df9ff"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 16 }}
          > */}
            <Card title={<h3 className="cardTitle">Secondary School Certificate (SSC)</h3>}>
              <Carousel autoplay>
                <div className="carouselImageWrapper">
                  <img src={s1} alt="SSC" className="cardImage" />
                </div>

                <div className="carouselImageWrapper">
                  <img src={s2} alt="SSC" className="cardImage" />
                </div>
              </Carousel>
              <h3>Jai Kisan Vidyamandir Latur</h3>
              <h3>
                Stream: Science
              </h3>
              <h4>Grades: 95%</h4>
            </Card>
          {/* </ElectricBorder> */}
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          {/* <ElectricBorder
            color="#f19c3b"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 16 }}
          > */}
            <Card title={<h3 className="cardTitle">Higher Secondary Certificate (HSC)</h3>} extra={<a href="https://www.basweshwarcollegelatur.com/">Visit</a>}>
              <Carousel autoplay>
                <div className="carouselImageWrapper">
                  <img src={m1} alt="HSC" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={m2} alt="HSC" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={m3} alt="HSC" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={m4} alt="HSC" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={m5} alt="HSC" className="cardImage" />
                </div>
              </Carousel>
              <h3>Mahatma Basweshwar College Latur</h3>
              <h3>
                Stream: Science
              </h3>
              <h4>Grades: 77%</h4>
            </Card>
          {/* </ElectricBorder> */}
        </Col>
        <Col xs={24} sm={24} md={8} lg={8}>
          {/* <ElectricBorder
            color="#db52f7"
            speed={1}
            chaos={0.12}
            style={{ borderRadius: 16 }}
          > */}
            <Card title={<h3 className="cardTitle">Bachelor's of Engineering (BE)</h3>} extra={<a href="https://mmit.edu.in/">Visit</a>}>
            <Carousel autoplay>
                <div className="carouselImageWrapper">
                  <img src={mm1} alt="MMIT" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={mm2} alt="MMIT" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={mm3} alt="MMIT" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={mm4} alt="MMIT" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={mm5} alt="MMIT" className="cardImage" />
                </div>
                <div className="carouselImageWrapper">
                  <img src={mm7} alt="MMIT" className="cardImage" />
                </div>
              </Carousel>
              <h4>Marathwada Mitra Mandal's Institute of Technology, Pune</h4>
              <h3>
                Branch: Computer Science
              </h3>
              <h4>Grades: 8.35 CGPA</h4>
            </Card>
          {/* </ElectricBorder> */}
        </Col>
      </Row>
    </>
  )
}
