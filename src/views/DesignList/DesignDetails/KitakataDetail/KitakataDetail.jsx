import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './KitakataDetail.scss'

import KitakataBannerSmall from 'assets/images/KitakataPage/Ramen_1.png';
import KitakataBannerMedium from 'assets/images/KitakataPage/Ramen_1@2x.png';
import KitakataBannerLarge from 'assets/images/KitakataPage/Ramen_1@3x.png';

import KitakataCSWeb from 'assets/images/KitakataPage/Ramen_2@3x.png';
import KitakataCSMenu from 'assets/images/KitakataPage/Ramen_3@3x.png';
import KitakataCSLogo from 'assets/images/KitakataPage/Ramen_4@3x.png';

import KitakataGoalWeb from 'assets/images/KitakataPage/Ramen_5@3x.png';
import KitakataGoalMenu from 'assets/images/KitakataPage/Ramen_6@3x.png';
import KitakataGoalLogo from 'assets/images/KitakataPage/Ramen_7@3x.png';

import KitakataMoodBoard from 'assets/images/KitakataPage/Ramen_8@3x.png';
import KitakataColorPatternDark from 'assets/images/KitakataPage/Ramen_9@3x.png';
import KitakataColorPatternLight from 'assets/images/KitakataPage/Ramen_10@3x.png';
import KitakataTypograph from 'assets/images/KitakataPage/Ramen_11@3x.png';
import KitakataLogoDesign from 'assets/images/KitakataPage/Ramen_12@3x.png';
import KitakataLogoApp from 'assets/images/KitakataPage/Ramen_13@3x.png';
import KitakataLogoDark from 'assets/images/KitakataPage/Ramen_14@3x.png';

import KitakataAdBus from 'assets/images/KitakataPage/Ramen_15@3x.png';
import KitakataAdStore from 'assets/images/KitakataPage/Ramen_16@3x.png';
import KitakataAdMobileApp from 'assets/images/KitakataPage/Ramen_17@3x.png';
import KitakataAdTabletApp from 'assets/images/KitakataPage/Ramen_18@3x.png';

