import React, { useEffect } from 'react';


function SideMenu(props) {
    const activeItemInMenu = props.activeItemInMenu;

    // Similar to componemtDidMount and componentDidUpdate of a class
  useEffect(() => {
      const menuItems = document.querySelectorAll('#side-menu tr');
      for(let item of menuItems){
          if(item.getAttribute('data-option') === activeItemInMenu){
              item.classList.add('active');
          }
      }

  });

  return (
    <table id="side-menu">
        <tbody>
        <tr>
            <th>iPod</th>
        </tr>
        <tr data-option="coverflow">
            <td>Coverflow<i className="fas fa-chevron-right"></i></td> 
        </tr>
        <tr data-option="music">
            <td>Music<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="games">
            <td>Games<i className="fas fa-chevron-right"></i></td>
        </tr>
        <tr data-option="settings">
            <td>Settings<i className="fas fa-chevron-right"></i></td>
        </tr>
        </tbody>
    </table>
  );
}

export default SideMenu;
