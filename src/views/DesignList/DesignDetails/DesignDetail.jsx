import React, { Component } from 'react';

import EndlessDetail from 'views/DesignList/DesignDetails/EndlessDetail'

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
                designDetailComponent = EndlessDetail;
                break;
            default:
                    designDetailComponent = <div></div>;

        }
        return(
            <div id="Design_Detail">
                <h1>Design Detail</h1>
                {name}
                {designDetailComponent}
            </div>
        )
    }
}

export default DesignDetail;