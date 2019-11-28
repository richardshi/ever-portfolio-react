import React, { Component } from 'react';

import EndlessDetail from 'views/DesignList/DesignDetails/EndlessDetail/EndlessDetail'

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