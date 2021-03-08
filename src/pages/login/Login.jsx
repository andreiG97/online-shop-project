import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../assets/images/logo-shop.png';
import "./Login.css";
import { signInWithGoogleAction, signInWithFacebookAction } from '../../redux/actions/user';
import { connect } from 'react-redux';



class Login extends React.Component {
   componentDidUpdate(prevProps){
        if(this.props.userData !== prevProps.userData){
            this.props.history.push('/'); 
        }
   }

    render(){
        const { signInWithFacebookInjected, signInWithGoogleInjected } =this.props;
        return (
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt=""/>
                </Link>
                <h1>Login</h1>
                <button className="btn btn-outline-dark d-flex align-items-center" onClick={() => signInWithGoogleInjected()}>Login with Google</button>
                <button className="btn btn-outline-dark d-flex align-items-center" onClick={() => signInWithFacebookInjected()}>Login with Facebook</button>
            </div>
        )
    }
 }


function mapStateToProps(state) {
    return {
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch){
    return {
        signInWithGoogleInjected: () => dispatch( signInWithGoogleAction()),
        signInWithFacebookInjected: () => dispatch( signInWithFacebookAction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
