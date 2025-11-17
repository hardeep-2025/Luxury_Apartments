import React from 'react'
import "./Amenities.css"
// import car  from "./AmenitiesImg/car-price.jpg"
import car  from "./AmenitiesImg/car-parking (1) 1.png"

import bowling  from "./AmenitiesImg/bowling (1) 1.png"
import cctv  from "./AmenitiesImg/cctv 1.png"
import electricGenerator  from "./AmenitiesImg/electric-generator (1) 1.png"
import gate  from "./AmenitiesImg/gate (2) 1.png"
import homeSecurity  from "./AmenitiesImg/home-security 1.png"
import nightClub  from "./AmenitiesImg/night-club 1.png"
import cplaygroundar  from "./AmenitiesImg/playground (1) 1.png"
import treadmill  from "./AmenitiesImg/treadmill (1) 1.png"
import wifiRouter  from "./AmenitiesImg/wifi-router 1.png"
import yoga  from "./AmenitiesImg/yoga (1) 1.png"
import pool  from "./AmenitiesImg/pool (1) 1.png"
import { Col, Container, Row } from 'react-bootstrap'
import { Element } from 'react-scroll'

function Amenities() {
  let data=[
  {
    img:nightClub,
    title:"Grand Clubhouse "
  },
  {
    img:pool,
    title:"Swimming Pool & Sun Deck "
  },  {
    img:bowling,   
    title:"Indoor Games & Entertainment Zone "
  },
  {
    img:cplaygroundar,
    title:"Kids’ Play Area "
  },
  {
    img:treadmill,
    title:"Fully Equipped Gymnasium "
  },
  {
    img:yoga,
    title:" Yoga & Meditation Studio"
  },
  {
    img:homeSecurity,
    title:"Smart Home Automation "
  },
  {
    img:wifiRouter,
    title:"High-Speed Wi-Fi Connectivity "
  },
  {
    img:electricGenerator,
    title:"24x7 Power Backup & Water Supply "
  },
  {
    img:cctv,
    title:"24x7 CCTV Surveillance "
  },

  {
    img:gate,
    title:"Gated Community with Access Control "
  },
  {
    img:car,
    title:"Dedicated Parking for Residents & Visitors "
  }
]
  return (
<div name="Amenities" id='Amenities'>

    <section id='Amenities'>
    <div className='amenitiesMainContiner'>
                           
                           

                               <Container>
                 <Row>
                     <Col>
                      <div className='amenitiesContiner'>
                      <h1>Amenities</h1>
                      </div>
                     </Col>
                 </Row>
                 <Row className='amenitiesRow'>
                     <Col className='amenitiesCol'>
                     <div className='amenitiesContanir'>
                       {data.map((item, index) => (
                         <div key={index} className="amenity-item">
                           <img src={item.img} alt={item.title} />
                           <h5>{item.title}</h5>
                         </div>
                       ))}
                       </div>
                     </Col>
                      </Row>
                      </Container>
    </div></section>
    </div>
  )
}

export default Amenities