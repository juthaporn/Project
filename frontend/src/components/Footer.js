import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <p class="copy_right">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                        All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> 
                        by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p>
                </div>
            </nav>
                // <div class="copy-right_text">
                //     <div class="container">
                //         <div class="footer_border"></div>
                //         <div class="row align-items-center">
                //             {/* <div class="col-xl-8 col-md-8"> */}
                //             <p class="copy_right">
                //                 Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                //                 All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> 
                //                 by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                //             </p>
                //             {/* </div> */}
                //         </div>
                //     </div>
                // </div>
 
        )
    }
}

export default Footer;