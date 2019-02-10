import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar'
import MuithemeProvider from 'material-ui/styles/MuiThemeProvider'
import './App.css';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <MuithemeProvider>
        <div>
        <Navbar />
      <Search/>
        </div>
  
      </MuithemeProvider>
      
    );
  }
}

export default App;
