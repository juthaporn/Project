import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class TypeFood extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        typeID: '',
        typeName: ''
        // data:[]
    }
}

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    var x = this;
    axios.get("http://localhost:3000/productType/getProductType").then((res) => {
      this.setState({data: res.data.data[0]});
      console.log(this.state.data)
      // x.setState({data: res.data.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  handleDelete = async(typeID) => {
    // console.log(typeID)
    axios.get('http://localhost:3000/productType/deleteProductType/' + typeID)
    .then(res => {
      console.log(res.data.message)
      if(res.data.message=='success'){
        alert('ลบข้อมูลสำเร็จ') 
          this.getData()
      }

    }).catch(err => {
      console.log(err)
    })
  }

    render(){
        return(   
          <div class ="container">      
                <div class="box-title-head">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="title-head text-center">
                                ประเภทอาหาร   
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="col-md-12 grid-margin box">
                        <div class="table-responsive">
                            <table class="table table-striped table-borderless" >

                                    <tr>
                                        <th scope="col">ชื่อประเภทอาหาร</th>
                                        <th scope="col"></th>
                                        <th scope="col" width="30%">
                                          <Link to={"/AddTypeFood"} class="button button-contactForm btn_4 boxed-btn-add">เพิ่มประเภทอาหาร</Link></th>
                                    </tr>

                                {
                                    this.state.data?.map(item => (
                                        <tr>
                                            <td>{item.typeName}</td>
                                            <td></td>
                                            <td width="45%">
                                                <Link to={"/EditTypeFood/"+item.typeID} class="button button-contactForm btn_4 boxed-btn-edit">แก้ไข</Link>

                                              <button class="button button-contactForm btn_4 boxed-btn-del" onClick={() => this.handleDelete(item.typeID)}>ลบ</button>
                                               {/* onClick={() => {if (window.confirm('Are you sure you wish to delete this item?'))} this.handleDelete(item.typeID)} */}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                <br />
            </div>

        )
    }
}

export default TypeFood;
