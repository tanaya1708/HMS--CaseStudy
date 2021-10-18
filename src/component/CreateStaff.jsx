import React, { Component } from 'react'
import StaffService from '../service/StaffService';

class CreateStaff extends Component {
    constructor(props){
        super(props)
        this.state ={
            code:'',
            employee_name:'',
            employee_address:'',
            nic:'',
            salary:'',
            age:'',
            occupation:'',
            email:''
             }

    this.changeCodeHandler = this.changeCodeHandler.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeAddHandler = this.changeAddHandler.bind(this);
    this.changeNICHandler = this.changeNICHandler.bind(this);
    this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeOccHandler = this.changeOccHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.SaveStaff = this.SaveStaff.bind(this);
    }

    componentDidMount(){
        StaffService.getStaffById(this.state.code).then((res) => {
            let staff = res.data;
            this.setState({
                code : staff.code,
                employee_name:staff.employee_name,
                employee_address:staff.employee_address,
                NIC : staff.nic,
                salary:staff.salary,
                age:staff.age,
                occupation:staff.occupation,
                email:staff.email



            });
        });

    }

    SaveStaff = (e) => { 
        e.preventDefault();
        let staff = {
            code:this.state.code,
            employee_address:this.state.employee_address,
            employee_name:this.state.employee_name,
            nic:this.state.nic,
            salary:this.state.salary,
            age:this.state.age,
            occupation:this.state.occupation,
            email:this.state.email

        };
        console.log('staff =>' + JSON.stringify(staff));
        StaffService.createStaff(staff).then(res =>{
            this.props.history.push('/staffs');
            alert("New Staff member Added Successfully")
        });

    }
    changeCodeHandler = (event) => {
        this.setState({code : event.target.value});
    }
    changeNameHandler = (event) => {
        this.setState({employee_name : event.target.value});
    }
    changeAddHandler  = (event) => {
        this.setState({employee_address : event.target.value});
    }
    changeNICHandler = (event) => {
        this.setState({nic : event.target.value});
    }
    changeSalaryHandler = (event) => {
        this.setState({salary : event.target.value});
    }
    changeAgeHandler  = (event) => {
        this.setState({age: event.target.value});
    }
    changeOccHandler  = (event) => {
        this.setState({occupation : event.target.value});
    }
    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    cancel(){
        this.props.history.push('/staffs');
        alert("Going back :(")
    }

    render()  {
        return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Staff</h3>
                            <div className = "card-body">
                                <form>
                                <div className = "form-group">
                                        <label> Code: </label>
                                        <input placeholder="code" name="code" className="form-control" 
                                            value={this.state.code} onChange={this.changeCodeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Employee Name: </label>
                                        <input placeholder="employee_name" name="employee_name" className="form-control" 
                                            value={this.state.employee_name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Employee Address: </label>
                                        <input placeholder="employee_address" name="employee_address" className="form-control" 
                                            value={this.state.employee_address} onChange={this.changeAddHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> NIC: </label>
                                        <input placeholder="nic" name="nic" className="form-control" 
                                            value={this.state.nic} onChange={this.changeNICHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Salary: </label>
                                        <input placeholder="salary" name="salary" className="form-control" 
                                            value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> AGE: </label>
                                        <input placeholder="age" name="age" className="form-control" 
                                            value={this.state.age} onChange={this.changeAgeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Occupation: </label>
                                        <input  placeholder="occupation" name="occupation" className="form-control" 
                                            value={this.state.occupation} onChange={this.changeOccHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Occupation: </label>
                                        <input  placeholder="occupation" name="occupation" className="form-control" 
                                            value={this.state.occupation} onChange={this.changeOccHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email: </label>
                                        <input  placeholder="email" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                   <br/>
                                   <div>
                                    
                                

                                    <button className="btn btn-success" onClick={this.SaveStaff}>Save</button>
                                    <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}}

export default CreateStaff
