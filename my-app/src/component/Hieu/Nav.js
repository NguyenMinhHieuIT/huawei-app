import react from "react";
import logo from "../../img/Huawei-logo.jpg";
import '../../css/style.css'
import { Link } from "react-router-dom";
function Nav() {
    return (
        <> <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed' , zIndex:'100' , width:'100%'}}>

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} style={{ height: 'auto', width: '115px', marginTop: '5px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item " >
                                <Link className="nav-link active" aria-current="page" to="/phone"><b>Điện thoại</b></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><b>Máy tính xách tay</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Máy tính bảng</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Thiết bị đeo</b></a>
                            </li>                       
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Màn hình</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Router</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Dịch vụ di động HUAWEI</b></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/more" tabindex="-1" aria-disabled="true"><b>Thông tin doanh nghiệp</b></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Hỗ trợ</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true"><b>Nhà bán lẻ</b></a>
                            </li>
                            <li className="nav-item " style={{ marginLeft: '10px' }}>
                                <div className="dropdown ">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                         <b><i className="fa-solid fa-user mt-2" type="button" style={{}} ></i></b>
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" to="/dn"><b>Đăng nhập</b></Link></li>
                                        <li><Link className="dropdown-item" to="/dk"><b>Đăng kí</b></Link></li>
        
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