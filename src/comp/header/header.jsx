import logo from './headerImg/logo.png';
import Phone from './headerImg/phone (10) 1.png';
import menu from './headerImg/menu (15) 1.png';
import Style from './header.module.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import DataPopup from '../popUp/popUp';




function Header() {

    
  const [show, setShow] = useState (false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
        <header className={Style.header}>
            <div >
               <a href=" "><img src={logo} alt="logo" className={Style.HeaderLogo} /> </a>
            </div>
            <div className={Style.HeaderContent}>

  <div>
            <Popup trigger={<button className={Style.HeaderEnqureBtn}>Enquire Now</button>} modal nested>
                 <DataPopup/>
            </Popup>
        </div>



                
                <div className={Style.headerPhoneNoContainer}> <img src={Phone} className={Style.HeaderPhonePng} alt="" />
                    <p className={Style.HeaderPhoneNO}> <a href="tel:+91 0000000000">+91 0000000000</a></p></div>
 
                    <div><Button variant="primary" onClick={handleShow} className={`me-2  ${Style.HeaderMenu}` }>
                         <img src={menu} className={Style.MenuPng} alt="" /> 
                        </Button></div>
                        {/* 
                        
                        
                        */}
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                         <Offcanvas.Header closeButton>
                          </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className={Style.MenuListItem}>
                                     <li><a href="aboutUs">About the Project</a></li>
                                     <li><a href="keyHighlight">Key Highlights</a></li>
                                     <li><a href="priceList">Price List</a></li>
                                     <li><a href="floorPlan">Floor Plan</a></li>
                                     <li><a href="Amenities">Amenities</a></li>
                                     <li><a href="gallery">Gallery</a></li>
                                     <li><a href="semlesConnectivity"> Seamless Connectivity</a></li>
                                     <li><a href=" ">Contact Us</a></li>
                                </ul>
                            </Offcanvas.Body>
                                </Offcanvas>

            </div>
        </header>
      </>
  );
}

export default Header;

