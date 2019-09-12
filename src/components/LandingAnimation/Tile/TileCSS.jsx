import React, {Component} from 'react';
import 'assets/sass/components/LandingAnimation_Tile.scss'

const transitionMin = 200;
const transitionMax = 300;
const tileDirections = ["to-top", "to-right", "to-bottom", "to-left"]

class TileCss extends Component {
    constructor(props){
        super(props);
        this.state={
            rowSize: props.rowSize,
            columSize: props.columSize,
            tileSize: props.tileSize,
            tileIndex: props.tileIndex,
            tileLogoType: props.tileLogoType,

            flipDirection: props.flipDirection,
            isPlayed: props.isPlayed,

            flipNeighbors: props.flipNeighbors,
            flipWaitTime: props.flipWaitTime,


        };

    }

    // Flip by trigger
    /*
    componentWillReceiveProps (nextProps) {
        //this.setState({isPlayed: nextProps.isPlayed});

        if (nextProps.isPlayed) {
            this.handleFilpTile(nextProps.flipDirection);
        }
    }
    */



    render() {
        const {rowSize, columSize, tileSize, tileIndex, flipWaitTime, tileLogoType, flipDirection, isPlayed} = this.state;
        const width = tileSize + "px";
        const height = tileSize + "px";
        const top = (~~ (tileIndex / columSize)) * tileSize;
        const left = (tileIndex % columSize) * tileSize;
        const backgroundColor = "#AAD052";
        const tileStyle = {
            position:'absolute',
            width: width,
            height: height,
            top: top,
            left: left,
        }
        const inlayStyle = {
            backgroundColor: backgroundColor,
            animationDelay: flipWaitTime,
        }
        
        let directionClassName =  "" ;
        if (flipDirection) {
            directionClassName = tileDirections[flipDirection];
            //console.log(directionClassName);
        }
        //console.log(this.state);

        //console.log("Tile isPlayed state:" + isPlayed);

        const tileClassName = "tile " + ( directionClassName=="" ? "to-top" : directionClassName );
        //const tileClassName = "tile " +  directionClassName;
        const inlayClassName = "inlay " +  "show";
        

        return (
            <div className={tileClassName} style={tileStyle}>
                <div className={inlayClassName} style={inlayStyle}>
                    <div className="cover">

                    </div>
                </div>
            </div>
        );
    }

}

export default TileCss;