import React from 'react';

class TypeFood extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        typeID: '',
        typeName: ''
    }
}



    render(){
        return(   
          <div class="container">
          <div className="row">
            <div class="col-lg-6">
              <br />
              <img class="card-img" src="img/video/big.png" alt="" />
            </div>
            <div class="col-lg-6">
              <h2 class="contact-title">ประเภทอาหาร</h2>
              <div class="card" >
              <ul class="list-group list-group-flush">
                <li class="list-group-item">อาหารตามสั่ง</li>
                <li class="list-group-item">ข้าวแกง</li>
                <li class="list-group-item">เครื่องดื่ม</li>
              </ul>
            </div>
            </div>
          </div>
          </div>
        )
    }
}

export default TypeFood;