import Table from 'react-bootstrap/Table';
import "./price.css"

import { Col, Container, Row } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import DataPopup from '../popUp/popUp';




function PriceList() {



  
  return (
<div className='priceListMainContiner'>

                         <Container>
                 <Row>
                      <Col>
                      <div className='priceListContiner'>
                      <h1>Price List</h1>
                      <div className='PriceListTableContiner'>    
                        <Table striped bordered hover>
      <thead className='PriceListTableHead'>
        <tr >
          <th scope="col" data-label="Unit Type">Unit Type</th>
          <th scope="col" data-label="SIZE">SIZE (Carpet) Sq.ft</th>
          <th scope="col" data-label="Price">Price (in)</th>
          <th scope="col" data-label=" "></th>
        </tr>
      </thead>
      <tbody className='PriceListTableBody'>
        <tr>
          <td className='TableDiffColor' data-label="Unit Type">3 BHK</td>
          <td className='TableDiffColor' data-label="SIZE">800 to 950 Sq.ft</td>
          <td className='TableDiffColor'data-label="Price">X.XX Cr*</td>
          <td className='TableDiffColor' data-label=" "><Popup trigger={ <button className='tableBtn'>Enquire Now</button>} modal nested>
                 <DataPopup/>
            </Popup></td>
        </tr>
        <tr>
          <td  data-label="Unit Type">3+1 BHK</td>
          <td data-label="SIZE">1100 to 1600 Sq.ft</td>
          <td data-label="Price">X.XX Cr*</td>
          <td data-label=" "><Popup trigger={ <button className='tableBtn'>Enquire Now</button>} modal nested>
                 <DataPopup/>
            </Popup></td>
        </tr>
        <tr>
          <td className='TableDiffColor' data-label="Unit Type">4 BHK</td>
          <td className='TableDiffColor' data-label="SIZE">1900 to 2000 Sq.ft</td>
          <td className='TableDiffColor' data-label="Price">X.XX Cr*</td>
          <td className='TableDiffColor' data-label=" "><Popup trigger={ <button className='tableBtn'>Enquire Now</button>} modal nested>
                 <DataPopup/>
            </Popup></td>
        </tr>
                <tr>
          <td data-label="Unit Type">4+1 BHK</td>
          <td data-label="SIZE">2300 to 2700 Sq.ft</td>
          <td data-label="Price">X.XX Cr*</td>
          <td data-label=" ">
            <Popup trigger={ <button className='tableBtn'>Enquire Now</button>} modal nested>
                 <DataPopup/>
            </Popup>
           </td>
        </tr>
      </tbody>
    </Table></div>
</div>
     </Col>
                      </Row>
</Container> 
    
    
    </div>

  );
}

export default PriceList;