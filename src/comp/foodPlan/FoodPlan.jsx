import style from './FoodPlan.module.css';
import img from "./Foodimg/5742776_2978394 1 (1).png"
import { Col, Container, Row } from 'react-bootstrap';

function FoodPlan(){
    return(
        <>     
              <div  className={style.outer}> 
                <h2>Floor Plan</h2></div>      
                            <div className={style.back}>

                     <Container>
                 <Row>
                      <Col>
                      <div className={style.main}>
                        <div className={style.First}>
                             <h1 className={style.Head}>Unlock Exclusive Floor Plans  </h1>
                             <button className={style.btn}>Register Now for Early Access</button>
                        </div>
                        <div className={style.imgContainer}>
                            <img src={img} alt="" />
                        </div>
                      </div>


                      </Col>
                      </Row>
</Container> </div> 
        </>
    )
}
export default FoodPlan