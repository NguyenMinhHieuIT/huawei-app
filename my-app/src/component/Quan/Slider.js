import React from "react";
import GT3 from "../../img/huawei-watch-gt-3-pro-ceramic-key-vision.jpg";
import Fit2 from "../../img/watch-fit-2.png";
import Sp from "../../img/sp-hưaei.jpg";
import "../Quan/css/styles.css"
function Slider() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={GT3} class="d-block w-100 h-50" alt="GT3" />
             
            <div className="carousel-caption d-none d-md-block">
             <div className="conten1">
                <h2>
                  <b>HUAWEI</b>WATCH GT 3 Pro
                </h2>
                <p>Gốm tinh thể nano | Điện tâm đồ | Lặn tự do</p>
              </div>
              <div className="conten1">
                <button><div className="text">HUAWEI WATCH GT3 Pro Titanlum</div></button>
              </div>
              <div className="conten1">
                <button><div className="text">HUAWEI WATCH GT3 Pro Ceramic</div></button>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={Fit2} class="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="conten2">
                <h2>
                  <b>HUAWEI</b> WATCH FIT 2
                </h2>
                <p>
                  Màn hình HUAWEI FullView 1,74 inch | Gọi Thoại Bluetooth |
                  Sống khỏe mạnh{" "}
                </p>
              </div>
              <div className="conten2">
                <button><div className="text">Khám Phá</div></button>
              
              
                <button><div className="text">Mua Ngay</div></button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Sp} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <div className="conten3">
                <h2>
                  <b>Cửa Hàng Trải Nghiệm Huawei</b>
                </h2>
                <p>
                  Màn hình HUAWEI FullView 1,74 inch | Gọi Thoại Bluetooth |
                  Sống khỏe mạnh{" "}
                </p>
              </div>
              <div className="conten3">
                <button>Mua Ngay</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
