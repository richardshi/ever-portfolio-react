import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './IDrinkDetail.scss'

import IDrinkBannerSmall from 'assets/images/IDrinkPage/iDrink-1.png';
import IDrinkBannerMedium from 'assets/images/IDrinkPage/iDrink-1@2x.png';
import IDrinkBannerLarge from 'assets/images/IDrinkPage/iDrink-1@3x.png';
import IDrinkLogoSmall from 'assets/images/IDrinkPage/iDrink_logo@3x.png';
import IDrinkProblems from 'assets/images/IDrinkPage/iDrink-2@3x.png';
import IDrinkWomen from 'assets/images/IDrinkPage/iDrink-4@3x.png';
import IDrinkMen from 'assets/images/IDrinkPage/iDrink-4-1@3x.png';
import IDrinkAmount from 'assets/images/IDrinkPage/iDrink-3@3x.png';
import IDrinkAnalysis from 'assets/images/IDrinkPage/iDrink-6@3x.png';
import IDrinkTargetAudience from 'assets/images/IDrinkPage/iDrink-7@3x.png';

import IDrinkMoodBoard from 'assets/images/IDrinkPage/iDrink-11@3x.png';
import IDrinkColorPalette from 'assets/images/IDrinkPage/iDrink-12@3x.png';
import IDrinkTypography from 'assets/images/IDrinkPage/iDrink-13@3x.png'
import IDrinkLogoDesign from 'assets/images/IDrinkPage/iDrink-14@3x.png';
import IDrinkLogoGuideLight from 'assets/images/IDrinkPage/iDrink-15-1@3x.png';
import IDrinkLogoGuideDark from 'assets/images/IDrinkPage/iDrink-15@3x.png';
import IDrinkIcons from 'assets/images/IDrinkPage/iDrink_icons@3x.png';
import IDrinkBottleDesign from 'assets/images/IDrinkPage/iDrink-16@3x.png';
import IDrinkUserFlow from 'assets/images/IDrinkPage/iDrink-17@3x.png';
import IDrinkUserTesting from 'assets/images/IDrinkPage/iDrink-testing@3x.png';


import IDrinkSCOnboarding from 'assets/images/IDrinkPage/iDrink_Onboarding@3x.png';
import IDrinkSCLogin from 'assets/images/IDrinkPage/iDrink_Login@3x.png';
import IDrinkSCSignUp from 'assets/images/IDrinkPage/iDrink_Signup@3x.png';

import IDrinkSCHome from 'assets/images/IDrinkPage/iDrink_Home@3x.png';
import IDrinkSCNotification from 'assets/images/IDrinkPage/iDrink_Notification@3x.png';
import IDrinkSCAddLiquid from 'assets/images/IDrinkPage/iDrink_Add@3x.png';
import IDrinkSCReminder from 'assets/images/IDrinkPage/iDrink_Setting_1@3x.png';
import IDrinkSCSetting from 'assets/images/IDrinkPage/iDrink_Setting@3x.png';
import IDrinkSCTracking from 'assets/images/IDrinkPage/iDrink_Tracking@3x.png';

import IDrinkUserFlowWeb from 'assets/images/IDrinkPage/iDrink-21@3x.png'

import IDrinkWebHome from 'assets/images/IDrinkPage/iDrink-22@3x.png'
import IDrinkWebLanding from 'assets/images/IDrinkPage/iDrink-23@3x.png'
import IDrinkWebProductDetail from 'assets/images/IDrinkPage/iDrink-24@3x.png'
import IDrinkWebCart from 'assets/images/IDrinkPage/iDrink-25@3x.png'
import IDrinkPrototype from 'assets/images/IDrinkPage/iDrink-26@3x.png'
import IDrinkIOTBottle from 'assets/images/IDrinkPage/iDrink-27@3x.png'
import IDrinkIOTWatch from 'assets/images/IDrinkPage/iDrink-28@3x.png'


