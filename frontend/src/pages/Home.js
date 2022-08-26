import React from 'react';
import axios from 'axios';
// import { Container } from 'react-bootstrap';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          shopName : '',
          openingTime: '',
        
        }
      }
    componentDidMount(){
        this.getData()
      }
  
      getData = () => {
        var x = this;
        axios.get("http://localhost:3000/shop/getAllShop").then((res) => {
          this.setState({data: res.data.data[0]});
          console.log("owner",this.state.data)
          // x.setState({data: res.data.data});
        }).catch((error) => {
          console.log(error);
        });
      }
    render(){
        return(  
            <div class = "Container">
            <div class="latest_trand_area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="trand_info text-center">
                                <h3>Chopradu Food Center Walailak University</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recepie_videoes_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6">
                                <div class="recepie_info">
                                    <h3>Chopradu Food Center 
                                    Walailak University</h3>
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.</p>
                                <div class="video_watch d-flex align-items-center">
                                    <a class="popup-video" href="https://www.youtube.com/watch?v=lr6AMBsjxrY"> <i class="ti-control-play"></i> </a>
                                    <div class="watch_text">
                                        <h4>Watch Video</h4>
                                        {/* <p>You will love our execution</p> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="videos_thumb">
                                    <div class="big_img">
                                        <img class="card-img" src="img/video/big.png" alt="" />
                                    </div>
                                    <div class="small_thumb">
                                        <img class="card-img" src="img/video/small_1.png"alt="" />
                                    </div>
                                    <div class="small_thumb_2">
                                        <img class="card-img" src="img/video/2.png"alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recepie_area">
           
            <div class="container">
           
                <div class="row">
                { this.state.data?.map(shop => (
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="single_recepie text-center">
                            <div class="recepie_thumb">
                            
                                <img class="card-img" src="img/recepie/recpie_1.png"alt="" /></div>
                           
                                    <h5>{shop.shopName}</h5>
                                    <h5>{shop.openingTime}</h5>
                                    <h5><a href="/Menu" class='badge badge-primary'>ไปยังร้านค้า</a></h5>
                            {/* <p>Time Needs: 30 Mins</p> */}
                            {/* <a href="#" class="line_btn">View Full Recipe</a> */}
                        </div>
                    </div>
                    ))
                }
                </div>  
            </div>  
        </div>
    </div>
            
        )
    }
}

export default Home;