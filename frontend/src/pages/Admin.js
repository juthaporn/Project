import React from 'react';
import Dashboard from '../components/Dashboard';

class Admin extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         shopName : '',
    //         shopPhone: '',
    //         name: ''
//         }
// }


    render(){
        return(
            <div class ="container">      
                <div class="bradcam_area bradcam_bg_1">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="bradcam_text text-center">
                                <h3>Shop</h3>    
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <Dashboard />  
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">detail</th>
                                <th scope="col">Opening time</th>
                                <th scope="col">Rating</th>
                                <th scope="col">rental contract</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Admin;