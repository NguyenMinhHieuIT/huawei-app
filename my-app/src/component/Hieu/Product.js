import demo_phone from "../../img/product_demo.png";
import p40_silver from "../../img/p40-pro-silver.png";
import p40_silver_p from "../../img/p40-pro-plus-white.png";
import {product} from '../../Data_phone_main'

function Product() {
    return (
        <>
            <div style={{ borderBottom: '3px solid #000', textAlign: 'center' , paddingTop:'50px' }}>
                <img src={demo_phone} style={{ maxHeight: '80px' }} class="mt-5" />
                <p class="mb-5"><b>Dòng sản phẩm P</b></p>
            </div>

            <div class="container-fruid" style={{ backgroundColor: '#f5f5f5' }}>
                {/* Gioi thieu */}
                <h1 class="pt-5 text-center"><b>Thiết kế phong cách, cách mạng nhiếp ảnh</b></h1>
                <h4 class="pb-5 text-center">Dòng sản phẩm P</h4>
                {/* Bo 3 dien thoai */}
            <div class="row d-flex justify-content-around pb-5">
                {product.map((course , index) => {
                    return(
                        <div class="card col col-12 col-sm-4 pt-5 pb-5" style={{ width: '400px', borderRadius: '15px', textAlign: 'center' }} key={index}>
                            <img src={course.imgUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{course.name} </h5>
                                <p class="card-text">{course.mieuTa}</p>
                                <a href="#" class="btn btn-dark">KHÁM PHÁ</a>
                                <a href="#" class="btn btn-dark ms-2">MUA NGAY</a>
                            </div>
                        </div>
                    )
                })}
            </div>
               
                {/* Next */}
                <h1 class="pt-5 pb-5 text-center"><b>Thưởng thức nhiều hơn cùng nhau</b></h1>

                <div class="row d-flex justify-content-around pb-5">
                    <div class="card mb-3 col-12 col-sm-6" style={{maxWidth:'700px', borderRadius: '15px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-12 col-sm-6" style={{maxWidth:'700px' ,  borderRadius: '15px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-12 col-sm-6" style={{maxWidth:'700px', borderRadius: '15px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 col-12 col-sm-6" style={{maxWidth:'700px' ,  borderRadius: '15px'}}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;