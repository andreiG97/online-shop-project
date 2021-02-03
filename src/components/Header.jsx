import React from 'react';
import logo from '../assets/images/logo-shop.png'
import {Link} from 'react-router-dom';
import './Header.css';
import { ReactComponent as Cart} from '../assets/icons/shopping-cart.svg';

function Header(props) {
    const { signOut, user } = props;
    return (
        <div className="border-bottom mb-2 bg-light">
        <div className='header container-fluid container-min-max-width d-flex justify-content-between align-items-center '>
           <Link to="/" className="my-3">
            <img src={logo} alt="TOP-FOODS"/>
           </Link>
            <div>
                {
                    user 
                        ? <div> 
                            <p>Hi {user.displayName}</p>
                            <button onClick={() => {signOut()}}>Log out</button>
                         </div>
                        : <Link to='/login' className="h5">Login</Link>
                }
               
                <Cart className="ml-2"/>
            </div>
        </div>
        </div>
    )
}

export default Header
