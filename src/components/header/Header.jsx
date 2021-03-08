import React from 'react';
import logo from '../../assets/images/logo-shop.png'
import {Link} from 'react-router-dom';
import './Header.css';
import { ReactComponent as Cart} from '../../assets/icons/shopping-cart.svg';
import { connect } from 'react-redux';
import {signOutFromApp} from '../../redux/actions/user';
//import {  ReactComponent as Heart} from '../../assets/icons/heart.svg';
import {  ReactComponent as FullHeart} from '../../assets/icons/full-heart.svg';

function Header(props) {
    const { numberOfProducts, user, signOut } = props;
    
    return (
        <div className="border-bottom mb-2 bg-light">
        <div className='header container-fluid container-min-max-width d-flex justify-content-between align-items-center '>
           <Link to="/" className="my-3">
            <img src={logo} alt="TOP-FOODS"/>
           </Link>
            <div className="d-flex justify-content-end ">
                {
                    user 
                        ? <div> 
                            <p>Hi {user.displayName}</p>
                            <button className="btn btn-outline-dark d-flex align-items-center" onClick={() => signOut()}>Log out</button>
                         </div>
                        : <Link to='/login' className="h5">Login</Link>
                }
                <div className="d-flex justify-content-end">
                    <Link to="/cart" className="d-flex">
                            <Cart className="ml-2"/>
                            <p className="ml-1">{numberOfProducts}</p>               
                    </Link>
                   
                </div>
                <div>
                    
                <Link to="/favourites">
                        <div className="">
                            <FullHeart/>
                        </div>
                  </Link>      
                </div>
            </div>
        </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,

        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(signOutFromApp())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