class KitakataDetail extends Component {
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
                    name: "POSTER",
                    id: "Section_Poster",
                    active: false,
                }
            ],
            PersonasBarMenu: [
                {
                    name: "Albert Conville",
                    id: "Albert_Conville",
                    active: true,
                },
                {
                    name: "Scarlett Devon",
                    id: "Scarlett_Devon",
                    active: false,
                },
                {
                    name: "Joseph Cox",
                    id: "Joseph_Cox",
                    active: false,
                }
            ]
        };
        this.renderNavMenu = this.renderNavMenu.bind(this);
        this.updateNavMenu = this.updateNavMenu.bind(this);
        
    }

    renderNavMenu(){
        let navBarMenu = this.state.navBarMenu;
        let navBarSelections = navBarMenu.map((navBarSelection, index) => {
            let activeClass = navBarSelection.active ? " activated" : "";
            return (
                <a href={`#${navBarSelection.id}`} className={`Banner-Menu-Selection ${activeClass}`} onClick={()=>this.updateNavMenu(index)}>
                    <div className="Banner-Menu-Selection__Name">{navBarSelection.name}</div>
                </a>
            )
        })
        return (
            <div id="Banner-Menu-IDrink" className="Kitakata-Detail__Banner-Menu">
                <nav className="Kitakata-Detail__Container Banner-Menu-Wrapper">
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

    renderSectionClasses(){
        let navBarMenu = this.state.navBarMenu;
        let SectionClassList = [];
        for(let i=0; i<navBarMenu.length; i++){
            /*
            SectionClassList[i] = "";
            if(navBarMenu[i].active){
                SectionClassList[i] = "show";
            }
            */
           SectionClassList[i] = "show";
        }
        return SectionClassList;
    }


    render(){
        const{ navBarMenu } = this.state;

        return(
            <div id="Kitakata_Detail">
                <PublicHeader></PublicHeader>
                <div className="Kitakata-Detail Page-Container">
                    <div className="Kitakata-Detail__Banner-Wrapper">
                        <div className="Kitakata-Detail__Banner-Background">
                            <img    className="Kitakata-Detail__Image-full-width"
                                    srcSet={`   ${KitakataBannerSmall} 320w,
                                                ${KitakataBannerMedium} 500w,
                                                ${KitakataBannerLarge} 800w`}
                                    src={KitakataBannerSmall} 
                                    alt="avatar"/>

                        </div>
                    </div>
                    <div className="Kitakata-Detail__Section-List">
                        <div className="Kitakata-Detail__Section show">
                            <div className="Section__Title Kitakata-Detail__Container ">
                            </div>
                            <div className="Section__Two-Sections Kitakata-Detail__Container">
                                <div className="Section__Two-Section">
                                    <h4>Overview</h4>
                                    <p>I rebranded this local Japanese ramen by designing new logos, brand collateral, interactive menus and website.</p>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Skills</h4>
                                    <p>Illustrator, Photoshop, Adobe XD</p>
                                </div>
                            </div>
                            <div className="Section__Two-Sections Kitakata-Detail__Container">
                                <div className="Section__Two-Section">
                                    <a href="http://everwudesign.com/Wei_Wu_Kitakata_Ramen.pdf"><button className="button-CaseStudy">View More</button></a>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Date Created</h4>
                                    <p>Spring 2019 <br />8 weeks</p>
                                </div>
                            </div>

                            <div className="Kitakata-Detail__Container">
                                <h4>Current Situation</h4>
                                <div className="Section__Three-Sections">
                                    <div className="Section__Three-Section">
                                        <img src={KitakataCSWeb} className="Kitakata-Detail__Image-full-width Kitakata-Detail__Image-Circle-Masked"></img>
                                        <h5>Website</h5>
                                        <p>“Kitakata Ramen” website is non-design and put the branding concept, location and menu, nothing special to attract new customer.</p>
                                    </div>
                                    <div className="Section__Three-Section">
                                        <img src={KitakataCSMenu} className="Kitakata-Detail__Image-full-width Kitakata-Detail__Image-Circle-Masked"></img>
                                        <h5>Menu</h5>
                                        <p>The menu is easy to read, but the section is mess for the new customer.</p>
                                    </div>
                                    <div className="Section__Three-Section">
                                        <img src={KitakataCSLogo} className="Kitakata-Detail__Image-full-width Kitakata-Detail__Image-Circle-Masked"></img>
                                        <h5>Logo</h5>
                                        <p>The logo is difficult to recognize for Ramen brand identity.</p>
                                    </div>
                                </div>
                            </div>  



                            <div className="Kitakata-Detail__Container">
                                <h4>Redesign Goals</h4>
                            </div>
                            <div className="Section__Full-Width-Banner Section-Intro__Banner">
                                <div className="Kitakata-Detail__Container Kitakata-Banner-Container">
                                    <div className="Kitakata-Banner-Left"><img src={KitakataGoalWeb} /></div>
                                    <div className="Kitakata-Banner-Right">
                                        <div className="Kitakata-Banner-Right-Middle"><h4>Website</h4></div>
                                        <div className="Kitakata-Banner-Right-Right"><p>Recreate a website where customers can review menus and locations. To show more ramen dishes and recommend 10 best choice for the new customers.</p></div>
                                    </div>
                                </div>
                                <div className="Kitakata-Detail__Container Kitakata-Banner-Container">
                                    <div className="Kitakata-Banner-Left"><img src={KitakataGoalMenu} /></div>
                                    <div className="Kitakata-Banner-Right">
                                         <div className="Kitakata-Banner-Right-Middle"><h4>Menu</h4></div>
                                        <div className="Kitakata-Banner-Right-Right"><p>Design a iPad and mobile menu app which enables customers to order their ramen choice in an interactive way, paperless menu.</p></div>
                                    </div>
                                </div>
                                <div className="Kitakata-Detail__Container Kitakata-Banner-Container">
                                    <div className="Kitakata-Banner-Left"><img src={KitakataGoalLogo} /></div>
                                    <div className="Kitakata-Banner-Right">
                                        <div className="Kitakata-Banner-Right-Middle"><h4>Logo</h4></div>
                                        <div className="Kitakata-Banner-Right-Right"><p>Redesign the logo to reflect the characteristics of the Ramen, and combine the first character “K” with a bowl of ramen.</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="Kitakata-Detail__Container">
                                <h4>Moodboard</h4>
                                <div className="Kitakata-Detail__Secondary-Container">
                                    <img src={KitakataMoodBoard} className="Kitakata-Detail__Image-full-width"></img>
                                </div>
                                <h4>Color Palette</h4>
                                <div className="Kitakata-Detail__Secondary-Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <img src={KitakataColorPatternDark} className="Kitakata-Detail__Image-full-width"></img>
                                            <p>HEX:#7A0307<br/>RGB: 122,3,7<br/>CMYK：0,98,94,52</p>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <img src={KitakataColorPatternLight} className="Kitakata-Detail__Image-full-width"></img>
                                            <p>HEX:#E7B242<br/>RGB: 231,178,66<br/>CMYK：0,23,71,9</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Section__Full-Width-Banner Section__Branding-Banner">
                                <div className="Kitakata-Detail__Container">
                                    <h4><br/>Typography</h4>
                                    <div className="Kitakata-Detail__Secondary-Container  Section-Typography">
                                        <img src={KitakataTypograph} className="Kitakata-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="Kitakata-Detail__Container">
                                <h4>Logo Design</h4>
                                <div className="Kitakata-Detail__Secondary-Container">
                                    <p>Redesign the logo to reflect the characteristics of the Ramen, and combine the first character “K” with a bowl of ramen.</p>
                                    <img src={KitakataLogoDesign} className="Kitakata-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            
                            <div className="Kitakata-Detail__Container">
                                <h4>Iconography</h4>
                                <div className="Kitakata-Detail__Secondary-Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Half-Section">
                                            <div className="Section__Inner-Half-Sections">
                                                <div className="Section__Inner-Half-Section">
                                                    <p>App version</p>
                                                    <img src={KitakataLogoApp} className="Kitakata-Detail__Image-full-width"></img>
                                                </div>
                                            </div>          
                                        </div>
                                        <div className="Section__Half-Section">
                                            <p>red background version</p>
                                            <img src={KitakataLogoDark} className="Kitakata-Detail__Image-full-width"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Kitakata-Detail__Container">
                                <h4>Graphic Advertisements</h4>
                                <div className="Kitakata-Detail__Secondary-Container">
                                    <img src={KitakataAdBus} className="Kitakata-Detail__Image-full-width"></img>
                                </div>

                                <div className="Kitakata-Detail__Secondary-Container">
                                    <img src={KitakataAdStore} className="Kitakata-Detail__Image-full-width"></img>
                                </div>

                                <div className="Kitakata-Detail__Secondary-Container">
                                    <img src={KitakataAdMobileApp} className="Kitakata-Detail__Image-full-width"></img>
                                </div>

                                <div className="Kitakata-Detail__Secondary-Container">
                                    <img src={KitakataAdTabletApp} className="Kitakata-Detail__Image-full-width"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <PublicFooter></PublicFooter>
            </div>
        )
    }
}
export default KitakataDetail;