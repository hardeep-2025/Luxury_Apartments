import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

 
 export default function ScrolBack({to,offset, children}){

  const location = useLocation();
  


  const navigate = useNavigate()
const HandleBackScroll =() =>{

    console.log(location.pathname)
    if (location.pathname === "/") {
        scroller.scrollTo(to,{
            smoth:true,
            duration:500,
            offset:offset
        })
        
    } else {
        console.log(to)
        navigate("/", { state: { scrollTo: to , offset:offset} });
    }


}

    return(
    <span onClick={HandleBackScroll}>
        {children}
    </span>
  )
 

}