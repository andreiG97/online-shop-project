import './App.css';
import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './config/firebase.js';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Careers from './pages/Careers.jsx';
import Login from './pages/Login.jsx';
import Page404 from './pages/Page404.jsx';
import {Route, Switch} from 'react-router-dom';
import Category from './pages/Category';
import Terms from './/pages/TermsAndConditions';
import "./utils/utility-classes.css"

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    console.log(this.props);

    return (
     <div className="App bg-muted">
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login}/>
          <Route path='/about' component={About}/>
          <Route path='/careers' component={Careers}/>
          <Route path='/termsandconditions' component={Terms}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>


      </div>
  );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);