import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

class Admin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone: '',
            memberID: ''
        }
    }

    componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/member/getAllMember").then((res) => {
          this.setState({data: res.data.data[0]});
          console.log(this.state.data)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }


    render(){
        return(
            <div class ="container">      
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                กำหนดสิทธิ์ผู้ใช้งาน   
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                {/* <Dashboard />   */}
                <div class="col-md-12 grid-margin box">
                    {/* <div class="card"> */}
                    {/* <div class="card-body"> */}
                    {/* <div class="box" */}
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless" >

                                    <tr>
                                        <th scope="col">ชื่อ</th>
                                        <th scope="col">เบอร์โทร</th>
                                        <th>
                                        <select name='role' onChange={this.handleChange}>
                                            <option>สมาชิก</option>
                                            <option>ผู้ดูแลระบบ</option>
                                            <option>ผู้ประกอบการ</option>
                                        </select>
                                        </th>
                                    </tr>

                                {
                                    this.state.data?.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td width="20%"></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                {/* </div>
                </div> */}
                <br />
            </div>

        )
    }
}

export default Admin;