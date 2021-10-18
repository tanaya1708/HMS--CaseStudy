
import React, { Component } from 'react'
import BookingService from '../service/BookingService';


class BookingList extends React.Component {

    constructor(props){
        super(props)
       
        this.state = {
            bookings:[]//3
        }
        this.MakeReservation = this.MakeReservation.bind(this);//1
        this.deleteBooking = this.deleteBooking.bind(this);//2
     
    }

    deleteBooking(code){
        BookingService.deleteBooking(code).then( res => {
            this.setState({bookings: this.state.bookings.filter(booking => booking.code !== code)}); //5
            alert("Booking Cancelled :)")
        });
    }

  

    componentDidMount(){
        BookingService.getBooking().then((res) =>{       //4
            this.setState({bookings: res.data})
        });

    }

    MakeReservation(){
        
        this.props.history.push(`/add-booking`); //5
    }


   
    render() {
        return (
            <div>
                <h2 className = "text-center">Reservation List</h2>
                <div className = "row">
                    <button className="btn btn-primary"  onClick={this.MakeReservation}>New Booking</button>
                 </div>
                 <br></br>
                 <div className = "row">
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Children</th>
                            <th>Adult</th>
                            <th>Check IN</th>
                            <th>Check OUT</th>
                            <th>Status</th>
                            <th>Total Nights</th>
                            <th> Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.bookings.map(
                                booking => 
                                <tr key = {booking.code}>
                                    <td>{booking.code}</td>
                                    <td>{booking.children}</td>
                                    <td>{booking.adult}</td>
                                    <td>{booking.check_IN}</td>
                                    <td>{booking.check_OUT}</td>
                                    <td>{booking.status}</td>
                                    <td>{booking.number_of_nights}</td>
                                    <td>
                                                 <button  onClick={ () => this.deleteBooking(booking.code)} className="btn btn-danger"> Cancel Booking </button>
                                             
                                             </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
               </div>
                
            </div>
        )
    }
}

export default BookingList
