import Nmain from './component/Nhan/Nmain';
import Product_nhan from './component/Nhan/Product_nhan';
import Footer from '../src/component/Hieu/Footer';
import Dangnhap from '../src/component/Nhan/Dangnhap'
import Nav from './component/Hieu/Nav';
import Product from './component/Hieu/Product';
import Slider from './component/Quan/Slider';
import Dangki from './component/Nhan/Dangki';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

function App_hieu() {
  return (
    <><BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" exact element={<Slider/>} />
        <Route path="/phone" exact element={<Product/>} />
        <Route path="/more" exact element={<Product_nhan/>} />
        <Route path="/dn" exact element={<Dangnhap/>} />
        <Route path="/dk" exact element={<Dangki/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
  </>
  );
}

export default App_hieu;
