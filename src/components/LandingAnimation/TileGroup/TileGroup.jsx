import React, {Component} from 'react';
import Tile from 'components/LandingAnimation/Tile/Tile'
import 'assets/sass/components/LandingAnimation_Tile_Group.scss'

const orientation  = {
    NONE: 0,
    TOP: 1,
    RIGHT: 2,
    BOTTOM: 3,
    LEFT: 4
};
const timeOffset = 500;

class TileGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            rowSize: props.rowSize,
            columSize: props.columSize,
            centerMap: props.centerMap,
            tileSize: props.tileSize,
			rowOffSet: props.rowOffSet,
            columOffSet: props.columOffSet,
            
            tileList: [],
            tileListDisplay: [],
            isStarted: false,
            
            setTileAnimationCompleted: props.setTileAnimationCompleted,
            
        };

        this.getTileList = this.getTileList.bind(this);
        //this.showTileGroup = this.showTileGroup.bind(this);
        //this.flipNeighbors = this.flipNeighbors.bind(this);
        this.flipFromCorner = this.flipFromCorner.bind(this);
        this.BFSFlipNeighbors = this.BFSFlipNeighbors.bind(this);
        this.insertCenterMap = this.insertCenterMap.bind(this);
    }

    componentWillMount(){
        this.setState({tileList : this.getTileList()});
    }
    componentDidMount(){
        this.setState({isStarted : true}, () => {
            this.setState({tileList : this.flipFromCorner()});
        });
    }

    getTileList () {
        let tileList = null;
        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;
        if (!rowSize || !columSize){
            rowSize = 10;
            columSize = 10;
        }

        tileList = Array.apply(null, Array(rowSize * columSize)).map((value, index) => {
            let tileLogoType = 0;
            let flipDirection = 0;

            let tilePlay = false;
            let flipWaitTime = 0;

            
            if ( index === 0 ){
                flipDirection = 3;
                flipWaitTime = timeOffset;
            }

            if ( index === (rowSize * columSize - 1) ){
                flipWaitTime = timeOffset;
                flipDirection = 1;
            }

            if ( index === (0 + columSize - 1 ) ){
                flipWaitTime = timeOffset;
                flipDirection = 1;
            }

            if ( index === ((rowSize-1)*columSize) ){
                flipWaitTime = timeOffset;
                flipDirection = 2;
            }
            
            let tileObject = {
                index: index,
                tileLogoType: tileLogoType,
                tileLogoTypeColor: ~~(Math.random() * 3),
                flipDirection: flipDirection,
                flipWaitTime: flipWaitTime,
                isStarted: tilePlay,
                neighbors: [],
            }
            return tileObject;
        })

        if (this.state.centerMap) {
            tileList = this.insertCenterMap(tileList, this.state.centerMap);
        }
        tileList = this.BFSFlipNeighbors(tileList);
        

        
        return tileList;
    }

    flipFromCorner(){
        let tileList = this.state.tileList;
        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;
        let cornerIndexs = [columSize - 1, rowSize * columSize - 1, (rowSize - 1) * columSize, 0];

        for (var i = 0; i < cornerIndexs.length; i++) {
            tileList[cornerIndexs[i]].tilePlay = this.state.isStarted;
            tileList[cornerIndexs[i]].flipDirection = i;
        }
        return tileList;
    }

    /*
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

            if (neighborTileObject.isStarted){
                continue;
            }
            neighborTileObject.isStarted = true;
            neighborTileObject.flipDirection = i;
            tileList[neighborIndex] = neighborTileObject;
            this.setState({tileList: tileList})
        }
    }
    */

    // Can optimize animation by FFT, to forced the num of threads triggered at the same time.
    BFSFlipNeighbors(tileList){
        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;

        let BFSLevel = [columSize - 1, rowSize * columSize - 1, (rowSize - 1) * columSize, 0];
        let maxWaitTime = 0;

        while (BFSLevel.length !== 0){
            let length = BFSLevel.length;
            for(var i = 0; i < length; i++) {
                let tileIndex = BFSLevel.pop();
                let tileObject = tileList[tileIndex];
                if (tileObject.tileLogoType !== 0) {
                    continue;
                }
                let flipWaitTime = tileObject.flipWaitTime;
                if ( flipWaitTime > maxWaitTime ) {
                    maxWaitTime = flipWaitTime;
                }
/*
                if (tileObject.flipWaitTime !== 0 && tileObject.flipWaitTime < flipWaitTime ){
                    continue
                }
                tileObject.flipWaitTime = flipWaitTime;
                */


                let row = ~~( tileIndex / columSize );
                let col = tileIndex % columSize;
                if ( col < columSize - 1 ){
                    let rightNeighbor = tileList[tileIndex + 1];
                    let rightNeighborTime = flipWaitTime + 200 +  Math.random()*100;

                    if (rightNeighbor.flipWaitTime === 0 || rightNeighborTime < rightNeighbor.flipWaitTime ){
                        rightNeighbor.flipWaitTime = rightNeighborTime;
                        if ( rightNeighbor.tileLogoType === 0 ) {
                            rightNeighbor.flipDirection = orientation.RIGHT;
                        }
                        tileList[tileIndex + 1] = rightNeighbor;
                        BFSLevel.unshift(tileIndex + 1);
                    }
                }

                if ( col > 0 ){
                    let leftNeighbor = tileList[tileIndex - 1];
                    let leftNeighborTime = flipWaitTime + 200 + Math.random()*100;

                    if (leftNeighbor.flipWaitTime === 0 || leftNeighborTime < leftNeighbor.flipWaitTime ){
                        leftNeighbor.flipWaitTime = leftNeighborTime;

                        if ( leftNeighbor.tileLogoType === 0 ) {
                            leftNeighbor.flipDirection = orientation.LEFT;
                        }
                        tileList[tileIndex - 1] = leftNeighbor;
                        BFSLevel.unshift(tileIndex - 1);
                    }
                }

                if ( row > 0 ){
                    let topNeighbor = tileList[tileIndex - columSize];
                    let topNeighborTime = flipWaitTime + 200 + Math.random()*100;

                    if (topNeighbor.flipWaitTime === 0 || topNeighborTime < topNeighbor.flipWaitTime ){
                        topNeighbor.flipWaitTime = topNeighborTime;
                        if ( topNeighbor.tileLogoType === 0 ) {
                            topNeighbor.flipDirection = orientation.TOP;
                        }
                        tileList[tileIndex - columSize] = topNeighbor;
                        BFSLevel.unshift(tileIndex - columSize);
                    }
                }

                if ( row < rowSize - 1 ){
                    let bottomNeighbor = tileList[tileIndex + columSize];
                    let bottomNeighborTime = flipWaitTime + 200 + Math.random()*100;

                    if (bottomNeighbor.flipWaitTime === 0 || bottomNeighborTime < bottomNeighbor.flipWaitTime ){
                        bottomNeighbor.flipWaitTime = bottomNeighborTime;
                        if ( bottomNeighbor.tileLogoType === 0 ) {
                            bottomNeighbor.flipDirection = orientation.BOTTOM;
                        }
                        tileList[tileIndex + columSize] = bottomNeighbor;
                        BFSLevel.unshift(tileIndex + columSize);
                    }
                }
            }
        }

        this.state.setTileAnimationCompleted(maxWaitTime);
        return tileList;
    }

    insertCenterMap(tileList, centerMap){

        let rowSize = this.state.rowSize;
        let columSize = this.state.columSize;

        let mapRowSize = centerMap.length;
        let mapColumSize = centerMap[0].length;

        if (mapRowSize > rowSize || mapColumSize > columSize){
            return;
        }

        let rowOffSet = ~~(rowSize/2 - mapRowSize/2);
        let columOffSet = ~~(columSize/2 - mapColumSize/2);

        for (var r = 0; r < mapRowSize; r++){
            for(var c = 0; c < mapColumSize; c++) {
                let mapObject = centerMap[r][c];
                if ( !mapObject || mapObject === null ){
                    continue;
                }
                let tileObject = tileList[(r + rowOffSet) * columSize + (c + columOffSet)];
                tileObject.tileLogoType = mapObject.type;
                tileObject.tileLogoTypeColor = mapObject.color;
                tileObject.flipDirection = orientation.NONE;
            }
        }
        
        return tileList;
    }

    render() {
        let {rowSize, columSize, tileSize, rowOffSet, columOffSet, tileList} = this.state;

        let tileListDisplay = [];

        if (!rowSize || !columSize){
            rowSize = 10;
            columSize = 10;
        }
        if (!tileSize) {
            tileSize = 80;
        }

        tileListDisplay = tileList.map((tileObject, index) => {
            let tilePlay = tileObject.isStarted;
            let tileLogoType = tileObject.tileLogoType;
            let tileLogoTypeColor = tileObject.tileLogoTypeColor;
            let flipDirection = tileObject.flipDirection;
            let flipWaitTime = tileObject.flipWaitTime;

            return <Tile key={index} rowSize={rowSize} columSize={columSize} tileSize={tileSize} tileIndex={index} flipDirection={flipDirection} flipWaitTime={flipWaitTime} tileLogoType={tileLogoType} tileLogoTypeColor={tileLogoTypeColor} isStarted={tilePlay}/>;
        })

        let tileGroupStyle = {
            position: "absolute",
            top: - rowOffSet * tileSize + "px",
            left: - columOffSet * tileSize + "px",
        }

        return (
            <div className="tile_group" style={tileGroupStyle}>
                {tileListDisplay}
            </div>
        );
    }

}

export default TileGroup;