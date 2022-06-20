import react from "react";
import logo from "../../img/Huawei-logo.jpg";
import '../../css/style.css'
function Nav() {
    return (
        <>
<<<<<<< HEAD
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed' , zIndex:'100', width:'100%'}}>
=======
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed' , zIndex:'100' , width:'100%'}}>
>>>>>>> main
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} style={{ height: 'auto', width: '115px', marginTop: '5px' }} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item " >
                                <a class="nav-link active" aria-current="page" href="#"><b>Điện thoại</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><b>Máy tính xách tay</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Máy tính bảng</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Thiết bị đeo</b></a>
                            </li>                       
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Màn hình</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Router</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Dịch vụ di động HUAWEI</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Thông tin doanh nghiệp</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Hỗ trợ</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Nhà bán lẻ</b></a>
                            </li>
                            <li class="nav-item " style={{ marginLeft: '10px' }}>
                                <div class="dropdown ">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                         <b><i class="fa-solid fa-user mt-2" type="button" style={{}} ></i></b>
                                    </button>
                                    <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#"><b>Đăng nhập</b></a></li>
                                        <li><a class="dropdown-item" href="#"><b>Đăng kí</b></a></li>
        
                                    </ul>
                                </div>
                            </li>
                        </ul>







                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;