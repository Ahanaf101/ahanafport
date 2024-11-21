import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
     <section>
        <div className="contact bg-black">
            <Container>
            <Row>
                <Col lg={12}>
                  <p className='text-[70px] text-center font-bold pt-[120px] text-purple-700'> Contact</p>
                  <p className='text-center text-white font-semibold pb-[120px]'>Lets Work Togather</p>
                </Col>
                <Col lg={4}>
                 <div className="gg h-[300px] w-[300 px] bg-purple-700 text-center mb-6 rounded">
                    <p className='pt-[100px] text-[30px]  font-bold '>E-mail</p>
                    <p>ahanafh60@gmail.com</p>
                 </div>
                 <div className="gg h-[300px] w-[300 px] bg-purple-700 text-center mb-6 rounded">
                    <p className='pt-[100px] text-[30px] font-bold'>WatsApp</p>
                    <p>0179932286</p>
                 </div>
                 <div className="gg h-[300px] w-[300 px] bg-purple-700 text-center rounded mb-[50px]">
                    <p className='pt-[100px] text-[30px] font-bold'>facebook</p>
                    <p>Ahanafhossainahanaf</p>
                 </div>
                </Col>
                <Col className='text-center' lg={{span:7,offset:1}}>
                   <p className='text-[50px] pb-[30px] font-bold text-white' >Share Your Thoughts</p>
                   <input className='py-[15px] pr-[200px] mb-4 pl-[30px] bg-purple-700 rounded' placeholder='Enter your name' type="text" />
                   <input className=' mb-4 py-[15px] pr-[200px] pl-[30px] bg-purple-700 rounded' placeholder='Enter your email' type="text" />
                   <input className='pt-[15px] pb-[100px] pr-[200px] pl-[30px] bg-purple-700 rounded' placeholder='Enter your name' type="text" />
                        <div className="send pt-[60px]">
                            <a href="#" className='no-underline text-black py-[12px] px-[40px] bg- bg-purple-700 rounded'>Send </a>
                        </div>
                </Col>
            </Row>
        </Container> 
        </div>
       
     </section>
  )
}

export default Contact