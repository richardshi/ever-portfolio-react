import React, {Component} from 'react';

import 'assets/sass/main.scss';
import 'assets/sass/components/LandingAnimation.scss';


import TileGroup from 'components/LandingAnimation/TileGroup/TileGroup'
import logo from 'assets/images/logo.svg';

class LandingAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {};        
    }



    render() {


        return <div>
            <img src={logo} className="App-logo" alt="logo" />
			<TileGroup></TileGroup>
        </div>;
    }

}

export default LandingAnimation;