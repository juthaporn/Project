import axios from 'axios';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class AddShopType extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        typeName: ''
      }
    }

    handleChange = (e) => {

      // console.log(e.target.value)
      this.setState({value: e.target.value})
    }

    handleSubmit = () => {
      console.log("handleSubmit", this.state.value)
      axios.post('http://localhost:3000/shopType/createShopType', {
        typeName: this.state.value
      }).then((res) => {  
        console.log(res.result)
        if(res.data.message=='success'){
          alert('เพิ่มข้อมูลสำเร็จ')
          this.setState({redirect: true})
        }else{
          alert('ข้อมูลซ้ำ')
          this.setState({redirect: false})
        }
        // this.setState({redirect: true})
        // alert('Add Shop Success!')
      // }).catch(err =>{
      //   console.log(err)
      //   alert('Add Shop Unsuccess!')
      })
    
    }
    
    render(){
      // if(this.state.redirect){
      //   return <Redirect to='/ShopType' />
      // }
        return(
          <main>
            <div class="container">
              <div className="row">
                <div class="col-lg-6">
                  <br />
                  <img class="card-img" src="img/cofe.jpg" alt="" />
                </div>
                <div class="col-lg-6 box">
                  <h2 class="contact-title">เพิ่มประเภทร้านค้า</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อประเภทร้านค้า</label>
                      <input name="typeName" class="form-control" placeholder="เช่น อาหารตามสั่ง ก๋วยเตี๋ยว" onChange={this.handleChange} pattern="^[ก-๏\s]+$" title="กรุณากรอกชื่อประเภทอาหารเป็นภาษาไทย" required />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
                {/* <br /> */}
              </div>
            </div>
          </main>
        )
    }
}

export default AddShopType;