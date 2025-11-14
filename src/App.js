import './App.css';
import Banner from './banner/banner';
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
                    <Gallery/>
                    <Connectivity/>

      <Amenities />
                <Footer/>
</>
  );
}

export default App;
