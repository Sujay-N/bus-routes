import React, { Component } from 'react'
import { connect } from 'react-redux'

import uuid from 'uuid-random';


 class Table extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-6 offset-3 my-5">
                    <table class="table table-bordered table-hover">
                    <caption>Bus Routes</caption>
                    <thead>
                      <tr>
                        <th scope="col">Source</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Date</th>
                        <th scope="col">Scheduled Departure</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                     
                        {this.props.bookings && this.props.bookings.map((e)=>(
                            <tr key={uuid()}>
                            <td>{e.src}</td>
                            <td>{e.dst} </td>
                            <td> {e.date}</td>
                            <td>{e.time} </td>
                            <td> <button className="badge badge-pill rounded badge-success" onClick = {this.update}> EDIT</button></td>
                            <td> <button className="badge badge-pill rounded badge-danger" onClick={this.del}> DELETE</button></td>
                            </tr>
                        ))}
                       
                    
                     
                    </tbody>
                  </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookings : state.bookings,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
