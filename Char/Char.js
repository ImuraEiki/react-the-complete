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
        <div style={style} onClick={props.clicked}>
            {props.chara}
        </div>
    );
};

export default char;

