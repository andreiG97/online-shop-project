import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Careers from './pages/Careers.jsx';
import Login from './pages/Login.jsx';
import Page404 from './pages/Page404.jsx';
import {Route, Switch} from 'react-router-dom';
import Category from './pages/Category';

function App() {
  return (
    <div className="App bg-secondary">
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login}/>
        <Route path='/about' component={About}/>
        <Route path='/careers' component={Careers}/>
        <Route path='/category/:categoryName' component={Category}/>
        <Route path='*' component={Page404}/>
      </Switch>


    </div>
  );
}

export default App;
