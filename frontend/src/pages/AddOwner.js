import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

class AddOwner extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        // username:'',
        // password:'',
        // name:'',
        // phone:'',
        // roleID: ''
        data:[]

      }
      // this.handleChange = this.handleChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
      // this.getData()
      this.getRole()
      console.log("roleID",this.props.match)
    }

    // getData = () => {
    //   var x = this;
    //   axios.get("http://localhost:3000/role/getRole/"+this.props.match.params.id).then((res) => {
    //     this.setState({data: res.data.data[0]});
    //     // this.setState({name: this.state.data[0].name})
    //     console.log(this.state.data.roleName)
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // }

    getRole = () => {
      axios.get('http://localhost:3000/role/getAllRole')
      .then(res => {
        console.log(res.data.data)
        const option = res.data.data.map((d) => ({
          "value": d.roleID,
          "label": d.roleName
        }))
        this.setState({role: option})
        console.log(this.state.role)
        // console.log('shopType', this.state.shopType[0].typeName)
      })
    }


    handleChange = (e) => {
      console.log(e.target.name, e.target.value)
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    }

    handleChangeShopType = (e) => {
     this.setState({roleValue: e.value})
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log("handleSubmit", this.state)
      axios.post('http://localhost:3000/member/createMember', {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        phone: this.state.phone,
        roleID: this.state.roleValue
      }).then((res) => {  
        console.log(res.result)
      })
    
    }

    render(){
        return(
          <div class="container">
            <div className="row">
              <div class="col-lg-6">
                <br />
                <img class="card-img" src="img/video/big.png" alt="" />
              </div>
              <div class="col-lg-6">
                <h2 class="contact-title">เพิ่มผู้ประกอบการ</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อผู้ประกอบการ</label>
                      <input name="name" class="form-control" placeholder="ชื่อผู้ประกอบการ" onChange={this.handleChange} pattern="^[ก-๏\s]+$" title="กรุณากรอกชื่อผู้ประกอบการเป็นภาษาไทย" required />
                    </div>
                    <div class="form-group">
                      <label>เบอร์โทร</label>
                      <input name="phone" class="form-control" placeholder="+66" onChange={this.handleChange} pattern="^[0-9\s]+$" title="กรุณากรอกเบอร์โทรเป็นตัวเลข" required maxLength={10} />
                    </div>
                    <div class="form-group">
                      <label>ชื่อผู้ใช้งาน</label>
                      <input name="username" class="form-control" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>รหัสผ่าน</label>
                      <input type="password" name="password" class="form-control" placeholder="รหัสผ่าน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>บทบาท</label>
                        <Select 
                          options={this.state.role}
                          onChange={this.handleChangeShopType}
                        />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

        )
    }
}

export default AddOwner;