import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddProduct extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        productName: '',
        productDetail: '',
        productPrice: '',
        typeName: ''
      }
    }

    // handleChange = (e) => {
    //   console.log(e.target.name, e.target.value);
    //   let name = e.target.name;
    //   let value = e.target.value;
    //   this.setState({
    //     [name]: value
    //   });
    // }

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   axios.post('http://localhost:3000/admin/add-products', this.state).then(res => {
    //     console.log(res);
    //     alert('Susscess');
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    
    render(){
        return(
          <main>
            <div class="container">
              <div className="row">
                <div class="col-lg-6">
                  <br />
                  <img class="card-img" src="img/video/big.png" alt="" />
                </div>
                <div class="col-lg-6">
                  <h2 class="contact-title">เพิ่มรายการอาหาร</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่ออาหาร</label>
                      <input name="productName" class="form-control" placeholder="เช่น ข้าวผัดไข่" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ประเภทอาหาร</label>
                      {/* <input name="typeName" class="form-control" onChange={this.handleChange} required /> */}
                      <select id='typeName'>
                        <option value={this.typeName}></option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>คำอธิบายรายการอาหาร</label>
                      <input name="productDetail" class="form-control" placeholder="ประกอบไปด้วย ไข่ และเนื้อสัตว์" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group">
                      <label>ราคา</label>
                      <input name="productPrice" class="form-control" placeholder="เช่น 30" onChange={this.handleChange} required />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        )
    }
}

export default AddProduct;