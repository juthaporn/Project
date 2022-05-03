import React from 'react';
// import { Container } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return(  
            <div class = "Container">
            <div class="slider_area">
                <div class="single_slider  d-flex align-items-center slider_bg_1">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-xl-8 ">
                                <div class="slider_text text-center">
                                    <div class="text">
                                        <h3>
                                        Chopradu Food Center Walailak University
                                        </h3>
                                    </div>
                                </div>
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
                                        <p>You will love our execution</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="videos_thumb">
                                    <div class="big_img">
                                        {/* <img src="img/video/big.png" alt=""> */}
                                    </div>
                                    <div class="small_thumb">
                                        {/* <img src="img/video/small_1.png" alt=""> */}
                                    </div>
                                    <div class="small_thumb_2">
                                        {/* <img src="img/video/2.png" alt=""> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;