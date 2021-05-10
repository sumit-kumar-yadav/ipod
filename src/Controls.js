import React, { useEffect } from 'react';
import './Controls.css'
import ZingTouch from 'zingtouch';


function Controls() {
  // Similar to componemtDidMount and componentDidUpdate
  useEffect(() => {
    // Event listener to capture rotation around wheel
    // Region.bind(element, gesture, handler, [capture])
    const myRegion = new ZingTouch.Region(document.getElementById('controls'));
    const rotateArea = document.getElementById('wheel');
    
    myRegion.bind(rotateArea, 'rotate', function(event){
      // console.log("Rotate event is fired: ", event.detail);
      console.log('wheel');
    });
  })

    return (
      <section id="controls">
        <div id="wheel">
          <span className="buttons" style={ {top: 20} }>Menu</span>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404395.png" alt="left" style={ {left: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404393.png" alt="right" style={ {right: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/26/26810.png" alt="bottom" style={ {bottom: 13, width: 30, height: 37} }></img>
          <div id="ok-button">OK</div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  




      // Using class

// import React from 'react';
// import './Controls.css'
// import ZingTouch from 'zingtouch';


// class Controls extends React.Component{
//   constructor(){
//     super();
//   }

//   componentDidMount() {
//     const myRegion = new ZingTouch.Region(document.getElementById('controls'));
//     const rotateArea = document.getElementById('wheel');
    
//     myRegion.bind(rotateArea, 'rotate', function(event){
//       // console.log("Rotate event is fired: ", event.detail);
//       console.log('wheel');
//     });
//   }

//   render(){
//     return (
//       <section id="controls">
//         <div id="wheel">
//           <span className="buttons" style={ {top: 20} }>Menu</span>
//           <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404395.png" alt="left" style={ {left: 13, width: 40} }></img>
//           <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404393.png" alt="right" style={ {right: 13, width: 40} }></img>
//           <img className="buttons" src="https://image.flaticon.com/icons/png/128/26/26810.png" alt="bottom" style={ {bottom: 13, width: 30, height: 37} }></img>
//           <div id="ok-button">OK</div>
//         </div>
//       </section>
//     );
//   }

// }

  // export default Controls;
  