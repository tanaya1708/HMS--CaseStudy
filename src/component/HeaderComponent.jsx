import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return   (
            <div className="header">
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Happy Stay</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/guests">Guest</a>
                                </li>
    
                                <li className="nav-item">
                                    <a className="nav-link" href="/rooms">Rooms</a>
                                </li>
    
                                <li className="nav-item">
                                    <a className="nav-link" href="/bookings">Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/staffs">Staff</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/rates">SetRates</a>
                                </li>
                                
                            </ul>
                            <form className="d-flex">
                            <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                
                            </form>
                        </div>
                    </div>
                </nav>
    
            </div>
        )
    }
}

export default HeaderComponent