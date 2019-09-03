import React, {Component} from 'react';
import 'assets/sass/components/LandingAnimation_Tile.scss'

const transitionMin = 200;
const transitionMax = 300;

class Tile extends Component {
    constructor(props){
        super(props);
        this.state={
            rowSize: props.rowSize,
            columSize: props.columSize,
            tileSize: props.tileSize,
            tileIndex: props.tileIndex,
            tileType: props.tileType,

            flipDirection: props.flipDirection,
            isPlayed: false,


        };

        this.flipTile = this.flipTile.bind(this);
        this.random = this.random.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    flipTile () {
        if (this.state.isPlayed)
            return;
        this.setState({isPlayed: true})

        setTimeout( function() {

			//inlay.classList.add( "show" );

			setTimeout( this.onTransitionEnd, this.random( transitionMin, transitionMax ) );
			setTimeout( this.onComplete, transitionMax );

		}, 50 );
    }

    random ( min, max ) {
        return min + Math.random() * ( max - min );
    }

    onTransitionEnd () {

    }

    onComplete  () {

    }

    render() {
        const {rowSize, columSize, tileSize, tileIndex, tileType, flipDirection, isPlayed} = this.state;
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
            backgroundColor: backgroundColor,
        }
        //console.log(this.state);

        const inlayClass = "inlay " + ( isPlayed ? "show" : "");

        return (
            <div className="tile" style={tileStyle}>
                <div className={inlayClass}>
                    <div className="cover">

                    </div>
                </div>
            </div>
        );
    }

}

export default Tile;