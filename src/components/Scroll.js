import React from 'react';

const Scroll = (props) => {
    return (
        // 2x{{}} zato ker prvi je za javascrip drugi pa potem za objekt
        <div style={{ overflowy: 'scroll', border: '5px solid black'}}>
            {props.children}
        </div>
        );
}

export default Scroll;