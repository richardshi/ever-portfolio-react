import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './EndlessDetail.scss'

import EndlessBannerSmall from 'assets/images/EndlessPage/Endless_1.png';
import EndlessBannerMedium from 'assets/images/EndlessPage/Endless_1@2x.png';
import EndlessBannerLarge from 'assets/images/EndlessPage/Endless_1@3x.png';
import EndlessLogoSmall from 'assets/images/EndlessPage/Endless_2@3x.png';
import EndlessWasteBooksSmall from 'assets/images/EndlessPage/Endless_3@3x.png';
import EndlessBGImage from 'assets/images/EndlessPage/Endless_4.png';
import EndlessTrashSmall from 'assets/images/EndlessPage/Endless_5@3x.png';
import EndlessDonateSmall from 'assets/images/EndlessPage/Endless_6@3x.png';
import EndlessStreetBooks from 'assets/images/EndlessPage/Endless_7@3x.png';
import EndlessQuestionnaireGraph from 'assets/images/EndlessPage/Endless_8@3x.png';
import EndlessBooxupLogo from 'assets/images/EndlessPage/Booxup_logo@3x.png';
import EndlessBooxupScreenShot from 'assets/images/EndlessPage/BooxupScreenScalde@3x.png';
import EndlessLitsyLogo from 'assets/images/EndlessPage/Litsy_Logo@3x.png';
import EndlessLitsyScreenShoot from 'assets/images/EndlessPage/Litsy_Facebook@3x.png';
import EndlessBooklyLogo from 'assets/images/EndlessPage/Bookly_Logo@3x.png';
import EndlessBooklyScreenShot from 'assets/images/EndlessPage/Bookly_ScreenShoot@3x.png';
import EndlessTargeAudience from 'assets/images/EndlessPage/Endless_12@3x.png';
import EndlessScope from 'assets/images/EndlessPage/Endless_13@3x.png';
//import EndlessPersonas1 from 'assets/images/EndlessPage/Endless_14@3x.png';
//import EndlessPersonas2 from 'assets/images/EndlessPage/Endless_15@3x.png';
//import EndlessPersonas3 from 'assets/images/EndlessPage/Endless_16@3x.png';
import EndlessMoodBoard from 'assets/images/EndlessPage/Endless_20@3x.png';
import EndlessColorPalette from 'assets/images/EndlessPage/Endless_21@3x.png';
import EndlessTypography from 'assets/images/EndlessPage/Endless_Typography.png';
import EndlessLogoDesign from 'assets/images/EndlessPage/Endless_22@3x.png';
import EndlessLogoGuide from 'assets/images/EndlessPage/Endless_23@3x.png';
import EndlessStyleGuide from 'assets/images/EndlessPage/Endless_24@3x.png';
//import EndlessFreeSticker from 'assets/images/EndlessPage/Endless_25@3x.png';
import EndlessUserFlow from 'assets/images/EndlessPage/Endless_17@3x.png';
import EndlessWireFramesFlow from 'assets/images/EndlessPage/Endless_18@3x.png';
import EndlessUserTest from 'assets/images/EndlessPage/Endless_19@3x.png';
import EndlessSCOnboarding from 'assets/images/EndlessPage/Endless_Onboarding-1@3x.png';
import EndlessSCLogin from 'assets/images/EndlessPage/Endless_Login-1@3x.png';
import EndlessSCSignUp from 'assets/images/EndlessPage/Endless_Signup-1@3x.png';
import EndlessSCHome from 'assets/images/EndlessPage/Endless_Home-1@3x.png';
import EndlessSCUpload from 'assets/images/EndlessPage/Endless_Upload-1@3x.png';
import EndlessSCShare from 'assets/images/EndlessPage/Endless_Share-1@3x.png';
import EndlessSCSearch from 'assets/images/EndlessPage/Endless_Search-1@3x.png';
import EndlessSCSelect from 'assets/images/EndlessPage/Endless_Select-1@3x.png';
import EndlessSCFind from 'assets/images/EndlessPage/Endless_Find-1@3x.png';
import EndlessAdvertising from 'assets/images/EndlessPage/Endless_28@3x.png';

import EndlessSticker from 'assets/images/EndlessPage/12@3x.png';
import EndlessPersonas1 from 'assets/images/EndlessPage/Endless_Jane@3x.png'
import EndlessPersonas2 from 'assets/images/EndlessPage/Endless_Emma@3x.png'
import EndlessPersonas3 from 'assets/images/EndlessPage/Endless_Sherry@3x.png'

