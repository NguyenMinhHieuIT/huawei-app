import React from 'react'
import M1 from '../../img/cl4/1.png';
import M14 from '../../img/cl4/2.png';
import D14 from '../../img/cl4/3.png';
import MV from '../../img/cl4/4.png';
import d15 from '../../img/cl4/5.png'
export default function CardList4() {
    return (
    <>
        <div className='container'>
            <div className='CardL'>
                <div className='MidC'>
                    <div className="card" style={{width: '55rem'}}>
                       
                        <div className="card-body">
                            <h2 className="card-title">HUAWEI FreeBuds Lipstick</h2>
                            <p className="card-text">Âm thanh độ phân giải cao
Nhẹ như không
Chống ồn chủ động thiết kế mở 2.0</p>
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
                        <h5 className="card-title">HUAWEI FreeBuds 4</h5>
                        <p className="card-text">Chống Ồn Chủ Động Thiết Kế Mở 2.0
Thiết Kế Gọn Nhẹ
Âm Thanh Độ Phân Giải Cao</p>
        <a href="#" className="btn1 btn-light">Khám Phá</a>
        
        </div>
        </div>
                    </div>
                    <div className='List2'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={d15} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI FreeBuds Pro</h5>
                        <p className="card-text">Công nghệ chống ồn chủ động thông minh
Chế độ nhận dạng giọng nói và nhận dạng môi trường xung quanh
Kết nối cùng lúc 2 thiết bị</p>
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
                        <h5 className="card-title">HUAWEI FreeBuds 4i</h5>
                        <p className="card-text">Chống ồn chủ động
10 giờ phát nhạc liên tục
Âm thanh chân thật</p>
                        <a href="#" className="btn1 btn-light">Khám Phá</a>
            
        </div>
        </div>
                    </div>
                    <div className='List12'>
                    <div className="card" style={{width: '20rem'}}>
                        <img src={D14} className="card-img-top" alt="..." />
                            <div className="card-body">
                        <h5 className="card-title">HUAWEI Sound X</h5>
                        <p className="card-text">Loa Siêu Trầm Tinh Chỉnh Bởi Devialet
Thiết Kế Cấu Trúc Đối Xứng Push-Push
Huawei Share</p>
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
