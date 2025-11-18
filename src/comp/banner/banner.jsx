import Style from './banner.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imag from './Gemini_Generated_Image_mrxe3jmrxe3jmrxe 1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Banner() {

  const settings = {
    dots:false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
<>

      <div className={Style.outerDiv}>      
            <Slider {...settings} className="Banner-slider">
                          <div className={Style.main} >

                  <Container className={Style.container}>
                 <Row className={Style.row}>
                      <Col className={Style.Col}>
             <div className={Style.banner}>
            <div className={Style.ContentBanner}>
                <h1 className={Style.mainHeading}>Unveiling Soon</h1> 
                <p className={Style.mainSubHeading}>Discover Luxury Living on Patiala–Chandigarh Highway</p>
                <p className={Style.subHeading}>The Future of Refined Living <span className={Style.lineBreak}></span> Begins Here</p>
            </div>


            <div className={Style.BannerImgContner}> 

                <img src={imag} alt="" />
                </div>
            </div>

                            </Col>
      </Row>
    </Container>  
                                </div>

                              <div className={Style.main} >

                  <Container>
                 <Row>
                      <Col>
             <div className={Style.banner}>
            <div className={Style.ContentBanner}>
                <h1 className={Style.mainHeading}>Unveiling Soon</h1> <hr className={Style.line} />
                <p className={Style.mainSubHeading}>Discover Luxury Living on Patiala–Chandigarh Highway</p>
                <p className={Style.subHeading}>The Future of Refined Living Begins Here</p>
            </div>


            <div className={Style.BannerImgContner}> 

                <img src={imag} alt="" />
                </div>
        </div>
        
        {/* <div>
             <div className={Style.banner}>
            <div className={Style.ContentBanner}>
                <h1 className={Style.mainHeading}>Unveiling Soon</h1> <hr className={Style.line} />
                <p className={Style.mainSubHeading}>Discover Luxury Living on Patiala–Chandigarh Highway</p>
                <p className={Style.subHeading}>The Future of Refined Living Begins Here</p>
            </div>


            <div className={Style.BannerImgContner}> 

                <img src={imag} alt="" />
                </div>
            </div>
        </div>
        <div>
            <div className={Style.banner}>
            <div className={Style.ContentBanner}>
                <h1 className={Style.mainHeading}>Unveiling Soon</h1> <hr className={Style.line} />
                <p className={Style.mainSubHeading}>Discover Luxury Living on Patiala–Chandigarh Highway</p>
                <p className={Style.subHeading}>The Future of Refined Living Begins Here</p>
            </div>


            <div className={Style.BannerImgContner}> 

                <img src={imag} alt="" />
                </div>
            </div>
        </div> */}
     
                    </Col>
      </Row>
    </Container>  
              </div>

     </Slider>
        
 </div>
</>
  );
}

export default Banner;
