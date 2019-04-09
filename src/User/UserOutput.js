import React from 'react';

const userOutput = (props) => {
    return (
        <div style={props.style}>
            <p>Username: {props.username}</p>
            <p>{props.children}</p>
        </div>
    );
}

export default userOutput;