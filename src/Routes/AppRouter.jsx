//#region imports dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import LoginIn from '../pages/LoginIN'
import NotFoundPage from '../pages/NotFounPage';
//#endregion

//#region render the routes
const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />        
        <Route  exact path="/login"  component={LoginIn}/>
        <Route  path="/" component={NotFoundPage} />
      </Switch>
    </Router>
  );

};
//#endregion 
export default AppRouter;
