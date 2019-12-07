import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './BabyCostReport.scss'

import BabyCostReportBannerSmall from 'assets/images/BabyCostReport/Babycost_1.png';
import BabyCostReportBannerMedium from 'assets/images/BabyCostReport/Babycost_1@2x.png';
import BabyCostReportBannerLarge from 'assets/images/BabyCostReport/Babycost_1@3x.png';

import BabyCostReportProposal from 'assets/images/BabyCostReport/Babycost_3@3x.png';
import BabyCostReportMoodboard from 'assets/images/BabyCostReport/Babycost_4@3x.png';
import BabyCostReportColorPalette from 'assets/images/BabyCostReport/Babycost_5@3x.png';
import BabyCostReportTypography from 'assets/images/BabyCostReport/Babycost_6@3x.png';
import BabyCostReportStoryboardSketch from 'assets/images/BabyCostReport/Babycost_7@3x.png';
import BabyCostReportStoryboardDigital from 'assets/images/BabyCostReport/Babycost_8@3x.png';

class BabyCostReport extends Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    


    render(){
        const{ navBarMenu } = this.state;

        return(
            <div id="BigPixel_Detail">
                <PublicHeader></PublicHeader>
                <div className="BabyCostReport-Detail Page-Container">
                    <div className="BabyCostReport-Detail__Banner-Wrapper">
                        <div className="BabyCostReport-Detail__Banner-Background">
                            <div className="BabyCostReport-Detail__Container">
                                <img    className="BabyCostReport-Detail__Image-full-width"
                                        srcSet={`   ${BabyCostReportBannerSmall} 320w,
                                                    ${BabyCostReportBannerMedium} 500w,
                                                    ${BabyCostReportBannerLarge} 800w`}
                                        src={BabyCostReportBannerSmall} 
                                        alt="avatar"/>
                            </div>
                        </div>
                    </div>

                    <div className="BabyCostReport-Detail__Section-List">
                        <div className="BabyCostReport-Detail__Section show">
                            <div className="Section__Title BabyCostReport-Detail__Container ">
                            </div>
                            <div className="Section__Two-Sections BabyCostReport-Detail__Container">
                                <div className="Section__Two-Section">
                                    <h4>Overview</h4>
                                    <p>Here is a motion graphic about How Much Does A Baby Cost For The First Year in the SF? In this video, I will approximately explain about tools and processes from the beginning until the end.</p>
                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Skills</h4>
                                    <p>Storyboard and Motion,<br/>After Effects, Adobe XD,<br/>HTML</p>
                                </div>
                            </div>
                            <div className="Section__Two-Sections BabyCostReport-Detail__Container">
                                <div className="Section__Two-Section">

                                </div>
                                <div className="Section__Two-Section">
                                    <h4>Date Created</h4>
                                    <p>Fall 2018 <br />8 weeks<br/>Group Project</p>
                                </div>
                            </div>

                            <div className="BabyCostReport-Detail__Container">
                                <h4>Project Proposal</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <div className="Section__Two-Sections">
                                        <div className="Section__Half-Section">
                                            <img src={BabyCostReportProposal} className="BabyCostReport-Detail__Image-full-width"></img>
                                        </div>
                                        <div className="Section__Half-Section">
                                            <h4>First Year Cost Breakdown</h4>
                                            <p> Having a child is expensive, but it’s difficult to wrap your head around that until you experience it. It’s not that we make tons of money, but we wanted to start our lives together making smart retirement and savings decisions. 
                                                <br/>At the time, with a kid on the way, she helped us figure out a budget that worked for us. Although everyone’s experience is different, here’s a breakdown of our first year’s cost. We were gifted many items by very generous friends and family. I’ve included the cost of these items in the total for each category.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h4>Goals</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <p>1.  Design EAThere App to track their own food places. </p> 
                                    <p>2. The app will help users to remember locations </p> 
                                    <p>3. Users are able to add, edit, and delete an information at any time.</p>
                                </div>
                            </div>

                            <div className="BabyCostReport-Detail__Container">
                                <h4>MoodBoard</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <img src={BabyCostReportMoodboard} className="BabyCostReport-Detail__Image-full-width"></img>
                                </div>
                            </div>

                            <div className="BabyCostReport-Detail__Container">
                                <h4>Color Palette</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <img src={BabyCostReportColorPalette} className="BabyCostReport-Detail__Image-full-width"></img>
                                </div>
                            </div>

                            <div className="BabyCostReport-Detail__Container">
                                <h4>Typography</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <div className="BabyCostReport-Detail__Secondary-Container">
                                        <img src={BabyCostReportTypography} className="BabyCostReport-Detail__Image-full-width"></img>
                                    </div>
                                </div>
                            </div>


                            <div className="BabyCostReport-Detail__Container">
                                <h4>Story Board - Sketches</h4>
                                <img src={BabyCostReportStoryboardSketch} className="BabyCostReport-Detail__Image-full-width"></img>
                            </div>

                            <div className="BabyCostReport-Detail__Container">
                                <h4>Story Board - Digital</h4>
                                <img src={BabyCostReportStoryboardDigital} className="BabyCostReport-Detail__Image-full-width"></img>
                            </div>


                            <div className="BabyCostReport-Detail__Container">
                                <h4>Motion Graphic</h4>
                                <div className="BabyCostReport-Detail__Secondary-Container">
                                    <div className="Section__Video-Container">
                                        <iframe className="Section__Video" src="https://www.youtube.com/embed/Tw3yIM3FBpo"></iframe>
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
export default BabyCostReport;