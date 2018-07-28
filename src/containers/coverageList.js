import React from 'react';

const CoverageList = ({coverages}) => {

    //need this to recognize which coverage is being clicked eventually
    handleClick = () => {
        console.log("You clicked a coverage!")
    }
    return (
        <div className="coverageListContainer">
            <ul className="coverageList">
                {coverages.map( coverage => 
                    <Coverage name={coverage.name} onClick={this.handleClick}/>
                )}
            </ul>
        </div>
    )
}

export default CoverageList;