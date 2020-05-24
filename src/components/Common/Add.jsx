import React, { Component } from 'react'
import { connect } from 'react-redux'
import {add , addCity} from "../../redux/action"
import uuid from 'uuid-random';

 class Add extends Component {
    constructor(props) {

        super(props);
        console.log(props)

        this.state={
            cityName:"",
            date:"",
            time:"",
            src:"",
            dst:"",
            id:0,
            tripStart:"false",
    
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    
    }

    handleSubmit=(e) => {

    const details = {
        
        date:this.state.date,
        time:this.state.time,
        src:this.state.src,
        dst:this.state.dst,
        tripStart : "true",
    }
    this.props.add(details)
    }
        
       
    

    addingCityName = (e) => {
        e.preventDefault();
        

    this.props.addCity(this.state.cityName)
    // console.log(this.props.addCity)
}

    

    
    render() {
       console.log(this.props.cityNames)
        return (
            <div>
                <h2 className="my-3 text-center"> Travel Details</h2>
            <div className="container">
            <div className="col-4 offset-4 my-2">
                <form>
                <button className="btn btn-success" onClick={this.addingCityName}> Add City </button>
                <input 
                type="text"
                name="cityName"
                placeholder= "Enter City Name"
                onChange = {this.handleChange}
                value={this.state.cityName}
                />
                </form>
            </div>
            </div>

            <div className="container my-2">
            <h3 className="text-center">Date and Time</h3>
            <div className="row">
                <div className="col-4 offset-2">
                <form>
                    <label> Date</label>
                 
                    <input
                    type="date"
                    name="date"
                    onChange={this.handleChange}
                    value={ this.state.date}
                    />
                </form>
                </div>

                <div className="col-4 offset-2">
                <form>
                <label>Time</label>
                    <input 
                    type="time"
                    name="time"
                    onChange={this.handleChange}
                    value={ this.state.time} />
                </form>
                </div>
            </div>
            </div>

            <div className="container my-2">
            <h3 className="text-center">Add Bus</h3>
            <div className="row">
                <div className="col-4 offset-2">
                <form>
                    <label> Source</label>
                    <select  name="src" onChange = {this.handleChange} value={this.state.src}>
                     <option> From </option>
                    {this.props.cityNames && this.props.cityNames.map((e) => (
                        <option key={uuid()} > {e} </option>
        ))}
                   
                    </select>
                </form>
                </div>

                <div className="col-4 offset-2">
                <form>
                <label>Destination</label>
                <select name="dst" onChange = {this.handleChange} value={this.state.dst}>
                <option> To </option>
                { this.props.cityNames && this.props.cityNames.map((e) => (
                    <option  key={uuid()}> {e} </option>
                ))}
                </select>
                </form>
                </div>
            </div>
            <button className="offset-6 btn btn-outline-info" onClick = {this.handleSubmit}> Submit </button>
           
            </div>

          
              
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    cityNames : state.cityNames,
}
)

const mapDispatchToProps = (dispatch) => {
    
    return ({
        add : (details) => dispatch(add(details)),
        addCity : (obj) => dispatch(addCity(obj))
    })
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
