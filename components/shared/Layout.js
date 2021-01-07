import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
const Layout = (props) => {
  return (
    <div>
      <Navbar homepage={props.homepage} global={props.global}/>
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}
Layout.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
    ]),
    className: PropTypes.string,
    global: PropTypes.object,
    homepage: PropTypes.object
}


export default Layout;