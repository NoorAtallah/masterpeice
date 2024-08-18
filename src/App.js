import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './componants/header';
// import Home from './pages/home';
// import Login from './components/login';
import Home from './pages/home';
import { Foot } from './componants/footer';
import FootprintsTrail from './componants/FootprintsTrail';
import Login from './componants/login';
import ProductPage from './componants/shop';
import ContactUs from './componants/contactus';
import ProductDetails from './componants/product';
import Signup from './componants/signup';
import Example from './componants/trans';
import VetSignup from './componants/vet-login';
import CatInfo from './componants/CatInfo';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FootprintsTrail /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/trans" element={<Example />} />
          <Route path="/vet-login" element={<VetSignup />} />
          <Route path="/CatInfo" element={<CatInfo />} /> 
          
        </Routes>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
