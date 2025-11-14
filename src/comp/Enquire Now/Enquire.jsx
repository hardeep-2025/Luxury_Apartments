import { Col, Container, Row } from 'react-bootstrap';
// import "./Enquire.csss"
import "./Enquire.css";
import sideImg from "./living-room-7121425 1.png"

function Enquire(){

    return(<>
    <div className='enquiery' style={{position:"relative"}}>
        <img src={sideImg} alt=""  style={{position:"absolute" , height:"100vh"}}/>
    <Container>
        <Row>

            <Col>
            <div className='mainEnquiryDiv'>

            <div className='emtyDivEnquiry'>50</div>
            <div className='test'> 
                <form action="" className='enquireForm'>
                   
                   <h1>Enquire Now</h1>
                   <p>Register Your Interest & Be Among the First to Know!</p>

                   <input type="text" placeholder='name' />
                   <input type="text" placeholder='Email ID' />
                   <input type="text" placeholder='Phone No' />
                   <input type="text" placeholder='Best Time To Call' />
                   <input type="text" placeholder='Message' />

                   <button>Submit Enquiry</button>

                </form>
                 </div>
                 </div>
            </Col>
        </Row>
    </Container>
    </div>



    </>)
} 

export default Enquire