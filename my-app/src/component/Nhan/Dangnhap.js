import anh5 from "../../img/anh5.png"
import '../../css/style.css'
function Dangnhap() {
  return (
    <>

      <div className="text-container" style={{ paddingTop: '100px', position: 'relative', textAlign: 'center', lineHeight: '1.3', fontSize: '32px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif,Microsoft Yahei', color: '#191919', }} >
        <span>Đăng nhập ID HUAWEI</span>
      </div>
      <div className=" container-sm d-flex justify-content-evenly mt-5">
        <img src={anh5} style={{width: '15rem', height:'15rem'}}/>
        <div className="card" style={{ width: '25rem' }} >
          <form className="container-sm " action="/action_page.php">
            <div class="mb-3 mt-3">
              <label for="email" class="form-label">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Điện thoại/Email/ID đăng nhập" name="email" />
            </div>
            <div class="mb-3">
              <label for="pwd" class="form-label">Password:</label>
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <a href="" ></a>
            <div class="form-check mb-3">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-danger mb-3" style={{ width: '100%' }}>Submit</button>
          </form> <a href="dk" style={{ textDecoration:'underline' }} >Đăng kí</a> </div>

         
      </div>


    </>
  )
}
export default Dangnhap;