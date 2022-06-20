import React from "react";
import GT3 from "../../img/huawei-watch-gt-3-pro-ceramic-key-vision.jpg";

function Slider() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="sliders">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={GT3} class="d-block w-100" alt="..."/>
    
    </div>
    <div class="carousel-item">
      <img src={GT3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={GT3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>
                  <b>HUAWEI</b>WHAT GT 3 Pro
                </h1>
                <h6>Gốm tinh thể nano|Điện tâm đồ|Lặn tự do</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
