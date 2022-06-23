
import p40pr from '../../img/p40pr.jpg'
function P40pro() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{ position: 'fixed', zIndex: '100', width: '100%' }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">HUAWEI P40 Pro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="SỐ LƯỢNG" aria-label="Search" />
            <button class="btn btn-outline-danger text-dark" type="submit">MUA</button>
          </form>
        </div>
      </nav>

      <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Kích Thước</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
            <div className='col col-4'>
              <b>Chiều rộng</b>
              <p>72,6 mm</p>
            </div>
            <div className='col col-4'>
              <b>Chiều cao</b>
              <p>158,2 mm</p>
            </div>
            <div className='col col-4'>
              <b>Độ mỏng</b>
              <p>8,95 mm</p>
            </div>
          </div>

          <div className='row'>
              <b>Trọng lượng</b>
              <p>Khoảng 209 g(tính cả pin)</p>
              <p>*Kích thước sản phẩm, trọng lượng sản phẩm và thông số kỹ thuật liên quan chỉ là giá trị lý thuyết.<br/> Các số đo thực tế của các sản phẩm riêng lẻ có thể khác nhau. Tất cả các thông số kỹ thuật đều tùy thuộc vào sản phẩm thực tế.</p>
              <img src={p40pr} />
             
          </div>
          
        </div>
      </div>
       <hr/>
{/* Màu sắc */}

       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Màu sắc</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
            <div className='col col-6'>
              <b>Xanh biển sâu</b>
             
            </div>
            <div className='col col-6'>
              <b>Xám bạc</b>
             
            </div>
          </div>
        </div>
      </div>
       <hr/>
{/* Màn hình */}
       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Màn hình</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
           
          <p> Kích thước: <br/>
6,58 inch
*Với thiết kế góc bo tròn trên màn hình, chiều dài màn hình đo theo đường chéo là 6,58 inch khi đo theo hình chữ nhật tiêu chuẩn(diện tích có thể quan sát trên thực tế sẽ nhỏ hơn một chút).<br/>

Màu sắc:<br/>
16,7 triệu màu

Loại:<br/>
OLED, lên đến 90 Hz<br/>

Độ phân giải:<br/>
2.640 x 1.200 điểm ảnh
*Độ phân giải được đo theo hình chữ nhật tiêu chuẩn. Với thiết kế góc bo tròn, các điểm ảnh hiệu quả sẽ ít hơn.</p>      
        
          </div>
        </div>
      </div>
       <hr/>
{/* Chịu chất lỏng bắn tóe */}
       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Chịu được chất lỏng bắn tóe,<br/> nước và bụi</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
           
          <p> IP68 <br/>

*Thiết bị của bạn đã được thử nghiệm trong một môi trường có kiểm soát và được chứng nhận là có khả năng chống tia nước bắn, kháng nước và bụi trong các tình huống cụ thể(đáp ứng các yêu cầu phân loại IP68 như mô tả trong tiêu chuẩn quốc tế IEC 60529).<br/>

Khả năng kháng nước và bụi không tồn tại vĩnh viễn và khả năng này có thể giảm do hao mòn thông thường theo thời gian. Không sạc pin khi điện thoại bị ướt hoặc trong môi trường ẩm ướt. Tham khảo hướng dẫn sử dụng để biết cách vệ sinh và sấy khô. Việc ngâm trong chất lỏng và thiệt hại do ngâm trong chất lỏng sẽ không được bảo hành.<br/>

*Đánh giá IP68 có nghĩa là dựa trên các điều kiện thử nghiệm cụ thể theo quy định, thiết bị được bảo vệ chống lại nước tĩnh xâm nhập có hại tối đa 1,5 mét, trong tối đa 30 phút, trong khi chênh lệch nhiệt độ giữa nước và thiết bị không quá 5K.</p>      
        
          </div>
        </div>
      </div>
       <hr/>
       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Bộ vi xử lý</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
           
          <p> IP68 <br/>

          HUAWEI Kirin 990 5G

CPU:
Octa-core
2 x Cortex-A76 tốc độ tần số 2,86 GHz + 2 x Cortex-A76 tốc độ tần số 2,36 GHz + 4 x Cortex-A55 1,95 GHz

GPU:
16-Core Mali-G76

NPU:
NPU(Bộ xử lý mạng thần kinh)Lõi lớn + Lõi nhỏ</p>
          </div>
        </div>
      </div>
       <hr/>

       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>Máy ảnh</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
           
          <p> Máy ảnh sau:
Ultra Vision Camera 50 MP(Góc rộng, Khẩu độ f/1.9, OIS) + Máy ảnh Cine 40 MP(Góc siêu rộng, Khẩu độ f/1.8) + Máy ảnh Tele SuperSensing 12 MP(Khẩu độ f/3.4, OIS) + Máy ảnh Depth Sensing 3D
Chế độ tự động lấy nét: Tự động lấy nét
Chống rung hình ảnh: OIS/AIS
Chế độ thu phóng: Thu phóng kỹ thuật số, Thu phóng quang học, Thu phóng Hybrid Quay video:
Hỗ trợ quay video 4K(3.840 x 2.160 pixels)60 khung hình/giây
Độ phân giải hình ảnh: 8.192 x 6.144 điểm ảnh
Độ phân giải video: 3.840 x 2.160 điểm ảnh

Máy ảnh trước:
Máy ảnh tự chụp 32 MP(khẩu độ f/2.2) + Máy ảnh cảm biến chiều sâu*
Chế độ tự động lấy nét: tự động
Hỗ trợ quay video 4K(3.840 x 2.160 pixels)60 khung hình/giây
Độ phân giải hình ảnh: 6.528 x 4.896 điểm ảnh
Độ phân giải video: 3.840 x 2.160 điểm ảnh
Camera cảm biến chiều sau hỗ trợ mở khóa bằng khuôn mặt với IR

*Điểm ảnh có thể thay đổi tùy theo chế độ chụp ảnh.
*Độ phân giải hình ảnh thực tế có thể thay đổi phụ thuộc vào chế độ chụp ảnh.</p>
          </div>
        </div>
      </div>
       <hr/>


       <div className='row' style={{ paddingTop: '100px' }}>
        <div className='col col-4 ' style={{ textAlign: 'center' }}><h1><b>PIN</b></h1></div>
        <div className='col col-8'>
          <div className='row'>
           
          <p> 4.200 mAh(Giá trị điển hình)

*Dung lượng pin danh định là 4.100 mAh.
**Giá trị điển hình. Dung lượng thực tế có thể thay đổi đôi chút. Dung lượng này là dung lượng pin danh định. Dung lượng pin thực tế cho từng điện thoại riêng biệt có thể cao hoặc thấp hơn đôi chút so với giá trị danh nghĩa.
***Pin không thể tháo rời. Việc tháo pin có thể gây hư hỏng thiết bị. Để thay thế hoặc sửa chữa pin, vui lòng đến Trung tâm Dịch vụ được ủy quyền của HUAWEI.</p>
          </div>
        </div>
      </div>

    </>
  );
}
export default P40pro;
