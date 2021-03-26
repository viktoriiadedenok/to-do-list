import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from './components/auth/LogIn';
import Registration from './components/auth/Registration';
import ToDoList from './components/toDoList/ToDoList';


function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/log_in">Log in</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/to_do_list">My list</Link></li>
      </ul>
      <Switch>
        <Route exact path="/log_in" component={LogIn}></Route>
        <Route path="/log_in" component={LogIn}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/to_do_list" component={ToDoList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
