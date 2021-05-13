import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Controls from './components/Controls';
import ZingTouch from 'zingtouch';


class App extends React.Component{
  constructor () {
    super();
    this.state = {
      display: {
        'sideMenu': true, 'coverflow': false, 'music': false, 'games': false, 'settings': false
      },
      activeItemInMenu: 'coverflow',
      toShowInMusicComponent: 'musicMenu',
      activeItemInMusic: 'allSongs'
    }
  }

  rotateEvent = () => {
    // Event listener to capture rotation around wheel
  
      const myRegion = new ZingTouch.Region(document.getElementById('controls'));
      const rotateArea = document.getElementById('wheel');
      
      myRegion.bind(rotateArea, 'rotate', function(event){
        // console.log('distanceFromLast : ', event.detail.distanceFromLast);
        const menuLists = document.querySelectorAll('tr');
  
        // If rotated in clockwise direction
        if(event.detail.distanceFromLast > 1){
          for(let i = 1; i < menuLists.length; i++){
            // If list contains active class then remove it and add it to the next list
            if(menuLists[i].classList.contains('active') === true){
              menuLists[i].classList.remove('active');
              
              if(i === menuLists.length-1){
                menuLists[1].classList.add('active');
              }else{
                menuLists[++i].classList.add('active');
              }
            }
          }
        }
        // else if rotated in anti-clockwise direction
        else if(event.detail.distanceFromLast < -1){
          for(let i = menuLists.length-1; i > 0; i--){
            // If list contains active class then remove it and add it to the next list
            if(menuLists[i].classList.contains('active') === true){
              menuLists[i].classList.remove('active');

              if(i === 1){
                menuLists[menuLists.length-1].classList.add('active');
              }else{
                menuLists[--i].classList.add('active');
              }
            }
          }
        }
      });
  }
  

  // If ok button is clicked, mark the component screen which is selected as true
  handleOk = () => {
    const activeMenu = document.querySelector('#side-menu .active');
    const activeItemInMusic = document.querySelector('#music-menu .active');

    if(activeMenu){
      const optionSelected = activeMenu.getAttribute('data-option');

      const display = this.state.display;
      // Mark all the display as false
      for(let key in display){  // Note here 'in' and not 'of'
        display[key] = false;
      }

      // Then mark true to the option selected
      display[optionSelected] = true;

      this.setState({
        display: display,
        activeItemInMenu: optionSelected
      });
    }
    else if(activeItemInMusic){
      const optionSelected = activeItemInMusic.getAttribute('data-option');
      this.setState({
        toShowInMusicComponent: optionSelected,
        activeItemInMusic: optionSelected
      });
    }
  }

  // If menu button is clicked, go back
  handleMenuClick = () => {
    if(this.state.toShowInMusicComponent === 'musicMenu'){
      const display = this.state.display;
      // Mark all the display as false
      for(let key in display){  // Note here 'in' and not 'of'
        display[key] = false;
      }

      // Then mark true to the option selected
      display.sideMenu = true;

      this.setState({ 
        display: display,
        activeItemInMusic: 'allSongs'
      });
    }
    else{ // Means toShowInMusicComponent != 'musicMenu'. Set it 'musicMenu'
      console.log("this.state is: ", this.state);
      const optionSelected = this.state.toShowInMusicComponent;
      this.setState({ 
        toShowInMusicComponent: 'musicMenu',
        activeItemInMusic: optionSelected
      });
    }

  }

  render(){
    // const {screens, display} = this.state;
    return (
      <div id="iPod-app">
        <Screen 
          display={this.state.display}
          activeItemInMenu={this.state.activeItemInMenu}
          toShowInMusicComponent={this.state.toShowInMusicComponent}
          activeItemInMusic={this.state.activeItemInMusic}
        />
        <Controls 
          handleOk={this.handleOk}
          handleMenuClick={this.handleMenuClick}
          rotateEvent={this.rotateEvent}
        />
      </div>
    );
  }

}

export default App;
