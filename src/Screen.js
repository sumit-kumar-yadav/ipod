import React from 'react';
import SideMenu from './SideMenu';
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';


function Screen(props) {
  return (
    <section id="screen">
      {props.display.sideMenu && <SideMenu />}
      {props.display.coverflow && <Coverflow />}
      {props.display.music && <Music />}
      {props.display.games && <Games />}
      {props.display.settings && <Settings />}
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

