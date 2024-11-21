import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./about.css"
import Aru from "../../assets/aru.jpg"
import rea from "../../assets/react.png"
import angu from "../../assets/angular.png"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import jss from "../../assets/js.png"
import boot from "../../assets/boot.png"
import reactdeve from "../../assets/reactdeve.jpg"
import reactnati from "../../assets/reactnat.png"
import database from "../../assets/database.jpg"
import backend from "../../assets/backenddev.jpeg"


function About() {
  return (
   <section>
    <div className="aboutbac">
        <Container>
            <Row>
                <Col lg={12} >
                <h3 className='text-center text-[70px] font-bold pt-[100px] text-purple-700 pb-[120px]'>About Me  </h3>
                
                </Col>
                <Col lg={3}>
                   <img className='rounded-[50%]' src={Aru} alt="" />
                
                </Col>
                <Col className=' flex justify-between ]' lg={9}>
                <div className="ex pr-9 h-[120px] rounded text-white border-r-[2px]  mt-[80px] pl-[100px] ">
                    <h5 className='text-[30px] font-semibold text-purple-700'>Experience</h5>
                    <p>10+ years</p>
                </div>
                <div className="ex pr-9 text-white h-[120px] border-r-[2px]   rounded mt-[80px]">
                    <h5 className='text-[30px] font-semibold text-purple-700'>Completed</h5>
                    <p>100+ Projects</p>
                </div>
                <div className="ex pr-9 text-white h-[120px] border-r-[2px] rounded mt-[80px]">
                    <h5 className='text-[30px] font-semibold text-purple-700'>Support</h5>
                    <p>online 24/7</p>
                </div>
               
                </Col>
                <Col lg={{span:9,offset:3 }}>
                <p className='text-white ml-[90px] text-[20px] '>I turn ideas into interactive, full-stack masterpieces—blending creativity, code, and innovation to deliver web solutions that truly stand out!</p>
                <div className="cv pb-[60px] pt-[28px]">
                <a href="#" className='py-[12px] px-[50px] rounded-[20px] bg-purple-700 no-underline text-white ml-[90px] '>Download CV</a>
                </div>
                </Col>
                <Col lg={12}>
                <div className="skill ">
                    <p className='text-[70px] font-bold text-center pt-[100px] text-purple-700 pb-[50px]'>Skills</p>
                </div>
                </Col>
                <Col className='flex justify-between text-center' lg={12}>
                    <div className="skill  border-1px">
                        <img className='h-[50%]' src={html} alt="" />
                        <h3 >HTML</h3>
                        <p>100%</p>
                    </div>
                    <div className="skill">
                        <img className='h-[50%]' src={css} alt="" />
                        <h3>CSS</h3>
                        <p>100%</p>
                    </div>
                    <div className="skill">
                    <img className='h-[50%]' src={boot} alt="" />
                        <h3>BOOTSTRAP</h3>
                        <p>100%</p>
                    </div>
                    <div className="skill">
                    <img className='h-[50%] pt-5' src={jss} alt="" />
                        <h3>JS</h3>
                        <p>90%</p>
                    </div>
                    <div className="skill">
                    <img className='h-[50%]' src={rea} alt="" />
                        <h3>REACT</h3>
                        <p>80%</p>
                    </div>
                    <div className="skill">
                    <img className='h-[50%] pt-5' src={angu} alt="" />
                        <h3>ANGULAR</h3>
                        <p>80%</p>
                    </div>
                </Col>
                <Col lg={12}>
                <p className='text-center text-purple-700 text-[70px] font-bold pb-[100px]'>Services</p> 

                </Col>
                <Col className='flex  justify-between' lg={12}>
                <div className="service text-center bg-purple-700 h-[350px] w-[300px]">
                    <img className='h-[70%] w-[100%]' src={reactdeve} alt="" />
                    <h6 className='text-[30px] font-bold pt-[12px]'>React Developmet</h6>
                     <a className=' no-underline  text-white' href="# ">view more</a>
                </div>
                <div className="service text-center bg-purple-700 h-[350px] w-[300px]">
                <img className='h-[70%] w-[100%]' src={reactnati} alt="" />
                    <h6 className='text-[25px]  font-bold pb-[2px] pt-2'>App development with React Native</h6>
                     <a className=' no-underline text-white' href="# ">view more</a>
                </div>
                <div className="service text-center bg-purple-700 h-[350px] w-[300px]">
                <img className='h-[70%] w-[100%]' src={backend} alt="" />
                    <h6 className='text-[29px]  font-bold  pt-2'>Backend Development</h6>
                     <a className=' no-underline text-white' href="# ">view more</a>
                </div>
                <div className="service text-center bg-purple-700 h-[350px] w-[300px]">
                <img className='h-[70%] w-[100%]' src={database} alt="" />
                    <h6 className='text-[29px]  font-bold'>Database management</h6>
                     <a className=' no-underline text-white' href="# ">view more</a>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
   </section>
  )
}

export default About