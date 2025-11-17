import './App.css';
import Banner from './comp/banner/banner';
import AboutUs from './comp/AboutUs/AboutUs';
import Footer from './comp/footer/footer';
import Header from './comp/header/header';
import 'react-slideshow-image/dist/styles.css'
import 'reactjs-popup/dist/index.css';
import TermAndPolicy from './policey/TermAndPolicy';
import PrivacyAndPolicy from './policey/PrivacyAndPolicy';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout';
// import 'reactjs-popup/dist/index.css';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<>
   

     <BrowserRouter>
       < Header/>

     <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/termAndCondtion" element={<TermAndPolicy></TermAndPolicy>} />
        <Route path="/PrivacyAndPolicy" element={<PrivacyAndPolicy></PrivacyAndPolicy> } />

     </Routes>
     {/* <Home></Home> */}
     <Footer/>
     </BrowserRouter>

</>
  );
}

export default App;
