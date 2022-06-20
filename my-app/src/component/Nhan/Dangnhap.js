import logo from "../../img/Huawei-logo.jpg";
import '../../css/style.css'
function Dangnhap() {
    return (
        <> 
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed' , zIndex:'100', width:'100%',marginLeft:'200px'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} style={{ height: 'auto', width: '115px', marginTop: '5px' }} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                   
                    
                    </div></nav>

        </>
    ) 
}
export default Dangnhap;