import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from './compnents/CardList';
// import { robots } from './robots'
import Scroll from './compnents/Scroll'
import SearchBox from './compnents/SearchBox'
import Header from './compnents/Header'
import './App.css';

import { setSearchField, requestRobots } from './store/actions/robots.actions'
// or import * as Actions from './store/actions/robots.actions'

const mapStateToProps = state => {
  return {
    searchFiled: state.searchRobots.searchFiled,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}


class App extends Component {
  
componentDidMount(){
 this.props.onRequestRobots();
}

  render() {
    // searchfield we do not reed this becaouse app recived it as props
    const { searchFiled, onSearchChange, robots, isPending } = this.props;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase())
    })
    return isPending ? 
      <h2>Looding... </h2> :
       (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={ filterRobots }/>
          </Scroll>
        </div>    
        );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
