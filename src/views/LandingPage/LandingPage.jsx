import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import 'assets/sass/views/LandingPage.scss';

import LandingAnimation from 'components/LandingAnimation/LandingAnimation';

import logo from 'assets/images/logo_ever.png';
import designPicEndLess from 'assets/images/LandingPage/endless.png'
import designPicIDrink from 'assets/images/LandingPage/iDrink.png'
import projectPicEatHere from 'assets/images/LandingPage/eatHere.png'

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoAnimationCompleted: false,
            designList: [
                {
                    name: "Endless",
                    id: "endless",
                    image: designPicEndLess,
                    link: "",
                },
                {
                    name: "iDrink",
                    id: "idrink",
                    image: designPicIDrink,
                    link: "",
                },
            ],
            projectList: [
                {
                    name: "EAThere",
                    id: "eathere",
                    image: projectPicEatHere,
                    link: "",
                },
            ],
        };

        this.setLogoAnimationCompleted = this.setLogoAnimationCompleted.bind(this);
        this.handleLogoAnimationCompleted = this.handleLogoAnimationCompleted.bind(this);
        this.renderLogoAnimation = this.renderLogoAnimation.bind(this);
        this.renderDesignBlocks = this.renderDesignBlocks.bind(this);
        this.renderProjectBlocks = this.renderProjectBlocks.bind(this);
    }

    setLogoAnimationCompleted(animationTime){
        setTimeout(this.handleLogoAnimationCompleted, animationTime);
    }
    handleLogoAnimationCompleted(){
        this.setState({
            logoAnimationCompleted: true,
        })
    }
    renderLogoAnimation(){
        if(this.state.logoAnimationCompleted){
            return <div></div>;
        }
        return <LandingAnimation setLogoAnimationCompleted={this.setLogoAnimationCompleted}></LandingAnimation>
    }
    renderDesignBlocks(){
        let designList = this.state.designList;

        let designListDisplay = designList.map((designObject, index) => {
            return(
                <div className="design-block">
                    <img className="design-block__Image" src={designObject.image}></img>
                </div>
            );
        })
        return(
            <div className="design-blocks-container">
                {designListDisplay}
            </div>
        );
    }
    renderProjectBlocks(){
        let projectList = this.state.projectList;

        let projectListDisplay = projectList.map((projectObject, index) => {
            return(
                <div className="project-block">
                    <img className="project-block__Image" src={projectObject.image}></img>
                </div>
            );
        })
        return(
            <div className="project-blocks-container">
                {projectListDisplay}
            </div>
        ) 
    }


    render(){
        const {logoAnimationCompleted, designList, projectList} = this.state;
        
        let LandingPageClass="LandingPage__Container";
        if (logoAnimationCompleted){
            LandingPageClass = LandingPageClass + " show";
        }

        let logoAnimation = this.renderLogoAnimation();
        let designBlocks = this.renderDesignBlocks();
        let projectBlocks = this.renderProjectBlocks();


        return(
            <div>
                {logoAnimation}
                <div className={LandingPageClass}>
                    <div className="LandingPage__Nav-Bar row-section">
                        <div className="Nav-Bar-Left">
                            <Link>
                                <img className="Nav-Bar-Left__Logo-Image" src={logo}></img>
                            </Link>
                        </div>
                        <div className="Nav-Bar-Right">
                            <ul className="Nav-Bar-Right__Tabs">
                                <li>Home</li>
                                <li>Designs</li>
                                <li>Marketing</li>
                                <li>About Me</li>
                            </ul>
                        </div>
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
                        {designBlocks}
                    </div>

                    <div className="LandingPage__Products row-section">
                        {projectBlocks}
                    </div>

                    <div className="LandingPage__Contact row-section">
                        <div>
                            <h1>Let's Connect!</h1>
                            <h2>Get in touch for any opportunities, or a hello</h2>
                            <div className="Contact-Icons">
                                <Link>
                                    <img></img>
                                </Link>
                                <Link>

                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default LandingPage;