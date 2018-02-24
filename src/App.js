import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Form from './form';
import './App.css';

class App extends Component {
  render() {
    const {show} = this.props;
    const component = show === 'form' ? <Form /> : <Card />;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greeting Cards</h1>
        </header>
        {component}
      </div>
    );
  }
}

const mapState = state => {
  const {show} = state;
  return {show};
};

export default connect(mapState)(App);
