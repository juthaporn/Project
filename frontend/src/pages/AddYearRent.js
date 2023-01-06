import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select'

class AddYearRent extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        // rentDetail: '',
        // rentalFee: '',
        // year:'',
        // shopName: ''
        data: [],
        yearRent: 2019
      }
    }

    componentDidMount(){
      this.getData()
      console.log("shopID",this.props.match.params.id)
    }

    getData = () => {
      var x = this;
      axios.get("http://localhost:3000/shop/getOneShop/"+this.props.match.params.id).then((res) => {
        this.setState({data: res.data.data[0]});
        // this.setState({name: this.state.data[0].name})
        console.log(this.state.data.shopName)
      }).catch((error) => {
        console.log(error);
      });
    }

    handleChange = (e) => {
      console.log(e.target.value)
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      axios.post('http://localhost:3000/yearRent/createYearRent', {
        rentDetail: this.state.rentDetail,
        year: this.state.yearRent,
        rentalFee: this.state.rentalFee,
        shopID: this.state.data.shopID
      }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
      // axios.post('http://localhost:3000/YearRent/createYearRent',{
      //   rentDetail: this.state.rentDetail,
      //   year: this.state.year,
      //   rentalFee: this.state.rentalFee,
      //   shopID: this.props.match.params.id
      // }).then(res => {
      //   console.log(res)
      //   alert('Success!')
      // }).catch(err => {
      //   console.log(err)
      // })
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
                <div class="col-lg-6">
                  <h2 class="contact-title">เพิ่มค่าเช่าร้าน</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อร้านค้า</label>
                      <input class="form-control" name="shopName" onChange={this.handleChange} value={this.state.data.shopName} required />
                    </div>
                    <div class="form-group">
                      <label>คำอธิบายเพิ่มเติม</label>
                      <input name="rentDetail" class="form-control" placeholder="เช่น ค่าเช่าร้านประจำปี 2564" onChange={this.handleChange} />
                    </div>
                    <div class="form-group">
                      <label>ปี</label>&nbsp;&nbsp;&nbsp;
                      {/* <input name="year" class="form-control" placeholder="เช่น ค่าเช่าร้านประจำปี 2564" onChange={this.handleChange} required /> */}
                      {/* <Select 
                        options="1203"
                        onChange={this.handleChangeShopType.bind(this)}
                      /> */}
                      <select name='yearRent' onChange={this.handleChange}>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>ค่าเช่าร้าน</label>
                      <input name="rentalFee" class="form-control" onChange={this.handleChange} pattern="^[0-9\s]+$" title="กรุณากรอกค่าเช่าร้านเป็นตัวเลข" required maxLength={5} />
                    </div>
                    <div class="form-group text-center">
                      <button type="submit" class="button button-contactForm btn_4 boxed-btn">บันทึก</button>
                    </div>
                  </form>
                </div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
              </div>
          </main>
        )
    }
}

export default AddYearRent;