import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo-shop.png';
import "./Login.css";

function Login(props) {
    const {  signInWithGoogle, history, signInWithFacebook }= props

    function handleSignIn() {
        signInWithGoogle();
        history.push('/');
    }

    function handleFacebook() {
        signInWithFacebook();
        history.push('/');
    }

    return (
        <div className="login-page">
            <Link to='/'>
                <img src={Logo} alt=""/>
            </Link>
            <h1>Login</h1>
            <button className="btn btn-outline-dark d-flex align-items-center" onClick={() => handleSignIn()}>Login with Google</button>
            <button className="btn btn-outline-dark d-flex align-items-center" onClick={() => handleFacebook()}>Login with Facebook</button>
        </div>
    )
}

export default Login
