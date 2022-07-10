import React from 'react';

class OrderStatus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderStatus: ''
        }
}


    render(){
        return(   
                   
            <div class ="container"> 
            <br/>   
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"/>
			<div class="row">
				<div class="col-lg-12">
						<div class="card mb-3">
						<div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">หมายเลขออร์เดอร์ - </span><span class="text-medium">34VB5540K83</span></div>
						<div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
							<div class="w-100 text-center py-1 px-2"><span class="text-medium">คำสั่งซื้อ </span> ยืนยัน</div>
							<div class="w-100 text-center py-1 px-2"><span class="text-medium">สถานะ :</span> กำลังปรุง</div>
							<div class="w-100 text-center py-1 px-2"><span class="text-medium">เวลาที่จะจัดส่ง :</span> 11:30</div>
						</div>
						<div class="card-body">
							<div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
							<div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-cart"></i></div>
								</div>
								<h4 class="step-title">ยืนยันคำสั่งซื้อ</h4>
							</div>
							<div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-config"></i></div>
								</div>
								<h4 class="step-title">รอคิว</h4>
							</div>
							<div class="step completed">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-medal"></i></div>
								</div>
								<h4 class="step-title">กำลังปรุง</h4>
							</div>
							<div class="step">
								<div class="step-icon-wrap">
								<div class="step-icon"><i class="pe-7s-home"></i></div>
								</div>
								<h4 class="step-title">รับอาหาร</h4>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>



					

  
					<div class="row">
						<div class="col-lg-12">
						<div class="card mb-4">
							<div class="card-body">
							<table class="table table-borderless">
								<tbody>
								<tr>
									<td></td>
									<td>จำนวน</td>
									<td class="text-end">ราคา</td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_4.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h5 class="box-title">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5 ><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td>
									<td>1</td>
									<td class="text-end">50</td>
								</tr>
								<tr>
									<td>
									<div class="d-flex mb-2">
										<div class="flex-shrink-0">
										<img src="img/post/post_3.png" alt=""/>
										</div>
										<div class="flex-lg-grow-1 ms-3">
										<h5 class="box-title">Wireless Headphones with Noise Cancellation Tru Bass Bluetooth HiFi</h5>
										<h5 ><span class="small">ประเภทอาหาร: ข้าว</span></h5>
										</div>
									</div>
									</td>
									<td>1</td>
									<td class="text-end">45</td>
								</tr>
								</tbody>
								<tfoot>
								<tr>
									<td>
									<a href="/Order" >จำนวนรายการทั้งหมด</a>
									</td>
									<td class="text-danger text-end">2 รายการ</td>
								</tr>
								<tr class="fw-bold">
									<td colspan="2">รวมทั้งหมด</td>
									<td class="text-end">95 บาท</td>
								</tr>
								</tfoot>
							</table>
							</div>
						</div>
					</div>
 					 </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            </div>
            
       
        )
    }
}

export default OrderStatus;