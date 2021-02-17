import React from 'react';
import logo from '../assets/images/logo-shop.png'
import {Link} from 'react-router-dom';
import './Header.css';
import { ReactComponent as Cart} from '../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';

function Header(props) {
    const { signOut, user, numberOfProducts } = props;
    function handleHeaderSignOut() {
        signOut();
    }
    return (
        <div className="border-bottom mb-2 bg-light">
        <div className='header container-fluid container-min-max-width d-flex justify-content-between align-items-center '>
           <Link to="/" className="my-3">
            <img src={logo} alt="TOP-FOODS"/>
           </Link>
            <div className="d-flex justify-content-end">
                {
                    user 
                        ? <div> 
                            <p>Hi {user.displayName}</p>
                            <button onClick={() => handleHeaderSignOut()}>Log out</button>
                         </div>
                        : <Link to='/login' className="h5">Login</Link>
                }
                <div className="d-flex justify-content-end">
                    <Link to="/cart" className="d-flex">
                            <Cart className="ml-2"/>
                            <p className="ml-1">{numberOfProducts}</p>               
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.products.length
    }
}

export default connect(mapStateToProps, null)(Header);
