import React from 'react'
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <p className="navbar-brand" >{'Webfin'}</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
        </div>
    </nav>
  )
}
Navbar.prototype = {
    global: PropTypes.object,
    homepage: PropTypes.object
}

export default Navbar;