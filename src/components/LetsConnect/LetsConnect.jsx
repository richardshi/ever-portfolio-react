import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PATHS } from 'routePaths';

import './LetsConnect.scss'

import logo from 'assets/images/logo_ever.png';
import IconEmail from 'assets/images/Icons/Icon-email@2x.png'
import IconHome from 'assets/images/Icons/Icon-home@2x.png'
import IconLinkedIn from 'assets/images/Icons/Icon-in@2x.png'

class LetsConnect extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="LetsConnect__Contact">
                <div>
                    <h1>Let's Connect!</h1>
                    <div className="Contact-Icon__List">
                        <Link className="Contact-Icon"><img className="Contact-Icon-Image" src={IconHome}></img></Link>
                        <Link className="Contact-Icon"><img className="Contact-Icon-Image" src={IconEmail}></img></Link>
                        <Link className="Contact-Icon"><img className="Contact-Icon-Image" src={IconLinkedIn}></img></Link>
                    </div>
                    <h2>Get in touch for any opportunities, or a hello</h2>
                </div>
            </div>
        )
    }

}
export default LetsConnect;