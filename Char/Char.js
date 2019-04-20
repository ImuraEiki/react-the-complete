import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAligin: 'center'
    };

    return (
        <div style={style}>
            {props.character}
        </div>
    );
};

export default char;

