import React from 'react'
import M1 from '../../img/cl2/1.png';
import M14 from '../../img/cl2/2.png';
import D14 from '../../img/cl2/3.png';
import MV from '../../img/cl2/4.png';
import d15 from '../../img/cl2/5.png'
export default function CardList2() {
    return (
    <>
        <div className='container'>
            <div className='CardL'>
                <div className='MidC'>
                    <div className="card" style={{width: '48rem'}}>
                       
                        <div className="card-body">
                            <h2 className="card-title">HUAWEI MatePad 11</h2>
                            <p className="card-text">Màn Hình HUAWEI FullView 120 Hz
HUAWEI M-Pencil</p>
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
                        <h5 className="card-title">HUAWEI MatePad</h5>
                        <p className="card-text">Bút cảm ứng HUAWEI M-Pencil
Cộng tác đa màn hình
Màn hình 2K HUAWEI FullView</p>
        <a href="#" className="btn1 btn-light">Khám Phá</a>
        </div>
        </div>
                    </div>
                    <div className='List2'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={d15} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MatePad T 10</h5>
                        <p className="card-text">Màn Hình HD 9,7 Inch
Hiệu Suất Mượt Mà
Chế Độ Bảo Vệ Mắt</p>
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
                        <h5 className="card-title">HUAWEI MatePad New</h5>
                        <p className="card-text">Màn Hình 2K FullView
Dung Lượng Pin 7.250mAh
RAM 4GB + ROM 128GB</p>
                        <a href="#" className="btn1 btn-light">Khám Phá</a>
            
        </div>
        </div>
                    </div>
                    <div className='List12'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={D14} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI MatePad T 10s</h5>
                        <p className="card-text">Màn hình Full HD
Chế độ bảo vệ mắt
Tinh chỉnh bởi Harman Kardon</p>
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
