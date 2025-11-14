import { Col, Container, Row } from "react-bootstrap";
import style from './AboutUs.module.css';
import imgAbout from './imgAboutUs.png';
 
 
 
 function AboutUs(){
    return (
        <>

            <Container>
      <Row>
        <Col>  
             <div className={style.AboutUs} id="aboutUs" >
                <div className={style.upperContent}>
                    <p>A new landmark in premium living is taking shape — offering contemporary design, world-class amenities, and seamless connectivity for a lifestyle beyond ordinary.</p>
                      
                      <div className={style.btncontanier}><button className={style.upperbtn1}>Register for Early Access</button><button   className={style.upperbtn2}>Get Brochure / Price Details</button></div>
                </div>
                <div className={style.secoundContent} >
                    <div className={style.secoundContentHead}><h2 className={style.mainHading} >About the Project</h2> 

                    <hr className={style.line} /></div>
                    <div className={style.subContainer}  >
                    <div className={style.imgDivSet}>
                        <div className={style.imgCountainer}>
                         <div className={style.ematyDiv}>

                        </div >
                        <img src={imgAbout} alt="" />
                        </div>

                    </div>
                    <div className={style.contant}>
                           <div><h3 className={style.contantHead}>A Vision of Luxury, Crafted for the Modern Elite</h3></div>
                           <div><p className={style.contantdata}>Experience a lifestyle that blends sophistication with serenity. This upcoming residential marvel on the Patiala–Chandigarh Highway is designed to elevate everyday living — from grand entrances to lush green landscapes, from smart interiors to exclusive leisure zones.</p>
                           
                           <p className={style.subContantData}>It’s not just a home. <br />  It’s your statement of success.</p>
                           </div>
                           <div> <button className={style.contantbtn}>Enquire Now</button></div>
                    </div>
                </div>
                </div>
             </div>

        </Col> 
        </Row>
        </Container>
        </>
    )
 

 }
 export default AboutUs