import anh4 from "../../img/anh4.png"
import '../../css/style.css'
function Dangki() {
    return (
        <>

            <div className="text-container" style={{ paddingTop: '100px', position: 'relative', textAlign: 'center', lineHeight: '1.3', fontSize: '32px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif,Microsoft Yahei', color: '#191919', }} >
                <span>Đăng kí ID HUAWEI</span>
            </div>
            <div className="text-container" style={{ position: 'relative', textAlign: 'center', lineHeight: '1.3', fontSize: '15px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif,Microsoft Yahei', color: '#191919', }} >
                <span>Bạn đã có tài khoản?</span>
                <a href="/dn"> Đăng nhập  </a>
            </div>
            <div className=" container-sm d-flex justify-content-center">
                <div className="card mt-5 " style={{ width: '25rem'  , borderRadius:'10px' }} >
                    <form className="container-sm " action="/action_page.php">
                        <div style={{ background: 'rgba(0,0,0,.05)' }}>
                            <select name="QuocGia" id="Khuvuc" style={{width:'100%',background: 'rgba(0,0,0,.05)'}}>
                                <optgroup label="Asia">
                                    <option value="1">Trung Quốc</option>
                                    <option value="2">Hàn Quốc</option>
                                    <option value="3">Nhật Bản</option>
                                    <option value="4">Việt Nam </option>
                                    <option value="5">Lào</option>
                                    <option value="6">Campuchia</option>
                                    <option value="7">Mianma</option>
                                    <option value="8">Mông cổ</option>
                                    <option value="9">Singapore</option>
                                    <option value="10">Malaysia</option>
                                    <option value="11">Triều tiên</option>
                                    <option value="12">Đài Loan</option>
                                    <option value="13">Ấn Độ</option>
                                    <option value="14">Iran</option>

                                </optgroup>

                                <optgroup label="Europe">
                                    <option value="1">Pháp</option>
                                    <option value="2">Ukraine</option>
                                    <option value="3">Tây Ban Nha </option>
                                    <option value="4">Thụy Điển</option>
                                    <option value="5">Đức</option>
                                    <option value="6">Phần Lan </option>
                                    <option value="7">Na Uy </option>
                                    <option value="8">Ba Lan </option>
                                    <option value="9">Ý</option>
                                    <option value="10">Anh</option>
                                    <option value="11">Romania</option>
                                    <option value="12">Belarus</option>
                                    <option value="13">Nga</option>
                                    <option value="14">Bỉ</option>
                                </optgroup>

                                <optgroup label="Americas">
                                    <option value="1">Canada</option>
                                    <option value="2">Hoa Kỳ</option>
                                    <option value="3">Greenland</option>
                                    <option value="4">Mexico</option>
                                    <option value="5">Saint Pierre</option>
                                    <option value="6"> Bahamas</option>
                                    <option value="7">Costa Rica</option>
                                    <option value="8">Cuba</option>
                                    <option value="9">Dominica</option>
                                    <option value="10">Jamaica</option>
                                    <option value="11">Colombia</option>
                                    <option value="12">Peru,</option>
                                    <option value="13">Brazil</option>
                                    <option value="14">Ecuador</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label"></label>
                            <input type="email" class="form-control" style={{ background: 'rgba(0,0,0,.05)' }} id="email" placeholder="Điện thoại/Email" name="email" />
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="pwd" style={{ background: 'rgba(0,0,0,.05)' }} placeholder="Mã Email" name="pswd" /> <a href="url">Lấy mã Email</a>
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" style={{ background: 'rgba(0,0,0,.05)' }} class="form-control" id="pwd" placeholder="Mật khẩu" name="pswd" />
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" style={{ background: 'rgba(0,0,0,.05)' }} class="form-control" id="pwd" placeholder="Xác nhận mật khẩu" name="pswd" />
                        </div>
                        <a href="" ></a>

                        <button type="submit" class="btn btn-danger mb-5" style={{ width: '100%' }}>Submit</button>
                    </form> </div>
            </div>


        </>
    )
}
export default Dangki;