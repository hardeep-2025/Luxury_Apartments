import logo from './headerImg/logo.png';
import Phone from './headerImg/phone (10) 1.png';
import menu from './headerImg/menu (15) 1.png';
import Style from './header.module.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';




function Header() {
    
  const [show, setShow] = useState (false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
        <header className={Style.header}>
            <div className={Style.HeaderLogo}>
                <img src={logo} alt="logo" /> 
            </div>
            <div className={Style.HeaderContent}>
                <button className={Style.HeaderEnqureBtn}>Enquire Now</button>
                    <img src={Phone} className={Style.HeaderPhonePng} alt="" />
                    <p className={Style.HeaderPhoneNO}>+91 0000000000</p>
                    <div><Button variant="primary" onClick={handleShow} className={`me-2  ${Style.HeaderMenu}` }>
                         <img src={menu} className={Style.MenuPng} alt="" /> 
                        </Button></div>
                        {/* 
                        
                        
                        */}
                        <Offcanvas show={show} onHide={handleClose} placement='end'>
                         <Offcanvas.Header closeButton>
                         <Offcanvas.Title >Menu</Offcanvas.Title>
                          </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className={Style.MenuListItem}>
                                    <li>Home</li> <hr />
                                    <li>About_Us</li><hr />
                                    <li>New Product</li><hr />
                                    <li>Gallery</li><hr />
                                    <li>Contact Us</li><hr />
                                </ul>
                            </Offcanvas.Body>
                                </Offcanvas>

            </div>
        </header>
      </>
  );
}

export default Header;

