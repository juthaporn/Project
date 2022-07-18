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
      this.getData()
      console.log("roleID",this.props.match.params.id)
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
      axios.get('http://localhost:3000/role/getRole')
      .then(res => {
        const option = res.data.data.map((d) => ({
          "value": d.roleID,
          "label": d.roleName
        }))
        this.setState({role: option})
        // console.log('shopType', this.state.shopType[0].typeName)
      })
    }


    handleChange = (e) => {
      console.log(e.target.value)
      this.setState({
        ...this.state,
        [e.target.roleName]: e.target.value
      })
    }

    handleSubmit = () => {
      console.log("handleSubmit", this.state.value)
      axios.post('http://localhost:3000/member/createMember', {
        username: this.state.value,
        password: this.state.value,
        name: this.state.value,
        phone: this.state.value,
        roleID: this.state.value
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
                      <input name="name" class="form-control" placeholder="ชื่อผู้ประกอบการ" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>เบอร์โทร</label>
                      <input name="phone" class="form-control" placeholder="+66" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ชื่อผู้ใช้งาน</label>
                      <input name="username" class="form-control" placeholder="ชื่อผู้ใช้งาน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>รหัสผ่าน</label>
                      <input name="password" class="form-control" placeholder="รหัสผ่าน" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>บทบาท</label>
                        <Select 
                          options={this.state.roleName}
                          onChange={this.handleChangeShopType.bind(this)}
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