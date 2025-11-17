
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TermAndPolicy.css"
function PrivacyAndPolicy(){
    return(<>
        <Container>
      <Row>
        <Col>  
        
        <div className='termAndPolicy'>
            <h1>Privacy Policy</h1>
            <p>This website is not the official one; it is only meant to be used for informative purposes. In our commitment to safeguarding your personal information, we have formulated this comprehensive privacy policy to protect your interests and data on our website</p>
            <h3>Update of Privacy Policy</h3>
            <p>This privacy policy is open to revision and review at any time, without notification or consent. Therefore, please re-visit the website and regularly go through the terms and conditions of this privacy policy to stay informed about the modifications that have been made.</p>
            <h3>User Information</h3>
            <p>By accessing our website, you accept our terms and give permission for us to collect and use any information you voluntarily submit. While certain visits might not require personal information, others could in order to provide access to particular links or websites. We use the information you have given us to deliver information and updates, confirm receipt of your message, and offer pertinent goods and services. We do not share personal information with outside parties, and you have the option to unsubscribe from our email list.</p>
            <h3>Security</h3>
            <p>Sensitive information is encrypted during transmission between the client and server. We restrict employee access to your personal information and hold them to high levels of confidentiality. We may use cookies for security, session continuity, and customization purposes. Rejecting cookies may limit your access to certain services or features. <br />This website is not the official one; it is only meant to be used for informative purposes.</p>
        </div>
        </Col>
        </Row>
        </Container> 
    </>)
}
export default PrivacyAndPolicy