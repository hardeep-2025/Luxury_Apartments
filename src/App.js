import './App.css';
import Banner from './comp/banner/banner';
import AboutUs from './comp/AboutUs/AboutUs';
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

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>

                < Header/>
                    <Banner/>
                    <AboutUs/>
                    <HighLight/>
                    <PriceList/>
                    <FoodPlan/>
                   <Amenities />
                    <Gallery/>
                   <Connectivity/>
                   <Enquire />

                <Footer/>
</>
  );
}

export default App;
