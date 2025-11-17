import { Col, Container, Row } from 'react-bootstrap';
// import "./Enquire.csss"
import "./Enquire.css";
import sideImg from "./4fb91ffe7d7aee4b6be6b9d96bdc868cbe717c7b (1).jpg"
import 'react-phone-number-input/style.css'; 
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';
import { Element } from 'react-scroll';



function Enquire(){
              const [phoneNumber, setPhoneNumber] = useState();


    return(<> 
    <div name="ContactUs" id='ContactUs'>
    <div className='enquiery' style={{position:"relative"}}>
        <img className='sideImg' src={sideImg} alt=""/>
    <Container>
        <Row>

            <Col>
            <div className='mainEnquiryDiv'>

            <div className='emtyDivEnquiry'>50</div>
            <div className='enquireFormContaner'> 
                <form action="" className='enquireForm'>
                   
                   <h1>Enquire Now</h1>
                   <p>Register Your Interest & Be Among the First to Know!</p>

                   <input type="text" placeholder='name' />
                   <input type="text" placeholder='Email ID' />
                                 <PhoneInput className="phoneNOenquire"
                           placeholder="Enter phone number"
                            value={phoneNumber}
                              onChange={setPhoneNumber}
                                    defaultCountry="IN" 
                             />                   <input type="text" placeholder='Best Time To Call' />
                   <input type="text" placeholder='Message' />

                   <button>Submit Enquiry</button>

                </form>
                 </div>
                 </div>
            </Col>
        </Row>
    </Container>
    </div>
</div>


    </>)
} 

export default Enquire