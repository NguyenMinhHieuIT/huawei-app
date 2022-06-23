import React from 'react'
import M1 from '../../img/M1.png';
import M2 from '../../img/M2.png';
import M14 from '../../img/M14.png';
import D14 from '../../img/d14.png';
import MV from '../../img/MV.png';
import d15 from '../../img/d15.png'
export default function CardList() {
    return (
    <>
        <div className='container'>
            <div className='CardL'>
                <div className='MidC'>
                    <div className="card" style={{width: '48rem'}}>
                       
                        <div className="card-body">
                            <h2 className="card-title">HUAWEI MateBook 14s</h2>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="#" className="btn btn-primary">Khám Phá </a>
                        </div>
                        <img src={M1} className="card-img-top" alt="M1" />
                    </div>
                </div>

                <div className='End'>
                <div className='EndC'>
                    <div className='List1'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={M14} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MateBook 14 2021</h5>
                        <p className="card-text">Bộ Vi Xử Lý Intel® Core™ i5-1135G7 thế hệ thứ 11</p>
        <a href="#" className="btn1 btn-light">Khám Phá</a>      
        </div>
        </div>
                    </div>
                    <div className='List2'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={d15} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MateBook D 15 2021</h5>
                        <p className="card-text">Bộ xử lý Intel® Core™ thế hệ thứ 11</p>
                        <a href="#" className="btn1 btn-light">Khám Phá</a> 
        </div>
        </div>
                    </div>
                    
                </div>

                <div className='EndC2'>
                    <div className='List11'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={MV} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MateView</h5>
                        <p className="card-text">Màn Hình 4K+ Trung Thực Trình Chiếu Không Dây HUAWEI Smart Bar</p>
                        <a href="#" className="btn1 btn-light">Khám Phá</a>
        <a href="#" className="btn2 btn-light">Mua Ngay</a>       
        </div>
        </div>
                    </div>
                    <div className='List12'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={D14} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MateBook D 14 2020</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn1 btn-dark">Khám Phá</a>
       
        </div>
        </div>
                    </div>
                    
                </div>
                </div>
                
                
            </div>
        </div>
    </>
  )
}
