
import iconCar from "./icons/car (1).png"
import businessman from "./icons/businessman.png"
import catalog from "./icons/catalog.png"
import money from "./icons/money.png"
import telephone from "./icons/telephone.png"
import logo from './icons/logo.png';
import close from './icons/close.png';
import "./popUp.css";
import { Col, Container, Row } from "react-bootstrap"    
import React, { useState } from 'react';
import 'react-phone-number-input/style.css'; 
import PhoneInput from 'react-phone-number-input';
function DataPopup({handleClosePOP}){
    
  const list = [

    {img:telephone,
      Text:"Instant Call Back"
    },    {img:iconCar,
      Text:"Book a Free Site Tour"
    },    {img:money,
      Text:"Verified Price Quote"
    },    {img:businessman,
      Text:"Expert Guidance"
    },    {img:iconCar,
      Text:"Expert Guidance"
    },    {img:catalog,
      Text:"Get Brochure & Prices Instantly"
    }
  ]
          const [phoneNumber, setPhoneNumber] = useState();

    return(<>
            
            <div className="popUpContiner"> 
              
              <img src={close} alt="" onClick={()=>{handleClosePOP()} }className="closepng" />
               <div className="popUplogo" ><img src={logo} alt="logo" /></div>
               <div className="popupHeadingAndPara">
                <h1>Enquire Now to Know More</h1>
                <p>Connect with Our Team for Brochure, Prices & Site Visit Details</p>
                <div className="popupData">
                  <div  className="popSideData"><h4>What You Get</h4>
                  <ul>
                  {list.map((li,i)=>(<li key={i}><img src={li.img} alt={i} />{li.Text}</li> ))}
                  </ul>
                  </div>
                  <div className="popUpFormData">
                    <form className="popUpform">
                      <input type="text" placeholder='Name' />
                      <input type="text" placeholder='Email(optional)' />
                                 <PhoneInput className="phoneNoPopUp"
                           placeholder="Enter phone number"
                            value={phoneNumber}
                              onChange={setPhoneNumber}
                                    defaultCountry="IN" 
                             />
                      <div className="popUpfomrBtnGroup">
                      <button >1cr to 1.5cr</button>
                      <button >1.5cr to 2cr</button>
                      <button >2cr onwoards</button>
                      </div>
                      <p><input type="checkbox" id='checkbox' />I agree to be contacted by 'Ananta Aspire' and agents via WhatsApp, SMS, phone, email etc.</p>
                      <button>enquire now</button>
                    </form>
                  </div>
                </div>
               </div>
            </div>
            
                </>)
}
export default DataPopup