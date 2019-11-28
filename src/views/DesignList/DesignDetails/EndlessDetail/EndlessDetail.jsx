import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import LetsConnect from 'components/LetsConnect/LetsConnect';
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './EndlessDetail.scss'

import EndlessBannerSmall from 'assets/images/EndlessPage/Endless_1.png';
import EndlessBannerMedium from 'assets/images/EndlessPage/Endless_1@2x.png';
import EndlessBannerLarge from 'assets/images/EndlessPage/Endless_1@3x.png';

class EndlessDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            navBarMenu:[
                {
                    name: "INTRO",
                    id: "Section_Intro",
                    active: true,
                },
                {
                    name: "RESEARCH",
                    id: "Section_Research",
                    active: false,
                },
                {
                    name: "BRANDING",
                    id: "Section_Branding",
                    active: false,
                },
                {
                    name: "INTERACTION",
                    id: "Section_Interaction",
                    active: false,
                },
                {
                    name: "VIDEO",
                    id: "Section_Video",
                    active: false,
                }
            ],
        };
        this.renderNavMenu = this.renderNavMenu.bind(this);
        this.updateNavMenu = this.updateNavMenu.bind(this);
    }

    /**
     *      For html and js

                        <div id="Banner-Menu-Endless" className="Endless-Detail__Banner-Menu">
                            <nav className="Endless-Detail__Container Banner-Menu-Wrapper">
                                <a href="#Section_Intro" class="Banner-Menu-Selection">INTRO</a>
                                <a href="#Section_Research" class="Banner-Menu-Selection">RESEARCH</a>
                                <a href="#Section_Branding" class="Banner-Menu-Selection">BRANDING</a>
                                <a href="#Section_Interaction" class="Banner-Menu-Selection">INTERACTION</a>
                                <a href="#Section_Video" class="Banner-Menu-Selection">VIDEO</a>
                            </nav>
                        </div>
     */
    renderNavMenu(){
        let navBarMenu = this.state.navBarMenu;
        let navBarSelections = navBarMenu.map((navBarSelection, index) => {
            let activeClass = navBarSelection.active ? " activated" : "";
            return (
                <a href={`#${navBarSelection.id}`} class={`Banner-Menu-Selection ${activeClass}`} onClick={()=>this.updateNavMenu(index)}>
                    <div className="Banner-Menu-Selection__Name">{navBarSelection.name}</div>
                </a>
            )
        })
        return (
            <div id="Banner-Menu-Endless" className="Endless-Detail__Banner-Menu">
                <nav className="Endless-Detail__Container Banner-Menu-Wrapper">
                    {navBarSelections}
                </nav>
            </div>
        )
    }
    
    updateNavMenu(index){
        let navBarMenu = this.state.navBarMenu;
        for(let i=0; i<navBarMenu.length; i++){
            if (i == index){
                navBarMenu[i].active = true;
            } else {
                navBarMenu[i].active = false;
            }
        }
        this.setState({navBarMenu: navBarMenu})
    }

    render(){
        const{ navBarMenu } = this.state;
        let renderedNavBarMenu = this.renderNavMenu();

        return(
            <div id="Endless_Detail">
                <div className="Endless-Detail">
                    <div className="Endless-Detail__Container">
                        <PublicHeader></PublicHeader>
                    </div>
                    <div className="Endless-Detail__Banner-Wrapper">
                        <div className="Endless-Detail__Banner-Background">
                            <img    className="Endless-Detail__Container Banner-Background-Image"
                                    srcSet={`   ${EndlessBannerSmall} 320w,
                                                ${EndlessBannerMedium} 500w,
                                                ${EndlessBannerLarge} 800w`}
                                    src={EndlessBannerSmall} 
                                    alt="avatar"/>

                        </div>
                        {renderedNavBarMenu}
                        <div className="Endless-Detail__Section-List">
                            <div id="Section_Intro" className="Endless-Detail__Section">
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>01</h1>
                                    <h2>INTRODUCTION</h2>
                                </div>
                                <div className="Section__Two-Sections Endless-Detail__Container">
                                    <div className="Section__Two-Section">
                                        <h4>Overview</h4>
                                        <p>Book Endless is to share and search good books with our free sensor sticker in public places, so the next reader can find and share endlessly. </p>
                                    </div>
                                    <div className="Section__Two-Section">
                                        <h4>Skills</h4>
                                        <p>Visual and UI design, UX research, Adobe XD, Illustration, Sketch，Human-Centered Design </p>
                                    </div>
                                </div>
                                <div className="Section__Two-Sections Endless-Detail__Container">
                                    <div className="Section__Two-Section">
                                        <button>View Case Study</button>
                                    </div>
                                    <div className="Section__Two-Section">
                                        <h4>Date Created</h4>
                                        <p>Spring 2019 <br />8 weeks</p>
                                    </div>
                                </div>
                                <div classname="Section__Full-Width-Banner Section__Endless-Banner">
                                    <div>
                                        
                                    </div>
                                </div>
                                <div className="Section__Three-Sections Endless-Detail__Container">
                                </div>
                                <div className="Section__LeftImage">
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <div className="Endless-Detail__Container">

                    </div>
                </div>
            </div>
        )
    }
}

export default EndlessDetail;