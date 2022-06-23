import React from 'react'
import IMG1 from '../../img/matebook-web.png'
export default function Card() {

  return (

    <div className="card mb-3" style={{ maxWidth: '100%' }} >
      <div className="row g-0">
        <div className="col-md-6">
          <img src={IMG1} className="img-fluid rounded-start" alt="MateBook 14" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title"><b>HUAWEI MateBook 14 2021</b></h2>
            <p className="card-text">Bộ Vi Xử Lý Intel® Core™ i5-1135G7 thế hệ thứ 11</p>
            <div className='bott'>
              <a href='#'>
                <button className='but1'><div className='text1'>
                  Khám Phá
                </div></button>
              </a>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


