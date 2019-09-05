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
            isPlayed: props.isPlayed,

            flipNeighbors: props.flipNeighbors,


        };

        this.handleFilpTile = this.handleFilpTile.bind(this);
        this.getRandom = this.getRandom.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.flipTile = this.flipTile.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        //this.setState({isPlayed: nextProps.isPlayed});
        if (nextProps.isPlayed) {
            this.handleFilpTile();
        }
    }

    handleFilpTile () {
        if (this.state.isPlayed)
            return;

        //setTimeout( this.flipTile, 5000 );
        this.flipTile();
    }

    flipTile(){

        this.setState({isPlayed: true})
        //inlay.classList.add( "show" );
        //this.setState({isPlayed: true})

        /*
        setTimeout( this.onTransitionEnd, transitionMin + Math.random() * ( transitionMax - transitionMin ) );
        setTimeout( this.onComplete, transitionMax );
        */

       setTimeout( this.props.flipNeighbors(this.state.tileIndex), transitionMin + Math.random() * ( transitionMax - transitionMin ) );

    }

    getRandom ( min, max ) {
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
        }
        const inlayStyle = {
            backgroundColor: backgroundColor,
        }
        //console.log(this.state);

        console.log("Tile isPlayed state:" + isPlayed);

        //const tileClass = "tile " + (isPlayed ? "from-top" : "");
        const tileClass = "tile " +  "from-top";
        const inlayClass = "inlay " + ( isPlayed ? "show" : "");
        

        return (
            <div className={tileClass} style={tileStyle}>
                <div className={inlayClass} style={inlayStyle}>
                    <div className="cover">

                    </div>
                </div>
            </div>
        );
    }

}

export default Tile;