import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    console.log('SearchBox');
    return(
        <div className = 'p2'>
            <input 
            aria-label='Search Robots'
            className = 'pa3 ba b-green bg-lightest-blue'
            type = 'search' 
            placeholder = 'search robots'
            onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;