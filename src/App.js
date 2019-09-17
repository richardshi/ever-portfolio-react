import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { PATHS } from './routePaths';

import LandingPage from './views/LandingPage/LandingPage';

import PublicFooter from './components/PublicFooter/PublicFooter';
import LandingAnimation from './components/LandingAnimation/LandingAnimation';
import DesignList from './views/DesignList/DesignList';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Switch>
            <PublicRoute exact path={PATHS.HOME_PATH} component={LandingPage}></PublicRoute>
            <PublicRoute path={PATHS.DESIGN_LIST_PATH} component={DesignList}></PublicRoute>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      <div>
        <div className="App__wrapper">
          <Component {...props} />
        </div>
        <PublicFooter/>
      </div>
    );
  }
}/>);

function App() {
  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
