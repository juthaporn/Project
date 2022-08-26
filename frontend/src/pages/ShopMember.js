import React from 'react';
import axios from 'axios';
class ShopMember extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopName: '',
            productName: '',
            producPrice: ''
           
        }
}
componentDidMount(){
    this.getData()
  }

  getData = () => {
    var x = this;
    axios.get("http://localhost:3000/getOneShop/13").then((res) => {
      this.setState({data: res.data.data[0]});
      console.log("owner",this.state.data)
      // x.setState({data: res.data.data});
    }).catch((error) => {
      console.log(error);
    });
  }


    render(){
        return(    
            <div class ="container">    
            <div class="bradcam_area bradcam_bg_1">
                  <div class="container">
                      <div class="row">
                          <div class="col-xl-12">
                              <div class="bradcam_text text-center">
                                  <h3>Menu</h3>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <div class="recepie_area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                                <img class="card-img" src="img/recepie/recpie_1.png" alt="" />
                            </div>
                            <h3>shopName</h3>
                            <span>productName</span>
                            <p>producPrice</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_2.png" alt="" />
                            </div>
                            <h3>Pure Vegetable Bowl</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_3.png" alt="" />
                            </div>
                            <h3>Egg Masala Ramen</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_4.png" alt="" />
                            </div>
                            <h3>Egg Masala Ramen</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_5.png" alt="" />
                            </div>
                            <h3>Egg Masala Ramen</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            <img class="card-img" src="img/recepie/recpie_6.png" alt="" />
                            </div>
                            <h3>Egg Masala Ramen</h3>
                            <span>Appetizer</span>
                            <p>Time Needs: 30 Mins</p>
                            <a href="#" class="line_btn">View Full Recipe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
        )
    }
}

export default ShopMember;