import React, {Component} from 'react';

import 'assets/sass/main.scss';
import 'assets/sass/components/LandingAnimation.scss';


import TileGroup from 'components/LandingAnimation/TileGroup/TileGroup'



/*
const containerStyle = {
	width: window.innerWidth + "px",
	height: window.innerHeight + "px",
}
*/

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
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
const everLogo = [
	[ null, null, null, { color: tileColors.DEEP, type: tileLogoType.TRI_BOTTOM_LEFT }],
	[ { color: tileColors.DEEP, type: tileLogoType.TRI_BORROM_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_TOP_LEFT }],
	[ { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, null, null, null],
	[ { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_RIGHT }, { color: tileColors.NORMAL, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.SQUARE }, { color: tileColors.DEEP, type: tileLogoType.TRI_BOTTOM_LEFT }],
	[ { color: tileColors.DEEP, type: tileLogoType.TRI_BORROM_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_TOP_LEFT }],
	[ { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, null, null, null],
	[ { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_RIGHT }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.LIGHT, type: tileLogoType.SQUARE }, { color: tileColors.NORMAL, type: tileLogoType.TRI_BOTTOM_LEFT }],
	[ null, null, null, { color: tileColors.DEEP, type: tileLogoType.TRI_TOP_LEFT }],
];
const logoAnimationTime = 4000;


class LandingAnimation extends Component {
    constructor(props){
        super(props);
        this.state = {
			rowSize: 20,
			columSize: 20,
			tileSize: 40,
			rowOffSet: 0,
			columOffSet: 0,
			tileAnimationCompleted: false,
			centerMap: everLogo,
			setLogoAnimationCompleted: props.setLogoAnimationCompleted,
		};   
		this.setTileAnimationCompleted = this.setTileAnimationCompleted.bind(this);     
		this.handelTileAnimationCompleted = this.handelTileAnimationCompleted.bind(this);
    }

	componentWillMount(){
		let smallerLength = windowWidth;
		if ( windowHeight < smallerLength ) {
			smallerLength = windowHeight;
		}


		let mapRowSize = this.state.centerMap.length; 
		let mapColumSize = this.state.centerMap[0].length;

		let tileSize = ~~(smallerLength / tileMinNumber);
		let rowSize = ~~(windowHeight / tileSize) + 1;
		let columSize = ~~(windowWidth / tileSize) + 1;

		let rowOffSet = ~~(rowSize/2 - mapRowSize/2);
		let columOffSet = ~~(columSize/2 - mapColumSize/2);

		this.setState({
			rowSize: rowSize,
			columSize: columSize,
			tileSize: tileSize,
			rowOffSet: rowOffSet,
			columOffSet: columOffSet,
		})
	}

	setTileAnimationCompleted(animationCompleteTime){
		setTimeout(this.handelTileAnimationCompleted, animationCompleteTime * 1.1);
	}

	handelTileAnimationCompleted(){
			this.setState({tileAnimationCompleted:true});
			this.state.setLogoAnimationCompleted(logoAnimationTime);
	}

	getContainerStyle(){
		let tileSize = this.state.tileSize; 
		let rowOffSet = this.state.rowOffSet;
		let columOffSet = this.state.columOffSet;

		let mapRowSize = this.state.centerMap.length; 
		let mapColumSize = this.state.centerMap[0].length;

		let containerStyle = {
			position: "absolute",
			width: mapColumSize * tileSize + "px",
			height: mapRowSize * tileSize + "px",
			top: rowOffSet * tileSize + "px",
			left: columOffSet * tileSize + "px",
		}
		return containerStyle
	}

    render() {
		const {rowSize, columSize, tileSize, rowOffSet, columOffSet, centerMap, tileAnimationCompleted} = this.state;

		let containerClassName = "LandingAnimationContainer";
		let rotateClassName = "LandingAnimationContainer__Rotate";
		if (tileAnimationCompleted) {
			if (windowWidth < 600 ){
				containerClassName = containerClassName + " postRotateLogoMobile";
			} else {
				containerClassName = containerClassName + " postRotateLogoDeskTop";
			}
			rotateClassName = rotateClassName + " rotateLogo";
		}

		let containerStyle = this.getContainerStyle();

        return (
		<div className={containerClassName} style={containerStyle}>  
			<div className={rotateClassName}>
				<TileGroup rowSize={rowSize} columSize={columSize} tileSize={tileSize} rowOffSet={rowOffSet} columOffSet={columOffSet} centerMap={centerMap} setTileAnimationCompleted={this.setTileAnimationCompleted}></TileGroup>
			</div>  
		</div>);
    }

}

export default LandingAnimation;