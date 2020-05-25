import React, { Component } from 'react'
import { connect } from 'react-redux'

import uuid from 'uuid-random';

import { setCurrentPg,setPerPg,del } from '../../redux/action';

import  Pagination  from './Pagination';



 class Table extends Component {
     constructor(props) {
         super(props);
         
     }
     

    handlePageNum = (event) => {

        this.setState({
            pageView: event.target.value
        }, () => this.props.setPerPg(this.state.pageView))
    }

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
                     
                        {this.props.bookings && this.props.bookings.filter((a, i) => i >= this.props.perPage * (this.props.currentPage - 1) && i < this.props.perPage * (this.props.currentPage)).map((e,i)=>(
                            <tr key={e.key}>
                            <td>{e.src}</td>
                            <td>{e.dst} </td>
                            <td> {e.date}</td>
                            <td>{e.time} </td>
                            <td> <button className="badge badge-pill rounded badge-success" onClick = {this.update}> EDIT</button></td>
                            <td> <button className="badge badge-pill rounded badge-danger" onClick={()=>this.props.del(e.id)}> DELETE</button></td>
                            </tr>
                        ))}
                       
                    
                     
                    </tbody>
                  </table>


						
                            <Pagination/>

						<div class="btn-group offset-4 mt-2 ">
                        <label className="text-info " for="limit">Items Per Page</label>
                        <select onChange={this.handlePageNum} class="custom-select" name="limit" id="limit">
                            <option selected>Per Page Limit</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
					</div>


                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    bookings : state.bookings,
    perPage: state.perPage,
    currentPage: state.currentPage
})

const mapDispatchToProps =(dispatch)=> {
    return{
        del:(key) => dispatch(del(key)),
        setPerPg: (value) => dispatch(setPerPg(value))
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
