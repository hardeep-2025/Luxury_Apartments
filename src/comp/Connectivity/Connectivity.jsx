import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./connectivity.css";

function Connectivity() {
  return (
    <div className="connectivityMainContainer">
      <Container>
        <Row>
          <Col>
            <div className="connectivityContent">
              <h1>Seamless Connectivity</h1>
              <p className="connectivityDesc">
                Strategically located on the Patiala–Chandigarh Highway, this project offers exceptional
                access to everything that defines modern living — business hubs, educational institutions,
                healthcare facilities, and entertainment zones — all just minutes away.
                <br /><br />
                Enjoy the perfect blend of urban convenience and peaceful surroundings, making it one of
                the most sought-after addresses in the region.
              </p>


                {/* Schools & Colleges */}
                <div className="connectivityTableBlock">
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr >
                        <th scope="col"
                        data-label="Schools & Colleges">Schools & Colleges</th>
                        <th scope="col" data-label="Hospitals">Hospitals</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td data-label="schSchools & Colleges :- ">Ryan International School, Zirakpur: 10 mins</td>
                      <td data-label="Hospitals"> Alchemist Hospital, Panchkula : 20 mins</td></tr>

                      <tr><td data-label="schSchools & Colleges">Delhi Public School (DPS), Zirakpur: 10 mins</td>
                      <td data-label   ="Hospitals">Max Super Specialty Hospital, Mohali : 25 mins</td></tr>

                      <tr><td data-label="schSchools & Colleges">St. Xavier’s High School, Dera Bassi: 10 mins</td>
                      <td data-label="Hospitals">Ayush Hospital, Dera Bassi : 5 mins</td></tr>

                      <tr><td data-label="schSchools & Colleges">Chitkara University: 15 mins</td>
                      <td data-label="Hospitals">Civil Hospital, Dera Bassi : 6 mins</td></tr>

                      <tr><td data-label="schSchools & Colleges">Chandigarh University: 25 mins</td>
                      <td data-label="Hospitals">Paras Hospital, Zirakpur : 12 mins</td></tr>

                      <tr><td data-label="schSchools & Colleges">Thapar Institute of Engineering & Technology, Patiala: 30 mins</td>
                      <td data-label="Hospitals">Amcare Hospital, Zirakpur : 10 mins</td></tr>
                    </tbody>
                      <thead>
                      <tr >
                        <th scope="col" data-label="Shopping Malls & Retail Destinations">Shopping Malls & Retail Destinations</th>
                        <th scope="col" data-label="Entertainment & Dining">Entertainment & Dining</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>VR Punjab Mall, Mohali : 25 mins</td>
                      <td>PVR Cinemas, Zirakpur : 10 mins</td></tr>

                      <tr><td>Elante Mall, Chandigarh : 25 mins</td>
                      <td>The Village Resort & Lounge : 8 mins</td></tr>

                      <tr><td>Cosmo Mall, Zirakpur : 10 mins</td>
                      <td>Haldiram’s Family Restaurant, Zirakpur : 10 mins</td></tr>

                      <tr><td>Dhillon Plaza, Zirakpur : 8 mins</td>
                      <td>Chandigarh Club & Cafés Sector 26 : 25 mins</td></tr>

                      <tr><td>City Centre, Dera Bassi : 5 mins</td>
                      <td>Highway Food Courts & Lounges : 3–5 mins</td></tr>

                      <tr><td>Best Price (Walmart) Wholesale, Zirakpur : 12 mins</td>
                      <td> </td></tr>
                    </tbody>  
                      <thead>
                      <tr >
                        <th scope="col" data-label="Other Connectivity Highlights">Other Connectivity Highlights</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>Chandigarh International Airport : 20 mins</td>
                          <td>Direct Access to NH-7 & NH-152</td>
                      </tr>
                      <tr>
                        <td>Patiala Airport : 30 mins</td>
                        <td>Upcoming Ring Road & Expressway Links</td>
                        </tr>
                      <tr><td>Chandigarh Railway Station : 20 mins</td>
                         <td>Upcoming Ring Road & Expressway Links</td>
                      </tr>
                      <tr><td>ISBT Chandigarh (Sector 43) : 25 mins</td>
                      <td>Quick Access to Delhi–Ambala Highway (NH-44)</td></tr>

                    </tbody>
                  </Table>
                </div>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Connectivity;
