import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mt-2 text-white">
            <li className="nav-item active ">
              <Link className="text-white" to="about"><h5 className="">  About </h5> </Link>
            </li>
            <li className="nav-item">
             <Link className="text-white" to="contact"><h5 className="ml-2"> Contact </h5> </Link>
            </li>
          
          </ul>
          
        </div>
      </nav>

    
        </div>
    )
}

export default Navbar
// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
