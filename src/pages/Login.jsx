import React from 'react'
import {Link} from 'react-router-dom';
function Login(props) {
    const {  signInWithGoogle, history }= props

    function handleSignIn() {
        signInWithGoogle();
        history.push('/');
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Login</h1>
            <button onClick={() => handleSignIn()}>Login with Google</button>
        </div>
    )
}

export default Login
