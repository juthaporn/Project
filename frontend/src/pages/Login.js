import React from 'react';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
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

    render(){
        return(
            //  <main>
            //     <div class="container">
            //         <div class="row d-flex align-items-stretch no-gutters">
            //             <div class="col-md-6 p-5 order-md-last">
            //                 <h2 class="h4 mb-5 font-weight-bold">เข้าสู่ระบบ</h2>
            //                 <form action="#">
            //                 <div class="form-group">
            //                         <input type="text" class="form-control" placeholder="ชื่อผู้ใช้งาน" />
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="text" class="form-control" placeholder="รหัสผ่าน"></input>
            //                     </div>
            //                     <div class="form-group">
            //                         <input type="submit" value="เข้าสู่ระบบ" class="btn btn-primary py-3 px-5" />
            //                     </div>
            //                 </form>
            //             </div>
            //             <div class="col-md-6 d-flex align-items-stretch-bg">
            //                 {/* <div id="map"></div> */}
            //             </div>
            //         </div>
            //     </div>
            // </main>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="card-img" src="img/recepie/recepie_details.png" alt="" />
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
                        <h2 class="contact-title">เข้าสู่ระบบ</h2>
                        <form class="form-contact contact_form">
                            <div class="row">
                                {/* <div class="col-6"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="username" placeholder = "ชื่อผู้ใช้งาน" />
                                    </div>
                                {/* </div> */}
                                {/* <div class="col-4 center"> */}
                                    <div class="form-group">
                                        <input class="form-control" name="password" type="text" placeholder = 'รหัสผ่าน' />
                                    </div>
                                {/* </div> */}
                            </div>
                            <div class="form-group mt-3 text-center">
                                <button type="submit" class="button button-contactForm btn_4 boxed-btn">เข้าสู่ระบบ</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
            
    }
}

export default Login;