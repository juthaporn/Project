import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';

class AddTypeFood extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        typeName: ''
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

    handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/admin/add-productType', this.state).then(res => {
        console.log(res);
        alert('Susscess');
      }).catch(error => {
        console.log(error);
      });
    }
    
    render(){
        return(
          <main>
              <AdminHeader />
                <div class="container">
                  <div className="row justify-content-center">
                    <div class="col-md-7 col-lg-5">
                      <h3 class="mb-4">เพิ่มประเภทอาหาร</h3>
                        {/* <div className="col-md-6"> */}
                        <form onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <label>ชื่อประเภทอาหาร</label>
                            <input type="text" name="typeName" class="form-control" placeholder="เช่น น้ำ ผลไม้" onChange={this.handleChange} required />
                          </div><br />
                          <button type="submit" class="btn btn-primary">บันทึก</button>
                        </form>
                        {/* </div> */}
                    </div>
                  </div>
                </div>
          </main>
        )
    }
}

export default AddTypeFood;