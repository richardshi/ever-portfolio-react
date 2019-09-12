import React, {Component} from 'react';

import 'assets/sass/main.scss';
import 'assets/sass/components/LandingAnimation.scss';


import TileGroup from 'components/LandingAnimation/TileGroup/TileGroup'
import logo from 'assets/images/logo.svg';

const tileColors = {
	LIGHT: 0,
	NORMAL: 1,
	DEEP: 2,
}
const tileLogoType = {
	NONE: 0,
	SQUARE: 1,
	TRI_TOP_LEFT: 2,
	TRI_TOP_RIGHT: 3,
	TRI_BOTTOM_LEFT: 4,
	TRI_BORROM_RIGHT: 5,

}
const tileMinNumber = 20;
class LandingAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
			rowSize: 20,
			columSize: 20,
			tileSize: 40,
			centerMap: [
				[ null, null, null, { color: tileColors.DEEP, type: tileLogoType.TRI_BOTTOM_LEFT }],
				[ { color: tileColors.DEEP, type: tileLogoType.TRI_BORROM_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_TOP_LEFT }],
				[ { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, null, null, null],
				[ { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_RIGHT }, { color: tileColors.NORMAL, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.SQUARE }, { color: tileColors.DEEP, type: tileLogoType.TRI_BOTTOM_LEFT }],
				[ { color: tileColors.DEEP, type: tileLogoType.TRI_BORROM_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_TOP_LEFT }],
				[ { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, null, null, null],
				[ { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_BOTTOM_LEFT }],
				[ null, null, null, { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_LEFT }],
			],
		};        
    }

	componentWillMount(){
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		let smallerLength = windowWidth;
		if ( windowHeight < smallerLength ) {
			smallerLength = windowHeight;
		}

		let tileSize = ~~(smallerLength / tileMinNumber);
		this.setState({
			rowSize: ~~(windowHeight / tileSize) + 1,
			columSize: ~~(windowWidth / tileSize) + 1,
			tileSize: tileSize,
		})
	}


    render() {
		const {rowSize, columSize, tileSize, centerMap} = this.state;

		

        return <div class="LandingAnimationContainer">
            
			<TileGroup rowSize={rowSize} columSize={columSize} tileSize={tileSize} centerMap={centerMap}></TileGroup>
        </div>;
    }

}

export default LandingAnimation;