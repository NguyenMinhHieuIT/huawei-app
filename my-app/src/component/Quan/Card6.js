import React from 'react';
import Tl from '../../img/cl4/headphones-bg.jpg';
export default function Card6() {
  
      return (
  
        <div className="card mb-3" style={{maxWidth: '100%'}} >
          <div className="row g-0">
            <div className="col-md-8">
              <img src={Tl} className="img-fluid rounded-start" alt="MateBook 14" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title"><b>Các tính năng sức khỏe và thể dục mạnh mẽ trên cổ tay của bạn</b></h2>
                {/* <p className="card-text">Bộ Vi Xử Lý Intel® Core™ i5-1135G7 thế hệ thứ 11</p> */}
                <div className='bott'>
                <a href='#'>
                  <button className='but1'><div className='text1'>
                  Xem tất cả thiết bị đeo
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
  
