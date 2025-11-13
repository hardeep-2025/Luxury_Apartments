import Style from './footer.module.css';
import logo from '../header/headerImg/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import youtube from "./footerImg/youtube.png"
import facebook  from "./footerImg/facebook.png"
import twitter from "./footerImg/twitter.png"

function Footer() {
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
              
            <li><a href=" " >About</a></li>
            <li><a href=" " >Key Highlights</a></li>
            <li><a href=" " >Price List</a></li>
            <li><a href=" " >Floor Plan</a></li>
            </ul></div>
            <div className={Style.FooterFirstPart2ListStyle2}><ul>
            <li><a href=" ">Amenities </a></li>
            <li><a href=" ">Gallery</a></li>
            <li><a href=" ">Connectivity</a></li>
            <li> <a href=" ">Contact</a></li>
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

        <div><span className={Style.underline}><a href=" ">Terms & Conditions</a> </span>and<span className={Style.underline}><a href=" "> Privacy Policy</a></span></div>
        <div>Crafted By: <span className={Style.underline}><a href=" ">IosAndWeb Technologies</a></span></div>
           </div>

        </Col>
      </Row>
    </Container>
    </div>


</>
  );
}

export default Footer;
