import React from 'react';
import SideMenu from './SideMenu';
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import './css/screen.css';


class Screen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      display: {
        'musicMenu': false, 'allSongs': false, 'artists': false, 'albums': false
      },
      activeItemInMenu: this.props.activeItemInMusic
    }
    console.log("Inside the screen constructor", this.state.activeItemInMenu);
  }


  render(){
    const {sideMenu, coverflow, music, games, settings} = this.props.display;
    const activeItemInMenu = this.props.activeItemInMenu;

    // Before component is mounted, set the values of currentScreenDispaly and currentOptionSelected
    const currentScreenDispaly = this.state.display;
    for(let item in currentScreenDispaly){
      currentScreenDispaly[item] = false;
    }
    currentScreenDispaly[this.props.toShowInMusicComponent] = true;
    const currentOptionSelected = this.props.activeItemInMusic;
    
    return (
      <section id="screen">
      <div id="top-bar">
        <div id="battery">
          <i className="fas fa-battery-three-quarters"></i>
        </div>
      </div>
      {
        !sideMenu
          ?coverflow
            ?<Coverflow />
            :music
              ?<Music 
                display={currentScreenDispaly}
                activeItemInMenu={currentOptionSelected}
              />
              :games
                ?<Games />
                :<Settings />
          :<SideMenu activeItemInMenu={activeItemInMenu}/>
      }
    </section>
    );
  }

}

export default Screen;