import EndlessVideo from 'assets/images/EndlessPage/Endless_Prototype_Video.mp4'


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
                    name: "POSTER",
                    id: "Section_Poster",
                    active: false,
                }
            ],
            CABarMenu: [
                {
                    name: "Booxup",
                    id: "CA_Booxup",
                    active: true,
                },
                {
                    name: "Litsy",
                    id: "CA_Litsy",
                    active: false,
                },
                {
                    name: "Bookly",
                    id: "CA_Bookly",
                    active: false,
                }
            ],
            PersonasBarMenu: [
                {
                    name: "Enjoy reading",
                    id: "Enjoy_Reading",
                    active: true,
                },
                {
                    name: "Happy to share book",
                    id: "Happy_to_share_book",
                    active: false,
                },
                {
                    name: "Share book endlessly",
                    id: "Share_book_endlessly",
                    active: false,
                }
            ]
        };
        this.renderNavMenu = this.renderNavMenu.bind(this);
        this.updateNavMenu = this.updateNavMenu.bind(this);
        this.renderSectionClasses = this.renderSectionClasses.bind(this);
        this.renderCompetitorsAnalysisBar = this.renderCompetitorsAnalysisBar.bind(this);
        this.updateCABarMenu = this.updateCABarMenu.bind(this);
        this.renderCABarClasses = this.renderCABarClasses.bind(this);
        this.renderedPersonasBar = this.renderedPersonasBar.bind(this);
        this.updatePersonasBarMenu = this.updatePersonasBarMenu.bind(this);
        this.renderCABarClasses = this.renderCABarClasses.bind(this);

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
                <a href={`#${navBarSelection.id}`} className={`Banner-Menu-Selection ${activeClass}`} onClick={()=>this.updateNavMenu(index)}>
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
    
    renderCompetitorsAnalysisBar(){
        let CABarMenu = this.state.CABarMenu;
        let CABarMenuSelections = CABarMenu.map((navBarSelection, index) => {
            let activeClass = navBarSelection.active ? " activated" : "";
            return (
                <div className={`Three-Section-Bar__Selection Three-Selection-Bar-Blue ${activeClass}`} onClick={()=>this.updateCABarMenu(index)}>
                    <div className="Three-Section-Bar__Selection-Name">{navBarSelection.name}</div>
                </div>
            )
        })
        return (
            <div id="" className="Section__Three-Selection-Bar">
                {CABarMenuSelections}
            </div>
        )
    }

    updateCABarMenu(index){
        let CABarMenu = this.state.CABarMenu;
        for(let i=0; i<CABarMenu.length; i++){
            if (i == index){
                CABarMenu[i].active = true;
            } else {
                CABarMenu[i].active = false;
            }
        }
        this.setState({CABarMenu: CABarMenu})
    }

    renderCABarClasses(){
        let CABarMenu = this.state.CABarMenu;
        let CASectionClassList = [];
        for(let i=0; i<CABarMenu.length; i++){
            CASectionClassList[i] = "";
            if(CABarMenu[i].active){
                CASectionClassList[i] = "show";
            }
        }
        return CASectionClassList;
    }

    renderedPersonasBar(){
        let PersonasBarMenu = this.state.PersonasBarMenu;
        let PersonasSelections = PersonasBarMenu.map((PersonasSelection, index) => {
            let activeClass = PersonasSelection.active ? " activated" : "";
            return (
                <div className={`Three-Section-Bar__Selection Three-Selection-Bar-Green ${activeClass}`} onClick={()=>this.updatePersonasBarMenu(index)}>
                    <div className="Three-Section-Bar__Selection-Name">{PersonasSelection.name}</div>
                </div>
            )
        })
        return (
            <div id="" className="Section__Three-Selection-Bar ">
                {PersonasSelections}
            </div>
        )
    }

    updatePersonasBarMenu(index){
        let PersonasBarMenu = this.state.PersonasBarMenu;
        for(let i=0; i<PersonasBarMenu.length; i++){
            if (i == index){
                PersonasBarMenu[i].active = true;
            } else {
                PersonasBarMenu[i].active = false;
            }
        }
        this.setState({PersonasBarMenu: PersonasBarMenu})
    }

    renderPersonasBarClasses(){
        let PersonasBarMenu = this.state.PersonasBarMenu;
        let PersonasSectionClassList = [];
        for(let i=0; i<PersonasBarMenu.length; i++){
            PersonasSectionClassList[i] = "";
            if(PersonasBarMenu[i].active){
                PersonasSectionClassList[i] = "show";
            }
        }
        return PersonasSectionClassList;
    }

    render(){
        const{ navBarMenu, CABarMenu } = this.state;
        let renderedNavBarMenu = this.renderNavMenu();
        let SectionClasses = this.renderSectionClasses();
        let renderedCompetitorsAnalysisBar = this.renderCompetitorsAnalysisBar();
        let CASectionClasses = this.renderCABarClasses();
        let renderedPersonasBar = this.renderedPersonasBar();
        let PersonasClasses = this.renderPersonasBarClasses();

        return(
            <div id="Endless_Detail">
                <PublicHeader></PublicHeader>
                <div className="Endless-Detail Page-Container">
                    <div className="Endless-Detail__Banner-Wrapper">
                        <div className="Endless-Detail__Banner-Background">
                            <img    className="Endless-Detail__Container Banner-Background-Image"
                                    srcSet={`   ${EndlessBannerSmall} 320w,
                                                ${EndlessBannerMedium} 500w,
                                                ${EndlessBannerLarge} 800w`}
                                    src={EndlessBannerSmall} 
                                    alt="avatar"/>
                        </div>
                    </div>

                    {renderedNavBarMenu}
                    
                        <div className="Endless-Detail__Section-List">
                            <div id="Section_Intro" className={`Endless-Detail__Section ${SectionClasses[0]}`}>
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>01</h1>
                                    <h2>INTRODUCTION</h2>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <h4>Overview</h4>
                                            <p>Endless is the one-stop interactive book sharing application. Easy to share books they’ve read and find the nearby books with the free sticker. Specifically for people who like to read, and to share the books they’ve read.</p>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <h4>Skills</h4>
                                            <p>Visual and UI design, UX research, Adobe XD, Illustration, Sketch，Human-Centered Design </p>
                                        </div>
                                    </div>
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <a href="http://everwudesign.com/Wei_Wu_case_study.pdf"><button className="button-CaseStudy">View Case Study</button></a>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <h4>Date Created</h4>
                                            <p>Spring 2019 <br />8 weeks</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Section__Full-Width-Banner Section-Intro__Banner">
                                    <div className="Endless-Detail__Container Endless-Banner-Container">
                                        <div className="Endless-Banner-Left"><img src={EndlessLogoSmall} className="Endless-Detail__Image-full-width"/></div>
                                        <div className="Endless-Banner-Right"><h4>Share the books they’ve read and find the nearby books. </h4></div>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Problems</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={EndlessWasteBooksSmall} className="Endless-Detail__Image-full-width" ></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <p>Too many books are thrown away and we can’t find the book sharing community.</p>
                                                <p className="Endless__Problem-Question">“How might we help the book lovers to share their own books endlessly or find a book near by them to read?”</p>
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Goals</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <p>1. Create a community of support for people living outside, through a shared love of books.</p>
                                        <p>2. To get rid of your old books, you can paste our free sticker on the book cover and drop off anywhere for the next reader.</p>
                                    </div>
                                </div>
                                <div className="Section__Two-Sections Endless-Detail__Container">
                                    <div className="Section__Two-Section">
                                        <h4 className="title-light">How is this unique?</h4>
                                        <p>There are people who like to read, and to share the books they’ve read. Our Book Endless app combines two things together, sharing your good book in somewhere to be discovered! Our free sensor sticker can track each book’s status history.</p>
                                    </div>
                                    <div className="Section__Two-Section">
                                        <h4 className="title-light">How does it help me?</h4>
                                        <p>The Book Endless can be anywhere, and could be anyone you know. If you want to share books, you can get free stickers in every public places. If you are a book lover, keep your eye out for a book hiding near you!</p>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container Endless-Intro__Background-Image">
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__Three-Sections">
                                            <div className="Section__Three-Section">
                                                <h4 className="title-light">For who?</h4>
                                                <p>Waiting people to find a book near by.<br/>Or for the reader finished the book and want to share to other readers.</p>
                                            </div>
                                            <div className="Section__Three-Section">
                                                <h4 className="title-light">Who needs?</h4>
                                                <p>People who like to read, and to share the books they’ve read.</p>
                                            </div>
                                            <div className="Section__Three-Section">
                                                <h4 className="title-light">Is different from?</h4>
                                                <p>People donates book instead of sharing book in the public place. Other bookshare apps are focus on an e-library. <br/>So I want to make it easy for readers to combine the share and search. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="Section_Research" className={`Endless-Detail__Section ${SectionClasses[1]}`}>
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>02</h1>
                                    <h2>RESEARCH</h2>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Inspiration</h4>
                                    <div id="Endless_Inspiration" className="Endless-Detail__Secondary-Container">
                                        <div className="Section__Two-Sections Endless-Detail__Container Non-Mobile">
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left"><img src={EndlessTrashSmall} className="Endless-Detail__Image-full-width"></img></div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h4 className="title-light">Throw</h4>
                                                    <p>Not a good idea</p>
                                                </div>
                                            </div>
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left"><img src={EndlessDonateSmall} className="Endless-Detail__Image-full-width"></img></div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h4 className="title-light">Donate</h4>
                                                    <p>Good for the charities and needy families in your area.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Two-Section"><img src={EndlessStreetBooks} className="Endless-Detail__Image-full-width"></img></div>
                                            <div className="Section__Two-Section">
                                                <h4 className="title-light">The Street Books</h4>
                                                <p>Laura Moulton and Matt Tufaro in Portland, Ore. Ms. Moulton founded Street Books, a nonprofit book service for “people living outside.”</p>
                                                <p>Thomas Patterson for The New York Times</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Section__Full-Width-Banner Section-Research__Banner">
                                    <img className="Endless-Detail__Container" src={EndlessQuestionnaireGraph}></img>
                                </div>

                                <div className="Endless-Detail__Container">
                                    <h4>Competitiors Analysis</h4>
                                    {renderedCompetitorsAnalysisBar}
                                    <div className="Section__Three-Selection-List"> 
                                        <div id="CA_Booxup" className={`Section__Three-Selection-Container Endless-Detail__Secondary-Container  ${CASectionClasses[0]}`}>
                                            <div className="Section__Three-Selection-Header">
                                                <div className="Three-Selection-Header-Left"><img src={EndlessBooxupLogo} className="Endless-Detail__Image-full-width"></img></div>
                                                <div className="Three-Selection-Header-Right">
                                                    <p>Booxup is the application you need to buy books cheaper or to sell yours.</p>
                                                </div>
                                            </div>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Half-Section">
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Easy to use</li>
                                                        <li>To sell a book just scan </li>
                                                        <li>It’s legal to download PDF files of dubious origin </li>
                                                        <li>Quickly selling your books</li>
                                                        <li>All new books at the best price.</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>Not a nonprofit app</li>
                                                        <li>Manually add the book information</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Half-Section">
                                                    <img src={EndlessBooxupScreenShot} className="Endless-Detail__Image-full-width"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="CA_Litsy" className={`Section__Three-Selection-Container Endless-Detail__Secondary-Container  ${CASectionClasses[1]}`}>
                                            <div className="Section__Three-Selection-Header">
                                                <div className="Three-Selection-Header-Left"><img src={EndlessLitsyLogo} className="Endless-Detail__Image-full-width"></img></div>
                                                <div className="Three-Selection-Header-Right">
                                                    <p>Litsy is a place to share and discover your favorite books with your favorite people.</p>
                                                </div>
                                            </div>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Half-Section">
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Share and discover your favorite books</li>
                                                        <li>Easy to browse your feed</li>
                                                        <li>Matches the joy of reading a great book</li>
                                                        <li>Spoiler-free and free to use</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>The home feed does not automatically refresh</li>
                                                        <li>Manually input books you read like e-library</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Half-Section">
                                                    <img src={EndlessLitsyScreenShoot} className="Endless-Detail__Image-full-width"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="CA_Bookly" className={`Section__Three-Selection-Container Endless-Detail__Secondary-Container  ${CASectionClasses[2]}`}>
                                            <div className="Section__Three-Selection-Header">
                                                <div className="Three-Selection-Header-Left"><img src={EndlessBooklyLogo} className="Endless-Detail__Image-full-width"></img></div>
                                                <div className="Three-Selection-Header-Right">
                                                    <p>Litsy is a place to share and discover your favorite books with your favorite people.</p>
                                                </div>
                                            </div>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Half-Section">
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Set a book goal</li>
                                                        <li>Easily add books</li>
                                                        <li>Unlock various achievements</li>
                                                        <li>Make a habit out of reading</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>Paid app</li>
                                                        <li>Unresponsive many times while using</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Half-Section">
                                                    <img src={EndlessBooklyScreenShot} className="Endless-Detail__Image-fixed-height" ></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Target Audience</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={EndlessTargeAudience} className="Endless-Detail__Image-full-width"></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <p>The Book Endless app will target users who like to read, and to share the books they’ve read.</p>
                                                <p>Anyone who want to read the book during the break and want to have a seat in the park, coffee store, waiting room and some public places. <br/>Anyone who don’t have time to donate book or don’t want to take away the finished books.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <h4>PRIMARY</h4>
                                            <ul>
                                                <li>People who likes to buy many books every month.</li>
                                                <li>People who don’t have enough time to clean up and donate the old books</li>
                                            </ul>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <h4>SECONDARY</h4>
                                            <ul>
                                                <li>Anyone who want to read the book during the break.</li>
                                                <li>People who forgets to bring his own book to read.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Scope</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={EndlessScope} className="Endless-Detail__Image-full-width"></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <h4>Ideally, my project would…</h4>
                                                <p>Share the books they’ve read and find the nearby books. </p>
                                                <h4>Realistically, I can…</h4>
                                                <p>Design and combine two things together, sharing your good book in somewhere to be discovered in an easy way. I design the key function to upload your sharing books and post in public, so other users can find and share endless when finished reading. And also I design the free sensor sticker to recognize this project and enjoy us to become a book provider.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Personas</h4>
                                    {renderedPersonasBar}
                                    <div className="Section__Three-Selection-List">
                                        <div id="Enjoy_Reading" className={`Endless-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[0]}`}>
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left">
                                                    <img src={EndlessPersonas1} className="Endless-Detail__Image-full-width"></img>
                                                    <h4>Jane Jones</h4>
                                                    <p>Age: 40<br/>Live in:  Portland<br/>Interest:  Traveling, Reading</p>
                                                </div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h5>About</h5>
                                                    <p>Jane is a product manager. She is a quiet and peaceful person. After the work break, She opens the Book Endless app to search the nearby books. Then she walks 15 mins to find the book on the seat in the park. She can have a rest and enjoy the reading book. After that, she puts this book on the same position in order to share next to other person.</p>
                                                    <div className="Section__Two-Sections">
                                                        <div className="Section__Two-Section">
                                                            <h5>Goals</h5>
                                                            <ul>
                                                                <li>Save more space to put new books</li>
                                                                <li>Easy to donate books</li>
                                                                <li>Save short time to read</li>
                                                            </ul>
                                                        </div>
                                                        <div className="Section__Two-Section">
                                                            <h5>Frustrations</h5>
                                                            <ul>
                                                                <li>Bad time management</li>
                                                                <li>Phone addiction</li>
                                                                <li>Spend hours with 2 kids everyday</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="Happy_to_share_book" className={`Endless-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[1]}`}>
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left">
                                                    <img src={EndlessPersonas2} className="Endless-Detail__Image-full-width"></img>
                                                    <h4>Emma Megan</h4>
                                                    <p>Age: 32<br/>Live in:  Las Vegas<br/>Interest:  Yoga, reading</p>
                                                </div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h5>About</h5>
                                                    <p>Emma is an accountant in a big company. She likes reading a book with a cup of coffee in the coffee shop to enjoy her personal time. She bought a lot of books every month, so when she finished her book and she didn’t want to take away. So she got the free sharing sticker in the coffee shop entrance and put on the book cover, then she post and share the book details on Endless app.</p>
                                                    <div className="Section__Two-Sections">
                                                        <div className="Section__Two-Section">
                                                            <h5>Goals</h5>
                                                            <ul>
                                                                <li>Save more space to put new books</li>
                                                                <li>Easy to donate books</li>
                                                                <li>Put the phone away</li>
                                                            </ul>
                                                        </div>
                                                        <div className="Section__Two-Section">
                                                            <h5>Frustrations</h5>
                                                            <ul>
                                                                <li>No space to put the new books</li>
                                                                <li>Too much extra work to finish everyday</li>
                                                                <li>Spend hours on social media</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="Share_book_endlessly" className={`Endless-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[2]}`}>
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left">
                                                    <img src={EndlessPersonas3} className="Endless-Detail__Image-full-width"></img>
                                                    <h4>Sherry Powell</h4>
                                                    <p>Age: 48<br/>Live in:  San Francisco<br/>Interest:  Hiking, reading</p>
                                                </div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h5>About</h5>
                                                    <p>Sherry Powell is an early education teacher and she likes hiking and find a quiet place to read books. She is a very quiet person. <br/>One day, she already finished her reading endless book last week. She opens the Book Endless app to scan the QR code. Then she put the book on the chair in the garden and scan QR code again in order to share next to other person.</p>
                                                    <div className="Section__Two-Sections">
                                                        <div className="Section__Two-Section">
                                                            <h5>Goals</h5>
                                                            <ul>
                                                                <li>Life and work balance</li>
                                                                <li>Easy to donate books</li>
                                                                <li>Save short time to read</li>
                                                            </ul>
                                                        </div>
                                                        <div className="Section__Two-Section">
                                                            <h5>Frustrations</h5>
                                                            <ul>
                                                                <li>Too many housework to do</li>
                                                                <li>Hard to relax </li>
                                                                <li>Spend hours on social media everyday</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="Section_Branding" className={`Endless-Detail__Section ${SectionClasses[2]}`}>
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>03</h1>
                                    <h2>BRANDING</h2>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Moodboard</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <img src={EndlessMoodBoard} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                    <h4>Color Palette</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <img src={EndlessColorPalette} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                                <div className="Section__Full-Width-Banner Section__Branding-Banner">
                                    <div className="Endless-Detail__Container">
                                        <img src={EndlessTypography} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Logo Design</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <img src={EndlessLogoDesign} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Logo Guide</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <img src={EndlessLogoGuide} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Style Guide</h4>
                                    <img src={EndlessStyleGuide} className="Endless-Detail__Image-full-width"></img>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Free Sticker</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Two-Section">
                                                <img src={EndlessSticker} className="Endless-Detail__Image-full-width"></img>
                                            </div>
                                            <div className="Section__Two-Section">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Section_Interaction" className={`Endless-Detail__Section ${SectionClasses[3]}`}>
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>04</h1>
                                    <h2>INTERACTION</h2>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>User Flow</h4>
                                    <img src={EndlessUserFlow} className="Endless-Detail__Image-full-width"></img>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>WireFrames Flow</h4>
                                    <img src={EndlessWireFramesFlow} className="Endless-Detail__Image-full-width"></img>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>User Testing</h4>
                                    <img src={EndlessUserTest} className="Endless-Detail__Image-full-width"></img>
                                </div>

                                <div className="Endless-Detail__Container">
                                    <h4>Key Screens</h4>
                                    <div className="Section__Key-Screen-List">
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCOnboarding} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Onboarding</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCLogin} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Login</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCSignUp} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Sign Up</h4>
                                        </div>
                                        <div className="Key-Screen-Description">
                                            <h4>Log in on the mobile app</h4>
                                            <p>The new user can create a new account and log in the app with their ID and password.</p>
                                        </div>
                                    </div>
                                    <div className="Section__Key-Screen-List">
                                        <div className="Key-Screen-Description">
                                            <h4>Share your own books</h4>
                                            <p>Paste our free sensor sticker on the cover page, and take a book picture, then upload the book image and add more book details, then click the “SHARE” button to post in public. </p>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCHome} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Home</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCUpload} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Upload image</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCShare} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Share and post</h4>
                                        </div>
                                    </div>
                                    <h4>Key Screens</h4>
                                    <div className="Section__Key-Screen-List">
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCSearch} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Search</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCSelect} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Select</h4>
                                        </div>
                                        <div className="Key-Screen-Shot">
                                            <img src={EndlessSCFind} className="Endless-Detail__Image-full-width"></img>
                                            <h4>Find</h4>
                                        </div>
                                        <div className="Key-Screen-Description">
                                            <h4>Find the interesting books</h4>
                                            <p>Search the interesting book you like, such as “Art book”, or you can sort by the nearby books, then click the “Get Direction” button to find the book.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div id="Section_Poster" className={`Endless-Detail__Section ${SectionClasses[4]}`}>
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>05</h1>
                                    <h2>POSTER</h2>
                                </div>
                                
                                <div className="Endless-Detail__Container">
                                    <h4>Advertisements</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <img src={EndlessAdvertising} className="Endless-Detail__Image-full-width"></img>
                                    </div>
                                </div>

                                <div className="Endless-Detail__Container">
                                    <h4>Prototype</h4>
                                    <video controls src={EndlessVideo} type="video/mp4" className="Endless__Prototype"></video>
                                </div>
                            </div>                            
                        </div>

                </div>
                <PublicFooter></PublicFooter>
            </div>
        )
    }
}

export default EndlessDetail;