import React from 'react';  

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import GuestList from './component/GuestList';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import Createguest from './component/Createguest';
import Viewguest from './component/Viewguest';
import Updateguest from './component/Updateguest';
import BookingList from './component/BookingList';
import CreateBooking from './component/CreateBooking';
import RoomList from './component/RoomList';
import SearchRoom from './component/SearchRoom';

import StaffList from './component/StaffList';
import CreateStaff from './component/CreateStaff';
import UpdateStaff from './component/UpdateStaff';
import RatesList from './component/RatesList';
import Home from './component/Home';




function App() {
  return (
    <div className="App">
     <Router>
               <HeaderComponent /> 
      
                <div className="container">
                    <Switch> 
                      <Route path ="/home" component = {Home}></Route> 
                          <Route path = "/bookings" component ={BookingList}></Route>
                          <Route path = "/guests" component = {GuestList}></Route>
                          <Route path = "/rooms" component = {RoomList}></Route>
                          <Route path = "/staffs" component = {StaffList}></Route>
                          <Route path = "/rates" component = {RatesList}></Route>
                          <Route path = "/add-staff" component = {CreateStaff}></Route>
                          <Route path = "/search-room" component = {SearchRoom}></Route>
                          <Route path = "/add-booking"component = {CreateBooking}></Route>
                          <Route path = "/add-guest" component=   {Createguest}></Route>
                          <Route path = "/view-guest/:member_code" component=  {Viewguest}></Route>
                          <Route path = "/update-guest/:member_code" component = {Updateguest}></Route>  
                          <Route path = "/update-staff/:code"component = {UpdateStaff}></Route>
                    </Switch>
                </div>
               <FooterComponent/> 
        </Router>
    </div>
  );
}

export default App;
