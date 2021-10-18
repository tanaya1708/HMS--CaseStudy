
import React, { Component } from 'react'
import GuestService from '../service/GuestService';

class GuestList extends React.Component {

    constructor(props){
        super(props)
       
        this.state = {
            guests:[]
        }
        this.addGuest = this.addGuest.bind(this);
        this.editGuest=this.editGuest.bind(this);
        this.deleteGuest=this.deleteGuest.bind(this);
    }

    deleteGuest(member_code){
        GuestService.deleteGuest(member_code).then( res => {
            this.setState({guests: this.state.guests.filter(guest => guest.member_code !== member_code)});
            alert("Guest deleted sucessfully")
        });
    }

    viewGuest(member_code){
     this.props.history.push(`/view-guest/${member_code}`);
    }

    editGuest(member_code){
        this.props.history.push(`/update-guest/${member_code}`);
    }

    componentDidMount(){
        GuestService.getGuest().then((res) =>{
            this.setState({guests: res.data})
        });

    }

    addGuest(){
        
        this.props.history.push(`/add-guest`);
    }


   
    render() {
        return (
            <div>
                <h2 className = "text-center">Guests List</h2>
                <div className = "row">
                    <button className="btn btn-primary" style={{width: "10%"}}  onClick={this.addGuest}> Add Guest</button>
                 </div>
                 <br></br>
                 <div className = "row">
                <table className = "table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Member Code</th>
                            <th>Phone No</th>
                            <th>Company</th>
                            <th>Name</th>
                            <th>Email id</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th> Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.guests.map(
                                guest => 
                                <tr key = {guest.member_code}>
                                    <td>{guest.member_code}</td>
                                    <td>{guest.phone_number}</td>
                                    <td>{guest.company}</td>
                                    <td>{guest.name}</td>
                                    <td>{guest.email}</td>
                                    <td>{guest.gender}</td>
                                    <td>{guest.address}</td>
                                    <td>
                                                 <button onClick={ () => this.editGuest(guest.member_code)} className="btn btn-info"> Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteGuest(guest.member_code)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewGuest(guest.member_code)} className="btn btn-info">View </button>
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

export default GuestList
