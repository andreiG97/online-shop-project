import './App.css';
import React from 'react';
import Home from './pages/Home.jsx';
import About from './pages/about/About.jsx';
import Careers from './pages/careers/Careers.jsx';
import Login from './pages/login/Login.jsx';
import Page404 from './pages/Page404.jsx';
import {Route, Switch} from 'react-router-dom';
import Category from './pages/Category';
import Terms from './/pages/TermsAndConditions';
import "./utils/utility-classes.css";
import Cart from './pages/cart/Cart';
import Favourite from './pages/Favourite';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){

    return (
     <div className="App bg-muted">
      
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login}/>
           <Route path="/cart" component={Cart}/>
          <Route path='/about' component={About}/>
          <Route path='/careers' component={Careers}/>
          <Route path='/favourites' component={Favourite}/>
          <Route path='/termsandconditions' component={Terms}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>


      </div>
  );
  }
}

export default App;