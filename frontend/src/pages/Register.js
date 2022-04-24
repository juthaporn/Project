import React from 'react';

class Register extends React.Component{
    render(){
        return(
            <main>
                <div class="container">
                    <div class="row d-flex align-items-stretch no-gutters">
                        <div class="col-md-6 p-5 order-md-last">
                            <h2 class="h4 mb-5 font-weight-bold">ลงทะเบียน</h2>
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="ชื่อ - นามสกุล" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="เบอร์โทรศัพท์" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="ชื่อผู้ใช้งาน" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="รหัสผ่าน"></input>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="ลงทะเบียน" class="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 d-flex align-items-stretch-bg">
                            {/* <div id="map"></div> */}
                            <div class="img"></div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Register;