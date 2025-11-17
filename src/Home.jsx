import { Outlet } from "react-router"
import Footer from "./comp/footer/footer"
import Header from "./comp/header/header"

function Home(){
    return(<>
                    < Header/>
                    <Outlet />
                    <Footer></Footer>

    </>)
}

export default Home