import React from 'react';
import SideMenu from './SideMenu';
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';


function Screen(props) {
  const {sideMenu, coverflow, music, games, settings} = props.display;
  const activeItemInMenu = props.activeItemInMenu;
  return (
    <section id="screen">
      {
        !sideMenu
          ?coverflow
            ?<Coverflow />
            :music
              ?<Music />
              :games
                ?<Games />
                :<Settings />
          :<SideMenu activeItemInMenu={activeItemInMenu}/>
      }

      {/* {sideMenu && <SideMenu />}
      {coverflow && <Coverflow />}
      {music && <Music />}
      {games && <Games />}
      {settings && <Settings />} */}

    </section>
  );
}

export default Screen;



// class Screen extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       displayScreen: null
//     }
//   }

//   render(){
//     return (
//       <section id="screen">
//         {this.props.display.sideMenu && <SideMenu />}
//         {this.props.display.coverflow && <Coverflow />}
//         {this.props.display.music && <Music />}
//         {this.props.display.games && <Games />}
//         {this.props.display.settings && <Settings />}

  
//       </section>
//     );
//   }

// }

// export default Screen;

