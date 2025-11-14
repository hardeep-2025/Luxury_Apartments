import { Col, Container, Row } from 'react-bootstrap';
// import "./Enquire.csss"
import "./Enquire.css";
import sideImg from "./living-room-7121425 1.png"

function Enquire(){

    return(<>
    <div className='enquiery' style={{position:"relative"}}>
        <img src={sideImg} alt="" />
    <Container>
        <Row>

            <Col>

            <div>50</div>
            <div className='test'>40</div>
            </Col>
        </Row>
    </Container>
    </div>



    </>)
} 

export default Enquire