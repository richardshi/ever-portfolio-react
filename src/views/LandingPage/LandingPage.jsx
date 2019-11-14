import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import './LandingPage.scss';

import LandingAnimation from 'components/LandingAnimation/LandingAnimation';
import PublicFooter from 'components/PublicFooter/PublicFooter';

import logo from 'assets/images/logo_ever.png';
import designPicEndLess from 'assets/images/LandingPage/Brand_P1@2x.png'
import designPicIDrink from 'assets/images/LandingPage/Brand_P2@2x.png'
import projectPicEatHere from 'assets/images/LandingPage/Brand_P3@2x.png'
import designKitakata from 'assets/images/LandingPage/Brand_P4@2x.png'
import designBigPixel from 'assets/images/LandingPage/Brand_P5@2x.png'
import projectBabyCostReport from 'assets/images/LandingPage/Brand_P6@2x.png'

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            logoAnimationCompleted: true,
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
            isSchoolProject: true,
        };

        this.setLogoAnimationCompleted = this.setLogoAnimationCompleted.bind(this);
        this.handleLogoAnimationCompleted = this.handleLogoAnimationCompleted.bind(this);
        this.renderLogoAnimation = this.renderLogoAnimation.bind(this);
        this.renderDesignBlocks = this.renderDesignBlocks.bind(this);
        this.renderProjectBlocks = this.renderProjectBlocks.bind(this);
        this.renderProjectsForSchoolFinal = this.renderProjectsForSchoolFinal.bind(this);
        this.renderProjectsForJobPortfolio = this.renderProjectsForJobPortfolio.bind(this);

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
    renderProjectsForSchoolFinal(){
        let schoolDesign = [
            {
                name: "Kitakata",
                id: "kitakata",
                image: designKitakata,
                link: "",
            },
            {
                name: "BigPixel",
                id: "bigpixel",
                image: designBigPixel,
                link: "",
            },
        ];
        let schoolProjects = [
            {
                name: "BabyCostReport",
                id: "babycostreport",
                image: projectBabyCostReport,
                link: "",
            },
        ]

        let designListDisplay = schoolDesign.map((designObject, index) => {
            return(
                <div className="design-block">
                    <img className="design-block__Image" src={designObject.image}></img>
                </div>
            );
        })

        let projectListDisplay = schoolProjects.map((projectObject, index) => {
            return(
                <div className="project-block">
                    <img className="project-block__Image" src={projectObject.image}></img>
                </div>
            );
        })
        return (
            <div>
                <div className="LandingPage__Designs row-section">
                    <div className="design-blocks-container">
                        {designListDisplay}
                    </div>
                </div>

                <div className="LandingPage__Products row-section">
                    <div className="project-blocks-container">
                        {projectListDisplay}
                    </div>
                </div>
            </div>
        )
    }
    renderProjectsForJobPortfolio(){
        return (<div></div>)
    }


    render(){
        const {logoAnimationCompleted, designList, projectList, isSchoolProject} = this.state;
        
        let LandingPageClass="LandingPage__Container";
        if (logoAnimationCompleted){
            LandingPageClass = LandingPageClass + " show";
        }

        let logoAnimation = this.renderLogoAnimation();
        let designBlocks = this.renderDesignBlocks();
        let projectBlocks = this.renderProjectBlocks();
        let dynamicProjects = {};
        if (isSchoolProject){
            dynamicProjects = this.renderProjectsForSchoolFinal();
        } else {
            dynamicProjects = this.renderProjectsForJobPortfolio();
        }


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
                                <li>Works</li>
                                <li>About Me</li>
                            </ul>
                        </div>
                    </div>

                    <div className="LandingPage__Instruction-Container row-section">
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

                    {dynamicProjects}

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
                    <PublicFooter/>
                </div>
            </div>
        )
    }
}

export default LandingPage;