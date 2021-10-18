import React, { Component } from 'react'
import BookingService from '../service/BookingService';


class CreateBooking extends Component {
    constructor(props){
        super(props)

        this.state ={
           code:'',
           children:'',
           adult:'',
           check_IN:'',
           check_OUT:'',
            status:'',
            number_of_nights:''
        }
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeChildernHandler = this.changeChildernHandler.bind(this);
        this.changeAdultHandler = this.changeAdultHandler.bind(this);
        this.changeCheckinHandler = this.changeCheckinHandler.bind(this);
        this.changeCheckoutHandler = this.changeCheckoutHandler.bind(this);
        this.changestatusHandler = this.changestatusHandler.bind(this);
        this.changeNightsHandler = this.changeNightsHandler.bind(this);
        this.MakeBooking = this.MakeBooking.bind(this);

    }

    componentDidMount(){
  
        BookingService.getBooking(this.state.code).then( (res) =>{//may be changes
            let booking = res.data;
            this.setState({
               code : booking.code,
               children : booking.children,
               adult : booking.adult,
               check_IN : booking.check_IN,
               check_OUT :booking.check_OUT,
               status : booking.status,
               number_of_nights : booking.number_of_nights
            });
        });
        
}
MakeBooking = (e) => {  //2
    e.preventDefault();
    let booking = {
               code:this.state.code,
               children:this.state.children,
               adult:this.state.adult,
               check_IN:this.state.check_IN,
               check_OUT:this.state.check_OUT,
               status:this.state.status,
               number_of_nights:this.state.number_of_nights
        
    };
    console.log('booking => ' + JSON.stringify(booking));
        BookingService.createBooking(booking).then(res =>{
            this.props.history.push('/bookings');
            alert("Reservation Successfull !")
        });
    
}

changeCodeHandler = (event)=>{
    this.setState({code:event.target.value})
}
changeChildernHandler  = (event)=>{
    this.setState({children:event.target.value})
}
changeAdultHandler =  (event)=>{
    this.setState({adult:event.target.value})
}
changeCheckinHandler  = (event)=>{
    this.setState({check_IN:event.target.value})
}
changeCheckoutHandler= (event)=>{
    this.setState({check_OUT:event.target.value})
}
changestatusHandler = (event)=>{
    this.setState({status:event.target.value})
}
changeNightsHandler  = (event)=>{
    this.setState({number_of_nights:event.target.value})
}


cancel(){
    this.props.history.push('/bookings');
}

// getTitle(){
//     if(this.state.member_code == '_add'){
//         return <h3 className="text-center">Add Guest</h3>
//     }else{
//         return <h3 className="text-center">Update Guest</h3>
//     }
// }
    render()  {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Make Reservation</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> code: </label>
                                            <input placeholder="code" name="code" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number of Children: </label>
                                            <input placeholder="children" name="children" className="form-control" 
                                                value={this.state.children} onChange={this.changeChildernHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number of Adult: </label>
                                            <input placeholder="adult" name="adult" className="form-control" 
                                                value={this.state.adult} onChange={this.changeAdultHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Check IN: </label>
                                            <input type ="date" placeholder="check_IN" name="check_IN" className="form-control" 
                                                value={this.state.check_IN} onChange={this.changeCheckinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Check OUT: </label>
                                            <input type ="date" placeholder="check_OUT" name="check_OUT" className="form-control" 
                                                value={this.state.check_OUT} onChange={this.changeCheckoutHandler}/>
                                        </div>
        
                                        <div className = "form-group">
                                            <label> Status : </label>
                                            <select name = "status" placeholder = "status" name = "status" 
                                            value= {this.state.status} onChange={this.changestatusHandler}>
                                                <option>Reserved</option>
                                                <option>Confirmed</option>
                                                <option>Tentative</option>
                                            </select>
                                
                                        </div>
                                        <div className = "form-group">
                                            <label> Number of Nights: </label>
                                            <input  placeholder="number_of_nights" name="number_of_nights" className="form-control" 
                                                value={this.state.number_of_nights} onChange={this.changeNightsHandler}/>
                                        </div>
                                       <br/>
                                       <div>
                                        
                                    

                                        <button className="btn btn-success" onClick={this.MakeBooking}>Save</button>
                                        <button  style={{marginLeft: "10px"}} className="btn btn-success" >Payment</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBooking
