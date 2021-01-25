import React from 'react';
import logo from '../assets/images/logo.png'
import {Link} from 'react-router-dom';
import './Header.css';
import { ReactComponent as Cart} from '../assets/icons/shopping-cart.svg';

function Header() {
    return (
        <div className='header d-flex justify-content-between align-items-center mb-5'>
            <img src={logo} alt=""/>
            <div>
                <Link to='/login'>Login</Link>
                <Cart/>
            </div>
        </div>
    )
}

export default Header
