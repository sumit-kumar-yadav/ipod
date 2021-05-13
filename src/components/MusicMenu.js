import React, { useEffect } from 'react';


function MusicMenu(props) {
    const activeItemInMenu = props.activeItemInMenu;

    // Similar to componemtDidMount and componentDidUpdate of a class
    useEffect(() => {
        const menuItems = document.querySelectorAll('#music-menu tr');
        for(let item of menuItems){
            if(item.getAttribute('data-option') === activeItemInMenu){
                item.classList.add('active');
            }
        }
    });

    return (
      <table id="music-menu">
        <tbody>
        <tr>
            <th>Music</th>
        </tr>
        <tr data-option="allSongs">
            <td>All Songs<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="artists">
            <td>Artists<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="albums">
            <td>Albums<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
    );
  }
  
  export default MusicMenu;
  