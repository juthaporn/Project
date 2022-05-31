import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class AddTypeFood extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        typeName: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {

      // console.log(e.target.value)
      this.setState({value: e.target.value})
    }

    handleSubmit = () => {
      console.log("handleSubmit", this.state.value)
      axios.post('http://localhost:3000/productType/createProductType', {
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
                      <img class="card-img" src="img/video/big.png" alt="" />
                    </div>
                    <div class="col-lg-6 box">
                      <h2 class="contact-title">เพิ่มประเภทอาหาร</h2>
                      <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                        <div class="form-group">
                          <label>ชื่อประเภทอาหาร</label>
                          <input name="typeName" class="form-control" placeholder="เช่น น้ำ ผลไม้" onChange={this.handleChange} required />
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

export default AddTypeFood;