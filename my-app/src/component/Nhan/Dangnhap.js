import logo from "../../img/Huawei-logo.jpg";
import '../../css/style.css'
function Dangnhap() {
    return (
        <> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed' , zIndex:'100', width:'100%'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} style={{ height: 'auto', width: '115px', marginTop: '5px',marginLeft:'200px' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>    
                    </div></nav>               
                
        <div className="text-container" style={{ paddingTop: '80px', position: 'relative', textAlign:'center',lineHeight:'1.3', fontSize:'32px',fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif,Microsoft Yahei',color:'#191919', }} > 
        <span> Dang nhap ID HUAWEI</span>
        
        </div>

        </>
    ) 
}
export default Dangnhap;