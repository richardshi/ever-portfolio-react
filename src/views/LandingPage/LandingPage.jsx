import React, { Component } from 'react';


import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <LandingAnimation></LandingAnimation>
        )
    }
}

export default LandingAnimation;