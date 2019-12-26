import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import {robots} from './robots'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
    console.log('constructor');
  }

  componentDidMount(){
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        return response.json();
      })
      .then(users=>{
        this.setState({robots:users})
      })
      
    
      ///krajse
      /*
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState({robots:users}))
      */
    //this.setState({robots:robots});
    console.log('componentDidMount');
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }

  render() {
    //zarad tega ni treba zdej ppovsod pisat this.state.searchfield.toLowerCase()
    const{robots, searchfield} = this.state
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log('render');
    if (robots.length === 0){
      return <h1>Loading</h1>
    }else{
      return(
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>  
          <SearchBox searchChange = {this.onSearchChange}/>
          <Scroll>
            <CardList robots = {filteredRobots}/>
          </Scroll>
        </div>
        );
    }
  }
}




//ta del je iz avtomaske generacije kode
//component ma ppravilo da mora vsaj nekaj zrenderirat
/*
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/



//tako je novejse ampak smo spremenili ker je tutorial zadaj po verzijah reacta
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
