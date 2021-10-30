import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home'



const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};


export default AppRouter;