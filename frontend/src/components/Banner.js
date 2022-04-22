import React from 'react';
// import { Link } from 'react-router-dom';


class Banner extends React.Component{
    render(){
        return(
            <section className="home-slider js-fullheight owl-carousel bg-white">
                <div className="slider-item js-fullheight">
                    <div className="overlay"></div>
                    <div className="container-fluid p-0">
                    <div className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                        <div className="one-third order-md-last img js-fullheight">
                            <div className="overlay"></div>
                        </div>
                        <div className="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <div className="text mt-md-5">
                                <h1 className="mb-4">Eat Healthy <br/> and Natural Foods</h1>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                <div className="thumb mt-4 mb-3 d-flex">
                                    {/* <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-1.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a>
                                    <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-2.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a>
                                    <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-3.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a> */}
                                </div>
                                <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Book A Table</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item js-fullheight">
                    <div className="overlay"></div>
                    <div className="container-fluid p-0">
                    <div className="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                        <div className="one-third order-md-last img js-fullheight">
                            <div className="overlay"></div>
                        </div>
                        <div className="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                            <div className="text mt-md-5">
                                <h1 className="mb-4">We Love <br/> Delicious Foods</h1>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                <div className="thumb mt-4 mb-3 d-flex">
                                    {/* <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-1.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a>
                                    <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-2.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a>
                                    <a href="#" className="thumb-menu pr-md-4 text-center">
                                        <div className="img" style="background-image: url(images/menu-3.jpg);"></div>
                                        <h4>Australian Organic Beef</h4>
                                    </a> */}
                                </div>
                                <p><a href="#" className="btn btn-primary px-4 py-3 mt-3">Book A Table</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
        )
    }
}

export default Banner;