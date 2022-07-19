import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Switch, Select, Tag, Modal } from 'antd';
import Select from 'react-select'
// import Dashboard from '../components/Dashboard';

class AddRole extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // name : '',
            // phone: '',
            // memberID: ''
            data:[]
        }
    }

    componentDidMount(){
        this.getData()
        this.getAllRole()
        // console.log("roleID",this.props.match.params.id)
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

    getAllRole = () => {
        axios.get('http://localhost:3000/role/getAllRole')
        .then(res => {
            console.log(res.data.data)
            const option = res.data.data.map((d) => ({
                "value": d.roleID,
                "label": d.roleName
            }))
            this.setState({role: option})
        })
    }

      handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
          ...this.state,
          [e.target.roleName]: e.target.value
        })
      }

      handleChangeRole = (e, id) => {
        // this.setState({roleID:e.value})
        console.log(e.value)
        console.log(id)
        axios.patch('http://localhost:3000/member/updateRole', {
            memberID: id,
            roleID: e.value
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err.message)
        })
        // console.log(this.state.data)

      }

      handleSubmit = (e) => {
        console.log("handleSubmit", this.state)
        e.preventDefault()
        axios.post('http://localhost:3000/role/getAllRole', {
            roleName: this.state.roleName,
            status: this.state.status
        }).then((res)=>{
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
      }

    roleData = ['Admin', 'Member', 'Owner', 'User']

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
                                        <th width="20%">บทบาท</th>
                                    </tr>

                                {
                                    this.state.data?.map(item => (
                                        <tr>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td width="20%">
                                                
                                            <Select 
                                                options={this.state.role}
                                                // onChange={this.handleChangeRole}
                                                onChange={(e) => this.handleChangeRole(e, item.memberID)}
                                            />
                                            </td>
                                            {/* <td>
                                                <Select
                                                style={{width:'100%'}}
                                                value={item.role}
                                                onChange={(e) => this.handleChangeRole(e, item._id)}
                                                >
                                                    {this.roleData.map((role, index) =>(
                                                        <Select.option value={role} key={index}>
                                                            {role == 'Admin'
                                                            ? <Tag color="green">{role}</Tag>
                                                            : <Tag color="black">{role}</Tag>
                                                            }
                                                        </Select.option>
                                                    ))}
                                                </Select>
                                            </td> */}
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

export default AddRole;