import IDrinkPersonas1 from 'assets/images/IDrinkPage/Albert@3x.png'
import IDrinkPersonas1_1 from 'assets/images/IDrinkPage/Albert_1@3x.png'
import IDrinkPersonas2 from 'assets/images/IDrinkPage/Scarlett@3x.png'
import IDrinkPersonas2_1 from 'assets/images/IDrinkPage/Scarlett_1@3x.png'
import IDrinkPersonas3 from 'assets/images/IDrinkPage/Joseph@3x.png'
import IDrinkPersonas3_1 from 'assets/images/IDrinkPage/Joseph_1@3x.png'


class IDrinkDetail extends Component {
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
        this.renderSectionClasses = this.renderSectionClasses.bind(this);
        this.renderedPersonasBar = this.renderedPersonasBar.bind(this);
        this.updatePersonasBarMenu = this.updatePersonasBarMenu.bind(this);
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
            <div id="Banner-Menu-IDrink" className="IDrink-Detail__Banner-Menu">
                <nav className="IDrink-Detail__Container Banner-Menu-Wrapper">
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

    renderedPersonasBar(){
        let PersonasBarMenu = this.state.PersonasBarMenu;
        let PersonasSelections = PersonasBarMenu.map((PersonasSelection, index) => {
            let activeClass = PersonasSelection.active ? " activated" : "";
            return (
                <div className={`Three-Section-Bar__Selection Three-Selection-Bar-DarkBlue ${activeClass}`} onClick={()=>this.updatePersonasBarMenu(index)}>
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
        const{ navBarMenu } = this.state;
        let renderedNavBarMenu = this.renderNavMenu();
        let SectionClasses = this.renderSectionClasses();
        let renderedPersonasBar = this.renderedPersonasBar();
        let PersonasClasses = this.renderPersonasBarClasses();

        return(
            <div id="IDrink_Detail">
                <PublicHeader></PublicHeader>
                <div className="IDrink-Detail Page-Container">
                    <div className="IDrink-Detail__Banner-Wrapper">
                        <div className="IDrink-Detail__Banner-Background">
                            <img    className="IDrink-Detail__Image-full-width"
                                    srcSet={`   ${IDrinkBannerSmall} 320w,
                                                ${IDrinkBannerMedium} 500w,
                                                ${IDrinkBannerLarge} 800w`}
                                    src={IDrinkBannerSmall} 
                                    alt="avatar"/>

                        </div>
                    </div>
                    {renderedNavBarMenu}
                    <div className="IDrink-Detail__Section-List">
                        <div id="Section_Intro" className={`IDrink-Detail__Section ${SectionClasses[0]}`}>
                            <div className="Section__Title IDrink-Detail__Container ">
                                <h1>01</h1>
                                <h2>INTRODUCTION</h2>
                            </div>
                            <div className="Section__Two-Sections IDrink-Detail__Container">
                                <div className="Section__Two-Section">
                                    <h4>Overview</h4>
                                    <p>iDrink is a water tracker and water reminder application. It’s easy to drink water and develop daily drinking habit. </p>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Skills</h4>
                                    <p>Visual and UI design, UX research, Adobe XD, Illustration, Sketch, Human-Centered Design </p>
                                </div>
                            </div>
                            <div className="Section__Two-Sections IDrink-Detail__Container">
                                <div className="Section__Two-Section">
                                    <a href="http://everwudesign.com/Wei_Wu_iDrink.pdf"><button className="button-CaseStudy">View More</button></a>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Date Created</h4>
                                    <p>Spring 2019 <br />8 weeks</p>
                                </div>
                            </div>
                            <div className="Section__Full-Width-Banner Section-Intro__Banner">
                                <div className="IDrink-Detail__Container IDrink-Banner-Container">
                                    <div className="IDrink-Banner-Left"><img src={IDrinkLogoSmall} /></div>
                                    <div className="IDrink-Banner-Right"><h4>Drinking water is a priority!</h4></div>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Problems</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__LeftImage-Sections">
                                        <div className="LeftImage-Sections-Right">
                                            <p>Through researches and interviews, one of the common responses was that many people didn’t feel thirsty and forget to drink buckets of water every day.</p>
                                            <p className="IDrink__Problem-Question">“How might we help people who feel dehydration reaction and adverse symptoms when they don’t drink enough water?”</p>
                                        </div>
                                        <div className="LeftImage-Sections-Left"><img src={IDrinkProblems} className="IDrink-Detail__Image-full-width"></img></div>
                                    </div>
                                </div>
                                <h4>Goals</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <p>1. Create a tracking and reminder app to take charge of your beverage intake and alter your drinking habits.</p>
                                    <p>2. Charts your drinking habits daily, weekly, or monthly, and it displays your consumption statistics.</p>
                                </div>
                            </div>
                        </div>

                        <div id="Section_Research" className={`IDrink-Detail__Section ${SectionClasses[1]}`}>
                            <div className="Section__Title IDrink-Detail__Container ">
                                <h1>02</h1>
                                <h2>RESEARCH</h2>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Inspiration</h4>
                                <div className="IDrink-Detail__Secondary-Container Non-Mobile">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={IDrinkWomen} className="IDrink-Detail__Image-full-width"></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <h5 className="title-light">2 to 2.7 for women</h5>
                                            </div>
                                        </div>
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={IDrinkMen} className="IDrink-Detail__Image-full-width"></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <h5 className="title-light">2.5 to 3.7 litres of water for men</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__RightImage-Sections">
                                        <div className="RightImage-Sections-Left">
                                            <h5 className="title-light">Recommend amount a day</h5>
                                            <p> A new video from TED-Ed, an online library of educational videos, describes the bodily process of dehydration.
                                                <br/>60% of the average human body is made up of water, with three-quarters of the brain, 83% of lungs and 31% of bones containing H2O. This means that our bodies rely on hydration to function.
                                            </p>
                                        </div>
                                        <div className="RightImage-Sections-Right"><img src={IDrinkAmount} className="IDrink-Detail__Image-full-width"></img></div>
                                    </div>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Competitiors Analysis</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <img className="IDrink-Detail__Image-full-width" src={IDrinkAnalysis}></img>
                                </div>
                            </div>

                            <div className="IDrink-Detail__Container">
                                <h4>Target Audience</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__LeftImage-Sections">
                                        <div className="LeftImage-Sections-Left"><img src={IDrinkTargetAudience} className="IDrink-Detail__Image-full-width"></img></div>
                                        <div className="LeftImage-Sections-Right">
                                            <p>For people who anytime you are feeling faint, tired, or dizzy, please drink more water. </p>
                                            <p>Both men consumed an average of 3.46 liters (117 ounces) of water per day, and women consumed 2.75 liters (93 ounces) per day.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="Section__Two-Sections">
                                    <div className="Section__Two-Section">
                                        <h4>PRIMARY</h4>
                                        <ul>
                                            <li>Women who are expecting or breast-feeding need additional fluids to stay hydrated. </li>
                                            <li>Age around 50 years old</li>
                                        </ul>
                                    </div>
                                    <div className="Section__Two-Section">
                                        <h4>SECONDARY</h4>
                                        <ul>
                                            <li>Anyone who like to drink any sugary drinks.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="IDrink-Detail__Container">
                                <h4>Personas</h4>
                                {renderedPersonasBar}
                                <div className="Section__Three-Selection-List">
                                    <div id="Albert_Conville" className={`IDrink-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[0]}`}>
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Half-Section">
                                                <div className="Section__Inner-Half-Sections">
                                                    <div className="Section__Inner-Half-Section">
                                                        <img src={IDrinkPersonas1} className="IDrink-Detail__Image-full-width"></img>
                                                        <h4>Albert Conville</h4>
                                                    </div>
                                                    <div className="Section__Inner-Half-Section">
                                                        <h5>About</h5>
                                                        <p>Age: 55yrs <br/>Position: Surgeon <br/>Live: Portland<br/>Hobby: Hiking</p>
                                                        <h5>Personality</h5>
                                                        <img src={IDrinkPersonas1_1} className="IDrink-Detail__Image-full-width"></img>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="Section__Half-Section">
                                                <h5>Goals</h5>
                                                <p>
                                                    Albert is care about his body and health. He uses our iDrink app to build a good habit of drinking water. It is a small thing to do, but it is important.
                                                </p>
                                                <h5>Challenges</h5>
                                                <p>
                                                     Albert is a crazy man. He works very busy and hardly rests during the day. And also he doesn’t hold the bottle and phone all the time.                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Scarlett_Devon" className={`IDrink-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[1]}`}>
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Half-Section">
                                                <div className="Section__Inner-Half-Sections">
                                                    <div className="Section__Inner-Half-Section">
                                                        <img src={IDrinkPersonas2} className="IDrink-Detail__Image-full-width"></img>
                                                        <h4>Scarlett Devon</h4>
                                                    </div>
                                                    <div className="Section__Inner-Half-Section">
                                                        <h5>About</h5>
                                                        <p>Age: 31yrs <br />Position: Piano Teacher <br />Live: San Francisco <br />Hobby: Running</p>
                                                        <h5>Personality</h5>
                                                        <img src={IDrinkPersonas2_1} className="IDrink-Detail__Image-full-width"></img>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="Section__Half-Section">
                                                <h5>Goals</h5>
                                                <p>Scarlett knows water carries oxygen and essential nutrients to the cells, tissues and organs. So she uses our iDrink app and custom her own schedule to reminder her to drink water every day.</p>
                                                <h5>Challenges</h5>
                                                <p>Scarlett is a pregnant woman. During her pregnancy, her OB advised her to drink. It is good for her body and her baby. While she always forget to drink enough water.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="Joseph_Cox" className={`IDrink-Detail__Secondary-Container Section__Three-Selection-Container ${PersonasClasses[2]}`}>
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Half-Section">
                                                <div className="Section__Inner-Half-Sections">
                                                    <div className="Section__Inner-Half-Section">
                                                        <img src={IDrinkPersonas3} className="IDrink-Detail__Image-full-width"></img>
                                                        <h4>Joseph Cox</h4>
                                                    </div>
                                                    <div className="Section__Inner-Half-Section">
                                                        <h5>About</h5>
                                                        <p>Age: 21yrs<br/>Position: college student<br/>Live: Saratoga<br/>Hobby: Surfing, Football</p>
                                                        <h5>Personality</h5>
                                                        <img src={IDrinkPersonas3_1} className="IDrink-Detail__Image-full-width"></img>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="Section__Half-Section">
                                                <h5>Goals</h5>
                                                <p>Joseph doesn’t like to drink the boring water. So he uses our iDrink app to track water and beverage ratio and try to revise his wrong drinking habit.</p>
                                                <h5>Challenges</h5>
                                                <p>Joseph is a college student who likes to hang out with friends every week. He likes to drink beer, red wine and juice. He doesn’t understand the water is important for his body.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="Section_Branding" className={`IDrink-Detail__Section ${SectionClasses[2]}`}>
                            <div className="Section__Title IDrink-Detail__Container ">
                                <h1>03</h1>
                                <h2>BRANDING</h2>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Moodboard</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <img src={IDrinkMoodBoard} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                                <h4>Color Palette</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <img src={IDrinkColorPalette} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            <div className="Section__Full-Width-Banner Section__Branding-Banner">
                                <div className="IDrink-Detail__Container">
                                    <h4><br/>Typography</h4>
                                    <div className="IDrink-Detail__Secondary-Container">
                                        <img src={IDrinkTypography} className="IDrink-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Logo Design</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <img src={IDrinkLogoDesign} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <p>Black or dark background version</p>
                                            <img src={IDrinkLogoGuideDark} className="IDrink-Detail__Image-full-width"></img>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <p>White or light background version</p>
                                            <img src={IDrinkLogoGuideLight} className="IDrink-Detail__Image-full-width"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>Icons</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <img src={IDrinkIcons} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            <div>
                                <div className="IDrink-Detail__Container">
                                    <h4>IoT - iDrink Smart Bottle</h4>
                                </div>
                                <div className="Section__Full-Width-Banner">
                                    <img src={IDrinkBottleDesign} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                            </div>
                        </div>
                        <div id="Section_Interaction" className={`IDrink-Detail__Section ${SectionClasses[3]}`}>
                            <div className="Section__Title IDrink-Detail__Container ">
                                <h1>04</h1>
                                <h2>INTERACTION</h2>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>User Flow - App</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__LeftImage-Sections">
                                        <div className="LeftImage-Sections-Left">
                                            <p>
                                                The iDrink app is a mobile application that shows with the LED screen on the smart bottle. Users should download and sign up the app before they remind to drink water.
                                            </p>
                                        </div>
                                        <div className="LeftImage-Sections-Right">
                                            <img src={IDrinkUserFlow} className="IDrink-Detail__Image-full-width"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="IDrink-Detail__Container">
                                <h4>User Testing</h4>
                                <img src={IDrinkUserTesting} className="IDrink-Detail__Image-full-width"></img>
                            </div>


                            <div className="IDrink-Detail__Container">
                                <h4>KEY SCREEN</h4>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCOnboarding} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Onboarding</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCLogin} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Login</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCSignUp} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Sign Up</h4>
                                    </div>
                                    <div className="Key-Screen-Description">
                                        <h4>Log in on the mobile app</h4>
                                        <p>The new user can create a new account and log in the app with their ID and password.</p>
                                    </div>
                                </div>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Description">
                                        <h4>Automatic reminders</h4>
                                        <p>This app can automatic reminder you to drink water and the bottle sensor measures how much you drink and transfers this info to our iDrink app. </p>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCNotification} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Notification</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCHome} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Home</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCAddLiquid} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Add Liquid</h4>
                                    </div>
                                </div>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCReminder} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Reminder</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCSetting} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Setting</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={IDrinkSCTracking} className="IDrink-Detail__Image-full-width"></img>
                                        <h4>Histogram Tracking</h4>
                                    </div>
                                    <div className="Key-Screen-Description">
                                        <h4>Set up your personal mode</h4>
                                        <p>It has 3 light mode settings to remind you not to forget to drink water and adjust the light and volume. The histogram tracking can know your weekly drinking habit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="IDrink-Detail__Container">
                                <h4>User Flow - Web</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__LeftImage-Sections">
                                        <div className="LeftImage-Sections-Left">
                                            <p>The www.iDrink.com is the official website to sell the key product smart water bottle with the LED screen. </p>
                                            <p>The website has a full page to introduce the iDrink app.Users are able to choose different bottle colors and sizes on the website. And other variety of accessories are also available.</p>
                                        </div>
                                        <div className="LeftImage-Sections-Right">
                                            <img src={IDrinkUserFlowWeb} className="IDrink-Detail__Image-full-width"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Section__Design-Banner">
                                <div className="IDrink-Detail__Container">
                                    <img src={IDrinkWebHome} className="IDrink-Detail__Image-full-width"></img>
                                    <img src={IDrinkWebLanding} className="IDrink-Detail__Image-full-width"></img>
                                    <img src={IDrinkWebProductDetail} className="IDrink-Detail__Image-full-width"></img>
                                    <img src={IDrinkWebCart} className="IDrink-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            
                        </div>
                        <div id="Section_Poster" className={`IDrink-Detail__Section ${SectionClasses[4]}`}>
                            <div className="Section__Title IDrink-Detail__Container ">
                                <h1>05</h1>
                                <h2>POSTER</h2>
                            </div>
                            
                            <div className="IDrink-Detail__Container">
                                <h4>Mostion Graphic</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__Video-Container">
                                        <iframe className="Section__Video" src="https://www.youtube.com/embed/ETq4BQo6mLs"></iframe>
                                    </div>
                                </div>
                            </div>


                            <div className="IDrink-Detail__Container">
                                <h4>IoT Products</h4>
                                <div className="IDrink-Detail__Secondary-Container">
                                    <div className="Section__Three-Sections Section__IOT-Products">
                                        <div className="Section__Three-Section Section__IOT-Cell-Container">
                                            <div className="">
                                                <img src={IDrinkIOTBottle} className="IDrink-Detail__Image-full-width"></img>
                                                <h5>Smart bottle</h5>
                                            </div>
                                        </div>
                                        <div className="Section__Three-Section Section__IOT-Cell-Container">
                                            <div className="Section__IOT-Cell">
                                                <img src={IDrinkIOTWatch} className="IDrink-Detail__Image-full-width"></img>
                                                <h5>Smart Watch</h5>
                                            </div>
                                        </div>
                                        <div className="Section__Three-Section">

                                        </div>
                                    </div>
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
export default IDrinkDetail;