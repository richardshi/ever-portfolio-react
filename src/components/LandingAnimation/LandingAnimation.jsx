import React, {Component} from 'react';

import 'assets/sass/main.scss';
import 'assets/sass/components/LandingAnimation.scss';


import TileGroup from 'components/LandingAnimation/TileGroup/TileGroup'
import logo from 'assets/images/logo_ever.png';

const containerStyle = {
	width: window.innerWidth + "px",
	height: window.innerHeight + "px",
}
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
			animationCompleted: false,
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
		this.setAnimationCompleted = this.setAnimationCompleted.bind(this);     
		this.handelAnimationCompleted = this.handelAnimationCompleted.bind(this);
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

	setAnimationCompleted(animationCompleteTime){

		console.log(this);
		setTimeout(this.handelAnimationCompleted, animationCompleteTime * 1.1);
	}

	handelAnimationCompleted(){
			console.log("animation completed");
			this.setState({animationCompleted:true});
	}


    render() {
		const {rowSize, columSize, tileSize, centerMap, animationCompleted} = this.state;



		let containerClassName = "LandingAnimationContainer";
		if (animationCompleted) {
			containerClassName = containerClassName + " rotateLogo";
			/*
			return(
				<div className="LandingAnimationContainer">
					<img src={logo}>
					</img>
				</div>
			)
			*/
		}

        return (
		<div className={containerClassName} style={containerStyle}>    
			<TileGroup rowSize={rowSize} columSize={columSize} tileSize={tileSize} centerMap={centerMap} setAnimationCompleted={this.setAnimationCompleted}></TileGroup>
		</div>);
    }

}

export default LandingAnimation;