import Table from 'react-bootstrap/Table';
import "./price.css"

import { Col, Container, Row } from 'react-bootstrap';



function PriceList() {
  return (
<>

                         <Container>
                 <Row>
                      <Col>
                      <div className='priceListContiner'>
                      <h1>Price List</h1>
                      <div className='PriceListTableContiner'>    
                        <Table striped bordered hover>
      <thead className='PriceListTableHead'>
        <tr >
          <th scope="col">Unit Type</th>
          <th scope="col">SIZE (Carpet) Sq.ft</th>
          <th scope="col">Price (in)</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody className='PriceListTableBody'>
        <tr>
          <td className='TableDiffColor' data-label="Unit Type">3 BHK</td>
          <td className='TableDiffColor' data-label="SIZE">800 to 950 Sq.ft</td>
          <td className='TableDiffColor'data-label="Price">X.XX Cr*</td>
          <td className='TableDiffColor' data-label=" "><button className='tableBtn'>Enquire Now</button></td>
        </tr>
        <tr>
          <td>3+1 BHK</td>
          <td>1100 to 1600 Sq.ft</td>
          <td>X.XX Cr*</td>
          <td><button className='tableBtn'>Enquire Now</button></td>
        </tr>
        <tr>
          <td className='TableDiffColor'>4 BHK</td>
          <td className='TableDiffColor'>1900 to 2000 Sq.ft</td>
          <td className='TableDiffColor'>X.XX Cr*</td>
          <td className='TableDiffColor'><button className='tableBtn'>Enquire Now</button></td>
        </tr>
                <tr>
          <td>4+1 BHK</td>
          <td>2300 to 2700 Sq.ft</td>
          <td>X.XX Cr*</td>
          <td><button className='tableBtn'>Enquire Now</button></td>
        </tr>
      </tbody>
    </Table></div>
</div>
     </Col>
                      </Row>
</Container> 
    
    
    </>

  );
}

export default PriceList;