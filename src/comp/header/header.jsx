import logo from './headerImg/logo.png';
import Phone from './headerImg/phone (10) 1.png';
import menu from './headerImg/menu (15) 1.png';
import Style from './header.module.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import DataPopup from '../popUp/popUp';
import ScrolBack from '../../SrollBack';
import Modal from 'react-bootstrap/Modal';





function Header() {

     const [showPop, setShowPop] = useState(false);

  const handleClosePOP = () => setShowPop(false);
  const handleShowPOP = () => setShowPop(true);
 
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
          <button variant="primary" onClick={handleShowPOP} className={Style.HeaderEnqureBtn}>Enquire Now</button>
      <Modal
        show={showPop}
        onHide={handleClosePOP}
        size='lg'
        backdrop="static"
        keyboard={false}>
                         <DataPopup  handleClosePOP={handleClosePOP} />
        </Modal>

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
                                <ul className={  Style.MenuListItem}>
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
                                     <li onClick={handleClose}>
                                      <ScrolBack to={"Amenities"} offset={-70} >Amenities</ScrolBack> 
                                      </li>

                                     <li  onClick={handleClose} >
                                      <ScrolBack to={"gallery"} offset={-90} >Gallery</ScrolBack>                                       </li>
                                     <li  onClick={handleClose} >
                                       <ScrolBack to={"semlesConnectivity"} offset={-70} >Semless Connectivity</ScrolBack>                                      </li>
                                     <li  onClick={handleClose} >
                                       <ScrolBack to={"ContactUs"} offset={-70} >Contact Us</ScrolBack></li>                                </ul>
                            </Offcanvas.Body>
                                </Offcanvas>



            </div>
        </header>
      </>
  );
}

export default Header;

