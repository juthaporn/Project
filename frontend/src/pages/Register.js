import React from 'react';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            username: '',
            password: ''
        }
      }
  
      handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
          [name]: value
        });
      }
  
    //   handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:3000/user/add-user', this.state).then(res => {
    //       console.log(res);
    //       alert('Susscess');
    //     }).catch(error => {
    //       console.log(error);
    //     });
    //   }
    
    render(){
        return(
            // <main>
            //     <div class="container">
            //         <div class="row d-flex align-items-stretch no-gutters">
            //             <div class="col-md-6 p-6 order-md-last"><br/>
            //                 <h2 class="h4 mb-5 font-weight-bold">ลงทะเบียน</h2>
            //                 <form action="#">
            //                     <div class="form-group">
            //                         <input type="text" name="name" class="form-control" placeholder="ชื่อ - นามสกุล" />
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="text" name="phone" class="form-control" placeholder="เบอร์โทรศัพท์" />
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="text" name="username" class="form-control" placeholder="ชื่อผู้ใช้งาน" />
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="text" name="password" class="form-control" placeholder="รหัสผ่าน"></input>
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="text" class="form-control" placeholder="ยืนยันรหัสผ่าน"></input>
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="submit" value="ลงทะเบียน" class="btn btn-primary py-3 px-5" />
            //                     </div>
            //                 </form>
            //             </div>
            //             <div class="col-md-6 d-flex align-items-stretch-bg">
            //                 {/* <div id="map"></div>
            //                 <div class="img"></div> */}
            //             </div>
            //         </div>
            //     </div>
            // </main>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="card-img" src="img/video/big.png" alt="" />
                        {/* <img src="img/video/big.png" alt=""></img> */}
                        {/* <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-home"></i></span>
                            <div class="media-body">
                            <h3>Buttonwood, California.</h3>
                            <p>Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                            <div class="media-body">
                            <h3>00 (440) 9865 562</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><i class="ti-email"></i></span>
                            <div class="media-body">
                            <h3>support@colorlib.com</h3>
                            <p>Send us your query anytime!</p>
                            </div>
                        </div> */}
                    </div>
                    <div class="col-lg-6">
                        <h2 class="contact-title">ลงทะเบียน</h2>
                        <form class="form-contact contact_form">
                            <div class="row">
                                {/* <div class="col-sm-6"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="name" placeholder = 'ชื่อ-นามสกุล' />
                                    </div>
                                {/* </div> */}
                                {/* <div class="col-6"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="phone" placeholder = 'เบอร์โทรศัพท์' />
                                    </div>
                                {/* </div> */}
                                {/* <div class="col-6"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="username" placeholder = "ชื่อผู้ใช้งาน" />
                                    </div>
                                {/* </div> */}
                                {/* <div class="col-4 center"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="password" placeholder = 'รหัสผ่าน' />
                                    </div>
                                {/* </div> */}
                                
                            </div>
                            <div class="form-group mt-3 text-center">
                                <button type="submit" class="button button-contactForm btn_4 boxed-btn">ลงทะเบียน</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                มีบัญชีผู้ใช้อยู่แล้วใช่หรือไม่&nbsp;&nbsp;&nbsp; 
                                <a href="/Login" class="button button-contactForm btn_4 boxed-btn">เข้าสู่ระบบ</a>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Register;