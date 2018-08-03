//build the component for the scheme here
import React from 'react';

const Scheme = ({name, instructions}) => {
    return (
        <div className="scheme">
            <h3>{name}</h3>
            <ul>
                {instructions.map(instruction => (
                    <li>{instruction}</li>
                ))}
            </ul>
        </div>
    )
}