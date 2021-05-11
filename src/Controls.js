import React, { useEffect } from 'react';
import './Controls.css'
import ZingTouch from 'zingtouch';

const rotateEvent = () => {
  // Event listener to capture rotation around wheel

    const myRegion = new ZingTouch.Region(document.getElementById('controls'));
    const rotateArea = document.getElementById('wheel');
    
    myRegion.bind(rotateArea, 'rotate', function(event){
      // console.log('distanceFromLast : ', event.detail.distanceFromLast);
      const menuLists = document.querySelectorAll('#side-menu tr');

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

function Controls(props) {
  // Similar to componemtDidMount and componentDidUpdate
  useEffect(rotateEvent);

    return (
      <section id="controls">
        <div id="wheel">
          <span className="buttons" style={ {top: 20} }>Menu</span>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404395.png" alt="left" style={ {left: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/2404/2404393.png" alt="right" style={ {right: 13, width: 40} }></img>
          <img className="buttons" src="https://image.flaticon.com/icons/png/128/26/26810.png" alt="bottom" style={ {bottom: 13, width: 30, height: 37} }></img>
          {/* <img draggable="false"></img> */}
          <div id="ok-button">OK</div>
        </div>
      </section>
    );
  }
  
  export default Controls;
  