import React, { Component } from 'react';
import { connect } from 'react-redux';

import {Switch,Link,Route} from "react-router-dom"
import  Navbar  from '../components/Common/Navbar';
import { Home } from '../components/Common/Home';
import { Dashboard } from '../components/Common/Dashboard';
import { Contact } from '../components/Common/Contact';

export default class Routes extends Component {
	render() {
		return (
			<div>
				<Navbar/>
				<Switch>
					<Route exact path ="/" render = {(props) => <Dashboard {...props}/>}/>
					<Route path="/home" render={Home} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(Routes);
