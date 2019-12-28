import React from 'react';
import {connect} from 'react-redux';
//import logo from './logo.svg';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
//import {robots} from './robots'
import {setSearchField, requestRobots} from '../actions';

//mapStateToProps, mapDispatchToProps

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //onRequestRobots: () => requestRobots(dispatch)
    onRequestRobots: () => dispatch(requestRobots())
  }
  
}

class App extends React.Component {
  //tega ne rabimo vec, ker nimamo vec stateov. robote bomo dobil iz propov -> onRequestRobots()
  /*
  constructor(){
    super();
    this.state = {
      robots: []
    }
    console.log('constructor');
  }
  */
  componentDidMount(){
    this.props.onRequestRobots();
    console.log('componentDidMount');
  }

  render() {
    //zarad tega ni treba zdej ppovsod pisat this.state.searchfield.toLowerCase()

    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    console.log('render');
    if (isPending){
      return <h1>Loading</h1>
    }else{
      return(
        <div className='tc'>
          <h1 className='f1'>Robofriends</h1>  
          <SearchBox searchChange = {onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots = {filteredRobots}/>
            </ErrorBoundry>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
