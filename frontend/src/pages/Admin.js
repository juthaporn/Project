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
        axios.get("http://localhost:3000/member/getMemberRole/3").then((res) => {
          this.setState({data: res.data.data[0]});
          console.log("admin",this.state.data)
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
                                ผู้ประกอบการ    
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Dashboard />  
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless" >

                                    <tr>
                                        <th scope="col">ชื่อผู้ประกอบการ</th>
                                        <th scope="col">เบอร์โทร</th>
                                    </tr>

                                {
                                    this.state.data?.map(item => (
                                        <tr>
                                            <td><Link to={"/ShopByOwner/"+item.memberID}>{item.name}</Link></td>
                                            <td>{item.phone}</td>
                                        </tr>
                                    ))
                                }
                                {/* {this.state.data.map(item => (
                                    <tr>

                                        <td>{item.shopName}</td>
                                        <td>{item.shopType}</td>
                                        <td>{item.name}</td>
                                        <td>{item.shopPhone}</td>
                                    </tr>
                                ))} */}

                            </table>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>

        )
    }
}

export default Admin;