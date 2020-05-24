import React, { Component } from 'react'
import { connect } from 'react-redux'


import  Add  from './Add';
import  Home  from './Home';

export class Dashboard extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            a:""
        }

    }
    render() {
        return (
            <div>
                <Add/>
                <Home/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
