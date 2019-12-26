import React from 'react';

//lahko bi ze tuki destructuring naredu
const Card = (props) => {
    const {name, email, id} = props;
    //lahko bi uporabljal tud props.name
    return(
        //to spodi je JSX
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2> 
                <p>{email}</p>
            </div>        
        </div>

    );
}

export default Card;
