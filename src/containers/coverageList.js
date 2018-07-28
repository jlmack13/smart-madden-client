import React from 'react';
import Coverage from '../components/coverage';

const CoverageList = ({coverages}) => {

    //need this to recognize which coverage is being clicked eventually
    const handleClick = () => {
        console.log("You clicked a coverage!")
    }
    return (
        <div className="coverageListContainer">
            <ul className="coverageList">
                {coverages.map( coverage => 
                    <Coverage key={coverage.id} name={coverage.name} onClick={this.handleClick}/>
                )}
            </ul>
        </div>
    )
}

export default CoverageList;