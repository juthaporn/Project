import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

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
      })
    
    }
    
    render(){
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
                      <input name="typeName" class="form-control" placeholder="เช่น อาหารตามสั่ง ก๋วยเตี๋ยว" onChange={this.handleChange} required />
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