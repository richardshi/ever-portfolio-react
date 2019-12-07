import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './EatHereDetail.scss'

import EatHereBannerSmall from 'assets/images/EatHerePage/Eathere_1.png'
import EatHereBannerMedium from 'assets/images/EatHerePage/Eathere_1@2x.png'
import EatHereBannerLarge from 'assets/images/EatHerePage/Eathere_1@3x.png'

import EatHereLogo from 'assets/images/EatHerePage/Eathere_2@3x.png'
import EatHereProblems from 'assets/images/EatHerePage/Eathere_3@3x.png'
import EatHereGoals from 'assets/images/EatHerePage/Artboard-14@3x.png'

import EatHerePersonal from 'assets/images/EatHerePage/Eathere_7@3x.png'
import EatHerePersonal_1 from 'assets/images/EatHerePage/Artboard-17@3x.png'

import EatHereMoodBoard from 'assets/images/EatHerePage/Eathere_8@3x.png'
import EatHereColorPaletten_1 from 'assets/images/EatHerePage/Eathere_9@3x.png'
import EatHereColorPaletten_2 from 'assets/images/EatHerePage/Eathere_10@3x.png'
import EatHereColorPaletten_3 from 'assets/images/EatHerePage/Eathere_11@3x.png'
import EatHereTypography from 'assets/images/EatHerePage/Eathere_16@3x.png'
import EatHereLogoDesign from 'assets/images/EatHerePage/Eathere_12@3x.png'
import EatHereAnalysis from 'assets/images/EatHerePage/Artboard-13@3x.png'
import EatHereIcon from 'assets/images/EatHerePage/Eathere_13@3x.png'

import EatHereSiteMap from 'assets/images/EatHerePage/Eathere_14@3x.png'
import EatHereWireFramesFlow from 'assets/images/EatHerePage/Eathere_15@3x.png'

import EatHereKFLogin from 'assets/images/EatHerePage/Eathere_app_1@3x.png';
import EatHereKFFoodList from 'assets/images/EatHerePage/Eathere_app_2@3x.png';
import EatHereKFFoodFilter from 'assets/images/EatHerePage/Eathere_app_3@3x.png';
import EatHereKFSelect from 'assets/images/EatHerePage/Eathere_app_4@3x.png';
import EatHereKFFoodDetail from 'assets/images/EatHerePage/Eathere_app_5@3x.png';
import EatHereKFEditFood from 'assets/images/EatHerePage/Eathere_app_6@3x.png';
import EatHereKFProfileDetail from 'assets/images/EatHerePage/Eathere_app_7@3x.png';
import EatHereKFEditProfile from 'assets/images/EatHerePage/Eathere_app_8@3x.png';
import EatHereKFAddFood from 'assets/images/EatHerePage/Eathere_app_9@3x.png';



class EatHereDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }




    render(){
        const{ navBarMenu } = this.state;

        return(
            <div id="EatHere_Detail">
                <PublicHeader></PublicHeader>
                <div className="EatHere-Detail Page-Container">
                    <div className="EatHere-Detail__Banner-Wrapper">
                        <div className="EatHere-Detail__Banner-Background">
                            <img    className="EatHere-Detail__Image-full-width"
                                    srcSet={`   ${EatHereBannerSmall} 320w,
                                                ${EatHereBannerMedium} 500w,
                                                ${EatHereBannerLarge} 800w`}
                                    src={EatHereBannerSmall} 
                                    alt="avatar"/>

                        </div>
                    </div>
                    <div className="EatHere-Detail__Section-List">
                        <div className="EatHere-Detail__Section show">
                            <div className="Section__Title EatHere-Detail__Container ">
                            </div>
                            <div className="Section__Two-Sections EatHere-Detail__Container">
                                <div className="Section__Two-Section">
                                    <h4>Overview</h4>
                                    <p>EAThere is a mobile application to track your food places including restaurant, ice-cream store, and so on. At the same time, it will make your life easy to find and share your favorite places in the map.</p>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Skills</h4>
                                    <p>Visual and UI design, Web design, Adobe XD, <br/>HTML, CSS, JS Prototyping</p>
                                </div>
                            </div>
                            <div className="Section__Two-Sections EatHere-Detail__Container">
                                <div className="Section__Two-Section">
                                    <a href="#Prototype_Live"><button className="button-CaseStudy">Live App</button></a>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Date Created</h4>
                                    <p>Spring 2019 <br />8 weeks</p>
                                </div>
                            </div>
                            <div className="Section__Full-Width-Banner Section-Intro__Banner">
                                <div className="EatHere-Detail__Container EatHere-Banner-Container">
                                    <div className="EatHere-Banner-Left"><img src={EatHereLogo} /></div>
                                    <div className="EatHere-Banner-Right"><h4>Mark and track your food places to show on the map</h4></div>
                                </div>
                            </div>
                            <div className="EatHere-Detail__Container">
                                <h4>Problems</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <div className="Section__LeftImage-Sections">
                                        <div className="LeftImage-Sections-Left">
                                            <img src={EatHereProblems} className="EatHere-Detail__Image-full-width"></img>
                                            <h5>It's so Hard to Decide</h5>
                                        </div>
                                        <div className="LeftImage-Sections-Right">
                                            <p>It’s a timeless, exhausting, and frustrating struggle. Struggling where to eat happens to you and whoever you’re with all the time. It happens enough that maybe you should have something prepared for such occasions. </p>
                                            <p className="EatHere__Problem-Question">“How might we help people to decide when they are struggling where to eat?”</p>
                                        </div>
                                    </div>
                                </div>
                                <h4>Goals</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                <div className="Section__LeftImage-Sections">
                                    <div className="LeftImage-Sections-Left">
                                        <img src={EatHereGoals} className="EatHere-Detail__Image-full-width"></img>
                                    </div>
                                    <div className="LeftImage-Sections-Right">
                                        <p>1.  Design EAThere App to track their own food places. </p>
                                        <p>2. The app will help users to remember locations.</p>
                                        <p>3. Users are able to add, edit, and delete an information at any time.</p>
                                    </div>
                                </div>
                                   
                                </div>
                            </div>
                            
                            
                            <div className="EatHere-Detail__Container">
                                <h4>Competitiors Analysis</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <img className="EatHere-Detail__Image-full-width" src={EatHereAnalysis}></img>
                                </div>
                            </div>

                            <div className="EatHere-Detail__Container">
                                <h4>Personas</h4>
                                <div className="EatHere-Detail__Secondary-Container Section__Three-Selection-List">
                                    <div id="Albert_Conville" className={`Section__Three-Selection-Container show`}>
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left">
                                                <img src={EatHerePersonal} className="EatHere-Detail__Image-full-width"></img>
                                                <h4>Albert Conville</h4>
                                            </div>
                                            <div className="LeftImage-Sections-Right">
                                                <div className="Section__Inner-Half-Sections"> 
                                                    <div className="Section__Inner-Half-Section">
                                                        <h5>About</h5>
                                                        <p>Age: 34yrs <br/>Position: Journalist<br/>Live:  New York<br/>Hobby: Cooking</p>
                                                        <h5>Personality</h5>
                                                        <img src={EatHerePersonal_1} className="EatHere-Detail__Image-full-width"></img>
                                                    </div>
                                                    <div className="Section__Inner-Half-Section">
                                                        <h5>Goals</h5>
                                                        <p>Charlotte is care about her body and health. She uses our EAThere app to choose the eating place in a easy way.</p>
                                                        <h5>Challenges</h5>
                                                        <p>She always spends more than 1 hour to search what to eat and hard to decision.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="EatHere-Detail__Container">
                                <h4>Moodboard</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <img src={EatHereMoodBoard} className="EatHere-Detail__Image-full-width"></img>
                                </div>
                                <h4>Color Palette</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <div className="Section__Three-Sections">
                                        <div className="Section__Three-Section">
                                            <img src={EatHereColorPaletten_1} className="EatHere-Detail__Image-full-width"></img>
                                            <p>HEX: #A03F36<br/>RGB: 160,63,54<br/>CMYK: 0,61,66,37</p>
                                        </div>
                                        <div className="Section__Three-Section">
                                            <img src={EatHereColorPaletten_2} className="EatHere-Detail__Image-full-width"></img>
                                            <p>HEX: #FAD8A0<br/>RGB: 250,216,160<br/>CMYK: 0,14,36,2</p>
                                        </div>
                                        <div className="Section__Three-Section">
                                            <img src={EatHereColorPaletten_3} className="EatHere-Detail__Image-full-width"></img>
                                            <p>HEX: #F9F0E4<br/>RGB: 249,240,228<br/>CMYK: 0,4,8,2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Section__Full-Width-Banner Section__Branding-Banner">
                                <div className="EatHere-Detail__Container">
                                    <h4><br/>Typography</h4>
                                    <div className="EatHere-Detail__Secondary-Container  Section-Typography">
                                        <img src={EatHereTypography} className="EatHere-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="EatHere-Detail__Container">
                                <h4>Logo Design</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <p>The idea of logo is the icon of location and the meal.<br/>It combines the brand name EAThere.</p>
                                    <img src={EatHereLogoDesign} className="EatHere-Detail__Image-full-width"></img>
                                </div>
                            </div>
                            <div className="EatHere-Detail__Container">
                                <h4>Iconography</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <div className="Section__Three-Sections">
                                        <div className="Section__Three-Section">
                                            <p>App version</p>
                                            <img src={EatHereIcon} className="EatHere-Detail__Image-full-width"></img>
                                        </div>
                                        <div className="Section__Three-Section"></div>
                                        <div className="Section__Three-Section"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="EatHere-Detail__Container">
                                <h4>Site Map</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <img src={EatHereSiteMap} className="EatHere-Detail__Image-full-width"></img>
                                </div>
                            </div>

                            <div>
                                <div className="EatHere-Detail__Container">
                                    <h4>WireFrames Flow</h4>
                                </div>
                                <div className="Section__Full-Width-Banner Section__Branding-Banner">
                                    <div className="EatHere-Detail__Container">
                                        <img src={EatHereWireFramesFlow} className="EatHere-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>


                            <div className="EatHere-Detail__Container">
                                <h4>FINAL DESIGN</h4>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Description">
                                        <h4>Start your own food map</h4>
                                        <p>Log in to this food tracker app to search the different kinds of food. Then users are able to filter through all the food to quickly find the food that they want. </p>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFLogin} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Login</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFFoodList} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Food List</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFFoodFilter} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Food Filter</h4>
                                    </div>
                                </div>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFSelect} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Select</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFFoodDetail} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Food Detail</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFEditFood} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Edit Food info</h4>
                                    </div>
                                    <div className="Key-Screen-Description">
                                        <h4>Select and edit</h4>
                                        <p>The list page shows all food list in your account and if you spot a food shop in the city, go ahead and pin them on the map, then add their details. <br/>After adding, user can check the list anytime.</p>
                                    </div>
                                </div>
                                <div className="Section__Key-Screen-List">
                                    <div className="Key-Screen-Description">
                                        <h4>View and edit the user profile</h4>
                                        <p>Click the profile page to add and edit the user icon on the map (or on the list page) and see the user profile data and keep them up-to-date. The image is able to change or upload as well.</p>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFProfileDetail} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Profile Page</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFEditProfile} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Edit Profile</h4>
                                    </div>
                                    <div className="Key-Screen-Shot">
                                        <img src={EatHereKFAddFood} className="EatHere-Detail__Image-full-width"></img>
                                        <h4>Add Food</h4>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="Prototype_Live" className="EatHere-Detail__Container">
                                <h4>Prototype</h4>
                                <div className="EatHere-Detail__Secondary-Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Two-Section">
                                            <h4>Mobile App</h4>
                                            <p>TRY IT OUT!<br/>Use the following info to log in:</p>
                                            <p>Username: user0 <br/>Password: pass</p>
                                            <a href="http://www.everwudesign.com/weiwu/AAU/wnm617/m15/tracker.html#page-login">EatHere</a>
                                        </div>
                                        <div className="Section__Two-Section">
                                            <div className="Section__Prototype-Container">
                                                <iframe className="Section__Prototype" src="http://www.everwudesign.com/weiwu/AAU/wnm617/m15/tracker.html#page-login"></iframe>
                                            </div>
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
export default EatHereDetail;