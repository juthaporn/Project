import React from 'react';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName : '',
            productName : '',
            productPrice: ''
        }
}
    render(){
        return(    
            <div class ="container">
            <div class="recepie_area">
                <div class="row">
                {/* <div class="col-xl-12">
                    <div class="section_title text-center">
                        <h3>รายการายอาหาร</h3>
                    </div>
                </div>     */}
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                                <img class="card-img" src="img/recepie/recpie_1.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-success">เปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>  
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_5.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-success">เปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>       
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_6.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-dark">ปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>       
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_2.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-success">เปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>       
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_3.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-success">เปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>       
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_4.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <div class="badge badge-dark">ปิด</div>
                            <span>productName</span>
                            <p>productPrice</p>    
                            <a href="#" class="line_btn">เพิ่มไปยังรถเข็น</a>
                        </div>
                    </div>
                </div>
        
        </div>
        <div class="col-xl-12">
                    <div class="section_title text-center">
                        <h3></h3>
                    </div>
                </div>
        </div>
       
        )
    }
}

export default Menu;