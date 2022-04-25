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
            <main>
                <div class="container">
                    <div class="row d-flex align-items-stretch no-gutters">
                        <div class="col-md-6 p-5 order-md-last">
                            <h2 class="h4 mb-5 font-weight-bold">เข้าสู่ระบบ</h2>
                            <form action="#">
                            <div class="form-group">
                                    <input type="text" class="form-control" placeholder="ชื่อผู้ใช้งาน" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="รหัสผ่าน"></input>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="เข้าสู่ระบบ" class="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 d-flex align-items-stretch-bg">
                            {/* <div id="map"></div> */}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Login;