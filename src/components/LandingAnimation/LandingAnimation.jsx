import React, {Component} from 'react';
import logo from 'assets/images/logo.svg';
import 'assets/sass/main.scss';
import 'assets/sass/components/LandingAnimation.scss';

class LandingAnimation extends Component {
    render() {

        return <img src={logo} className="App-logo" alt="logo" />;
    }

}

export default LandingAnimation;