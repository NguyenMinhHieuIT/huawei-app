import React from "react";
import Nav from "../Hieu/Nav";
import Footer from "../Hieu/Footer";
import Slider from "../Quan/Slider";
import Card from "../Quan/Card";
import Card2 from "../Quan/Card2";
import Card3 from "../Quan/Card3";
import CardList from "../Quan/CardList";
import Card4 from "../Quan/Card4";
import CardList2 from "../Quan/CardList2";
import Card5 from "./Card5";
import CardList3 from "./CardList3";
import Card6 from "./Card6";
import CardList4 from "./CardList4";
import LienHe from "./LienHe";
function Main() {
  return (
    <div>
      <Nav />
      <Slider />
      <Card />
      <Card2 />
      <div className="TextCont">
        <div className="Tex1">Xem thêm</div>
        <div className="Tex2">Máy tính xách tay</div>
      </div>
      <Card3 />
      <CardList />
      <div className="TextCont">
        {/* <div className="Tex1">Máy tính bảng</div> */}
        <div className="Tex2">Máy tính bảng</div>
      </div>
      <Card4/>
      <CardList2/>
      <div className="TextCont">
        {/* <div className="Tex1">Máy tính bảng</div> */}
        <div className="Tex2">Thiết bị đeo</div>
      </div>
      <Card5/>
      <CardList3/>
      <div className="TextCont">
        {/* <div className="Tex1">Máy tính bảng</div> */}
        <div className="Tex2">Âm thanh</div>
      </div>
      <Card6/>
      <CardList4/>
      <LienHe/>
      <Footer />
    </div>
  );
}
export default Main;
