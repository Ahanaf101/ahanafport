import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../../assets/joko.png"
import "./banner.css"

function Banner() {
  return (
   <section>
    <div className="banner " >
      <Container>
        <Row>
          <Col lg={{span:7,offset:5}}>
          <p className='text-[60px] font-bold text-purple-700 pt-[290px]'> <span className='text-white'>Hi!</span> It's me Ahanaf Hossain.</p>
          <p className='font-semibold text-white text-[27px] pb-[18px]'> A professional fullstack web developer.</p>
          <p className='font-semibold text-white text-[22px] pb-[100px]'>Transforming your vision into dynamic, full-stack masterpieces - where creativity meets code, and innovation drives results!</p>
          <div className="button pb-[200px]">
            <a className='no-underline mr-[25px] font-bold text-black px-[50px] transition-all duration-300 hover:bg-blue-800  hover: py-[12px] rounded bg-purple-700 animate-pulse ' href="#">Projects</a>
            <a className='no-underline font-bold text-black px-[50px] py-[12px] rounded bg-purple-700 animate-pulse ' href="#">Let's work togather</a>
          
          </div>
          
          </Col>
        </Row>
      </Container>
    </div>
   </section>
  )
}

export default Banner