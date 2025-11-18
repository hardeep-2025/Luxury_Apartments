import Popup from 'reactjs-popup';
import style from './FoodPlan.module.css';
import img from "./Foodimg/5742776_2978394 1 (1).png"
import { Col, Container, Modal, Row } from 'react-bootstrap';
import DataPopup from '../popUp/popUp';
import { Element } from 'react-scroll';
import { useState } from 'react';

function FoodPlan(){

       const [showPop, setShowPop] = useState(false);
      
        const handleClosePOP = () => setShowPop(false);
        const handleShowPOP = () => setShowPop(true);
       
    return(
        <>     
        <div name="floorPlan"  id='floorPlan'>
              <div  className={style.outer}> 
                <h2>Floor Plan</h2></div>      
                            <div className={style.back}>

                     <Container>
                 <Row>
                      <Col>
                      <div className={style.main}>
                        <div className={style.First}>
                             <h1 className={style.Head}>Unlock Exclusive Floor Plans  </h1>
                    <button variant="primary" onClick={handleShowPOP} className={style.btn} >Register Now for Early Access</button>
                  <Modal
                    show={showPop}
                    onHide={handleClosePOP}
                    size='lg'
                    backdrop="static"
                    keyboard={false}>
                 <DataPopup  handleClosePOP={handleClosePOP} />
                    </Modal>

                        </div>
                        <div className={style.imgContainer}>
                            <img src={img} alt="" />
                        </div>
                      </div>


                      </Col>
                      </Row>
</Container> </div> 
</div>
        </>
    )
}
export default FoodPlan