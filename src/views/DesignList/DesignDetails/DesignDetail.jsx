import React, { Component } from 'react';

import EndlessDetail from 'views/DesignList/DesignDetails/EndlessDetail/EndlessDetail';
import IDrinkDetail from 'views/DesignList/DesignDetails/IDrinkDetail/IDrinkDetail';
import EatHereDetail from 'views/DesignList/DesignDetails/EatHereDetail/EatHereDetail'

class DesignDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    renderDesignDetail

    render(){

        const {name} = this.props.match.params;
        let designDetailComponent = <div></div>;
        switch (name){
            case "endless":
                designDetailComponent = <EndlessDetail></EndlessDetail>;
                break;
            case "idrink":
                designDetailComponent = <IDrinkDetail></IDrinkDetail>;
                break;
            case "eathere":
                designDetailComponent = <EatHereDetail></EatHereDetail>;
                break;

            default:
                designDetailComponent = <div></div>;
        }
        return(
            <div id="Design_Detail">
                {designDetailComponent}
            </div>
        )
    }
}

export default DesignDetail;