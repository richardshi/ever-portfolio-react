import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PATHS } from 'routePaths';

import './PublicHeader.scss'

import logo from 'assets/images/logo_ever.png';

class PublicHeader extends Component {
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <div className="PublicHeader__Nav-Bar-Container">
                <div className="PublicHeader__Nav-Bar">
                    <div className="Nav-Bar-Left">
                        <Link to={PATHS.HOME_PATH}>
                            <img className="Nav-Bar-Left__Logo-Image" src={logo}></img>
                        </Link>
                    </div>
                    <div className="Nav-Bar-Right">
                        <ul className="Nav-Bar-Right__Tabs">
                            <Link to={PATHS.ABOUT_PATH} className="Nav-Bar-Right__Tab">ABOUT</Link>
                            <Link to={PATHS.HOME_PATH} className="Nav-Bar-Right__Tab">WORK</Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
export default PublicHeader;