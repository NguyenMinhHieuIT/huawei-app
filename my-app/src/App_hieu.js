import Nmain from "./component/Nhan/Nmain";
import Product_nhan from "./component/Nhan/Product_nhan";
import Footer from "../src/component/Hieu/Footer";
import Dangnhap from "../src/component/Nhan/Dangnhap";
import Nav from "./component/Hieu/Nav";
import Product from "./component/Hieu/Product";
import "./App.css";
import Slider from "./component/Quan/Slider";

function App_hieu() {
  return (
    <>
      <Nav />
      {/* <Product/> */}
      <Slider/>
      <Footer />
    </>
  );
}

export default App_hieu;