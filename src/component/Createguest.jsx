import React, { Component } from 'react'
import GuestService from '../service/GuestService';


class Createguest extends Component {
    constructor(props){
        super(props)

        this.state ={
            member_code:'',
            phone_number:'',
            company:'',
            name:'',
            email:'',
            gender:'',
            address:''

        }
        this.changeMemberCodeHandler=this.changeMemberCodeHandler.bind(this);
        this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.saveOrUpdateGuest = this.saveOrUpdateGuest.bind(this);

    }

    componentDidMount(){
  
        GuestService.getGuestById(this.state.member_code).then( (res) =>{
            let guest = res.data;
            this.setState({
                member_code : guest.member_code,
                phone_number : guest.phone_number,
                company : guest.company,
                name : guest.name,
                gender : guest.gender,
                address : guest.address,
                email : guest.email
            });
        });
        
}
saveOrUpdateGuest = (e) => { 
    e.preventDefault();
    let guest = {
        member_code:this.state.member_code,
        phone_number:this.state.phone_number,
        company:this.state.company,
        name:this.state.name,
        email:this.state.email,
        gender:this.state.gender,
        address:this.state.address
        
    };
    console.log('guest => ' + JSON.stringify(guest));
        GuestService.createGuest(guest).then(res =>{
            this.props.history.push('/guests');
            alert("Guest Added sucessfully")
        });
    
}
changeMemberCodeHandler = (event) => {
    this.setState({member_code: event.target.value});
}
changePhoneNumberHandler = (event) =>{
    this.setState({phone_number: event.target.value});  
}
changeCompanyHandler =(event) =>{
    this.setState({company: event.target.value});  
}
changeNameHandler = (event) =>{
    this.setState({name: event.target.value});  
}
changeEmailHandler =(event) =>{
    this.setState({email: event.target.value});  
}
changeGenderHandler = (event) =>{
    this.setState({gender: event.target.value});  
}
changeAddressHandler = (event) =>{
    this.setState({address: event.target.value});  
}
cancel(){
    this.props.history.push('/guests');
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
                            <h3 className="text-center">Add Guest</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Member code: </label>
                                            <input placeholder="Member code" name="Member code" className="form-control" 
                                                value={this.state.member_code} onChange={this.changeMemberCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phone Number: </label>
                                            <input placeholder="Phone Number" name="Phone Number" className="form-control" 
                                                value={this.state.phone_number} onChange={this.changePhoneNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input placeholder="Company" name="Company" className="form-control" 
                                                value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Id" name="Email Id" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>

                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input type placeholder="Gender" name="Gender" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input  placeholder="Address" name="Address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        
                                       <br/>
                                       <div>
                                        
                                    

                                        <button className="btn btn-success" onClick={this.saveOrUpdateGuest}>Save</button>
                                        <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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

export default Createguest
