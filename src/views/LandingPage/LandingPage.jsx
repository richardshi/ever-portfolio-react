import React, { Component } from 'react';


import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(
            <div className="LandingPage__Container">
                <div className="Nav__Bar">

                </div>

                <div className="Instruction__Container">
                    <LandingAnimation></LandingAnimation>
                </div>

                <div>

                </div>

            </div>
        )
    }
}

export default LandingPage;