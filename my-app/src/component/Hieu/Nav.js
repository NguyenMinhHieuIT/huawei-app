import react from "react";
import logo from "../../img/Huawei-logo.jpg";
import '../../css/style.css'
function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} style={{ height: 'auto', width: '115px', marginTop: '5px' }} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
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
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Tai nghe và loa</b></a>
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
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>EMUI</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Hỗ trợ</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Nhà bán lẻ</b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b><i class="fa-solid fa-magnifying-glass mt-2" style={{ marginLeft:'50px' }}></i></b></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b><i class="fa-solid fa-user mt-2" style={{ marginLeft:'50px' }}></i></b></a>
                            </li>                          
                        </ul>


                    
                            
                      


                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;