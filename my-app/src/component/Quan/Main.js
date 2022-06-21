import React from "react";
import Nav from "../Hieu/Nav";
import Footer from "../Hieu/Footer";
import Slider from "../Quan/Slider";
import Card from "../Quan/Card";
import Card2 from "../Quan/Card2";
import Card3 from "../Quan/Card3";
import CardList from "../Quan/CardList";
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
      <Footer />
    </div>
  );
}
export default Main;
