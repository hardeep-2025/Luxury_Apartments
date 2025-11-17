
import Footer from './comp/footer/footer';
import Header from './comp/header/header';
import 'react-slideshow-image/dist/styles.css'
import HighLight from './comp/keyHighLight/HightLight';
import FoodPlan from './comp/foodPlan/FoodPlan';
import PriceList from './comp/priceList/PriceList';
import Amenities from './comp/Amenities/Amenities';
import Gallery from './comp/gallery/Gallery';
import Connectivity from './comp/Connectivity/Connectivity';
import Enquire from './comp/Enquire Now/Enquire';
import Banner from './comp/banner/banner';
import AboutUs from './comp/AboutUs/AboutUs';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

function Layout(){

     const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
        // only scroll when navigation passed
        //  scrollTo
        console.log(location.state.offset);
        
        scroller.scrollTo(location.state.scrollTo, {
            smooth: true,
            duration: 500,
            offset: location.state.offset,
        });
        }
        // 👇 clear state so reload won't scroll
        window.history.replaceState({}, document.title);
    }, [location.state]);


    return(<>
    
                    <Banner/>
                    <AboutUs  />
                    <HighLight/>
                    <PriceList/>
                    <FoodPlan/>
                   <Amenities />
                    <Gallery/>
                   <Connectivity/>
                   <Enquire />




    </>)
}

export default Layout