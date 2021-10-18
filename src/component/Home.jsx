import React, { Component } from 'react'
import Hotel1 from "../images/Hotel1.jpg"

class Home extends Component {
    render() {
        return (
            <div className="homepage" style={{
                backgroundImage: `url(${Hotel1})`,
                
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
      
                height: '800px', }
                }>
                    <h1 
                    align="left"><i>Happy Stay Welcomes You ...!</i></h1>
                
            </div>
        )
    }
}

export default Home
