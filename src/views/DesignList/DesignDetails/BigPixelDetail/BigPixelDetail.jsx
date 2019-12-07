import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './BigPixelDetail.scss'

import BigPixelBannerSmall from 'assets/images/BigPixelPage/Artboard-3.png';
import BigPixelBannerMedium from 'assets/images/BigPixelPage/Artboard-3@2x.png';
import BigPixelBannerLarge from 'assets/images/BigPixelPage/Artboard-3@3x.png';

import BigPixelProfile from 'assets/images/BigPixelPage/Artboard-4@3x.png';
import BigPixelTeam from 'assets/images/BigPixelPage/Artboard-5@3x.png';

import BigPixelLGLogo from 'assets/images/BigPixelPage/Artboard-7@3x.png';
import BigPixelLGHome from 'assets/images/BigPixelPage/LG_home-page.jpg';
import BigPixelSonyLogo from 'assets/images/BigPixelPage/Artboard-8@3x.png';
import BigPixelSonyHome from 'assets/images/BigPixelPage/SONY_home-page.jpg';
import BigPixelHisenseLogo from 'assets/images/BigPixelPage/Artboard-9@3x.png';
import BigPixelHisenseHome from 'assets/images/BigPixelPage/Hisense_home-page.jpg';

import BigPixelCompetitive from 'assets/images/BigPixelPage/Artboard-10@3x.png';
import BigPixel4P from 'assets/images/BigPixelPage/Artboard-11@3x.png';
import BigPixelSWOT from 'assets/images/BigPixelPage/Artboard-12@3x.png';
import BigPixelWebSite from 'assets/images/BigPixelPage/Bigpixel_Web@3x.png';


import BigPixelMobileHome from 'assets/images/BigPixelPage/Artboard-18@3x.png';
import BigPixelMobileProduct from 'assets/images/BigPixelPage/Artboard-19@3x.png';
import BigPixelMobileDetail from 'assets/images/BigPixelPage/Artboard-20@3x.png';

import BigPixelSchedule from 'assets/images/BigPixelPage/Artboard-15@3x.png';
import BigPixelAd from 'assets/images/BigPixelPage/Artboard-16@3x.png';


