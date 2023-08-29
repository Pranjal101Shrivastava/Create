import React from 'react';
import Logo from '../creativise-logo-SVG-2.png'

// Define the NavigationBar component
const Nav = () => {
  return (
    <div className="navbar">
        <div className="image">
            <img className="creativise-logo-SVG" alt="Creativise logo SVG" src={Logo} />
        </div>
    <div className='nav-item'>
        <div className="label">
            <div className="text-wrapper">Home</div>
        </div>
        <div className="label">
            <div className="text-wrapper-p">Products</div>
        </div>
        <div className="label">
            <div className="text-wrapper-p">About Us</div>
        </div>
        <div className="label">
            <div className="text-wrapper-p">Blogs</div>
        </div>
        <div className='abc'>
        <div className="box">
            <div className="rectangle">Login</div>
        </div>
        <div className="box-e">
            <div className="ellipse" />
        </div>
        <div className="label-s">
        <div className="text-wrapper-s">Sign up</div>
        </div>
        </div>
    </div>
    </div>
  );
}


export default Nav;
