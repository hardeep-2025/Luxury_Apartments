import Style from './footer.module.css';
import logo from '../header/headerImg/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import communication from "./footerImg/communication (4) 1 (1).png"
import social  from "./footerImg/social (11) 1 (1).png"
import twitter from "./footerImg/twitter (18) 1 (1).png"
import styles from 'yet-another-react-lightbox/styles.css';

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
            <li>About</li>
            <li>Key Highlights</li>
            <li>Price List</li>
            <li>Floor Plan</li>
            </ul></div>
            <div className={Style.FooterFirstPart2ListStyle}><ul>
            <li>About</li>
            <li>Key Highlights</li>
            <li>Price List</li>
            <li>Floor Plan</li>
            </ul></div>
            </div>
    </div>

    <div className={Style.FooterFirstPart3}>
        <h6>Follow Us</h6>
        <div className={Style.FooterFirstPart3ImgCounter}><img src={communication} alt="" />
        <img src={twitter} alt="" />
        <img src={twitter} alt="" /></div>
    </div>
    </div>
    

    <div className={Style.FooterSecoundPart}>
        <h5>Disclaimer</h5>
        <p>All information on this website is for representational and informational purposes only. Project details, visuals, and pricing are subject to change without prior notice. Users are advised to verify all information directly with the official developer before making any decisions.</p>
    </div>
    <div className={Style.FooterThirdPart}>
        <div>Terms & Conditions and Privacy Policy</div>
        <div>Crafted By: IosAndWeb Technologies</div>
    </div>
   </footer></Col>
      </Row>
    </Container>

</>
  );
}

export default Footer;