class BigPixelDetail extends Component {
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
                    name: "LG",
                    id: "LG",
                    active: true,
                },
                {
                    name: "SONY",
                    id: "SONY",
                    active: false,
                },
                {
                    name: "Hisense",
                    id: "Hisense",
                    active: false,
                }
            ],
        };
        this.renderNavMenu = this.renderNavMenu.bind(this);
        this.updateNavMenu = this.updateNavMenu.bind(this);
        this.renderSectionClasses = this.renderSectionClasses.bind(this);
        this.renderCompetitorsAnalysisBar = this.renderCompetitorsAnalysisBar.bind(this);
        this.updateCABarMenu = this.updateCABarMenu.bind(this);
        this.renderCABarClasses = this.renderCABarClasses.bind(this);
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
            <div id="Banner-Menu-IDrink" className="BigPixel-Detail__Banner-Menu">
                <nav className="BigPixel-Detail__Container Banner-Menu-Wrapper">
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
           SectionClassList[i] = "show";
        }
        return SectionClassList;
    }

    renderCompetitorsAnalysisBar(){
        let CABarMenu = this.state.CABarMenu;
        let CABarMenuSelections = CABarMenu.map((navBarSelection, index) => {
            let activeClass = navBarSelection.active ? " activated" : "";
            return (
                <div class={`Three-Section-Bar__Selection Three-Selection-Bar-Blue ${activeClass}`} onClick={()=>this.updateCABarMenu(index)}>
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

    render(){
        const{ navBarMenu } = this.state;
        let renderedNavBarMenu = this.renderNavMenu();
        let SectionClasses = this.renderSectionClasses();
        let renderedCompetitorsAnalysisBar = this.renderCompetitorsAnalysisBar();
        let CASectionClasses = this.renderCABarClasses();

        return(
            <div id="BigPixel_Detail">
                <PublicHeader></PublicHeader>
                <div className="BigPixel-Detail Page-Container">
                    <div className="BigPixel-Detail__Banner-Wrapper">
                        <div className="BigPixel-Detail__Banner-Background">
                            <img    className="BigPixel-Detail__Image-full-width"
                                    srcSet={`   ${BigPixelBannerSmall} 320w,
                                                ${BigPixelBannerMedium} 500w,
                                                ${BigPixelBannerLarge} 800w`}
                                    src={BigPixelBannerSmall} 
                                    alt="avatar"/>

                        </div>
                    </div>
                    <div className="BigPixel-Detail__Section-List">
                        <div className="BigPixel-Detail__Section show">
                            <div className="Section__Title BigPixel-Detail__Container ">
                            </div>
                            <div className="Section__Two-Sections BigPixel-Detail__Container">
                                <div className="Section__Two-Section">
                                    <h4>Overview</h4>
                                    <p>At Big Pixel, we know that 4K smart televisions have become a mainstream technology.</p>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Skills</h4>
                                    <p>Illustrator, Photoshop, Adobe XD, Excel, InDesign</p>
                                </div>
                            </div>
                            <div className="Section__Two-Sections BigPixel-Detail__Container">
                                <div className="Section__Two-Section">
                                    <a href="http://everwudesign.com/Wei_Wu_Big_Pixel.pdf"><button className="button-CaseStudy">View More</button></a>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Date Created</h4>
                                    <p>Summer 2019 <br />8 weeks<br/>Group Project</p>
                                </div>
                            </div>
                            
                            <div className="BigPixel-Detail__Container">
                                <h4>Team Members</h4>
                                <p>Roles &#38; Responsibilities</p>
                                <div className="Section__Team-Two-Sections"> 
                                    <div className="Section__Team-Half-Section">
                                        <div className="Section__Two-Sections">
                                            <div className="Section__Two-Section">
                                                <img src={BigPixelProfile} className="BigPixel-Detail__Image-full-width"></img>
                                            </div>
                                            <div className="Section__Half-Section">
                                                <h4>MARKETING DIRECTOR</h4>
                                                <p>Researches and develops marketing strategy: sales opportunities, target audience, competition, and new customer acquisition. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Section__Team-Half-Section">
                                        <img src={BigPixelTeam} className="BigPixel-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>

                            <div className="BigPixel-Detail__Container">
                                <h4>Purpose of the new site</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <p>We propose to design a website focused on advertising the Samsung 4K UHD televisions, providing product specifications and purchasing the current and potential consumers.</p>
                                </div>

                                <h4>Short term goals</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <ul>
                                        <li>To advertise the Samsung 4K QLED/UHD television lines.</li>
                                        <li>To showcase UHD/Quantum Processor technology for improved picture quality.</li>
                                        <li>To showcase HDR Technology for better clarity, detailed color expression, and accurate details in bright and dark scenes.</li>
                                        <li>To showcase Smart Hub & One Remote Function which integrates seamlessly with smart  speakers and mobile devices—even from other brands, apps, live TV, and game consoles.</li>
                                        <li>To showcase a modern, slim, and stylish design for any living space.</li>
                                    </ul>
                                </div>
                                <h4>Long term goals</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <ul>
                                        <li>To increase brand awareness and continue to build brand loyalty over time.</li>
                                        <li>To increase sales by driving traffic to authorized online retailers where Samsung 4K flat screen televisions are sold</li>
                                        <li>To increase Samsung’s market share and maintain Samsung’s lead in the marketplace</li>
                                    </ul>
                                </div>
                                <h4>Market Overview</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <p>Samsung 4K QLED/UHD TV sets offer a resolution of 3840 x 2160, which is four times the resolution produced by Full HD TVs. UHD TVs have a high dynamic range and color (HDR), making a drastic improvement to the picture saturation, contrast, and overall viewing quality.</p>
                                    <p>Samsung is still the leading manufacturer of TVs and has been on top of sales (with a 20% share) for over 10 years. They launched the first fully HD LED TV in 2010 and account for almost 50% of 75-inch and above TV sales worldwide. Demand for large screen TVs has increased and Samsung uses QLED technology to ensure quality and reliability at increased pixel densities. The average selling price of UHD TVs has also reduced rapidly over the last several years, adding another factor to the growth in sales. </p>
                                </div>
                                
                                
                                <h4>Key Vendor market share</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <p>Samsung 4K QLED/UHD TV sets offer a resolution of 3840 x 2160, which is four times the resolution produced by Full HD TVs. UHD TVs have a high dynamic range and color (HDR), making a drastic improvement to the picture saturation, contrast, and overall viewing quality.</p>
                                    <p>Samsung is still the leading manufacturer of TVs and has been on top of sales (with a 20% share) for over 10 years. They launched the first fully HD LED TV in 2010 and account for almost 50% of 75-inch and above TV sales worldwide. Demand for large screen TVs has increased and Samsung uses QLED technology to ensure quality and reliability at increased pixel densities. The average selling price of UHD TVs has also reduced rapidly over the last several years, adding another factor to the growth in sales. </p>
                                </div>       
                            </div>
                            
                            

                            <div className="BigPixel-Detail__Container">
                                    <h4>Competitiors Analysis</h4>
                                    {renderedCompetitorsAnalysisBar}

                                    <div className="Section__Three-Selection-List"> 
                                        <div id="LG" class={`BigPixel-Detail__Secondary-Container Section__Three-Selection-Container ${CASectionClasses[0]}`}>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Two-Section">
                                                    <div className="Section__Half-Section">
                                                        <img src={BigPixelLGLogo} className="BigPixel-Detail__Image-full-width"></img>
                                                    </div>
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Consistent brand</li>
                                                        <li>Price</li>
                                                        <li>Huge consumer electronics and appliance range including a large selection of television options</li>
                                                        <li>Leader in OLED and Nanocell HDTV screen technology</li>
                                                        <li>Web OS platform</li>
                                                        <li>Bright, functional website, easy to select product category</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>Options and technology can be confusing</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Two-Section">
                                                    <img src={BigPixelLGHome} className="BigPixel-Detail__Image-full-width"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="SONY" class={`BigPixel-Detail__Secondary-Container Section__Three-Selection-Container ${CASectionClasses[1]}`}>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Two-Section">
                                                    <div className="Section__Half-Section">
                                                        <img src={BigPixelSonyLogo} className="BigPixel-Detail__Image-full-width"></img>
                                                    </div>
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Established/trusted brand</li>
                                                        <li>Known for quality</li>
                                                        <li>Large electronics and entertainment network including mobile devices, movies, and gaming</li>
                                                        <li>Master Series televisions</li>
                                                        <li>Acoustic Surface Audio</li>
                                                        <li>User friendly website with vivid images and plenty of contrast</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>Price</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Two-Section">
                                                    <img src={BigPixelSonyHome} className="BigPixel-Detail__Image-full-width"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="Hisense" class={`BigPixel-Detail__Secondary-Container Section__Three-Selection-Container ${CASectionClasses[2]}`}>
                                            <div className="Section__Two-Sections">
                                                <div className="Section__Two-Section">
                                                    <div className="Section__Half-Section">
                                                        <img src={BigPixelHisenseLogo} className="BigPixel-Detail__Image-full-width"></img>
                                                    </div>
                                                    <h4>Strengths</h4>
                                                    <ul>
                                                        <li>Fastest growing brand in US market</li>
                                                        <li>Availability</li>
                                                        <li>Large manufacturer</li>
                                                        <li>Accessibility features</li>
                                                        <li>Laser TV</li>
                                                        <li>Website is very streamlined and easy to use</li>
                                                    </ul>
                                                    <h4>Weaknesses</h4>
                                                    <ul>
                                                        <li>Options and technology can be confusing</li>
                                                    </ul>
                                                </div>
                                                <div className="Section__Two-Section">
                                                    <img src={BigPixelHisenseHome} className="BigPixel-Detail__Image-full-width"></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                            <div className="BigPixel-Detail__Container">
                                <h4>Competitive Matrix</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <img src={BigPixelCompetitive} className="BigPixel-Detail__Image-full-width"></img>
                                </div>
                            </div>

                            <div className="Section__Branding-Banner">
                                <div className="BigPixel-Detail__Container">
                                    <h4>Target Audience</h4>
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Half-Section">
                                            <h5>Demographic</h5>
                                            <p>Samsung 4K TVs target audience is between the age from 20 to 50, and with a middle-class level of income.</p>
                                            <h5>Early Adults </h5>
                                            <p>Ages 20 to 30<br/>Data shows that this group of customers spent less time watching traditional TV, but since Samsung’s 4K TVs are smartTVs, we can target this customer base and their viewing needs.</p>
                                            <h5>Adults </h5>
                                            <p>Ages 31 to 50<br/>This is the primary audience and the largest portion of the consumer base that have the greatest ability to purchase the latest Samsung 4K TV in the market.</p>
                                            

                                        </div>
                                        <div className="Section__Half-Section">
                                            <img src={BigPixelCompetitive} className="BigPixel-Detail__Image-full-width"></img>
                                            <p>As the data indicates, there are huge differences by age group in terms of viewing behavior, with traditional TV time far greater among older audiences and connected TV time (while still trailing traditional TV) much higher among younger groups.</p>
                                        </div>
                                    </div>         
                                </div>
                            </div>


                            <div className="BigPixel-Detail__Container">
                                <h4>Marketing Concept</h4>
                                <p>Big Pixel’s proposed marketing strategy holds a strong brand equity and loyalty, its just the opportunities that it needs to play on to outdo its competitors. We take into consideration vital characteristics affecting why consumers would purchase a Samsung 4K UHD television and how those characteristics could be used to push beyond market competition.</p>
                                <h4>Awareness</h4>
                                <p>Samsung’s 4K UHD television has pushed smart 4K UHD television technology to the top of the industry. Strategically managed product life cycle stages have made it possible for Samsung to adapt over time to consumer cultural shifts, social changes, and personal growth and motivation, all of these characteristics affect consumer purchasing behavior.</p>
                            </div>


                            <div className="BigPixel-Detail__Container">
                                <h4>4P</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <img src={BigPixel4P} className="BigPixel-Detail__Image-full-width"></img>
                                </div>
                            </div>


                            <div className="BigPixel-Detail__Container">
                                <h4>SWOT Analysis</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <img src={BigPixelSWOT} className="BigPixel-Detail__Image-full-width"></img>
                                </div>
                            </div>

                            <div className="BigPixel-Detail__Container">
                                <h4>FINAL DESIGN</h4>
                                <div className="BigPixel-Detail__Secondary-Container">
                                    <h5>Website</h5>
                                    <img src={BigPixelWebSite} className="BigPixel-Detail__Image-full-width"></img>

                                    <h5>Mobile</h5>
                                    <div className="Section__Three-Sections">
                                        <div classname="Section__Three-Section">
                                            <img src={BigPixelMobileHome} className="BigPixel-Detail__Image-full-width"></img>
                                            <h5>Home Page</h5>
                                        </div>
                                        <div classname="Section__Three-Section">
                                            <img src={BigPixelMobileProduct} className="BigPixel-Detail__Image-full-width"></img>
                                            <h5>Product Page</h5>
                                        </div>
                                        <div classname="Section__Three-Section">
                                            <img src={BigPixelMobileDetail} className="BigPixel-Detail__Image-full-width"></img>
                                            <h5>Product Detail Page</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="BigPixel-Detail__Container">
                                <h4>Project Schedule</h4>
                                <img src={BigPixelSchedule} className="BigPixel-Detail__Image-full-width"></img>
                                <img src={BigPixelAd} className="BigPixel-Detail__Image-full-width"></img>
                            </div>
                        
                        </div>
                    </div>
                </div>
                <PublicFooter></PublicFooter>
            </div>
        )
    }
}
export default BigPixelDetail;