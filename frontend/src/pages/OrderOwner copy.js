// import React from 'react';
// import axios from 'axios';
// // import React, { useState } from "react";

// class OrderOwner extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount() {
//     this.getData()
//     // console.log("orderDetailID",this.props.match.params.id) 
//     // console.log("orderID",this.props.match.params.id) 
//     // console.log("productID",this.props.match.params.id)
//   }

//   getData = () => {
//     // var x = this;
//     // axios.get("http://localhost:3000/order/getOrder"+this.props.match.params.id).then((res) => {  
//     // axios.get("http://localhost:3000/order/getOrderByShopID/" + this.props.match.params.id).then((res) => {
//     // //   console.log(res.data.data[0])
//     // //   this.setState({ data: res.data.data });
//     // }).catch((error) => {
//     // //   console.log(error);
//     // });

//     // axios.get('http://localhost:3000/order/getOrderByShopID/'+this.props.match.params.id)
//     //   .then(function (response) {
//     //     // handle success
//     //     console.log(response);
//     //   })
//     //   .catch(function (error) {
//     //     // handle error
//     //     console.log(error);
//     //   });
//   }

//   handleSubmit = (e) => {
//     // console.log("handleSubmit", this.state)
//     // e.preventDefault()
//     // axios.post('http://localhost:3000/order/editOrder', {
//     //   subtotal: this.state.Status,
//     // }).catch(err => {
//     //   console.log(err)
//     // })


//   }
//   render() {
//     return (

//       <div class="container"><br />
//         <h5 class="text-left ">หน้าออร์เดอร์</h5>
//         <h5 class="text-right ">วันที่ 10/5/2565</h5>
//         <div class="row">
//           <div class="col-lg-3 col-sm-6 col-xs-12">
//             <div class="white-box analytics-info">
//               <h3 class="box-title">จำนวนออร์เดอร์ที่รอคิว</h3>
//               <ul class="list-inline two-part">
//                 <li>
//                   <div id="sparklinedash">
//                   </div>
//                 </li>
//                 <li class="text-right"><i class="ti-arrow-up text-primary"></i> <h5 class="counter text-primary">9 รายการ</h5></li>
//               </ul>
//             </div>
//           </div>
//           <div class="col-lg-3 col-sm-6 col-xs-12">
//             <div class="white-box analytics-info">
//               <h3 class="box-title">จำนวนออร์เดอร์ที่กำลังปรุง</h3>
//               <ul class="list-inline two-part">
//                 <li>
//                   <div id="sparklinedash2"></div>
//                 </li>
//                 <li class="text-right"><i class="ti-arrow-up text-warning"></i> <h5 class="counter text-warning">9 รายการ</h5></li>
//               </ul>
//             </div>
//           </div>
//           <div class="col-lg-3 col-sm-6 col-xs-12">
//             <div class="white-box analytics-info">
//               <h3 class="box-title">จำนวนออร์เดอร์ที่เสร็จสมบูรณ์</h3>
//               <ul class="list-inline two-part">
//                 <li>
//                   <div id="sparklinedash3"></div>
//                 </li>
//                 <li class="text-right"><i class="ti-arrow-up text-success"></i> <h5 class="counter text-success">1 รายการ</h5></li>
//               </ul>
//             </div>
//           </div>
//           <div class="col-lg-3 col-sm-6 col-xs-12">
//             <div class="white-box analytics-info">
//               <h3 class="box-title">จำนวนออร์เดอร์ที่ยกเลิก</h3>
//               <ul class="list-inline two-part">
//                 <li>
//                   <div id="sparklinedash3"></div>
//                 </li>
//                 <li class="text-right"><i class="ti-arrow-up text-danger"></i> <h5 class="counter text-danger">9 รายการ</h5></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <br />
//         <div class="row">
//           <div class="col-lg-12 col-sm-6 col-xs-12">
//             <div class="white-box analytics-info">
//               <h5 class="card-title mb-0">สถานะการสั่งซื้อ</h5>
//               <div class="table-responsive">
//                 <table class="table table-striped table-borderless">
//                   <thead>
//                     <tr>
//                       <th><h3 class="box-title">จำนวนออร์เดอร์ที่เสร็จสมบูรณ์</h3></th>
//                       <th><h3 class="box-title">รายการ</h3></th>
//                       <th></th>
//                       <th><h3 class="box-title">เวลา</h3></th>
//                       <th><h3 class="box-title">ราคา</h3></th>
//                       <th><h3 class="box-title">จำนวน</h3></th>
//                       <th><h3 class="box-title">สถานะ</h3></th>
//                       <th><h3 class="box-title">ยกเลิก</h3></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td ><h3 class="box-title">{this.state.data.orderID}</h3></td>
//                       <td><img src="../img/post/post_5.png" alt="" /></td>
//                       {/* <td><h3 class="box-title">{this.state.data.productName}</h3></td> */}
//                       <td><h3 class="box-title">{this.state.data.orderStatus}</h3></td>
//                       <td><h3 class="box-title">{this.state.data.orderTime}</h3></td>
//                       {/* <td><h3 class="box-title">{this.state.data.price}</h3></td> */}
//                       <td><h3 class="box-title">{this.state.data.subtotal}</h3></td>
//                       {/* <td><h3 class="box-title">{this.state.data.quantity}</h3></td> */}
//                       <td><select name='Status' onClick={this.handleSubmit}>
//                         <option>รอคิว</option>
//                         <option>กำลังปรุง</option>
//                         <option>ปรุงเสร็จ</option>
//                         <option>รอรับ</option>
//                       </select></td>

//                       <td><a href="/OrderOwnerEdit" className="nav-link" class='badge badge-danger'>ยกเลิก</a></td>
//                     </tr>

//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//         <br />
//       </div>
//     )
//   }
// }


// export default OrderOwner;