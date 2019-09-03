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
            
        };

        this.getTileList = this.getTileList.bind(this);
        this.showTileGroup = this.showTileGroup.bind(this);
    }

    componentWillMount(){
        this.state.tileList = this.getTileList();
        //console.log("test1" + this.state.tileList);
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
                    return <Tile key={index} rowSize={rowSize} columSize={columSize} tileSize={tileSize} tileIndex={index} tileType={tileType}/>;
                })
            }
        } 
        return tileListDisplay;
    }

    render() {
        return (
            <div className="tile_group">
                {this.showTileGroup()}
            </div>
        );
    }

}

export default TileGroup;