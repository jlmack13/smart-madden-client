import React from 'react';

//These are just filler props for now
const Play = ({name, schemes, formation}) => {
    return (
        <div className="play">
            <p>Formation: {formation}</p>
            <p>{name}</p>
            <p>Schemes: {schemes}</p>
        </div>
    );
}

export default Play;