import { Col, Container, Row } from "react-bootstrap";
import gate from './img/gate (1) 1.png';
import park from './img/park 1.png';
import poker from './img/poker 1.png';
import road from './img/road 1.png';
import light from './img/smart-light 1.png';
import pool from './img/swimming-pool 1.png';
import style from './Highlight.module.css';
import { Element } from "react-scroll";

function HighLight(){
    const aboutLists = [
    {
        img:road,
        title: "Prime Location with Excellent Connectivity"
    },
    {
        img:poker,
        title: "Ultra-Modern Clubhouse & Wellness Center"
    },
    {
        img:gate,
        title: "Gated Community with 24x7 Security"
    },
    {
        img:light,
        title: "Smart Home-Enabled Apartments"
    },
    {
        img:pool,
        title: "Infinity Pool & Rooftop Lounge"
    },
    {
        img:park,
        title: "Landscaped Gardens & Jogging Tracks"
    }
]

    return(<>
    
    <div id="keyHighlight">
    <div className={style.background}>
       
        
            <Container>
      <Row>
        <Col> 
              
              <div className={style.main}>
                <div><h2 className={style.mainHead}>Key Highlight</h2><hr className={style.line} /></div>
                <div className={style.listDiv}>
                    {
                        aboutLists.map((li ,i)=>(<div key={i}>
                            <img src={li.img} alt="img" /><p>{li.title}</p>
                            </div>
 ))
                    }
                        
                    </div>
              </div>
        </Col> 
        </Row>
        </Container> 
    </div>
</div>



    </>)
}
export default HighLight