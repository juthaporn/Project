import axios from 'axios';
import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

class EditTypeFood extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        typeName: '',
        data:[]
      }
    }

    componentDidMount(){
      this.getData()
      console.log("typeID",this.props.match.params.id)
  }

  getData = () => {
    var x = this;
    axios.get("http://localhost:3000/productType/getEditProductType/"+this.props.match.params.id).then((res) => {
      // this.setState({data: res.data.data[0]});
      // this.setState({typeID: this.state.data[0].typeID})
      this.setState({typeID: res.data.data[0].typeID})
      // this.setState({typeName: this.state.data[0].typeName})
      this.setState({typeName: res.data.data[0].typeName})
      
      console.log(this.state.typeName)
    }).catch((error) => {
      console.log(error);
    });
    }

    handleChangeTypeFood = (e) => {
      // this.setState({typeID:e.value})
      // console.log(this.state)
      console.log(e.target.name, e.target.value);
      this.setState({typeName: e.target.value}) 
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/productType/editProductType',this.state).then(res => {
        console.log(res.data);
        if(res.data.result){
          // if(){
            
          // }else{
          //   alert('กรุณากรอกเฉพาะตัวเลข')
          // }
        }
        }).catch(error => {
          console.log(error);
        });
      }

    render(){
      // if(this.state.redirect){
      //   return <Redirect to='/Typefood' />
      // }
        return(
          <main>
            <div class="container">
              <div className="row">
                <div class="col-lg-6">
                  <br />
                  <img class="card-img" src="img/video/big.png" alt="" />
                </div>
                <div class="col-lg-6">
                  <h2 class="contact-title">แก้ไขประเภทอาหาร</h2>
                  <form class="form-contact contact_form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <label>ชื่อประเภทอาหาร</label>
                      <input name="typeName" class="form-control" value={this.state.typeName} onChange={this.handleChangeTypeFood} pattern="^[ก-๏\s]+$" title="กรุณากรอกชื่อประเภทอาหารเป็นภาษาไทย" required />
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

export default EditTypeFood;