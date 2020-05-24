import React, { Component } from 'react'
import { connect } from 'react-redux'

import  Table  from './Table';

import { Contact } from './Contact';

 export class Home extends Component {
     constructor(props) {
         super(props);
         this.state = {

         }
     }
     
    render() {  
        console.log(this.props.bookings[0].tripStart)
        return (
            <div>
               
                  <Table/>
                
                  
    
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        bookings : state.bookings
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
