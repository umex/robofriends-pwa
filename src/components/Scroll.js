import React from 'react';

const Scroll = (props) => {
    return (
        // 2x{{}} zato ker prvi je za javascrip drugi pa potem za objekt
        <div style={{overflowY:'scroll', border:'1px solid black', height:'500px'}}>
            {props.children}
        </div>
        );
}

export default Scroll;