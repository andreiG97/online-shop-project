import React from 'react'
import {Link} from 'react-router-dom';
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
        <div>
            <Link to='/'>Home</Link>
            <h1>Login</h1>
            <button onClick={() => handleSignIn()}>Login with Google</button>
            <button onClick={() => handleFacebook()}>Login with Facebook</button>
        </div>
    )
}

export default Login
