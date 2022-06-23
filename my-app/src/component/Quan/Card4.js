import React from 'react';
import Tl from '../../img/tablets-bg.png';
export default function Card4() {
  
      return (
  
        <div className="card mb-3" style={{maxWidth: '100%'}} >
          <div className="row g-0">
            <div className="col-md-8">
              <img src={Tl} className="img-fluid rounded-start" alt="MateBook 14" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title"><b>Giải trí hàng ngày và năng suất đồng hành cùng bạn</b></h2>
                {/* <p className="card-text">Bộ Vi Xử Lý Intel® Core™ i5-1135G7 thế hệ thứ 11</p> */}
                <div className='bott'>
                <a href='#'>
                  <button className='but1 btn-dark'><div className='text1'>
                  Xem tất cả máy tính bảng
                  </div></button>
                  </a>
                  {/* <a href='#'><button className='but2'><div className='text2'>
                    Mua Ngay
                  </div></button>
                  </a> */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  

