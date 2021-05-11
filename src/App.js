import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';


class App extends React.Component{
  constructor () {
    super();
    this.state = {
      display: {
        'sideMenu': true, 'coverflow': false, 'music': false, 'games': false, 'settings': false
      }
    }
  }

  // If ok button is clicked, mark the component screen which is selected as true
  handleOk = () => {
    const activeMenu = document.getElementsByClassName('active')[0];
    if(activeMenu){
      const optionSelected = activeMenu.getAttribute('data-option');
      // console.log('optionSelected is : ', optionSelected, typeof(optionSelected));

      const display = this.state.display;
      // Mark all the display as false
      for(let key in display){  // Note here 'in' and not 'of'
        display[key] = false;
      }
                // Other method to change the value of object iteratively
      // Object.keys(display).forEach(function(key){ display[key] = false });
      // Object.getOwnPropertyNames(display).forEach(function(key){ display[key] = false });

      // Then mark true to the option selected
      display[optionSelected] = true;

      this.setState({ display });
    }
  }

  render(){
    // const {screens, display} = this.state;
    return (
      <div id="iPod-app">
        <Screen 
          display={this.state.display}
        />
        <Controls 
          handleOk={this.handleOk}
        />
      </div>
    );
  }

}

export default App;
