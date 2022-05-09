import React from 'react';

class ShopOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            productName : '',
            productPrice: ''
        }
}


    render(){
        return( 

            <div class="container">
                <br/>
                        <div class="row">
                        <div class="col-md-6 grid-margin stretch-card">
                        <div class="col-md-12 stretch-card transparent">
                        <div class="card tale-bg">
                            <div class="card-people mt-auto">
                            <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
                            </div>
                            </div>
                            <br/>
                            <div class="col-md-12 mb-4 stretch-card transparent">
                            <div class="card card-dark-blue">
                                <div class="card-body">
                                <td class="font-weight-medium">จำนวนรายการ</td><br/>
                                <p class="fs-30 mb-2">จำนวนรายการทั้งหมด 144 รายการ</p>
                                <p>วันที่ </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 grid-margin transparent">
                        <div class="row">
                            <div class="col-md-6 mb-4 stretch-card transparent">
                            <div class="card card-tale">
                                <div class="card-body">
                                <td class="font-weight-medium">ยอดขาย </td><br/>
                                <p class="fs-30 mb-2"> ยอดขายทั้งหมด 2,500 บาท</p>
                                <p>วันที่ </p>
                                </div>
                            </div>
                            </div>
                            <div class="col-md-6 mb-4 stretch-card transparent">
                            <div class="card card-dark-blue">
                                <div class="card-body">
                                <td class="font-weight-medium">จำนวนรายการสั่งซื้อ </td><br/>
                                <p class="fs-30 mb-2">จำนวนรายการทั้งหมด 144 รายการ</p>
                                <p>วันที่ </p>
                                </div>
                            </div>
                            </div>
                        </div>
                            <div class="col-md-12 stretch-card transparent">
                            <div class="card card-light-danger">
                                <div class="card-body">
                                        <td class="font-weight-medium">เมนูขายดี </td><br/>
                                            <div class="blog__sidebar__recent">
                                                <a class="blog__sidebar__recent__item">
                                                    <div class="blog__sidebar__recent__item__pic">
                                                        <img src="img/post/post_5.png" alt=""/>
                                                    </div>
                                                    <div class="blog__sidebar__recent__item__text">
                                                    <p class="mb-4">เมนูขายดี</p>
                                            
                                                    </div>
                                                </a>
                                                <a class="blog__sidebar__recent__item">
                                                    <div class="blog__sidebar__recent__item__pic">
                                                    <img src="img/post/post_5.png" alt=""/>

                                                    </div>
                                                    <div class="blog__sidebar__recent__item__text">
                                                    <p class="mb-4">เมนูขายดี</p>
                                         
                                                    </div>
                                                </a>
                                                <a class="blog__sidebar__recent__item">
                                                    <div class="blog__sidebar__recent__item__pic">
                                                    <img src="img/post/post_5.png" alt=""/>

                                                    </div>
                                                    <div class="blog__sidebar__recent__item__text">
                                                    <p class="mb-4">เมนูขายดี</p>
                                       
                                                    </div>
                                                </a>
                                            </div> 
                                        </div>   
                                    </div>
                                </div>
                        </div>
                         </div>
                </div>
           
              
      
         
            
        )
    }
}

export default ShopOwner;

