import React, { Component } from 'react';

import PublicHeader from 'components/PublicHeader/PublicHeader'
import LetsConnect from 'components/LetsConnect/LetsConnect';
import PublicFooter from 'components/PublicFooter/PublicFooter';

import './EndlessDetail.scss'

import EndlessBannerSmall from 'assets/images/EndlessPage/Endless_1.png';
import EndlessBannerMedium from 'assets/images/EndlessPage/Endless_1@2x.png';
import EndlessBannerLarge from 'assets/images/EndlessPage/Endless_1@3x.png';
import EndlessLogoSmall from 'assets/images/EndlessPage/Endless_2.png';
import EndlessWasteBooksSmall from 'assets/images/EndlessPage/Endless_3.png';
import EndlessBGImage from 'assets/images/EndlessPage/Endless_4.png';
import EndlessTrashSmall from 'assets/images/EndlessPage/Endless_5.png'
import EndlessDonateSmall from 'assets/images/EndlessPage/Endless_6.png'
import EndlessStreetBooks from 'assets/images/EndlessPage/Endless_7.png'

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
                                <div className="Section__Full-Width-Banner Section__Endless-Banner">
                                    <div className="Endless-Detail__Container Endless-Banner-Container">
                                        <div className="Endless-Banner-Left"><img src={EndlessLogoSmall} /></div>
                                        <div className="Endless-Banner-Right"><h4>Share the books they’ve read and find the nearby books. </h4></div>
                                    </div>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Problems</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={EndlessWasteBooksSmall}></img></div>
                                            <div className="LeftImage-Sections-Right"><p>You may be an avid reader, but the dusty pile of books in your room is starting to be a nuisance. You don’t have the heart to throw your old books away, but you don’t have much of a use for them anymore. Also, you may have extra time to spend in the waiting room and forget to bring your own book.</p></div>
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
                                <div className="Endless-Detail__Container">
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

                            <div id="Section_Research" className="Endless-Detail__Section">
                                <div className="Section__Title Endless-Detail__Container ">
                                    <h1>02</h1>
                                    <h2>RESEARCH</h2>
                                </div>
                                <div className="Endless-Detail__Container">
                                    <h4>Inspiration</h4>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__Two-Sections Endless-Detail__Container">
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left"><img src={EndlessTrashSmall}></img></div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h5 className="title-light">Throw</h5>
                                                    <p>Not a good idea</p>
                                                </div>
                                            </div>
                                            <div className="Section__LeftImage-Sections">
                                                <div className="LeftImage-Sections-Left"><img src={EndlessDonateSmall}></img></div>
                                                <div className="LeftImage-Sections-Right">
                                                    <h5 className="title-light">Donate</h5>
                                                    <p>Good for the charities and needy families in your area.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Endless-Detail__Secondary-Container">
                                        <div className="Section__LeftImage-Sections">
                                            <div className="LeftImage-Sections-Left"><img src={EndlessStreetBooks}></img></div>
                                            <div className="LeftImage-Sections-Right">
                                                <h5 className="title-light">The Street Books</h5>
                                                <p>Not a good idea</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="Section__Three-Sections Endless-Detail__Container">
                            </div>
                            <div className="Section__LeftImage">
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