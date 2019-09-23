import React, { Component } from 'react';

import 'assets/sass/views/LandingPage.scss';

import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

import logo from 'assets/images/logo_ever.png';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoAnimationCompleted: false,
        };

        this.setLogoAnimationCompleted = this.setLogoAnimationCompleted.bind(this);
        this.handleLogoAnimationCompleted = this.handleLogoAnimationCompleted.bind(this);
    }

    setLogoAnimationCompleted(animationTime){
        setTimeout(this.handleLogoAnimationCompleted, animationTime * 0.9);
    }
    handleLogoAnimationCompleted(){
        this.setState({
            logoAnimationCompleted: true,
        })
    }


    render(){
        const {logoAnimationCompleted} = this.state;
        
        let LandingPageClass="LandingPage__Container";
        if (logoAnimationCompleted){
            LandingPageClass = LandingPageClass + " show";
        }

        return(
            <div>
                <LandingAnimation setLogoAnimationCompleted={this.setLogoAnimationCompleted}></LandingAnimation>
                <div className={LandingPageClass}>
                    <div className="LandingPage__Nav-Bar row-section">

                    </div>

                    <div className="LandingPage__Instruction-Container row-section">
                        <div className="Instruction-Left">
                            <img className="Instruction-Left__Logo-Image" src={logo}></img>
                        </div>
                        <div className="Instruction-Right">
                            <h1>Hi there, this is Ever Wu</h1>
                            <h2>A UX/UI, Visual Designer with a focus in user experience, visual and interaction design based in San Francisco and Irvine.</h2>
                        </div>
                    </div>

                    <div className="LandingPage__Designs row-section">

                    </div>

                    <div className="LandingPage__Products row-section">

                    </div>

                    <div className="LandingPage__Contact row-section">

                    </div>

                </div>
            </div>
        )
    }
}

export default LandingPage;