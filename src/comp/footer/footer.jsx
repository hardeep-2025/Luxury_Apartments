import Style from './footer.module.css';
import logo from '../header/headerImg/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import youtube from "./footerImg/youtube.png"
import facebook  from "./footerImg/facebook.png"
import twitter from "./footerImg/twitter.png"
import { BrowserRouter, Link } from 'react-router';
import { useState } from 'react';
import ScrolBack from '../../SrollBack';

function Footer() {
   const [show, setShow] = useState (false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
<>

    <Container>
      <Row>
        <Col>   <footer className={Style.Footer}>
    <div className={Style.FooterFirstPart}>

    <div className={Style.FooterFirstPar1}><img className={Style.FooterFirstParimg1}  src={logo} alt="" />
    <p className={Style.FooterFirstPartPra1}>At the heart of innovation and excellence, we bring visionary real estate developments that redefine modern living. Our upcoming project on the Patiala–Chandigarh Highway blends design, comfort, and luxury to create spaces that inspire a better lifestyle.</p>
    </div>
    <div className={Style.FooterFirstPart2} >
        <h6 className={Style.FooterFirstPart2Head}>Useful Links</h6>
        <div className={Style.FooterFirstPart2ListDiv}>
            <div className={Style.FooterFirstPart2ListStyle}><ul>
             <li onClick={handleClose} >
                                     <ScrolBack to={"Aboutus"} offset={0} >About us</ScrolBack>
                              </li>
                                     <li  onClick={handleClose} >
                                     <ScrolBack to={"keyHighlight"} offset={-70} >Key Highlights</ScrolBack>
                                     </li>
                                     <li  onClick={handleClose} >
                                       <ScrolBack to={"priceList"} offset={-70} >Price List</ScrolBack>
                                       </li>
                                     <li  onClick={handleClose} >
                                       <ScrolBack to={"floorPlan"} offset={-100} >Floor list</ScrolBack>                    </li>
                                     
            </ul></div>
            <div className={Style.FooterFirstPart2ListStyle2}><ul>
              <li onClick={handleClose}>
                                      <ScrolBack to={"Amenities"} offset={-70} >Amenities</ScrolBack> 
                                      </li>
            <li  onClick={handleClose} >
                  <ScrolBack to={"gallery"} offset={-90} >Gallery</ScrolBack>                                       </li>
                  <li  onClick={handleClose} >
                   <ScrolBack to={"semlesConnectivity"} offset={-70} >Semless Connectivity</ScrolBack>                                      </li>
                  <li  onClick={handleClose} >
                <ScrolBack to={"ContactUs"} offset={-70} >Contact Us</ScrolBack></li>  
            </ul></div>
            </div>
                  
    </div>

    <div className={Style.FooterFirstPart3}>
        <h6>Follow Us</h6>
        <div className={Style.FooterFirstPart3ImgCounter}>
        <a href=" "><img src={facebook} alt="" /></a>
        <a href=" "><img src={twitter} alt="" /></a>
        <a href=" "><img src={youtube} alt="" /></a></div>
    </div>
    </div>
    

    <div className={Style.FooterSecoundPart}>
        <h5>Disclaimer</h5>
        <p>All information on this website is for representational and informational purposes only. Project details, visuals, and pricing are subject to change without prior notice. Users are advised to verify all information directly with the official developer before making any decisions.</p>
    </div>

   </footer></Col>
      </Row>
    </Container>
        <div className={Style.FooterThirdcontiner}>
    <Container>
      <Row>
        <Col>   
                <div className={Style.FooterThirdPart}>

        <div><span className={Style.underline}><Link to="/termAndCondtion" target='blank'>Terms & Conditions</Link> </span>and<span className={Style.underline}><Link to="/PrivacyAndPolicy" target='blank'> Privacy Policy</Link></span></div>
        <div>Crafted By: <span className={Style.underline}><Link to="/PrivacyAndPolicy">IosAndWeb Technologies</Link></span></div>
           </div>

        </Col>
      </Row>
    </Container>
    </div>


</>
  );
}

export default Footer;
