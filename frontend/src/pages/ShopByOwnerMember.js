import React, { Component } from 'react'

export default class ShopByOwnerMember extends Component {
  render() {
    return (
        <div class="col-xl-12 col-md-12 box">
            <div class="recepies_info">
                {/* <h3>shopName</h3> */}
                {/* <p>shopDetail</p> */}    
                <div class="resepies_details">
                    <ul>
                        <li><p><strong>ชื่อร้าน</strong> : {this.props.shopName}</p></li>
                        <li><p><strong>เบอร์โทรศัพท์</strong> : {this.props.shopPhone}</p></li>
                        <li><p><strong>คำอธิบายร้านค้า</strong> : {this.props.shopDetail}</p></li>
                        <li><p><strong>เวลาเปิด-ปิด</strong> : {this.props.openingTime} </p></li>
                        <li><p><strong>ประเภทร้านค้า</strong> : {this.props.typeName} </p></li>
                        <li><p><strong>สัญาเช่าร้าน</strong> : {this.props.shopRentalContract} </p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}
