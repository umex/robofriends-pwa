import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render(){
        return(
        //ne mormo rect class ker je class ze zgoraj reserved word.
        //to je javascript in naredi virtualni DOM    
        <div className='f1 tc'>
            <h1>Hello World</h1>
            <p>{this.props.greeting}</p>
        </div>
        );
    }
}

export default Hello;