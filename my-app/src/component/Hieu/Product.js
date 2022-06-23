import demo_phone from "../../img/product_demo.png";
import p40_silver from "../../img/p40-pro-silver.png";
import p40_silver_p from "../../img/p40-pro-plus-white.png";
import {product , more} from '../../Data_phone_main'
import { Link } from "react-router-dom";

function Product() {
    return (
        <>
            <div style={{ borderBottom: '3px solid #000', textAlign: 'center' , paddingTop:'50px' }}>
                <img src={demo_phone} style={{ maxHeight: '80px' }} className="mt-5" />
                <p className="mb-5"><b>Dòng sản phẩm P</b></p>
            </div>

            <div className="container-fruid" style={{ backgroundColor: '#f5f5f5' }}>
                {/* Gioi thieu */}
                <h1 className="pt-5 text-center"><b>Thiết kế phong cách, cách mạng nhiếp ảnh</b></h1>
                <h4 className="pb-5 text-center">Dòng sản phẩm P</h4>
                {/* Bo 3 dien thoai */}
            <div className="row d-flex justify-content-around pb-5">
                {product.map((course , index) => {
                    return(
                        <div className="card col col-12 col-sm-6 pt-5 pb-5" style={{ width: '400px', borderRadius: '15px', textAlign: 'center' }} key={index}>
                            <img src={course.imgUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name} </h5>
                                <p className="card-text">{course.mieuTa}</p>
                                <Link to={course.lop} className="btn btn-dark">KHÁM PHÁ</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
               
                {/* Next */}
                <h1 className="pt-5 pb-5 text-center"><b>Thưởng thức nhiều hơn cùng nhau</b></h1>

                <div className="row d-flex justify-content-around pb-5">
                {more.map((course , index) => {
                    return(
                    <div className="card mb-3 col-12 col-sm-6" style={{maxWidth:'700px', borderRadius: '15px'}} key={index} >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={course.imgUrl} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.mieuta}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <a href="#" className="btn btn-dark">KHÁM PHÁ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}     
                </div>
            </div>
        </>
    );
}

export default Product;