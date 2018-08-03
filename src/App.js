import React, { Component } from 'react';
import './App.css';
import TableContainer from './Containers/TableContainer/TableContainer';
import reducer from './Containers/TableContainer/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(reducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TableContainer />
      </Provider>
    );
  }
}

export default App;
