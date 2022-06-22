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
      <Footer />
    </div>
  );
}
export default Main;
