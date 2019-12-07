import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import './AboutPage.scss'

import PublicHeader from 'components/PublicHeader/PublicHeader'
import LetsConnect from 'components/LetsConnect/LetsConnect';
import PublicFooter from 'components/PublicFooter/PublicFooter';

import ProfileImageSmall from 'assets/images/AboutPage/Brand_5.png'
import ProfileImageMedium from 'assets/images/AboutPage/Brand_5@2x.png'
import ProfileImageLarge from 'assets/images/AboutPage/Brand_5@3x.png'
import IconDesign from 'assets/images/AboutPage/design-tools_draw-inside-mode.svg'
import IconUserExperience from 'assets/images/AboutPage/design-tools_visual-design.svg'
import IconMarketing from 'assets/images/AboutPage/Rectangle_1761.svg'
import IconProgramming from 'assets/images/AboutPage/design-tools_graphic-design.svg'

class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div>
                <PublicHeader/>
                <div className="AboutPage Page-Container">
                    <div className="AboutPage__Container">
                        <div className="AboutPage__Personal row-section">
                            <div className="Personal-Left">
                                <img    srcSet={`${ProfileImageSmall} 320w,
                                                ${ProfileImageMedium} 500w,
                                                ${ProfileImageLarge} 800w`}
                                        src={ProfileImageSmall} 
                                        alt="avatar"/>
                            </div>
                            <div className="Personal-Right">
                                <h1>Ever Wu</h1>
                                <h2>UX/UI and Product Designer</h2>
                                <p>An UX/UI and Product Designer with a strong background in user interface design, branding design and interaction design. I specialize in designing responsive websites and mobile apps with the focus on creating simple, intuitive, and valuable user experiences. I have a great passion for design and a simple but modern aesthetic. I thrive in a collaborative environment and am driven by evolution and the pioneering of new ideas. </p>
                                <a href="http://everwudesign.com/resume.pdf"><button className="button-CaseStudy">View Resume</button></a>
                            </div>
                        </div>
                        <div className="AboutPage__Passions-Skills row-section">
                            <h1>Passions and Skills</h1>
                            <div className="Passions-Skills__List">
                                <div className="Passion-Skills__Item">
                                    <img className="Passion-Skills__Item-Icon" src={IconDesign}></img>
                                    <div className="Passion-Skills__Item-Name">Design</div>
                                    <div className="Passion-Skills__Item-Detail">Visual Design<br />Photoshop<br />Illustrator<br />InDesign<br />Adobe XD<br />Motion Graphics<br />After Effects<br />Premiere<br />Sketch<br />InVision<br />Zeplin</div>
                                </div>
                                <div className="Passion-Skills__Item">
                                    <img className="Passion-Skills__Item-Icon" src={IconUserExperience}></img>
                                    <div className="Passion-Skills__Item-Name">User Experience</div>
                                    <div className="Passion-Skills__Item-Detail">Interaction Design<br />Sitemaps<br />Information architecture<br />Sketches<br />Wireframes<br />Prototypes<br />Mockups<br />A/B Testing</div>
                                </div>
                                <div className="Passion-Skills__Item">
                                    <img className="Passion-Skills__Item-Icon" src={IconMarketing}></img>
                                    <div className="Passion-Skills__Item-Name">Marketing</div>
                                    <div className="Passion-Skills__Item-Detail">Organization Skills<br />Marketing Strategy <br />Research Skills<br />Know the difference <br />between goals<br />strategies and tactics<br />SEO Tool knowledge<br />Understand Data Visualization</div>
                                </div>
                                <div className="Passion-Skills__Item">
                                    <img className="Passion-Skills__Item-Icon" src={IconProgramming}></img>
                                    <div className="Passion-Skills__Item-Name">Programming</div>
                                    <div className="Passion-Skills__Item-Detail">HTML5<br />CSS3<br />JavaScript<br />PHP<br />Sublime Text<br />GitHub</div>
                                </div>
                            </div>
                        </div>

                        <div className="AboutPage__LetsConnect row-section">
                            <LetsConnect></LetsConnect>
                        </div>

                    </div>
                </div>
                <PublicFooter/>
            </div>
        )
    }

}
export default AboutPage;