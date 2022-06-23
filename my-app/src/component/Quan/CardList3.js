import React from 'react'
import M1 from '../../img/cl3/1.png';
import M14 from '../../img/cl3/2.png';
import D14 from '../../img/cl3/3.png';
import MV from '../../img/cl3/4.png';
import d15 from '../../img/cl3/5.png'
export default function CardList3() {
    return (
    <>
        <div className='container'>
            <div className='CardL'>
                <div className='MidC'>
                    <div className="card" style={{width: '55rem'}}>
                       
                        <div className="card-body">
                            <h2 className="card-title">HUAWEI WATCH GT 3</h2>
                            <p className="card-text">Theo Dõi SpO2 cả ngày Huấn luyện viên chạy bộ AI Thời lượng sử dụng pin bền lâu</p>
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
                        <h5 className="card-title">HUAWEI WATCH GT Runner</h5>
                        <p className="card-text">Chương Trình Chạy Bộ Khoa Học
Đo Nhịp Tim Chính Xác
Định Vị Chính Xác Chuẩn Marathon</p>
        <a href="#" className="btn1 btn-light">Khám Phá</a>
        </div>
        </div>
                    </div>
                    <div className='List2'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={d15} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI WATCH 3 Pro</h5>
                        <p className="card-text">Gọi Thoại Bằng eSIM
Theo Dõi Sức Khoẻ Cả Ngày
Thời Lượng Pin Lên Đến 5 Ngày</p>
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
                        <h5 className="card-title">HUAWEI WATCH FIT new</h5>
                        <p className="card-text">Theo dõi SpO2 cả ngày
Thời lượng pin dài
Màn hình AMOLED 1,64”</p>
                        <a href="#" className="btn1 btn-light">Khám Phá</a>
           
        </div>
        </div>
                    </div>
                    <div className='List12'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={D14} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI Band 6</h5>
                        <p className="card-text">Theo Dõi SpO2 Cả Ngày
Màn Hình Tràn Viền
Pin Liên Tục 2 Tuần</p>
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
