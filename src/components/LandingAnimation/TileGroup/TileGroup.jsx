import React, {Component} from 'react';
import Tile from 'components/LandingAnimation/Tile/Tile'
import 'assets/sass/components/LandingAnimation_Tile_Group.scss'

const orientation  = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3
};

class TileGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            rowSize: props.rowSize,
            columSize: props.solumSize,
            centerMap: props.centerMap,
            tileList: [],
            tileListDisplay: [],
            isPlayed: false,
            
        };

        this.getTileList = this.getTileList.bind(this);
        //this.showTileGroup = this.showTileGroup.bind(this);
        this.flipNeighbors = this.flipNeighbors.bind(this);
    }

    componentWillMount(){
        this.setState({tileList : this.getTileList()});
        //this.setState({tileListDisplay : this.showTileGroup()});
        //console.log("test1" + this.state.tileList);
    }
    componentDidMount(){
        this.setState({isPlayed : true});
    }

    getTileList () {
        let tileList = null;
        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;
        if (!rowSize || !columSize){
            rowSize = 10;
            columSize = 10;
        }

        tileList = Array.apply(null, Array(rowSize * columSize)).map(function(value, index){
            let tileType = 0;
            let tileSize = 80;
            let tileObject = {
                index: index,
                tileType: 0,
                isPlayed: false,
                neighbors: [],
            }
            return tileObject;
        })
        for (var i = 0; i<tileList.length; i++) {
            let row = ~~( i / columSize );
            let col = i % columSize;
            if ( col < columSize - 1 )
                tileList[i].neighbors[orientation.RIGHT] = i + 1 ;

            if ( col > 0 )
                tileList[i].neighbors[orientation.LEFT] = i - 1 ;

            if ( row > 0 )
                tileList[i].neighbors[orientation.TOP] = i - columSize ;

            if ( row < rowSize - 1 )
                tileList[i].neighbors[orientation.BOTTOM] = i + columSize ;
            //console.log(row + ", "+ col)

        }

        if (this.state.centerMap) {

        }
        console.log(tileList);
        
        return tileList;
    }

    flipNeighbors (currentIndex) {
        let tileList = this.state.tileList;
        let tileObject = tileList[currentIndex];
        if ( !tileObject || !tileObject.neighbors ){
            return;
        }

        for(var i = 0; i < tileObject.neighbors.length; i++){
            let neighborIndex = tileObject.neighbors[i];
            if ( !neighborIndex ){
                continue;
            }
            
            let neighborTileObject = tileList[neighborIndex];
            if ( !neighborTileObject ){
                continue;
            }

            neighborTileObject.isPlayed = true;
            tileList[neighborIndex] = neighborTileObject;
        }
        this.setState({tileList: tileList})
    }

    /*
    showTileGroup () {
        let tileListDisplay = null;
        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;
        if (!this.state.centerMap){
            if (!rowSize || !columSize){
                rowSize = 10;
                columSize = 10;
                tileListDisplay = Array.apply(null, Array(rowSize * columSize)).map(function(value, index){
                    let tileType = 0;
                    let tileSize = 80;
                    return <Tile key={index} rowSize={rowSize} columSize={columSize} tileSize={tileSize} tileIndex={index} tileType={tileType} isPlayed={this.state.isPlayed}/>;
                })
            }
        } 
        return tileListDisplay;
    }
    */

    render() {
        let {rowSize, columSize, centerMap, tileList, isPlayed} = this.state;

        console.log("isPlayed state:" + this.state.isPlayed);
        let tileListDisplay = [];
        if (!this.state.centerMap){
            if (!rowSize || !columSize){
                rowSize = 10;
                columSize = 10;
                tileListDisplay = tileList.map((tileObject, index) => {
                    let tileType = tileObject.tileType;
                    let tileSize = 80;
                    let tilePlay = tileObject.isPlayed;
                    

                    if (    index === 0 || 
                            index === (rowSize * columSize - 1) ||
                            index === (0 + columSize - 1 ) ||
                            index === ((rowSize-1)*columSize)) {
                        tilePlay = isPlayed;

                    }

                    console.log("isPlayed state passed to tiles:" + tilePlay);
                    return <Tile key={index} rowSize={rowSize} columSize={columSize} tileSize={tileSize} tileIndex={index} tileType={tileType} isPlayed={tilePlay} flipNeighbors={this.flipNeighbors}/>;
                })
            }
        }

        return (
            <div className="tile_group">
                {tileListDisplay}
            </div>
        );
    }

}

export default TileGroup;