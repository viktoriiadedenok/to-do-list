import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/auth/LogIn';
import Registration from './components/auth/Registration';
import ToDoList from './components/toDoList/ToDoList';
import PrivateRoute from './components/auth/PrivateRoute';
import Logout from './components/auth/Logout';


function App() {
  return (
    <div className="app">
      <Router>
        <nav className="navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item active m-1"><Link to="log_in" key="">Log in</Link></li>
            <li className="nav-item active m-1"><Link to="registration" key="">Registration</Link></li>
            <li className="nav-item active m-1"><Link to="to_do_list" key="">My list</Link></li>
            <li> <Logout></Logout></li>
          </ul>

        </nav>

        <Switch>
          <Route exact path="/" component={LogIn}></Route>
          <Route path="/log_in" component={LogIn}></Route>
          <Route path="/registration" component={Registration}></Route>
          <PrivateRoute path="/to_do_list">
            <ToDoList />
          </PrivateRoute>
        </Switch>
      </Router >
    </div >
  );
}

export default App;





