import Product_nhan from './component/Nhan/Product_nhan';
import Footer from '../src/component/Hieu/Footer';
import Dangnhap from '../src/component/Nhan/Dangnhap'
import Nav from './component/Hieu/Nav';
import Product from './component/Hieu/Product';
import Dangki from './component/Nhan/Dangki';
import Main from './component/Quan/Main';
import './App.css';
import P40pro from './component/Hieu/P40pro';
import P40pro_cong from './component/Hieu/p40pro_cong';
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
        <Route path="/" exact element={<Main/>} />
        <Route path="/phone" exact element={<Product/>} />
        <Route path="/more" exact element={<Product_nhan/>} />
        <Route path="/dn" exact element={<Dangnhap/>} />
        <Route path="/dk" exact element={<Dangki/>} />
        <Route path="/p40pro" exact element={<P40pro/>} />
        <Route path="/p40pro_cong" exact element={<P40pro_cong/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App_hieu;
