import React, {Component} from 'react';
import 'assets/sass/components/LandingAnimation_Tile.scss'

const tileDirections = ["", "to-top", "to-right", "to-bottom", "to-left"]
const tileLogoTypes = {
	NONE: 0,
	SQUARE: 1,
	TRI_TOP_LEFT: 2,
	TRI_TOP_RIGHT: 3,
	TRI_BOTTOM_LEFT: 4,
	TRI_BOTTOM_RIGHT: 5,
};
const tileLogoColors = {
	LIGHT: 0,
	NORMAL: 1,
	DEEP: 2,
}
const tileLogoTypeColors = ["#7fc252", "#199b4e", "#0d5734"];

class Tile extends Component {
    constructor(props){
        super(props);
        this.state={
            rowSize: props.rowSize,
            columSize: props.columSize,
            tileSize: props.tileSize,
            tileIndex: props.tileIndex,
            tileLogoType: props.tileLogoType,
            tileLogoTypeColor: props.tileLogoTypeColor,
            flipDirection: props.flipDirection,
            isStarted: props.isStarted,
            flipWaitTime: props.flipWaitTime,
        };

        this.handleFilpTile = this.handleFilpTile.bind(this);
        this.getRandom = this.getRandom.bind(this);
        this.flipTile = this.flipTile.bind(this);
        this.filpByTime = this.filpByTime.bind(this);
    }

    componentDidMount(){
       this.filpByTime(this.state.flipWaitTime);
    }

    filpByTime(flipWaitTime){
        setTimeout(this.flipTile, flipWaitTime);
    }

    handleFilpTile (flipDirection) {
        if (this.state.isStarted)
            return;
        this.setState({flipDirection: flipDirection}, () => {
            setTimeout(this.flipTile, 50);
        });
    }

    flipTile(){
        this.setState({isStarted: true})
    }

    getRandom ( min, max ) {
        return min + Math.random() * ( max - min );
    }

    renderTileLogoClass(){
        let tileLogoType = this.state.tileLogoType;
        if (tileLogoType === tileLogoTypes.NONE){
            return "";
        }

        let logoClassList = [];
        logoClassList.push("tile_logo");
        switch(tileLogoType){
            case tileLogoTypes.SQUARE: 
                logoClassList.push("logo_square");
                break;
            case tileLogoTypes.TRI_TOP_LEFT: 
                logoClassList.push("logo_top_left");
                break;
            case tileLogoTypes.TRI_TOP_RIGHT: 
                logoClassList.push("logo_top_right");
                break;
            case tileLogoTypes.TRI_BOTTOM_LEFT: 
                logoClassList.push("logo_bottom_left");
                break;
            case tileLogoTypes.TRI_BOTTOM_RIGHT: 
                logoClassList.push("logo_bottom_right");
                break;
            default:
                break;
        }
        return logoClassList.join(' ');
    }

    renderTileLogoColor(){
        let tileLogoTypeColor = this.state.tileLogoTypeColor;

        switch(tileLogoTypeColor){
            case tileLogoColors.LIGHT:
                return tileLogoTypeColors[tileLogoColors.LIGHT]
            case tileLogoColors.NORMAL:
                return tileLogoTypeColors[tileLogoColors.NORMAL]
            case tileLogoColors.DEEP:
                return tileLogoTypeColors[tileLogoColors.DEEP]
            default:
                return tileLogoTypeColors[tileLogoColors.LIGHT]
        }
    }

    renderTileLogoColorClass(){
        let tileLogoTypeColor = this.state.tileLogoTypeColor;

        let inlayClassList = [];
        switch(tileLogoTypeColor){
            case tileLogoColors.LIGHT:
                inlayClassList.push("logo_background_light");
                break;
            case tileLogoColors.NORMAL:
                inlayClassList.push("logo_background_normal");
                break;
            case tileLogoColors.DEEP:
                inlayClassList.push("logo_background_deep");
                break;
            default:
                break;
        }
        return inlayClassList.join(' ');
    }

    renderTileLogoInlayBackStyle(){
        let state = this.state;
        let inlayBackStyle = {}
        let tileLogoType = state.tileLogoType;
        if (tileLogoType === tileLogoTypes.NONE){
            return inlayBackStyle;
        }

        let tileSize = state.tileSize;
        let backgroundColor = this.renderTileLogoColor();
        
        inlayBackStyle = {
            borderStyle: 'solid',
            borderWidth: '',
            borderColor: '',
        }
        switch(tileLogoType){
            case tileLogoTypes.TRI_TOP_LEFT: 
                inlayBackStyle.borderWidth = tileSize + 'px 0 0 ' + tileSize + 'px ';
                inlayBackStyle.borderColor = 'transparent transparent transparent' + ' ' +  backgroundColor;
                break;
            case tileLogoTypes.TRI_TOP_RIGHT: 
                inlayBackStyle.borderWidth = '0 0 ' + tileSize + 'px '+ tileSize + 'px ';
                inlayBackStyle.borderColor = 'transparent transparent' + ' ' + backgroundColor + ' ' + 'transparent' ;
                break;
            case tileLogoTypes.TRI_BOTTOM_LEFT: 
                inlayBackStyle.borderWidth = tileSize + 'px ' + tileSize + 'px ' + '0 0 ';
                inlayBackStyle.borderColor = backgroundColor + ' ' + 'transparent transparent transparent';
                break;
            case tileLogoTypes.TRI_BOTTOM_RIGHT: 
                inlayBackStyle.borderWidth =  '0 ' + tileSize + 'px ' + tileSize + 'px ' + '0 ';
                inlayBackStyle.borderColor = 'transparent' + ' ' + backgroundColor + ' ' + 'transparent transparent' ;
                break;
            default:
                inlayBackStyle = {};
                break;
        }

        return inlayBackStyle;

    }


    render() {
        const {rowSize, columSize, tileSize, tileIndex, flipDirection, isStarted} = this.state;
        const width = tileSize + "px";
        const height = tileSize + "px";
        const top = (~~ (tileIndex / columSize)) * tileSize;
        const left = (tileIndex % columSize) * tileSize;
        const backgroundColor = this.renderTileLogoColor();

        const tileLogoClassName = this.renderTileLogoClass();
        const inlayColorClassName = this.renderTileLogoColorClass();

        const tileStyle = {
            position:'absolute',
            width: width,
            height: height,
            top: top,
            left: left,
        }
        const inlayStyle = {
            
        }
        let inlayBackStyle = this.renderTileLogoInlayBackStyle();

        
        let directionClassName =  "" ;
        if (flipDirection) {
            directionClassName = tileDirections[flipDirection];

        }


        const tileID = "ROW_" + rowSize + "COL_" + columSize + "IDX_" + tileIndex;

        const tileClassName = "tile " + directionClassName + (tileLogoClassName === "" ? "" : " "+tileLogoClassName);
        const inlayClassName = "inlay " + ( isStarted ? "show " : " ") + ( tileLogoClassName === "" ? inlayColorClassName:"");
        const coverClassName = (tileLogoClassName === "" ? "cover" : "");

        const inlayFrontClassName = inlayColorClassName + ( tileLogoClassName === "" ? "" : " inlay_front");
        const inlayBackClassName = ( tileLogoClassName === "" ? "" : " inlay_back");
        

        return (
            <div id={tileID} className={tileClassName} style={tileStyle}>
                <div className={inlayClassName} style={inlayStyle}>
                    <div className={coverClassName}></div>
                    <div className={inlayFrontClassName}></div>
                    <div className={inlayBackClassName} style={inlayBackStyle}></div>
                </div>
            </div>
        );
    }

}

export default Tile;